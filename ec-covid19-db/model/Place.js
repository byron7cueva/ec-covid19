'use strict'

const { Model, DataTypes } = require('sequelize')
const { getInstance } = require('../db/Connection')

class Place extends Model {}

Place.init({
  placeCode: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
    field: 'placecode'
  },
  placeName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'placename'
  },
  x: {
    type: DataTypes.DOUBLE
  },
  y: {
    type: DataTypes.DOUBLE
  },
  placeTypeId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'placetypeid'
  },
  parentRegion: {
    type: DataTypes.STRING,
    field: 'parentregion'
  }
},
{
  sequelize: getInstance().connection,
  tableName: 'places',
  timestamps: false
})

module.exports = Place
