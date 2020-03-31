require('./db/Connection').getInstance().connect()
const { PlaceGestor, CaseGestor, UserGestor } = require('./gestor')
const { EcCovid19DBError } = require('./lib/EcCovid19DBError')

function handleFatalError (error) {
  console.error(error.message)
  console.error(error.stack)
  process.exit(1)
}

process.on('uncaughtException', handleFatalError)
process.on('unhandledRejection', handleFatalError)

module.exports = {
  PlaceGestor,
  CaseGestor,
  UserGestor,
  EcCovid19DBError
}
