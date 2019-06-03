const Koa = require('koa')
const path = require('path')
const bodyParser = require('koa-bodyparser')
const staticFiles = require('koa-static')
const app = new Koa()
const router = require('./router/router')
const middleware = require('./middleware')
const cors = require('koa2-cors');
const json = require('koa-json');
const convert = require('koa-convert');

middleware(app)

app.use(staticFiles(path.resolve(__dirname, './public')))

app.use(bodyParser())

app.use(convert(json()));

app.use(cors({
  origin: function (ctx) {
      if (ctx.url === '/test') {
          return "*"; // 允许来自所有域名请求
      }
      return 'http://localhost:8080'; // 这样就能只允许 http://localhost:8080 这个域名的请求了
  },
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))

router(app)

app.listen(3000, () => {
  console.log('server is running')
})