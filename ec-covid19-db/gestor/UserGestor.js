const { UserDao } = require('../dao')

class UserGestor {
  /**
   * Get User
   * @param {String} userName Name of user
   * @param {String} userPass Password of user
   */
  static getUser (userName, userPass) {
    return UserDao.findByUserAndPass(userName, userPass)
  }
}

module.exports = UserGestor
