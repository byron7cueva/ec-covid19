const { Model, DataTypes } = require('sequelize')
const { getInstance } = require('../db/Connection')

class ConfirmedCase extends Model {}

ConfirmedCase.init(
  {
    caseId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    placeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    caseTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    infected: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    actived: {
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
    insertDate: DataTypes.DATE,
    updateDate: DataTypes.DATE
  },
  {
    sequelize: getInstance().connection,
    tableName: 'ConfirmedCase',
    createdAt: 'insertDate',
    updatedAt: 'updateDate'
  }
)

module.exports = ConfirmedCase
