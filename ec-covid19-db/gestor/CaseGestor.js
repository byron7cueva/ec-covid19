'use strict'

const debug = require('debug')('ec-covid19:db:CaseGestor')
const defaults = require('defaults')
const { ConfirmedCaseDao, PlaceDao } = require('../dao')
const { placeType, countryPlaceCode } = require('../config/constants')
const EcCovid19DBError = require('../lib/EcCovid19DBError')

/**
 * Regirtes case of parent region
 * @param {Place} childPlace Child place
 * @param {ConfirmedCase} dataCase Confirmed case
 */
async function registerTotalParentCase (childPlace, dataCase) {
  const place = await PlaceDao.findByPlaceCode(childPlace.parentRegion)
  let existCase = await ConfirmedCaseDao.findByCodeAndDate(childPlace.parentRegion, dataCase.caseDate) || {}

  // If country add total case dead and healed. Because no exist info by canton
  if (place.placeTypeId === placeType.country && existCase.caseId === undefined) {
    const lastCase = await ConfirmedCaseDao.findTotalLastCaseOfPlace(place.placeCode)
    existCase = defaults(lastCase, existCase)
  }

  const sumParent = await ConfirmedCaseDao.findSumTotalLastCases(childPlace.parentRegion, childPlace.placeTypeId, dataCase.caseDate)
  existCase = defaults(sumParent, existCase)
  existCase.caseDate = dataCase.caseDate
  if (existCase.caseId) {
    await ConfirmedCaseDao.update(existCase)
    debug(`Update case of ${place.placeCode} to date ${dataCase.caseDate}`)
  } else {
    await ConfirmedCaseDao.create(existCase)
    debug(`Create case of ${place.placeCode} to date ${dataCase.caseDate}`)
  }
  return place
}

class CaseGestor {
  /**
   * Register new case confirmed
   * @param {ConfirmedCase} dataCase Confirmed case
   */
  static async registerCantonCaseConfirmed (dataCase) {
    if (dataCase.placeCode === undefined) throw new EcCovid19DBError('The placeCode is required to register new confirmed case')
    if (dataCase.caseDate === undefined) throw new EcCovid19DBError('The caseDate is required to register new confirmed case')

    // Validate if this is valid canton
    const cantonPlace = await PlaceDao.findByPlaceCodeAndType(dataCase.placeCode, placeType.canton)
    if (cantonPlace === null) throw new EcCovid19DBError(`The canton with code ${dataCase.placeCode} not exist `)

    let existCase = await ConfirmedCaseDao.findByCodeAndDate(cantonPlace.placeCode, dataCase.caseDate) || {}

    const prevCase = await ConfirmedCaseDao.findTotalBeforeCaseOfPlace(dataCase.placeCode, dataCase.caseDate)
    let confirmed = dataCase.totalConfirmed

    if (prevCase) {
      if (dataCase.totalConfirmed === prevCase.totalConfirmed) throw new EcCovid19DBError(`Exist case to canton ${dataCase.placeCode} in date ${dataCase.caseDate} with similar totalConfirmed`)
      confirmed = dataCase.totalConfirmed - prevCase.totalConfirmed
      confirmed = confirmed < 0 ? 0 : confirmed
    }

    existCase = defaults(dataCase, existCase)
    existCase.confirmed = confirmed

    let saveCase
    if (existCase.caseId) {
      saveCase = await ConfirmedCaseDao.update(existCase)
      debug(`Update case of ${cantonPlace.placeCode} to date ${dataCase.caseDate}`)
    } else {
      saveCase = await ConfirmedCaseDao.create(existCase)
      debug(`Create case of ${cantonPlace.placeCode} to date ${dataCase.caseDate}`)
    }

    debug(`Create case of ${saveCase.placeCode} to date ${saveCase.caseDate}, confirmed ${saveCase.confirmed} and total confirmed ${saveCase.totalConfirmed}`)
    const province = await registerTotalParentCase(cantonPlace, dataCase)
    const region = await registerTotalParentCase(province, dataCase)
    await registerTotalParentCase(region, dataCase)
    return saveCase
  }

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
  static getTotalHistoryCases (placeCode) {
    return ConfirmedCaseDao.findTotalHistoryCases(placeCode)
  }

  /**
   * Get daily history of place
   * @param {String} placeCode Code of place
   */
  static async getDailyHitoryCases (placeCode) {
    const place = await PlaceDao.findByPlaceCode(placeCode)

    if (place === null) throw new EcCovid19DBError(`The place with code ${placeCode} not exist `)

    switch (place.placeTypeId) {
      case placeType.canton: return ConfirmedCaseDao.findDailyHistoryCasesCanton(placeCode)
      case placeType.province: return ConfirmedCaseDao.findDailyHistoryCasesProvince(placeCode)
      case placeType.region: return ConfirmedCaseDao.findDailyHistoryCasesRegion(placeCode)
      case placeType.country: return ConfirmedCaseDao.findDailyHistoryCasesCountry()
    }
  }

  /**
   * Register Dead and Healed by country. This is temporal function
   * @param {ConfirmedCase} dataCase Confirmed case
   */
  static async registerDeadAndHealedCountry (dataCase) {
    if (dataCase.caseDate === undefined) throw new EcCovid19DBError('The caseDate is required to register new confirmed case')
    const existCase = await ConfirmedCaseDao.findByCodeAndDate(countryPlaceCode, dataCase.caseDate) || {}
    existCase.dead = dataCase.dead
    existCase.totalDead = dataCase.totalDead
    existCase.healed = dataCase.healed
    existCase.totalHealed = dataCase.totalHealed

    if (existCase.caseId === undefined) {
      existCase.placeCode = countryPlaceCode
      existCase.caseDate = dataCase.caseDate
      return ConfirmedCaseDao.insert(existCase)
    }
    return ConfirmedCaseDao.update(existCase)
  }
}

module.exports = CaseGestor
