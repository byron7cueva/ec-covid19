'use strict'

const { Model, DataTypes } = require('sequelize')
const { getInstance } = require('../db/Connection')

class Place extends Model {}

Place.init({
  placeId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'placeid'
  },
  placeCode: {
    type: DataTypes.STRING,
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
    type: DataTypes.INTEGER,
    field: 'parentregion'
  }
},
{
  sequelize: getInstance().connection,
  tableName: 'places',
  timestamps: false
})

module.exports = Place
