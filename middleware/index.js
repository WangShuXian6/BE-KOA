const path = require('path')
const bodyParser = require('koa-bodyparser')
const staticFiles = require('koa-static')
const miSend = require('./mi-send')
const miLog = require('./mi-log')

module.exports = (app) => {
  app.use(miLog())
  app.use(staticFiles(path.resolve(__dirname, "../public")))

  app.use(bodyParser())
  app.use(miSend())
}