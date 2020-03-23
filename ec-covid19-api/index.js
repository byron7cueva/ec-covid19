'use strict'

const debug = require('debug')('ec-covid19:api')
const express = require('express')
const { readFileSync } = require('fs')
const { join } = require('path')
const { makeExecutableSchema } = require('graphql-tools')
const gqlMiddleware = require('express-graphql')

const { port, env } = require('./config/server')
const resolvers = require('./resolvers')

const app = express()
const typeDefs = readFileSync(join(__dirname, 'graphql', 'schema.graphql'), { encoding: 'utf8' })
const schema = makeExecutableSchema({ typeDefs, resolvers })
const isDev = env !== 'production'

app.use('/api', gqlMiddleware({
  schema,
  rootValue: resolvers,
  graphiql: isDev
}))

function handleFatalError (error) {
  console.error(error.message)
  console.error(error.stack)
  process.exit(1)
}

process.on('uncaughtException', handleFatalError)
process.on('unhandledRejection', handleFatalError)

app.listen(port, () => {
  debug(`Server is listen on port ${port}`)
})
