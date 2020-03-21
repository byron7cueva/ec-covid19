'use strict'

const { Model, DataTypes } = require('sequelize')
const { getInstance } = require('../db/Connection')

class Place extends Model {}

Place.init({
  placeId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  placeCode: {
    type: DataTypes.STRING,
    allowNull: false
  },
  placeName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  placeTypeId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  parentRegion: {
    type: DataTypes.INTEGER
  }
},
{
  sequelize: getInstance().connection,
  tableName: 'Place',
  timestamps: false
})

module.exports = Place
