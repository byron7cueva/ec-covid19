if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

module.exports = {
  connectionConfig: {
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  }
}
