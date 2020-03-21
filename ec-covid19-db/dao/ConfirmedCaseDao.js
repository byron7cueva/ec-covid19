'use strict'

const { ConfirmedCase } = require('../model')

class ConfirmedCaseDao {
  /**
   * Find all place types
   */
  static async findAll () {
    return ConfirmedCase.findAll()
  }
}

module.exports = ConfirmedCaseDao
