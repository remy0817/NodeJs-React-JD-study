/**
 * @filename 
 * @authors remy
 * @creatTime 2018-11-30 10:03:25
 * @description 
 * @version 0.0.1
 */

const Koa = require('koa'),
  cors = require('koa-cors'),
  koajwt = require('koa-jwt'),
  router = require('koa-router')(),
  bodyparser = require('koa-bodyparser'),
  { tokenKey } = require('./config/token'),
  initControllers = require('./controllers');

const app = new Koa();

// add cors middleware, 允许跨域
app.use(cors());

// add bodyparser middleware, 用于自动解析request请求，将结果放在ctx.request.body中
app.use(bodyparser());

app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
  try{
    // 必须加关键字await，否则执行下一步将不会等待异步，直接相应请求
    await next();
  }catch(err){
    if(err.status === 401){
      // token验证失败
      ctx.status = 401;
      ctx.response.body = '没有token或token已过期';
    }else{
      throw err;
    }
  }
});

// add koajwt middleware, 解析并验证token，验证失败则返回401
// unless中添加不需要验证token的接口
app.use(koajwt({
  secret: tokenKey
}).unless({
  path: [/\login/, '/test']
}));

// 初始化接口：将接口挂载到router
initControllers(router);

// add router middleware
app.use(router.routes());

app.listen(3000);
console.log('app started at port 3000...');