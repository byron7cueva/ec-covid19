const path = require('path')

module.exports = {
  connectionConfig: {
    storage: process.env.STORAGE || path.join(__dirname, '../storage/ecCovid19.db3'),
    pool: {
      max: 10,
      min: 0,
      idle: 10000
    }
  }
}
