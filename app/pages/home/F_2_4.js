/**
 * @filename F_2_4.js
 * @authors remy
 * @creatTime 2018-08-10 16:42:13
 * @description 楼层模式1：50%*2 + 25%*4
 * @version 0.0.1
 */

import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import { commonStyle } from '../../styles';
import { home_F_2_4Style } from '../../styles/home';

import OneItem from './OneItem';
import TwoItem from './TwoItem';

let styles = home_F_2_4Style;

export default class F_2_4 extends Component {
  constructor(){
    super();
  }

  render(){
    return (
      <View style={[styles.container, commonStyle.flexCenter]}>
        <View style={[commonStyle.flexCenter, styles.title]}>
          <Image style={styles.titleImg} source={{uri: this.props.titleImg}} />
        </View>
        <View style={[commonStyle.rowAlign, commonStyle.flexWrap]}>
          {
            this.props.dataList.map(item => {
              if(item.type === 'two'){
                return (<TwoItem key={item.id} titleStyle={styles.two_title} title={item.title} descriptionStyle={styles.two_description} description={item.description} imgUrls={item.imgUrls}></TwoItem>);
              }else{
                return (<OneItem key={item.id} title={item.title} descriptionStyle={styles.one_description} description={item.description} imgUrl={item.imgUrl}></OneItem>);
              }
            })
          }
        </View>
      </View>
    );
  }
}