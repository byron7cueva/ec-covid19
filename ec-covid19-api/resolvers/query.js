'use strict'

const { CaseGestor, PlaceGestor } = require('ec-covid19-db')
const errorHandler = require('../lib/errorHandler')

module.exports = {

  /**
   * Get total cases confirmed
   */
  getTotalConfirmedCases: async () => {
    let cases = []
    try {
      cases = await CaseGestor.getTotalCasesAllPlaces()
    } catch (error) {
      errorHandler(error)
    }
    return cases
  },

  /**
   * Get history cases of place
   */
  getHistoryCasesOfPlace: async (root, { placeCode }) => {
    let cases = []
    try {
      cases = await CaseGestor.getHistoryCasesOfPlace(placeCode)
    } catch (error) {
      errorHandler(error)
    }
    return cases
  },

  /**
   * Get al places
   */
  getPlaces: async () => {
    let places = []
    try {
      places = await PlaceGestor.getAll()
    } catch (error) {
      errorHandler(error)
    }
    return places
  }
}
