'use strict'

const bcrypt = require('bcrypt')
const { UserGestor } = require('ec-covid19-db')
const { sign } = require('../../lib/auth')

module.exports = {
  login: async (userName, userPass) => {
    const user = await UserGestor.getUser(userName)
    if (user) {
      const areEquals = await bcrypt.compare(userPass, user.userPass)
      if (areEquals === true) {
        return sign(user)
      }
    }
    throw new Error('Invalid information')
  }
}
