'use strict'

const Sequelize = require('sequelize')
const defaults = require('defaults')
const { connectionConfig } = require('../config/db')

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
    this._connection = new Sequelize(
      defaults(connectionConfig, {
        dialect: 'sqlite',
        query: {
          raw: true
        }
      })
    )
  }
}

module.exports = Connection
