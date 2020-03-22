'use strict'

const { ConfirmedCase } = require('../model')

class ConfirmedCaseDao {
  /**
   * Create new confirmed case
   * @param {Object} confirmedCase Objeto to type ConfirmedCase
   */
  static async create (confirmedCase) {
    const caseSave = await ConfirmedCase.create(confirmedCase)
    return caseSave.toJSON()
  }

  /**
   * Update confirmed case
   * @param {Object} confirmedCase Object to type ConfirmedCase
   */
  static async update (confirmedCase) {
    const cond = {
      where: {
        caseId: confirmedCase.caseId
      }
    }

    await ConfirmedCase.update(confirmedCase, cond)
    return ConfirmedCase.findOne(cond)
  }

  /**
   * Find confirmed case by date insert and place
   * @param {String} date Date on format yyyy-mm-dd
   * @param {Number} placeId Id of place
   * @param {Number} caseTypeId Id of type case
   */
  static findByDatePlaceCaseType (caseDate, placeId, caseTypeId) {
    const cond = {
      where: {
        caseDate,
        placeId,
        caseTypeId
      }
    }

    return ConfirmedCase.findOne(cond)
  }

  /**
   * Find confirmed case by place and case type
   * @param {Number} placeId Id of place
   * @param {Number} caseTypeId Id of type case
   */
  static findByPlaceAndCaseType (placeId, caseTypeId) {
    const cond = {
      where: {
        placeId,
        caseTypeId
      }
    }

    return ConfirmedCase.findOne(cond)
  }

  /**
   * Get all Confirmed cases history of place
   * @param {Number} placeId Id of place
   * @param {Number} caseTypeId Id of case type
   */
  static findAllByPlaceAndCaseType (placeId, caseTypeId) {
    const cond = {
      where: {
        placeId,
        caseTypeId
      }
    }

    return ConfirmedCase.findAll(cond)
  }
}

module.exports = ConfirmedCaseDao
