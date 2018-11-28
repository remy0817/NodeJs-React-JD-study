/**
 * @filename F_4_4.js
 * @authors remy
 * @creatTime 2018-08-10 16:46:48
 * @description 楼层模式2：25%*4 + 25%*4
 * @version 0.0.1
 */

import React, { Component } from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';

import { commonStyle, home_F_4_4Style } from '../../styles';

import OneItem from './OneItem';

let styles = home_F_4_4Style;

export default class F_4_4 extends Component {
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