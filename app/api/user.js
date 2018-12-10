/**
 * @authors remy
 * @creatTime 2018-12-05 16:26:30
 * @description 
 * @version 0.0.1
 */

import { AsyncStorage } from 'react-native';
import { apiRequest } from './common';

export function getUserInfo(){
  const userId = AsyncStorage.userId;
  return apiRequest(`/user/${userId}`);
}