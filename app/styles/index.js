/**
 * @filename index.js
 * @authors remy
 * @creatTime 2018-08-03 16:11:15
 * @description 样式集
 * @version 0.0.1
 */

import { StyleSheet } from 'react-native';

import { deviceWidth, deviceHeight, setSpText, scaleSize } from './screenUtil';

export const commonStyle = StyleSheet.create({
  flex: {
    flex: 1
  },
  flexCenter: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  flexGrow: {
    flexGrow: 1
  },
  rowAlign: {
    flexDirection: 'row'
  },
  flexWrap: {
    flexWrap: 'wrap'
  },
  columnAlign: {
    flexDirection: 'column'
  },
  tabBar: {
    width: scaleSize(130),
    height: scaleSize(100)
  },
  hide: {
    display: 'none'
  },
  baseline: {
    alignItems: 'baseline'
  },
  spaceBetween: {
    justifyContent: 'space-between'
  }
});

// 登录
export const loginStyle = StyleSheet.create({
  submitBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 48,
    marginTop: 30,
    backgroundColor: '#3A7BD2'
  },
  submitBtnText: {
    fontWeight: '700',
    fontSize: 16,
    color: '#fff'
  }
});