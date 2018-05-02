module.exports = () => {
  function render(json) {
    this.set("Content-Type", "application/json")
    this.body = JSON.stringify(json)
  }

  return async (ctx, next) => {
    ctx.send = render.bind(ctx)
    //ctx.log.error('test')
    await next()
  }
}

// ctx.send({
//   status: 'success',
//   data: 'hello ikcmap'
// })