const debug = require('debug')('ec-covid19:web')
const express = require('express')
const { createProxyMiddleware } = require("http-proxy-middleware")
const { join } = require('path')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const { port, endPoint } = require('./config/server')

const app = express()
app.use(express.static(join(__dirname, '..', 'dist')))

const devProxy = {
  "/api": {
    target: endPoint,
    changeOrigin: true
  },
  "/auth": {
    target: endPoint,
    changeOrigin: true
  }
};

Object.keys(devProxy).forEach((context) => {
  app.use(createProxyMiddleware(context, devProxy[context]));
});

app.listen(port, () => {
  debug(`Server runing in port ${port}`)
})
