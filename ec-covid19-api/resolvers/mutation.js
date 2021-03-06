'use strict'

const { CaseGestor } = require('ec-covid19-db')

const errorHandler = require('../lib/errorHandler')

module.exports = {

  /**
   * Create a case confirmed
   */
  registerCase: async (root, { input }) => {
    let newCase
    try {
      newCase = await CaseGestor.registerCase(input)
    } catch (error) {
      errorHandler(error)
    }
    return newCase
  },

  registerCases: async (root, { input }) => {
    let newCases
    try {
      newCases = await CaseGestor.registerCases(input.caseDate, input.cases)
    } catch (error) {
      errorHandler(error)
    }
    return newCases
  }
}
