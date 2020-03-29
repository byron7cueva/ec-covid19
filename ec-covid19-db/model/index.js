const PlaceType = require('./PlaceType')
const Place = require('./Place')
const ConfirmedCase = require('./ConfirmedCase')
const User = require('./User')

// Associations
Place.belongsTo(PlaceType, {
  foreignKey: 'placeTypeId',
  sourceKey: 'placeTypeId'
})

Place.hasMany(ConfirmedCase, {
  foreignKey: 'placeId',
  sourceKey: 'placeId'
})

ConfirmedCase.belongsTo(Place, {
  foreignKey: 'placeId',
  sourceKey: 'placeId'
})

module.exports = {
  PlaceType,
  Place,
  ConfirmedCase,
  User
}
