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
  foreignKey: 'placeCode',
  sourceKey: 'placeCode'
})

ConfirmedCase.belongsTo(Place, {
  foreignKey: 'placeCode',
  sourceKey: 'placeCode'
})

module.exports = {
  PlaceType,
  Place,
  ConfirmedCase,
  User
}
