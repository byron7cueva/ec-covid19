const { Model, DataTypes } = require('sequelize')
const { getInstance } = require('../db/Connection')

/**
 * Case Type model
 */
class CaseType extends Model {}

CaseType.init(
  {
    caseTypeId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize: getInstance().connection,
    tableName: 'CaseType',
    timestamps: false
  }
)

module.exports = CaseType
