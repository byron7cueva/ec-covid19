const { Model, DataTypes } = require('sequelize')
const { getInstance } = require('../db/Connection')

/**
 * PlaceType model
 */
class PlaceType extends Model {}

PlaceType.init({
  placeTypeId: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  placeTypeName: {
    type: DataTypes.STRING,
    allowNull: false
  }
},
{
  sequelize: getInstance().connection,
  tableName: 'PlaceType',
  timestamps: false
})

module.exports = PlaceType
