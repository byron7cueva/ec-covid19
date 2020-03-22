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
   * Find one confirmed case by condition
   * @param {Object} condition Object to type ConfirmedCase
   */
  static findOneByCondition (condition) {
    return ConfirmedCase.findOne(condition)
  }

  /**
   * Find confirmed case by date insert and place
   * @param {String} date Date on format yyyy-mm-dd
   * @param {Integer} placeId Id of place
   * @param {Integer} caseTypeId Id of type case
   */
  static findByDatePlaceCaseType (date, placeId, caseTypeId) {
    const cond = {
      where: {
        caseDate: date,
        placeId: placeId,
        caseTypeId: caseTypeId
      }
    }

    return ConfirmedCase.findOne(cond)
  }

  /**
   * Find confirmed case by place and case type
   * @param {Integer} placeId Id of place
   * @param {Integer} caseTypeId Id of type case
   */
  static findByPlaceAndCaseType (placeId, caseTypeId) {
    const cond = {
      where: {
        placeId: placeId,
        caseTypeId: caseTypeId
      }
    }

    return ConfirmedCase.findOne(cond)
  }
}

module.exports = ConfirmedCaseDao
