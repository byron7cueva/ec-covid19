'use strict'

const { ConfirmedCase, Place } = require('../model')
const { caseType } = require('../config/constants')

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

    console.log('Holaa')
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
   * @param {String} placeCode Code of place
   * @param {Number} caseTypeId Id of case type
   */
  static findAllByPlaceAndCaseType (placeCode, caseTypeId) {
    const cond = {
      include: [
        {
          model: Place,
          attributes: [],
          where: { placeCode }
        }
      ],
      where: {
        caseTypeId
      },
      nest: true,
      raw: true
    }

    return ConfirmedCase.findAll(cond)
  }

  /**
   * Get all total cases
   */
  static async findAllTotalCases () {
    const opts = {
      attributes: ['placeId', 'placeCode', 'placeName', 'placeTypeId', 'parentRegion'],
      include: [
        {
          model: ConfirmedCase,
          attributes: ['confirmed', 'dead', 'healed', 'updateDate'],
          where: { caseTypeId: caseType.total },
          required: false
        }
      ],
      nest: true,
      raw: true
    }

    return Place.findAll(opts)
  }
}

module.exports = ConfirmedCaseDao
