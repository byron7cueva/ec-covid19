'use strict'

module.exports = (error) => {
  console.error(error)
  console.error(error.stack)
  throw new Error('Server error')
}
