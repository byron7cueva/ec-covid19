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
    placeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'placeid'
    },
    caseTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'casetypeid'
    },
    caseDate: {
      type: DataTypes.DATEONLY,
      field: 'casedate'
    },
    confirmed: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    dead: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    healed: {
      type: DataTypes.INTEGER,
      defaultValue: 0
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
