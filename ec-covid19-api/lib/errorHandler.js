'use strict'

module.exports = (error) => {
  console.error(error)
  console.error(error.stack)
  if (error.name === 'EcCovid19DBError') throw error
  throw new Error('Server error')
}
