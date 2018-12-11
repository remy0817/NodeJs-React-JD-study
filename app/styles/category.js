/**
 * @authors remy
 * @creatTime 2018-12-11 14:07:32
 * @description 
 * @version 0.0.1
 */

import { StyleSheet } from 'react-native';

import { deviceWidth, deviceHeight, setSpText, scaleSize } from './screenUtil';

export const category_headerStyle = StyleSheet.create({
  container: {
    height: scaleSize(90),
    borderBottomWidth: 1,
    borderColor: '#e5e5e5',
    backgroundColor: '#fff'
  },
  backIcon: {
    width: scaleSize(40),
    height: scaleSize(40),
    marginLeft: scaleSize(20),
    marginRight: scaleSize(20)
  },
  searchBox: {
    height: scaleSize(60),
    borderRadius: scaleSize(30),
    backgroundColor: '#f7f7f7',
    alignItems: 'center'
  },
  searchIcon: {
    width: scaleSize(36),
    height: scaleSize(30),
    marginLeft: scaleSize(20)
  },
  placeholder: {
    marginLeft: scaleSize(20),
    fontSize: scaleSize(24)
  },
  shortcutBarIcon: {
    width: scaleSize(40),
    height: scaleSize(40),
    marginLeft: scaleSize(20),
    marginRight: scaleSize(20)
  }
});

export const category_menuStyle = StyleSheet.create({
  container: {
    width: scaleSize(172),
    backgroundColor: '#f8f8f8'
  },
  item: {
    width: scaleSize(170),
    height: scaleSize(92),
    alignItems: 'center',
    justifyContent: 'center'
  }
});

// 这里不能直接计算出item的width，计算并设置item的width会造成container的宽度莫名的变成deviceWidth
const category_itemBoxWidth = deviceWidth - scaleSize(172) - scaleSize(34) * 2;

export const category_contentStyle = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff'
  },
  categoryBox: {
    marginTop: scaleSize(40),
    marginLeft: scaleSize(34),
    marginRight: scaleSize(34)
  },
  title: {
    fontSize: scaleSize(28),
    color: '#333',
    fontWeight: '700'
  },
  itemBox: {
    width: category_itemBoxWidth,
    marginTop: scaleSize(32),
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  item: {
    width: '33.3%',
    height: scaleSize(214),
    alignItems: 'center'
  },
  itemImg: {
    width: scaleSize(140),
    height: scaleSize(140)
  },
  itemText: {
    marginTop: scaleSize(4),
    color: '#333'
  }
});