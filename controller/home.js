const HomeService = require('../service/home')
const table = require('../config')
const goodsList = require('../config')
const cuisine = require('../config')

module.exports = {
  index: async (ctx, next) => {
    ctx.response.body = `<h1>index page</h1>`
  },
  home: async (ctx, next) => {
    console.log(ctx.request.query)
    console.log(ctx.request.querystring)
    ctx.response.body = '<h1>HOME page</h1>'
  },
  homeParams: async (ctx, next) => {
    console.log(ctx.params)
    ctx.response.body = '<h1>HOME page /:id/:name</h1>'
  },
  login: async (ctx, next) => {
    ctx.response.body =
        `
        <form action="/user/register" method="post">
          <input name="name" type="text" placeholder="请输入用户名：ikcamp"/> 
          <br/>
          <input name="password" type="text" placeholder="请输入密码：123456"/>
          <br/> 
          <button>GoGoGo</button>
        </form>
      `
  },
  register: async (ctx, next) => {
    let {
      name,
      password
    } = ctx.request.body
    let data = await HomeService.register(name, password)
    ctx.response.body = data
  },
  table: async (ctx, next) => {
    let dinning_table_number = ctx.params.number
    ctx.response.type = 'application/json'
    if (dinning_table_number !== '001') {
      ctx.response.body = table.fail
    } else if (dinning_table_number === '001') {
      ctx.response.body = table.success
    } else if (dinning_table_number === '002') {
      ctx.response.body = table.tableFail
    }
  },
  goods: async (ctx, next) => {
    let store_number = ctx.params.number
    console.log(store_number)
    ctx.response.type = 'application/json'
    if (store_number !== 234) {
      ctx.response.body = goodsList.fail
    } else if (store_number === 234) {
      ctx.response.body = goodsList.success
    }
  },
  cuisine: async (ctx, next) => {
    let cuisine_id = ctx.params.id
    if (cuisine_id >= 90) {
      ctx.response.body = cuisine.fail
    } else if (cuisine_id < 20) {
      ctx.response.body = cuisine.successPackage
    } else if (cuisine_id >= 20 && cuisine_id < 90) {
      ctx.response.body = cuisine.success
    }
  }
}