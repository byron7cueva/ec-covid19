const { Place } = require('../model')

/**
 * Mangament access to date for Place model
 */
class PlaceDao {

  /**
   * Get all Places
   */
  static findAll () {
    return Place.findAll()
  }
}

module.exports = PlaceDao
