const jwt = require('jsonwebtoken')
const { secrect } = require('../config/jwt')

function getToken (auth) {
  if (auth && auth.indexOf('Bearer ') !== -1 ) {
    return auth.replace('Bearer ', '')
  }
  throw new Error('Usuario no autorizado')
}

function verify (token) {
  return jwt.verify(token, secrect)
}

exports.sign = (data) => {
  return jwt.sign(data, secrect)
}

exports.logged = (req) => {
  const authorization = req.headers.authorization || ''
  const token = getToken(authorization)
  const decoded = verify(token)

  req.user = decoded
  return decoded
}
