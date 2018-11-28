/**
 * @filename TwoItem.js
 * @authors remy
 * @creatTime 2018-08-10 16:55:07
 * @description 占位50%的双项
 * @version 0.0.1
 */

import React, { Component } from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';

import { commonStyle, home_twoItemStyle } from '../../styles';

let styles = home_twoItemStyle;

export default class OneItem extends Component {
  constructor(){
    super();
  }

  render(){
    let count = 1;
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback style={styles.box}>
          <View>
            <Text style={[styles.title, this.props.titleStyle || {}]}>{this.props.title}</Text>
            <Text style={[styles.description, this.props.descriptionStyle || {}]}>{this.props.description}</Text>
            <View style={[commonStyle.rowAlign, commonStyle.flexCenter]}>
              {
                this.props.imgUrls.map((url, i) => {
                  return (<Image key={count++} style={styles.img} source={{uri: url}} />);
                })
              }
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}