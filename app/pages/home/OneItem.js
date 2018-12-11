/**
 * @filename OneItem.js
 * @authors remy
 * @creatTime 2018-08-10 16:17:21
 * @description 占位25%的单项
 * @version 0.0.1
 */

import React, { Component } from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';

import { commonStyle } from '../../styles';
import { home_oneItemStyle } from '../../styles/home';

let styles = home_oneItemStyle;

export default class OneItem extends Component {
  constructor(){
    super();
  }

  render(){
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback style={styles.box}>
          <View>
            <Text style={[styles.title, this.props.titleStyle || {}]}>{this.props.title}</Text>
            <Text style={[styles.description, this.props.descriptionStyle || {}]}>{this.props.description}</Text>
            <Image style={styles.img} source={{uri: this.props.imgUrl}} />
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}