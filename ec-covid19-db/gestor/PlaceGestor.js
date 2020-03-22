'use strict'

const { PlaceDao } = require('../dao')

/**
 * Bussines logic of Place
 */
class PlaceGestor {
  /**
   * Get all Places
   */
  static getAll () {
    return PlaceDao.findAll()
  }
}

module.exports = PlaceGestor
