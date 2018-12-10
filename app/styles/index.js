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

// 首页
export const home_headerStyle = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 9,
    height: scaleSize(100)
  },
  categoryBtn: {
    width: scaleSize(60),
    height: scaleSize(100),
    marginLeft: scaleSize(20),
    marginRight: scaleSize(20),
    alignItems: 'center',
    justifyContent: 'center'
  },
  categoryIcon: {
    width: scaleSize(40),
    height: scaleSize(32)
  },
  searchContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  searchBox: {
    flexDirection: 'row',
    width: '100%',
    height: scaleSize(60),
    borderRadius: scaleSize(60),
    backgroundColor: '#fff'
  },
  jdIcon: {
    width: scaleSize(40),
    height: scaleSize(40),
    marginLeft: scaleSize(30),
    marginTop: scaleSize(10)
  },
  searchIcon: {
    width: scaleSize(28),
    height: scaleSize(28),
    marginLeft: scaleSize(40),
    marginRight: scaleSize(10),
    marginTop: scaleSize(16)
  },
  labelBox: {
    flexGrow: 1,
    justifyContent: 'center'
  },
  label: {
    color: '#666',
    marginLeft: scaleSize(10)
  },
  msgBtn: {
    width: scaleSize(40),
    height: scaleSize(100),
    marginLeft: scaleSize(30),
    marginRight: scaleSize(30),
    alignItems: 'center',
    justifyContent: 'center'
  },
  msgIcon: {
    width: scaleSize(40),
    height: scaleSize(63)
  }
});

export const home_bannerHeight = scaleSize(366);

export const home_bannerStyle = StyleSheet.create({
  container: {
    height: home_bannerHeight,
    backgroundColor: '#fff'
  },
  bannerImg: {
    width: '100%',
    height: home_bannerHeight
  },
  paginationStyle: {
    bottom: scaleSize(40)
  },
  dotStyle: {
    width: scaleSize(12),
    height: scaleSize(12),
    borderWidth: scaleSize(2),
    borderColor: '#fff',
    borderRadius: scaleSize(7),
    marginLeft: scaleSize(8),
    marginRight: scaleSize(8),
    backgroundColor: 'transparent'
  },
  activeDotStyle: {
    width: scaleSize(12),
    height: scaleSize(12),
    backgroundColor: '#fff'
  }
});

export const home_quickNavStyle = StyleSheet.create({
  container: {
    marginTop: -scaleSize(30),
    height: scaleSize(332),
    paddingTop: scaleSize(8),
    borderTopLeftRadius: scaleSize(20),
    borderTopRightRadius: scaleSize(20),
    backgroundColor: '#fff',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  item: {
    width: '20%',
    height: scaleSize(140),
    marginTop: scaleSize(12),
    alignItems: 'center'
  },
  itemIcon: {
    width: scaleSize(80),
    height: scaleSize(80),
    marginBottom: scaleSize(7)
  }
});

export const home_scrollNewsStyle = StyleSheet.create({
  container: {
    height: scaleSize(60),
    margin: scaleSize(16),
    marginTop: 0,
    borderRadius: scaleSize(12),
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  img: {
    width: scaleSize(146),
    height: scaleSize(32),
    marginLeft: scaleSize(16)
  },
  mark: {
    color: '#f23030',
    marginLeft: scaleSize(16),
    marginRight: scaleSize(12)
  },
  text: {
    color: '#181818',
    fontSize: scaleSize(24)
  },
  more: {
    width: scaleSize(50),
    marginRight: scaleSize(16)
  }
});

let graphic_height = scaleSize(deviceWidth * 120 / 375 * 2);
export const home_secondKill_item_width = scaleSize(160);

export const home_floorStyle = StyleSheet.create({
  container: {
    marginBottom: scaleSize(16),
    backgroundColor: '#fff'
  },
  graphic: {
    height: graphic_height
  },
  graphic_img1: {
    width: '50%',
    height: graphic_height
  },
  graphic_img2: {
    width: '25%',
    height: graphic_height
  },
  secondKill: {
    height: scaleSize(324)
  },
  secondKill_head: {
    height: scaleSize(72),
    alignItems: 'center'
  },
  secondKill_title: {
    fontSize: scaleSize(32),
    color: '#f02b2b',
    fontWeight: '700',
    marginLeft: scaleSize(12),
    marginRight: scaleSize(12)
  },
  secondKill_name: {
    fontSize: scaleSize(24),
    color: '#232326',
    fontWeight: '700'
  },
  secondKill_timeBox: {
    flexGrow: 1,
    marginLeft: scaleSize(12)
  },
  secondKill_time: {
    width: scaleSize(36),
    height: scaleSize(32),
    fontSize: scaleSize(24),
    color: '#232326',
    textAlign: 'center',
    borderWidth: scaleSize(2),
    borderColor: '#dfdfdf'
  },
  secondKill_timeSplit: {
    color: '#232326',
    marginTop: -scaleSize(4),
    marginLeft: scaleSize(2),
    marginRight: scaleSize(2)
  },
  secondKill_more: {
    alignItems: 'center'
  },
  secondKill_moreText: {
    fontSize: scaleSize(20),
    color: '#f23030'
  },
  secondKill_icon_arrow: {
    width: scaleSize(22),
    height: scaleSize(22),
    marginLeft: scaleSize(6),
    marginRight: scaleSize(16)
  },
  secondKill_img: {
    width: scaleSize(140),
    height: scaleSize(140)
  },
  secondKill_stool: {
    height: scaleSize(400)
  },
  secondKill_item: {
    paddingLeft: scaleSize(10),
    paddingRight: scaleSize(10)
  },
  secondKill_cPriceBox: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: scaleSize(16)
  },
  secondKill_dollar: {
    fontSize: scaleSize(22),
    color: '#f23030'
  },
  secondKill_cPrice: {
    fontSize: scaleSize(32),
    color: '#f23030'
  },
  secondKill_oPrice: {
    textAlign: 'center',
    fontSize: scaleSize(24),
    color: '#686868',
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid'
  }
});

export const home_oneItemStyle = StyleSheet.create({
  container: {
    width: '25%',
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#f5f5f5',
    backgroundColor: '#fff',
    paddingTop: scaleSize(12),
    paddingBottom: scaleSize(12),
    paddingLeft: scaleSize(20)
  },
  box: {
    marginTop: scaleSize(13),
    marginLeft: scaleSize(20),
    marginBottom: scaleSize(10)
  },
  title: {
    color: '#000',
    fontSize: scaleSize(32),
    fontWeight: '400',
    lineHeight: scaleSize(45)
  },
  description: {
    color: '#222',
    fontSize: scaleSize(24),
    lineHeight: scaleSize(33)
  },
  img: {
    width: scaleSize(130),
    height: scaleSize(130),
    marginTop: scaleSize(11),
    marginLeft: scaleSize(8)
  }
});

export const home_twoItemStyle = StyleSheet.create({
  container: {
    width: '50%',
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#f5f5f5',
    backgroundColor: '#fff',
    paddingTop: scaleSize(12),
    paddingBottom: scaleSize(12)
  },
  box: {
    marginTop: scaleSize(13),
    marginBottom: scaleSize(10)
  },
  title: {
    color: '#000',
    fontSize: scaleSize(32),
    fontWeight: '400',
    lineHeight: scaleSize(45),
    marginLeft: scaleSize(18)
  },
  description: {
    color: '#222',
    fontSize: scaleSize(24),
    lineHeight: scaleSize(33),
    marginLeft: scaleSize(18)
  },
  img: {
    width: scaleSize(130),
    height: scaleSize(130),
    marginTop: scaleSize(11),
    marginLeft: scaleSize(14),
    marginRight: scaleSize(14)
  },
  leftBox: {
    width: '50%'
  },
  rightBox: {
    width: '50%',
    paddingTop: scaleSize(20)
  },
  oneImg: {
    width: scaleSize(160),
    height: scaleSize(160)
  }
});

export const home_F_2_4Style = StyleSheet.create({
  container: {
    //
  },
  title: {
    width: '100%',
    height: scaleSize(70),
    backgroundColor: '#f6f6f6'
  },
  titleImg: {
    width: scaleSize(384),
    height: scaleSize(70)
  },
  one_title: {},
  one_description: {
    color: '#648EFF'
  },
  two_title: {
    textAlign: 'center'
  },
  two_description: {
    color: '#648EFF',
    textAlign: 'center'
  }
});

export const home_F_4NStyle = StyleSheet.create({
  container: {},
  title: {
    width: '100%',
    height: scaleSize(70),
    backgroundColor: '#f6f6f6'
  },
  titleImg: {
    width: scaleSize(384),
    height: scaleSize(70)
  },
  one_title: {
  }
});

export const home_F_2_2_4Style = StyleSheet.create({
  container: {},
  title: {
    width: '100%',
    height: scaleSize(70),
    backgroundColor: '#f6f6f6'
  },
  titleImg: {
    width: scaleSize(384),
    height: scaleSize(70)
  },
  one_description: {
    color: '#FF5959'
  },
  two_description: {
    color: '#FF5959'
  }
});

export const home_F_2_2_4_4Style = StyleSheet.create({
  container: {},
  title: {
    width: '100%',
    height: scaleSize(70),
    backgroundColor: '#f6f6f6'
  },
  titleImg: {
    width: scaleSize(384),
    height: scaleSize(70)
  },
  one_description: {
    color: '#D663E1'
  },
  two_description: {
    color: '#D663E1'
  }
});

export const home_F_2_4_4Style = StyleSheet.create({});

const home_recommend_goodsWidth = deviceWidth / 2 - 2;
export const home_recommendStyle = StyleSheet.create({
  container: {
    backgroundColor: '#F0F2F5'
  },
  title: {
    width: '100%',
    height: scaleSize(42),
    marginTop: scaleSize(28),
    marginBottom: scaleSize(28),
    paddingLeft: scaleSize(10),
    paddingRight: scaleSize(10)
  },
  titleCon: {
    zIndex: 2,
    padding: scaleSize(20),
    backgroundColor: '#F0F2F5'
  },
  titleSplit: {
    position: 'absolute',
    top: scaleSize(20),
    left: scaleSize(10),
    zIndex: 1,
    width: '100%',
    height: scaleSize(2),
    backgroundColor: '#dbdbdb'
  },
  titleImg: {
    width: scaleSize(26),
    height: scaleSize(26),
    marginRight: scaleSize(20)
  },
  titleText: {
    fontSize: scaleSize(28),
    color: '#848689'
  },
  itemBox: {
    width: '50%',
    paddingBottom: scaleSize(8)
  },
  leftItem: {
    paddingRight: scaleSize(4)
  },
  rightItem: {
    paddingLeft: scaleSize(4)
  },
  itemCon: {
    height: scaleSize(580),
    backgroundColor: '#fff'
  },
  goodsImg: {
    width: home_recommend_goodsWidth,
    height: home_recommend_goodsWidth
  },
  activityIcon: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: scaleSize(60),
    height: scaleSize(60)
  },
  summary: {
    padding: scaleSize(6)
  },
  textImg: {
    width: scaleSize(94),
    height: scaleSize(26),
    marginRight: scaleSize(8),
    position: 'absolute',
    left: scaleSize(6),
    top: scaleSize(12)
  },
  description: {
    color: '#232326'
  },
  moneyIcon: {
    color: '#f23030',
    marginLeft: scaleSize(6)
  },
  price1: {
    fontSize: scaleSize(32),
    color: '#f23030'
  },
  price2: {
    color: '#f23030'
  },
  activityText: {
    fontSize: scaleSize(20),
    color: '#f23030',
    borderWidth: scaleSize(2),
    borderColor: '#f23030',
    marginLeft: scaleSize(20),
    paddingTop: scaleSize(4),
    paddingLeft: scaleSize(4)
  },
  lookAlike: {
    position: 'absolute',
    right: scaleSize(6),
    top: 0,
    borderWidth: scaleSize(2),
    borderColor: '#efefef',
    paddingTop: scaleSize(6),
    paddingLeft: scaleSize(12),
    paddingRight: scaleSize(8)
  },
  plusPrice: {
    marginTop: scaleSize(10),
    fontSize: scaleSize(26),
    color: '#232326',
    marginLeft: scaleSize(6)
  },
  plusImg: {
    position: 'absolute',
    right: -scaleSize(60),
    top: scaleSize(12),
    width: scaleSize(56),
    height: scaleSize(18)
  }
});

// 分类
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