/**
 * @authors remy
 * @creatTime 2018-12-03 14:17:53
 * @description 统一处理response响应的公共函数
 * @version 0.0.1
 */

const typeUtil = require('../utils/type');

function pack(data, msg){
  let code = 0; // 返回正常时code
  if(msg.indexOf('Validation error:') > -1){
    // 验证错误时code
    code = 10000;
  }else if(msg){
    // 内部异常时code
    code = 500;
  }
  const _r = msg.match(/Validation error\:\s\S*\,/);
  if(_r){
    msg = _r[0].replace('Validation error: ', '');
    msg = msg.substr(0, msg.length - 1);
  }else{
    msg = msg.replace('Validation error: ', '');
  }
  return {
    code: code,
    data: data,
    msg: msg
  };
}

module.exports = {
  pack: pack
};