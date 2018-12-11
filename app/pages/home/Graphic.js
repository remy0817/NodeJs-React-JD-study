/**
 * @filename Graphic.js
 * @authors remy
 * @creatTime 2018-08-07 09:03:12
 * @description 首页图解层
 * @version 0.0.1
 */

import React, { Component } from 'react';
import { View, Image } from 'react-native';

import { commonStyle, } from '../../styles';
import { home_floorStyle } from '../../styles/home';

let styles = home_floorStyle;

export default () => {
  return (
    <View style={[commonStyle.flex, commonStyle.rowAlign, styles.container, styles.graphic]}>
      <Image style={styles.graphic_img1} source={{uri: 'https://m.360buyimg.com/mobilecms/s374x240_jfs/t22669/2/1068468129/61215/94ecd235/5b4ef440N90d4cec0.jpg!q70.jpg.dpg'}} />
      <Image style={styles.graphic_img2} source={{uri: 'https://m.360buyimg.com/mobilecms/s186x240_jfs/t21574/276/2249647054/33106/eeb200fe/5b4ef44bN34f5c008.jpg!q70.jpg.dpg'}} />
      <Image style={styles.graphic_img2} source={{uri: 'https://m.360buyimg.com/mobilecms/s186x240_jfs/t22876/289/1260100934/110456/a7972b81/5b5941f0Ncf55eacb.jpg!q70.jpg.dpg'}} />
    </View>
  );
}