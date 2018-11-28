/**
 * @filename ScrollNews.js
 * @authors remy
 * @creatTime 2018-08-06 20:23:55
 * @description 首页滚动新闻
 * @version 0.0.1
 */

import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import { commonStyle, home_scrollNewsStyle } from '../../styles';

let styles = home_scrollNewsStyle;

export default class ScrollNews extends Component {
  render(){
    return (
      <View style={[styles.container, commonStyle.rowAlign]}>
        <Image style={styles.img} source={{uri: 'https://st.360buyimg.com/m/images/index/jd-news-tit.png'}} />
        <Text style={styles.mark}>热</Text>
        <Text style={[styles.text, commonStyle.flex]}>5G手机来了，4G手机还有必要买吗？</Text>
        <Text style={[styles.text, styles.more]}>更多</Text>
      </View>
    );
  }
}