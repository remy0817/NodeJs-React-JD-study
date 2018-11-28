/**
 * @filename Banner.js
 * @authors remy
 * @creatTime 2018-08-06 17:33:47
 * @description 轮播图
 * @version 0.0.1
 */

import React, { Component } from 'react';
import { View, Image } from 'react-native';
import Swiper from 'react-native-swiper';

import { commonStyle, home_bannerStyle } from '../../styles';

let styles = home_bannerStyle;

export default class Banner extends Component {
  render(){
    return (
      <Swiper
        style={styles.container}
        autoplay={true}
        paginationStyle={styles.paginationStyle}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}>
        <View style={styles.item}>
          <Image style={styles.bannerImg} source={{uri: 'https://m.360buyimg.com/mobilecms/s750x366_jfs/t23170/205/1472512711/199212/778f56e9/5b612dceNdba2464e.jpg!cr_1125x549_0_72!q70.jpg.dpg'}} />
        </View>
        <View>
          <Image style={styles.bannerImg} source={{uri: 'https://img1.360buyimg.com/da/s750x366_jfs/t20821/249/2491014452/167151/ac475b7d/5b594069N582c4622.jpg!cr_1125x549_0_72.dpg'}} />
        </View>
        <View>
          <Image style={styles.bannerImg} source={{uri: 'https://img1.360buyimg.com/da/s750x366_jfs/t23911/136/1672673861/146744/418920ab/5b67c6bbN37c6bd8a.jpg!cr_1125x549_0_72.dpg'}} />
        </View>
        <View>
          <Image style={styles.bannerImg} source={{uri: 'https://m.360buyimg.com/mobilecms/s750x366_jfs/t23389/341/1459755771/98229/bdf1b674/5b619766Nb8e94478.jpg!cr_1125x549_0_72!q70.jpg.dpg'}} />
        </View>
        <View>
          <Image style={styles.bannerImg} source={{uri: 'https://img1.360buyimg.com/da/s750x366_jfs/t23443/304/1495005566/373041/c04d2c54/5b617320N49e365d6.jpg!cr_1125x549_0_72.dpg'}} />
        </View>
        <View>
          <Image style={styles.bannerImg} source={{uri: 'https://m.360buyimg.com/mobilecms/s750x366_jfs/t23644/161/1651175524/194576/1dac3f91/5b6524fbNf0dee4c8.jpg!cr_1125x549_0_72!q70.jpg.dpg'}} />
        </View>
      </Swiper>
    );
  }
}