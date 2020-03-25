const { UserDao } = require('../dao')

class UserGestor {
  /**
   * Get User
   * @param {String} userName Name of user
   */
  static getUser (userName) {
    return UserDao.findByName(userName)
  }
}

module.exports = UserGestor
