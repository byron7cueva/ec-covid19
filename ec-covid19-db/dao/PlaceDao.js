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

  static findBy (condition) {
    return Place.findOne(condition)
  }

  /**
   * Get place by placeCode
   * @param {String} placeCode Code of place
   */
  static findByPlaceCode (placeCode) {
    return this.findBy({
      where: { placeCode }
    })
  }

  /**
   * Get place by Id
   * @param {Number} placeId Id of place
   */
  static findById (placeId) {
    return this.findBy({
      where: { placeId }
    })
  }
}

module.exports = PlaceDao
