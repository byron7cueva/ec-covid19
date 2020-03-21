const path = require('path')

module.exports = {
  connectionConfig: {
    storage: process.env.STORAGE || path.join(__dirname, '../storage/ecCovid19.sqlite3'),
    pool: {
      max: 10,
      min: 0,
      // Tiempo de vida si la conexion no es utilizada
      idle: 10000
    }
  }
}