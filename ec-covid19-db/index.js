require('./db/Connection').getInstance().connect()
const { PlaceGestor, CaseGestor } = require('./gestor')

function handleFatalError (error) {
  console.error(error.message)
  console.error(error.stack)
  process.exit(1)
}

process.on('uncaughtException', handleFatalError)
process.on('unhandledRejection', handleFatalError)

module.exports = {
  PlaceGestor,
  CaseGestor
}
