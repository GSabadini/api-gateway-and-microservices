const Koa = require('koa');
const app = new Koa();
const PORT = 3003;

app.use(async ctx => {
  ctx.body = 'Hello World Koa.js';
});

app.listen(PORT);