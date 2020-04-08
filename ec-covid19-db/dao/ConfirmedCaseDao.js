'use strict'

const { QueryTypes } = require('sequelize')

const { ConfirmedCase, Place } = require('../model')
const { placeType } = require('../config/constants')

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
   * Find cases by code place and date case
   * @param {String} placeCode Code of place
   * @param {String} caseDate Date YYYY-MM-DD
   */
  static findByCodeAndDate (placeCode, caseDate) {
    const cond = {
      where: {
        placeCode,
        caseDate
      }
    }
    return ConfirmedCase.findOne(cond)
  }

  /**
   * Find total last cases of place
   * @param {String} placeCode Code of place
   */
  static async findTotalLastCaseOfPlace (placeCode) {
    const cases = await ConfirmedCase.sequelize.query(`
      SELECT caseDate, totalConfirmed, totalDead, totalHealed
      FROM ConfirmedCases c
      WHERE c.placeCode = '${placeCode}' and caseDate = (select max(caseDate) from ConfirmedCases where placeCode = c.placeCode)
    `, {
      model: ConfirmedCase,
      mapToModel: true,
      type: QueryTypes.SELECT
    })
    return cases.length > 0 ? cases[0] : null
  }

  /**
   * Find total last cases and sum
   * @param {String} parentRegion Code of place the parent region to group
   * @param {Integer} placeTypeId Type place of childs regions to group
   * @param {String} caseDate Date maximun case register on db
   */
  static async findSumTotalLastCases (parentRegion, placeTypeId, caseDate) {
    const cases = await ConfirmedCase.sequelize.query(`
      SELECT r.placeCode, sum(totalConfirmed) as totalConfirmed, sum(totalDead) as totalDead, sum(totalHealed) as totalHealed
      FROM Places r
      INNER JOIN Places p on p.parentRegion = r.placeCode
      INNER JOIN ConfirmedCases c on p.placeCode = c.placeCode and c.caseDate = (select max(caseDate) from ConfirmedCases where placeCode = p.placeCode and caseDate <= '${caseDate}')
      WHERE p.placeTypeId = ${placeTypeId} and p.parentRegion = '${parentRegion}'
      GROUP BY r.placeCode
    `, {
      model: ConfirmedCase,
      mapToModel: true,
      type: QueryTypes.SELECT
    })
    return cases.length > 0 ? cases[0] : null
  }

  /**
   * Find daily cases and sum
   * @param {String} parentRegion Code of place the parent region to group
   * @param {Integer} placeTypeId Type place of childs regions to group
   * @param {String} caseDate Date maximun case register on db
   */
  static async findSumDailyCasesInDate (parentRegion, placeTypeId, caseDate) {
    const cases = await ConfirmedCase.sequelize.query(`
      SELECT r.placeCode, sum(confirmed) as confirmed, sum(dead) as dead, sum(healed) as healed
      FROM Places r
      INNER JOIN Places p on p.parentRegion = r.placeCode
      INNER JOIN ConfirmedCases c on p.placeCode = c.placeCode and c.caseDate = '${caseDate}'
      WHERE p.placeTypeId = ${placeTypeId} and p.parentRegion = '${parentRegion}'
      GROUP BY r.placeCode
    `, {
      model: ConfirmedCase,
      mapToModel: true,
      type: QueryTypes.SELECT
    })
    return cases.length > 0 ? cases[0] : null
  }

  /**
   * Find all total last cases
   */
  static findAllTotalLastCases () {
    return ConfirmedCase.sequelize.query(`
      SELECT p.placeCode, p.placeName, p.x, p.y, p.placeTypeId, p.parentRegion, c.caseDate, c.confirmed, c.totalConfirmed, c.dead, c.totalDead, c.healed, c.totalHealed, c.updateDate
      FROM Places p
      INNER JOIN ConfirmedCases c on p.placeCode = c.placeCode and c.caseDate = (select max(caseDate) from confirmedcases where placeCode = p.placeCode)
      ORDER BY placeTypeId, parentRegion, placeName
    `, {
      model: Place,
      mapToModel: true,
      type: QueryTypes.SELECT
    })
  }

  /**
   * Find all total history cases
   * @param {String} placeCode Code of place
   */
  static findTotalHistoryCases (placeCode) {
    return ConfirmedCase.findAll({
      attributes: ['caseDate', 'totalConfirmed', 'totalDead', 'totalHealed'],
      where: {
        placeCode
      },
      order: [['caseDate', 'ASC']]
    })
  }

  /**
   * Find all daily history case by canton
   * @param {String} placeCode Code of canton
   */
  static findDailyHistoryCases (placeCode) {
    return ConfirmedCase.findAll({
      attributes: ['caseDate', 'confirmed', 'dead', 'healed'],
      where: {
        placeCode
      },
      order: [['caseDate', 'ASC']]
    })
  }

  /**
   * Find a case before the date
   * @param {String} placeCode Code of place
   * @param {String} caseDate Date of case
   */
  static async findTotalBeforeCaseOfPlace (placeCode, caseDate) {
    const cases = await ConfirmedCase.sequelize.query(`
      SELECT caseDate, totalConfirmed, totalDead, totalHealed
      FROM ConfirmedCases c
      WHERE c.placeCode = '${placeCode}' and caseDate = (select max(caseDate) from ConfirmedCases where placeCode = c.placeCode and caseDate < '${caseDate}')
    `, {
      model: ConfirmedCase,
      mapToModel: true,
      type: QueryTypes.SELECT
    })
    return cases.length > 0 ? cases[0] : null
  }

  static findAllTotalLastCasesByProvinces () {
    return ConfirmedCase.sequelize.query(`
      SELECT p.placeCode, p.placeName, p.placeTypeId, c.totalConfirmed, c.totalDead, c.totalHealed
      FROM Places p
      INNER JOIN ConfirmedCases c on p.placeCode = c.placeCode and c.caseDate = (select max(caseDate) from confirmedcases where placeCode = p.placeCode)
      WHERE placeTypeId = ${placeType.province}
      ORDER BY placeName DESC
    `, {
      model: Place,
      mapToModel: true,
      type: QueryTypes.SELECT
    })
  }
}

module.exports = ConfirmedCaseDao
