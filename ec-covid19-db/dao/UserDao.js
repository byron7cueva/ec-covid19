const { User } = require('../model')

/**
 * Data acces mangament to Users
 */
class UserDao {
  /**
   * Find User by user name and password
   * @param {*} userName Name of user
   */
  static findByName (userName) {
    return User.findOne({
      where: {
        userName
      }
    })
  }
}

module.exports = UserDao
