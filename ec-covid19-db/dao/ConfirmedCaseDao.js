'use strict'

const { QueryTypes } = require('sequelize')

const { ConfirmedCase, Place } = require('../model')
const { placeType, countryPlaceCode } = require('../config/constants')

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
   * Find sum total last cases by parent region
   * @param {String} parentRegion Code of parent region
   * @param {Integer} placeTypeId Id of type place
   * @param {String} caseDate Date of case
   */
  static async findSumTotalLastCases (parentRegion, placeTypeId, caseDate) {
    const cases = await ConfirmedCase.sequelize.query(`
      SELECT r.placeCode, sum(totalConfirmed) as totalConfirmed
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
   * Find all total last cases
   */
  static findAllTotalLastCases () {
    return ConfirmedCase.sequelize.query(`
      SELECT p.placeCode, p.placeName, p.x, p.y, p.placeTypeId, p.parentRegion, c.caseDate, c.confirmed, c.totalConfirmed, c.dead, c.totalDead, c.healed, c.totalHealed, c.updateDate
      FROM Places p
      LEFT JOIN ConfirmedCases c on p.placeCode = c.placeCode and c.caseDate = (select max(caseDate) from confirmedcases where placeCode = p.placeCode)
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
      attributes: ['caseDate', 'totalConfirmed', 'totalDead', 'totalhealed'],
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
  static findDailyHistoryCasesCanton (placeCode) {
    return ConfirmedCase.findAll({
      attributes: ['caseDate', 'confirmed', 'dead', 'healed'],
      where: {
        placeCode
      },
      order: [['caseDate', 'ASC']]
    })
  }

  /**
   * Find all daily history case by province
   * @param {String} placeCode Code of province
   */
  static findDailyHistoryCasesProvince (placeCode) {
    return ConfirmedCase.sequelize.query(`
      SELECT caseDate, sum(confirmed) as confirmed, sum(dead) as dead, sum(healed) as healed
      FROM Places r
      INNER JOIN Places p on p.parentRegion = r.placeCode
      INNER JOIN ConfirmedCases c on p.placeCode = c.placeCode
      WHERE p.placeTypeId = ${placeType.canton} and r.placeCode = '${placeCode}'
      GROUP BY r.placeCode, caseDate
      ORDER BY caseDate ASC
    `, {
      model: ConfirmedCase,
      mapToModel: true,
      type: QueryTypes.SELECT
    })
  }

  /**
   * Find all daily history cases by region
   * @param {String} placeCode Code of region
   */
  static findDailyHistoryCasesRegion (placeCode) {
    return ConfirmedCase.sequelize.query(`
      SELECT caseDate, sum(confirmed) as confirmed, sum(dead) as dead, sum(healed) as healed
      FROM Places g
      INNER JOIN Places r on r.parentRegion = g.placeCode
      INNER JOIN Places p on p.parentRegion = r.placeCode
      INNER JOIN ConfirmedCases c on p.placeCode = c.placeCode
      WHERE p.placeTypeId = ${placeType.canton} and g.placeCode = '${placeCode}'
      GROUP BY g.placeCode, caseDate
      ORDER BY caseDate ASC
    `, {
      model: ConfirmedCase,
      mapToModel: true,
      type: QueryTypes.SELECT
    })
  }

  /**
   * Find all dayly cases by country TEMPORAL BECAUSE DATA BY CANTON NOT EXIST
   */
  static findDailyHistoryCasesCountry () {
    return ConfirmedCase.sequelize.query(`
      SELECT c.caseDate, sum(c.confirmed) as confirmed, max(f.dead) as dead , max(f.healed) as healed
      FROM Places p
      INNER JOIN ConfirmedCases c on p.placeCode = c.placeCode and placeTypeId = ${placeType.canton}
      LEFT JOIN ConfirmedCases f on f.caseDate = c.caseDate and f.placeCode = '${countryPlaceCode}'
      GROUP BY c.caseDate
      ORDER BY c.caseDate ASC
    `, {
      model: ConfirmedCase,
      mapToModel: true,
      type: QueryTypes.SELECT
    })
  }
}

module.exports = ConfirmedCaseDao
