const { Model, DataTypes } = require('sequelize')
const { getInstance } = require('../db/Connection')

class ConfirmedCase extends Model {}

ConfirmedCase.init(
  {
    caseId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'caseid'
    },
    placeCode: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'placecode'
    },
    caseDate: {
      type: DataTypes.DATEONLY,
      field: 'casedate'
    },
    confirmed: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    totalConfirmed: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      field: 'totalconfirmed'
    },
    dead: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    totalDead: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      field: 'totaldead'
    },
    healed: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    totalHealed: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      field: 'totalhealed'
    },
    insertDate: {
      type: DataTypes.DATE,
      field: 'insertdate'
    },
    updateDate: {
      type: DataTypes.DATE,
      field: 'updatedate'
    }
  },
  {
    sequelize: getInstance().connection,
    tableName: 'confirmedcases',
    createdAt: 'insertDate',
    updatedAt: 'updateDate'
  }
)

module.exports = ConfirmedCase
