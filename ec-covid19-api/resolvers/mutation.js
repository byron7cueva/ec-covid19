'use strict'

const { CaseGestor } = require('ec-covid19-db')

const errorHandler = require('../lib/errorHandler')

module.exports = {

  /**
   * Create a case confirmed
   */
  createCaseConfirmed: async (root, { input }) => {
    let newCase
    try {
      newCase = await CaseGestor.registerCaseConfirmed(input)
    } catch (error) {
      errorHandler(error)
    }
    return newCase
  },

  /**
   * Create a confirmed case on country
   */
  registerCasesCountry: async (root, { input }) => {
    let newCase
    try {
      newCase = await CaseGestor.registerCasesDeadOrHealedInCountry(input)
    } catch (error) {
      errorHandler(error)
    }
    return newCase
  }
}
