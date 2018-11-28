/**
 * @filename F_2_2_4.js
 * @authors remy
 * @creatTime 2018-08-10 16:48:22
 * @description 楼层模式3：50%*2 + 50%*2 + 25%*4
 * @version 0.0.1
 */

import React, { Component } from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';

import { commonStyle, home_F_2_2_4Style } from '../../styles';

import OneItem from './OneItem';
import TwoItem from './TwoItem';

let styles = home_F_2_2_4Style;

export default class F_2_2_4 extends Component {
  constructor(){
    super();
  }

  render(){
    return (
      <View style={styles.container}>
      </View>
    );
  }
}