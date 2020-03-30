'use strict'

const { CaseGestor, PlaceGestor } = require('ec-covid19-db')
const errorHandler = require('../lib/errorHandler')

module.exports = {

  /**
   * Get total cases confirmed
   */
  getAllTotalLastCases: async () => {
    let cases = []
    try {
      cases = await CaseGestor.getAllTotalLastCases()
    } catch (error) {
      errorHandler(error)
    }
    return cases
  },

  /**
   * Get history cases of place
   */
  getTotalHistoryCases: async (root, { placeCode }) => {
    let cases = []
    try {
      cases = await CaseGestor.getTotalHistoryCases(placeCode)
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
  },

  getDailyHitoryCases: async (root, { placeCode }) => {
    let cases = []
    try {
      cases = await CaseGestor.getDailyHitoryCases(placeCode)
    } catch (error) {
      errorHandler(error)
    }
    return cases
  }
}
