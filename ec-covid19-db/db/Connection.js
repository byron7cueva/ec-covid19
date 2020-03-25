'use strict'

const Sequelize = require('sequelize')
const defaults = require('defaults')
const { connectionConfig } = require('../config/db')
const errorHandler = require('../lib/errorHandler')

let instance = null

/**
 * This manager the connection to datatbase
 */
class Connection {
  get connection () {
    return this._connection
  }

  constructor () {
    this._connection = null
  }

  /**
   * Get instance of class
   */
  static getInstance () {
    if (instance) {
      return instance
    }
    instance = new Connection()
    return instance
  }

  /**
   * Connect to database
   */
  connect () {
    if (!this._connection) {
      this._connection = new Sequelize(
        defaults(connectionConfig, {
          dialect: 'postgres',
          logging: process.env.NODE_ENV !== 'production',
          query: {
            raw: true
          },
          define: {
            cameCased: true
          }
        })
      )
      try {
        this._connection.authenticate()
      } catch (error) {
        errorHandler(error)
      }
    }
  }
}

module.exports = Connection
