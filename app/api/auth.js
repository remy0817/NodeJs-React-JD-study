/**
 * @authors remy
 * @creatTime 2018-12-05 16:26:59
 * @description 
 * @version 0.0.1
 */

import { AsyncStorage } from 'react-native';
import { apiRequest } from './common';

export function login(data){
  return apiRequest('/login', {
    method: 'post',
    body: JSON.stringify(data)
  });
}

export function auth(){
  return apiRequest('/auth', {
    method: 'post',
    body: JSON.stringify({id: AsyncStorage.userId})
  });
}