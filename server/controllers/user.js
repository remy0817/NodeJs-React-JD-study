/**
 * @authors remy
 * @creatTime 2018-12-03 11:14:03
 * @description 
 * @version 0.0.1
 */

const resHandler = require('./resHandler'),
  userModel = require('../models/user');

const controllers = {
  '/user|get': async (ctx, next) => {
    const params = ctx.params;
    let result = null, msg = '';
    try{
      result = await userModel.findAll(params || {});
    }catch(err){
      msg = err.message;
    }
    ctx.response.body = resHandler.pack(result, msg);
  },
  '/user/:id|get': async (ctx, next) => {
    const id = ctx.params.id;
    let result = null, msg = '';
    try{
      result = await userModel.findById(id);
    }catch(err){
      msg = err.message;
    }
    ctx.response.body = resHandler.pack(result, msg);
  },
  '/user|post': async (ctx, next) => {
    const data = ctx.request.body;
    let result = null, msg = '';
    try{
      result = await userModel.create(data);
    }catch(err){
      msg = err.message;
    }
    ctx.response.body = resHandler.pack(result, msg);
  },
  '/user|put': async (ctx, next) => {
    const data = ctx.request.body;
    let result = null, msg = '';
    try{
      result = await userModel.update(data);
    }catch(err){
      msg = err.message;
    }
    ctx.response.body = resHandler.pack(result, msg);
  },
  '/user/updatePwd|put': async (ctx, next) => {
    const data = ctx.request.body;
    let result = null, msg = '';
    try{
      result = await userModel.updatePwd(data);
    }catch(err){
      msg = err.message;
    }
    ctx.response.body = resHandler.pack(result, msg);
  },
  '/user/:id|delete': async (ctx, next) => {
    const id = ctx.params.id;
    let result = null, msg = '';
    try{
      result = await userModel.del(id);
    }catch(err){
      msg = err.message;
    }
    ctx.response.body = resHandler.pack(result, msg);
  }
}

module.exports = controllers;