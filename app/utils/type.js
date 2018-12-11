/**
 * @authors remy
 * @creatTime 2018-12-03 09:47:51
 * @description 
 * @version 0.0.1
 */

const toString = Object.prototype.toString;

export function isUndefined(arg){
  return toString.call(arg) === '[object Undefined]';
}

export function isNull(arg){
  return toString.call(arg) === '[object Null]';
}

export function isNumber(arg){
  return toString.call(arg) === '[object Number]';
}

export function isString(arg){
  return toString.call(arg) === '[object String]';
}

export function isBoolean(arg){
  return toString.call(arg) === '[object Boolean]';
}

// pure: true纯js对象，false非纯js对象
export function isObject(arg, pure){
  pure = isBoolean(pure) ? pure : false; // 默认判断是否为非纯js对象
  if(pure){
  }else{
    return toString.call(arg) === '[object Object]';
  }
}

export function isSymbol(arg){
  return toString.call(arg) === '[object Symbol]';
}

export function isArray(arg){
  if(Array.isArray && Array.isArray.toString().indexOf('[native code]') > -1){
    return Array.isArray(arg);
  }else{
    return toString.call(arg) === '[object Array]';
  }
}

export function isFunction(arg){
  return toString.call(arg) === '[object Function]';
}
