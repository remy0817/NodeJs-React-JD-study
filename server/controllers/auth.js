/**
 * @authors remy
 * @creatTime 2018-12-03 20:38:39
 * @description 
 * @version 0.0.1
 */

const jwt = require('jsonwebtoken'),
  { tokenKey, expiresIn } = require('../config/token'),
  resHandler = require('./resHandler'),
  userModel = require('../models/user');

function generateToken(userId){
  return jwt.sign({
            _id: userId
          }, tokenKey, {expiresIn: expiresIn});
}

const controllers = {
  '/login|post': async (ctx, next) => {
    const data = ctx.request.body;
    let result = null, msg = '';
    try{
      const user = await userModel.findOne(data);
      if(user){
        result = {
          token: generateToken(user.id),
          id: user.id
        };
      }
    }catch(err){
      msg = err.message;
    }
    ctx.response.body = resHandler.pack(result, msg);
  },
  '/auth|post': async (ctx, next) => {
    const id = ctx.request.body.id;
    let result = null, msg = '';
    try{
      const user = await userModel.findById(id);
      if(user){
        result = {
          token: generateToken(id)
        }
      }
    }catch(err){
      msg = err.message;
    }
    ctx.response.body = resHandler.pack(result, msg);
  }
}

module.exports = controllers;