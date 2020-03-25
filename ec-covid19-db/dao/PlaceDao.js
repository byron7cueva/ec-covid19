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

  /**
   * Get place by placeCode
   * @param {String} placeCode Code of place
   */
  static findByPlaceCode (placeCode) {
    return Place.findOne({
      where: { placeCode }
    })
  }
}

module.exports = PlaceDao
