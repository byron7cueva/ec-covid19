require('./db/Connection').getInstance().connect()
const ConfirmedCaseDao = require('./dao/ConfirmedCaseDao')

async function test () {
  try {
    const result = await ConfirmedCaseDao.findAll()
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}

test()
