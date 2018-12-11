/**
 * @filename CMenu.js
 * @authors remy
 * @creatTime 2018-08-09 12:36:34
 * @description 分类页左侧滚动菜单
 * @version 0.0.1
 */

import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableWithoutFeedback } from 'react-native';

import { commonStyle } from '../../styles';
import { category_menuStyle } from '../../styles/category';

let styles = category_menuStyle;

export default class CMenu extends Component {

  state = {
    activedId: ''
  };

  _select = areaId => {
    return () => {
      this.setState({
        activedId: areaId
      });
      this.props.toggleMenu(areaId);
    }
  };

  _getItemStyle = itemData => {
    if(this.state.activedId === itemData.areaId || (this.state.activedId === '' && itemData.defaultActived)) {
      return {color: '#e93b3d', bgColor: '#fff'};
    }else{
      return {color: '#333', bgColor: '#f8f8f8'};
    }
  };

  _getItemView = itemData => {
    return (
      <TouchableWithoutFeedback key={itemData.areaId} onPress={this._select(itemData.areaId)}>
        <View style={[styles.item, {backgroundColor: this._getItemStyle(itemData).bgColor}]}>
          <Text style={{color: this._getItemStyle(itemData).color}}>{itemData.areaName}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  render(){
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {
            this.props.dataList.map(item => {
              return this._getItemView(item);
            })
          }
        </ScrollView>
      </View>
    );
  }
}