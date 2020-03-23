class EcCovid19DBError extends Error {
  constructor (message) {
    super(message)
    this.name = 'EcCovid19DBError'
  }
}

module.exports = EcCovid19DBError
