'use strict'

const { ConfirmedCaseDao } = require('../dao')
const { caseType, countryPlaceId } = require('../config/constants')

/**
 * Create or update case confirmed
 * @param {Number} placeId Id of place
 * @param {Number} caseTypeId  Id of type case
 * @param {Number} confirmed Id Confirmed
 * @param {String} date Date case in format YYYY-MM-DD
 */
const createOrUpdateRegisterCase = async (placeId, caseTypeId, dataCase, date = null) => {
  let existCase
  const { confirmed = 0, dead = 0, healed = 0 } = dataCase
  if (caseTypeId === caseType.daily) {
    existCase = await ConfirmedCaseDao.findByDatePlaceCaseType(date, placeId, caseTypeId)
  } else {
    existCase = await ConfirmedCaseDao.findByPlaceAndCaseType(placeId, caseTypeId)
  }

  if (existCase) {
    existCase.confirmed += confirmed
    existCase.dead += dead
    existCase.healed += healed
    return ConfirmedCaseDao.update(existCase)
  }

  const newCase = {
    placeId: placeId,
    caseTypeId: caseTypeId,
    confirmed: confirmed,
    dead: dead,
    healed: healed,
    caseDate: date
  }
  return ConfirmedCaseDao.create(newCase)
}

class CaseGestor {
  /**
   * Register new case confirmed
   * @param {Number} placeId Id of place
   * @param {Number} confirmed Num confirmed cases
   * @param {String} date Date of case YYYY-MM-DD
   */
  static async registerCaseConfirmed (dataCase) {
    await createOrUpdateRegisterCase(countryPlaceId, caseType.total, dataCase)
    await createOrUpdateRegisterCase(countryPlaceId, caseType.daily, dataCase, dataCase.caseDate)
    await createOrUpdateRegisterCase(dataCase.placeId, caseType.total, dataCase)
    return createOrUpdateRegisterCase(dataCase.placeId, caseType.daily, dataCase, dataCase.caseDate)
  }

  /**
   * Register dead cases in the country
   * @param {Number} numDead Num of deads
   */
  static async registerCasesDeadOrHealedInCountry (dataCase) {
    // cero is assigned so as not to alter confirmed cases
    dataCase.confirmed = 0
    await createOrUpdateRegisterCase(countryPlaceId, caseType.total, dataCase)
    return createOrUpdateRegisterCase(countryPlaceId, caseType.daily, dataCase, dataCase.caseDate)
  }

  /**
   * Get History cases register daily of place
   * @param {Number} placeId Id of place
   */
  static getHistoryCasesOfPlace (placeId) {
    return ConfirmedCaseDao.findAllByPlaceAndCaseType(placeId, caseType.daily)
  }
}

module.exports = CaseGestor
