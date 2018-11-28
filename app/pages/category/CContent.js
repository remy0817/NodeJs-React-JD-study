/**
 * @filename CContent.js
 * @authors remy
 * @creatTime 2018-08-09 12:39:57
 * @description 分类页右侧滚动内容
 * @version 0.0.1
 */

import React, { Component } from 'react';
import { ScrollView, View, Text, Image } from 'react-native';

import { commonStyle, category_contentStyle } from '../../styles';

let styles = category_contentStyle;

export default class CContent extends Component {

  // 二级分类
  _getItemView_2 = childData => {
    return (
      <View key={childData.id} style={styles.item}>
        <Image style={styles.itemImg} source={{uri: childData.url}} />
        <Text style={styles.itemText}>{childData.text}</Text>
      </View>
    );
  }

  // 一级分类
  _getItemView_1 = itemData => {
    return (
      <View key={itemData.id} style={styles.categoryBox}>
        <View>
          <Text style={styles.title}>{itemData.title}</Text>
        </View>
        <View style={styles.itemBox}>
          {
            itemData.list.map(child => {
              return this._getItemView_2(child);
            })
          }
        </View>
      </View>
    );
  }

  render(){
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {
            this.props.dataList.map(item => {
              return this._getItemView_1(item);
            })
          }
        </ScrollView>
      </View>
    );
  }
}