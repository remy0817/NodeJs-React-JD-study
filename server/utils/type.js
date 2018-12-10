/**
 * @authors remy
 * @creatTime 2018-12-03 09:47:51
 * @description 
 * @version 0.0.1
 */

const toString = Object.prototype.toString;

function isUndefined(arg){
  return toString.call(arg) === '[object Undefined]';
}

function isNull(arg){
  return toString.call(arg) === '[object Null]';
}

function isNumber(arg){
  return toString.call(arg) === '[object Number]';
}

function isString(arg){
  return toString.call(arg) === '[object String]';
}

function isBoolean(arg){
  return toString.call(arg) === '[object Boolean]';
}

// pure: true纯js对象，false非纯js对象
function isObject(arg, pure){
  pure = isBoolean(pure) ? pure : false; // 默认判断是否为非纯js对象
  if(pure){
  }else{
    return toString.call(arg) === '[object Object]';
  }
}

function isSymbol(arg){
  return toString.call(arg) === '[object Symbol]';
}

function isArray(arg){
  if(Array.isArray && Array.isArray.toString().indexOf('[native code]') > -1){
    return Array.isArray(arg);
  }else{
    return toString.call(arg) === '[object Array]';
  }
}

function isFunction(arg){
  return toString.call(arg) === '[object Function]';
}

module.exports = {
  toString: toString,
  isUndefined: isUndefined,
  isNull: isNull,
  isNumber: isNumber,
  isString: isString,
  isBoolean: isBoolean,
  isObject: isObject,
  isSymbol: isSymbol,
  isArray: isArray,
  isFunction: isFunction
}