/**
 * @authors remy
 * @creatTime 2018-12-05 11:00:15
 * @description 
 * @version 0.0.1
 */

const resHandler = require('./resHandler');

const controllers = {
  '/test|get': async (ctx, next) => {
    let result = null, msg = '';
    try{
      result = {
        test: 1
      };
    }catch(err){
      msg = err.message;
    }
    ctx.response.body = resHandler.pack(result, msg);
  },
  '/test|post': async (ctx, next) => {
    const data = ctx.request.body;
    let result = null, msg = '';
    try{
      result = data;
    }catch(err){
      msg = err.message;
    }
    ctx.response.body = resHandler.pack(result, msg);
  }
}

module.exports = controllers;