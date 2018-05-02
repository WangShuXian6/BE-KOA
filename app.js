const Koa = require('koa')
const path = require('path')
const bodyParser = require('koa-bodyparser')
const staticFiles = require('koa-static')
const app = new Koa()
const router = require('./router/router')
const middleware = require('./middleware')

middleware(app)

app.use(staticFiles(path.resolve(__dirname, './public')))

app.use(bodyParser())

router(app)

app.listen(3000, () => {
  console.log('server is running')
})