const PlaceType = require('../model/PlaceType')

/**
 * Data Access to PlaceType model
 */
class PlaceTypeDao {

  /**
   * Find all place types
   */
  static async findAll () {
    return PlaceType.findAll()
  }
}

module.exports = PlaceTypeDao
