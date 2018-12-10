/**
 * @authors remy
 * @creatTime 2018-08-10 16:46:48
 * @description 楼层模式2：25%*4 + 25%*4
 * @version 0.0.1
 */

import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import { commonStyle, home_F_4NStyle } from '../../styles';

import OneItem from './OneItem';

let styles = home_F_4NStyle;

export default class F_4N extends Component {
  constructor(){
    super();
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={[commonStyle.flexCenter, styles.title]}>
          <Image style={styles.titleImg} source={{uri: this.props.titleImg}} />
        </View>
        <View style={[commonStyle.rowAlign, commonStyle.flexWrap]}>
          {
            this.props.dataList.map(item => {
              return (<OneItem key={item.id} titleStyle={styles.one_title} title={item.title} description={item.description} imgUrl={item.imgUrl}></OneItem>);
            })
          }
        </View>
      </View>
    );
  }
}