'use strict'

const debug = require('debug')('ec-covid19:db:CaseGestor')
const defaults = require('defaults')
const moment = require('moment')
const lodash = require('lodash')

const { ConfirmedCaseDao, PlaceDao } = require('../dao')
const { placeType, countryPlaceCode } = require('../config/constants')
const EcCovid19DBError = require('../lib/EcCovid19DBError')
const { TypeCase } = require('../lib/enums')

class CaseGestor {
  /**
   * Get total last cases
   */
  static getAllTotalLastCases () {
    return ConfirmedCaseDao.findAllTotalLastCases()
  }

  /**
   * Get total history cases of place
   * @param {String} placeCode Code of place
   */
  static async getTotalHistoryCases (placeCode) {
    const totalCases = await ConfirmedCaseDao.findTotalHistoryCases(placeCode)
    if (totalCases.length === 0) return totalCases
    return fillCasesNoRegister(totalCases)
  }

  /**
   * Get daily history of place
   * @param {String} placeCode Code of place
   */
  static async getDailyHitoryCases (placeCode) {
    const place = await PlaceDao.findByPlaceCode(placeCode)

    if (place === null) throw new EcCovid19DBError(`The place with code ${placeCode} not exist `)
    const totalCases = await ConfirmedCaseDao.findDailyHistoryCases(placeCode)
    return fillCasesNoRegister(totalCases, true)
  }

  /**
   * Register Case
   * @param {ConfirmedCase} dataCase The case to save
   */
  static async registerCase (dataCase) {
    if (dataCase.placeCode === undefined) throw new EcCovid19DBError('The placeCode is required to register new confirmed case')
    if (dataCase.caseDate === undefined) throw new EcCovid19DBError('The caseDate is required to register new confirmed case')

    // Validate if this is valid place
    const place = await PlaceDao.findByPlaceCode(dataCase.placeCode)
    if (place === null) throw new EcCovid19DBError(`The place with code ${dataCase.placeCode} not exist `)

    let existCase = await ConfirmedCaseDao.findByCodeAndDate(place.placeCode, dataCase.caseDate) || {}
    existCase = defaults(dataCase, existCase)

    const prevCase = await ConfirmedCaseDao.findTotalBeforeCaseOfPlace(place.placeCode, dataCase.caseDate)

    calculateDailyTypeCase(dataCase, prevCase, existCase, TypeCase.CONFIRMED)
    calculateDailyTypeCase(dataCase, prevCase, existCase, TypeCase.DEAD)
    calculateDailyTypeCase(dataCase, prevCase, existCase, TypeCase.HEALED)

    let saveCase
    if (existCase.caseId) {
      saveCase = await ConfirmedCaseDao.update(existCase)
      debug(`Update case of ${place.placeCode} to date ${dataCase.caseDate}`)
    } else {
      saveCase = await ConfirmedCaseDao.create(existCase)
      debug(`Create case of ${place.placeCode} to date ${dataCase.caseDate}`)
    }

    debug(`Create case of ${saveCase.placeCode} to date ${saveCase.caseDate}, confirmed ${saveCase.confirmed} and total confirmed ${saveCase.totalConfirmed}`)
    let pivotPlace = place
    do {
      pivotPlace = await registerOneParentCase(pivotPlace, dataCase.caseDate)
    } while (pivotPlace !== null)
    return saveCase
  }

  static registerCases (caseDate, cases) {
    if (lodash.isNil(caseDate)) throw new EcCovid19DBError('The caseDate is required to register new cases')
    if (lodash.isNil(cases) || !lodash.isArray(cases)) throw new EcCovid19DBError('No has cases to register')

    return new Promise((resolve, reject) => {
      const parentRegions = []
      let savedCases = []
      registerCollectionCases(caseDate, cases, parentRegions)
        .then(result => {
          savedCases = result
          return propageCases(parentRegions, caseDate)
        })
        .then(() => {
          resolve(savedCases)
        })
        .catch(error => {
          reject(error)
        })
    })
  }

  static getAllTotalLastCasesByProvinces () {
    return ConfirmedCaseDao.findAllTotalLastCasesByProvinces()
  }
}

function registerCollectionCases (caseDate, cases, parentRegions) {
  return new Promise((resolve, reject) => {
    const promises = []

    cases.forEach(itemCase => {
      itemCase.caseDate = caseDate
      promises.push(registerOneCase(itemCase, parentRegions))
    })

    Promise.all(promises)
      .then(results => {
        resolve(results)
      }).catch(error => {
        reject(error)
      })
  })
}

function propageCases (parentRegions, caseDate) {
  return new Promise((resolve, reject) => {
    const nextRegions = []
    const promises = []
    parentRegions.forEach(childPlace => {
      promises.push(registerOneParentCase(childPlace, caseDate, nextRegions))
    })

    Promise.all(promises)
      .then(() => {
        if (nextRegions.length > 0) {
          return resolve(propageCases(nextRegions, caseDate))
        }
        return resolve()
      })
      .catch(error => {
        return reject(error)
      })
  })
}

async function registerOneCase (dataCase, parentRegions) {
  // Validate if this is valid place
  const place = await PlaceDao.findByPlaceCode(dataCase.placeCode)
  if (place === null) return null

  let existCase = await ConfirmedCaseDao.findByCodeAndDate(place.placeCode, dataCase.caseDate) || {}
  existCase = defaults(dataCase, existCase)

  const prevCase = await ConfirmedCaseDao.findTotalBeforeCaseOfPlace(place.placeCode, dataCase.caseDate)

  calculateDailyTypeCase(dataCase, prevCase, existCase, TypeCase.CONFIRMED)
  calculateDailyTypeCase(dataCase, prevCase, existCase, TypeCase.DEAD)
  calculateDailyTypeCase(dataCase, prevCase, existCase, TypeCase.HEALED)

  let saveCase
  if (existCase.caseId) {
    saveCase = await ConfirmedCaseDao.update(existCase)
    debug(`Update case of ${place.placeCode} to date ${dataCase.caseDate}`)
  } else {
    saveCase = await ConfirmedCaseDao.create(existCase)
    debug(`Create case of ${place.placeCode} to date ${dataCase.caseDate}`)
  }

  debug(`Create case of ${saveCase.placeCode} to date ${saveCase.caseDate}, confirmed ${saveCase.confirmed} and total confirmed ${saveCase.totalConfirmed}`)
  if (!parentRegions.find(item => item.parentRegion === place.parentRegion)) {
    parentRegions.push({ parentRegion: place.parentRegion, placeTypeId: place.placeTypeId })
  }
  return saveCase
}

async function registerOneParentCase (childPlace, caseDate, parentRegions) {
  if (childPlace.parentRegion === null) return null
  // Search parent
  const parentPlace = await PlaceDao.findByPlaceCode(childPlace.parentRegion)
  const existCase = await ConfirmedCaseDao.findByCodeAndDate(parentPlace.placeCode, caseDate) || {}
  const prevCase = await ConfirmedCaseDao.findTotalBeforeCaseOfPlace(parentPlace.placeCode, caseDate)

  // Total cases
  // Daily Cases
  const sumTotalParent = await ConfirmedCaseDao.findSumTotalLastCases(childPlace.parentRegion, childPlace.placeTypeId, caseDate)
  const sumDailyParent = await ConfirmedCaseDao.findSumDailyCasesInDate(childPlace.parentRegion, childPlace.placeTypeId, caseDate)

  asignValueCase(sumTotalParent, sumDailyParent, existCase, TypeCase.CONFIRMED, parentPlace.placeTypeId, prevCase)
  asignValueCase(sumTotalParent, sumDailyParent, existCase, TypeCase.DEAD, parentPlace.placeTypeId, prevCase)
  asignValueCase(sumTotalParent, sumDailyParent, existCase, TypeCase.HEALED, parentPlace.placeTypeId, prevCase)

  // Set date if no exist case saved
  existCase.placeCode = parentPlace.placeCode
  existCase.caseDate = caseDate
  if (existCase.caseId) {
    await ConfirmedCaseDao.update(existCase)
    debug(`Update case of ${parentPlace.placeCode} to date ${caseDate}`)
  } else {
    await ConfirmedCaseDao.create(existCase)
    debug(`Create case of ${parentPlace.placeCode} to date ${caseDate}`)
  }
  if (!lodash.isNil(parentRegions) && !lodash.isNil(parentPlace.parentRegion) && !parentRegions.find(item => item.parentRegion === parentPlace.parentRegion)) {
    parentRegions.push({ parentRegion: parentPlace.parentRegion, placeTypeId: parentPlace.placeTypeId })
  }
  return parentPlace
}

/**
 * Calcule the daily case
 * @param {ConfirmedCase} dataCase It is confirmed casa to save
 * @param {ConfirmedCase} prevCase It is previous case
 * @param {ConfirmedCase} existCase It is exist actual case
 * @param {Object} typeCase It is typecase enum
 */
function calculateDailyTypeCase (dataCase, prevCase, existCase, typeCase) {
  if (lodash.isNil(dataCase[typeCase.total]) || dataCase[typeCase.total] === 0) return

  let dailyValue = dataCase[typeCase.total]

  if (!lodash.isNil(prevCase)) {
    dailyValue = dataCase[typeCase.total] - prevCase[typeCase.total]
    dailyValue = dailyValue < 0 ? 0 : dailyValue
  }
  existCase[typeCase.daily] = dailyValue
}

/**
 * Asign values to cases depending the state information that public the Gestion de Riesgos
 * @param {ConfirmedCase} fromTotal Total cases
 * @param {ConfirmedCase} fromDaily Daily cases
 * @param {ConfirmedCase} to Case exist to update o save
 * @param {Object} typeCase Type case enum
 * @param {Integer} placeTypeId Type of place
 * @param {ConfirmedCase} prevCase Previous case
 */
function asignValueCase (fromTotal, fromDaily, to, typeCase, placeTypeId, prevCase) {
  if ((placeTypeId === placeType.province && typeCase === TypeCase.DEAD) ||
  (placeTypeId === placeType.country && typeCase === TypeCase.HEALED)) {
    if (lodash.isNil(to.caseId) && !lodash.isNil(prevCase)) {
      to[typeCase.total] = prevCase[typeCase.total]
    }
    return
  }

  to[typeCase.total] = fromTotal[typeCase.total]
  to[typeCase.daily] = fromDaily[typeCase.daily]
}

/**
 * Add Cases on date not register new cases
 * @param {ConfirmedCase} prevCase Previous case
 * @param {ConfirmedCase} actualCase Actual case
 * @param {Array} result Result
 */
function addCasesDate (prevCase, actualCase, result) {
  const prevDate = moment(prevCase.caseDate)
  const actualDate = moment(actualCase.caseDate)
  const days = actualDate.diff(prevDate, 'days')
  let nextDate
  for (let j = 1; j < days; j++) {
    nextDate = moment(prevCase.caseDate).add(j, 'days').format('YYYY-MM-DD')
    result.push({ ...prevCase, caseDate: nextDate })
  }
}

/**
 * Fill cases no register on db
 * @param {Array} totalCases List the cases
 * @param {Boolean} withClearCase If add clear case
 */
async function fillCasesNoRegister (totalCases, withClearCase = false) {
  const lastCaseCountry = await ConfirmedCaseDao.findTotalLastCaseOfPlace(countryPlaceCode)
  let prevCase = totalCases[0]
  const result = [prevCase]
  const clearCase = {
    caseDate: prevCase.caseDate,
    confirmed: 0,
    dead: 0,
    healed: 0
  }

  for (let i = 1; i < totalCases.length; i++) {
    addCasesDate(withClearCase ? clearCase : prevCase, totalCases[i], result)
    prevCase = totalCases[i]
    result.push(prevCase)
    clearCase.caseDate = prevCase.caseDate
  }

  addCasesDate(withClearCase ? clearCase : prevCase, lastCaseCountry, result)

  return result
}

module.exports = CaseGestor
