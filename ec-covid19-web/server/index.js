const debug = require('debug')('ec-covid19:web')
const express = require('express')
const { createProxyMiddleware } = require("http-proxy-middleware")
const { port } = require('./config/server')

const app = express()

const devProxy = {
  "/api": {
    target: "http://localhost:3000/api/",
    changeOrigin: true
  }
};

Object.keys(devProxy).forEach((context) => {
  app.use(createProxyMiddleware(context, devProxy[context]));
});

app.listen(port, () => {
  debug(`Server runing in port ${port}`)
})
