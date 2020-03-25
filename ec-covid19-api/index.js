'use strict'

const debug = require('debug')('ec-covid19:api')
const express = require('express')
const { readFileSync } = require('fs')
const { join } = require('path')
const { makeExecutableSchema } = require('graphql-tools')
const gqlMiddleware = require('express-graphql')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const { port, env } = require('./config/server')
const resolvers = require('./resolvers')
const authRouter = require('./components/auth')
const { logged } = require('./lib/auth')

const app = express()
const typeDefs = readFileSync(join(__dirname, 'graphql', 'schema.graphql'), { encoding: 'utf8' })
const schema = makeExecutableSchema({ typeDefs, resolvers })
const isDev = env !== 'production'

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use((req, res, next) => {
  if (req.path === '/api' && req.body.query.indexOf('mutation') === 0) {
    try {
      logged(req)
    } catch (e) {
      return next(e)
    }
  }
  next()
})

app.use('/auth', authRouter)

app.use('/api', gqlMiddleware({
  schema,
  rootValue: resolvers,
  graphiql: isDev
}))

app.use((error, req, res, next) => {
  debug(`Error : ${error.message}`)
  res.status(500).send({ error: error.message })
})

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
