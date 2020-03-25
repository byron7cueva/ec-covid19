const { User } = require('../model')

/**
 * Data acces mangament to Users
 */
class UserDao {
  /**
   * Find User by user name and password
   * @param {*} userName Name of user
   * @param {*} userPass Password of user
   */
  static findByUserAndPass (userName, userPass) {
    return User.findOne({
      where: {
        userName,
        userPass
      }
    })
  }
}

module.exports = UserDao
