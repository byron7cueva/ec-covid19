require('./db/Connection').getInstance().connect()
const PlaceType = require('./dao/PlaceTypeDao')

async function test () {
  const result = await PlaceType.findAll()
  console.log(result)
}

test()
