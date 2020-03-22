require('./db/Connection').getInstance().connect()
const { PlaceGestor, CaseGestor } = require('./gestor')
module.exports = {
  PlaceGestor,
  CaseGestor
}
