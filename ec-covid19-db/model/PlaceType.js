const { Model, DataTypes } = require('sequelize')
const { getInstance } = require('../db/Connection')

/**
 * PlaceType model
 */
class PlaceType extends Model {}

PlaceType.init({
  placeTypeId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: 'placetypeid'
  },
  placeTypeName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'placetypename'
  }
},
{
  sequelize: getInstance().connection,
  tableName: 'placetypes',
  timestamps: false
})

module.exports = PlaceType
