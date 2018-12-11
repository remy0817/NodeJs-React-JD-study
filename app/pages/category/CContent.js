/**
 * @filename CContent.js
 * @authors remy
 * @creatTime 2018-08-09 12:39:57
 * @description 分类页右侧滚动内容
 * @version 0.0.1
 */

import React, { Component } from 'react';
import { ScrollView, View, Text, Image } from 'react-native';

import { commonStyle } from '../../styles';
import { category_contentStyle } from '../../styles/category';

let styles = category_contentStyle;

export default class CContent extends Component {

  // 二级分类
  _getItemView_2 = childData => {
    return (
      <View key={childData.keywordId} style={styles.item}>
        <Image style={styles.itemImg} source={{uri: `https:${childData.imageUrl}`}} />
        <Text style={styles.itemText}>{childData.keyword}</Text>
      </View>
    );
  }

  // 一级分类
  _getItemView_1 = itemData => {
    return (
      <View key={itemData.keywordId} style={styles.categoryBox}>
        <View>
          <Text style={styles.title}>{itemData.keyword}</Text>
        </View>
        <View style={styles.itemBox}>
          {
            itemData.level2words.map(child => {
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
        <ScrollView
         ref={scroll => {
          if(scroll && this.props.goTop){
            scroll.scrollTo({y: 0});
          }
         }}
         showsVerticalScrollIndicator={false}>
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