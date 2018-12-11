/**
 * @authors remy
 * @creatTime 2018-12-05 16:26:20
 * @description 
 * @version 0.0.1
 */

import { AsyncStorage } from 'react-native';

const controllerPrefix = 'http://10.10.254.26:3000';

const _headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};

export function handleErr(res){
  alert(res.message);
}

// 更新token
async function refreshToken(){
  return new Promise((resolve, reject) => {
    fetch(`${controllerPrefix}/auth`, {
      body: JSON.stringify({id: AsyncStorage.userId})
    })
    .then(res => res.json())
    .then(res => {
      if(res.code === 0){
        AsyncStorage.token = res.data.token;
      }else{
        handleErr(res);
      }
    })
    .catch(err => {
      handleErr({code: 500, message: err});
    });
  });
}

// isHandleErr是否由apiRequest统一处理异常
export function apiRequest(url, options, isHandleErr){
  let headers = {};
  if(url !== '/login'){
    // if(url !== '/auth'){
    //   await refreshToken();
    // }
    headers = {
      'Authorization': `Bearer ${AsyncStorage.token}`
    };
  }
  const opts = {
    method: options.method || 'get',
    headers: Object.assign({}, _headers, options.headers, headers)
  };
  options.body && (opts.body = options.body);
  return new Promise((resolve, reject) => {
    fetch(`${controllerPrefix}${url}`, opts)
    .then(res => res.json())
    .then(res => {
      if(res.code === 0){
        resolve(res);
      }else{
        isHandleErr ? handleErr(res) : reject(res);
      }
    })
    .catch(err => {
      handleErr({code: 500, message: err});
    });
  });
}