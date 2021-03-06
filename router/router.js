const router = require('koa-router')()
const HomeController = require('../controller/home')

module.exports = (app) => {
  router.get('/', HomeController.index)

  router.get('/home', HomeController.home)

  router.get('/home/:id/:name', HomeController.homeParams)

  router.get('/user', HomeController.login)

  router.post('/user/register', HomeController.register)

  router.get('/table/:number', HomeController.table)

  router.get('/goods/:number', HomeController.goods)

  router.get('/cuisine/:id', HomeController.cuisine)

  router.get('/carousel', HomeController.carousel)

  app.use(router.routes())
      .use(router.allowedMethods())
}