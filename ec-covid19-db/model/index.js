const PlaceType = require('./PlaceType')
const Place = require('./Place')
const CaseType = require('./CaseType')
const ConfirmedCase = require('./ConfirmedCase')

// Associations
Place.belongsTo(PlaceType, {
  foreignKey: 'placeTypeId',
  sourceKey: 'placeTypeId'
})

module.exports = {
  PlaceType,
  Place,
  CaseType,
  ConfirmedCase
}
