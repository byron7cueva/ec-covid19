const { Model, DataTypes } = require('sequelize')
const { getInstance } = require('../db/Connection')

class User extends Model {}

User.init({
  userId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    field: 'userid'
  },
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'username'
  },
  userPass: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'userpass'
  }
},
{
  sequelize: getInstance().connection,
  tableName: 'users',
  timestamps: false
})

module.exports = User
