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
   * Get place by code and type
   * @param {String} placeCode Code of place
   * @param {Integer} placeTypeId Type
   */
  static findByPlaceCodeAndType (placeCode, placeTypeId) {
    return this.findBy({
      where: { placeCode, placeTypeId}
    })
  }
}

module.exports = PlaceDao
