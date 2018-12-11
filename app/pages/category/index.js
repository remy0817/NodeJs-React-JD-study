/**
 * @filename index.js
 * @authors remy
 * @creatTime 2018-08-06 10:21:25
 * @description 分类
 * @version 0.0.1
 */

import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import navData from '../../config/nav';

import CHeader from './CHeader';
import CMenu from './CMenu';
import CContent from './CContent';

import { commonStyle } from '../../styles';

import { isFunction } from '../../utils/type';
import { handleErr } from '../../api/common';
import * as api from '../../api/category';

export default class Category extends Component {
  
  static navigationOptions = {
    tabBarLabel: '分类',
    tabBarIcon: ({focused}) => {
      if(focused){
        return (
          // <Image source={require('../../assets/nav_icon_home_active.png')} />
          // <Image source={{uri: baseIcon_actived}} />
          <Image style={commonStyle.tabBar}
            source={{uri: navData.category.focusedUrl}} />
        );
      }
      return (
        // <Image source={require('../../assets/nav_icon_home.png')} />
        // <Image source={{uri: baseIcon}} />
        <Image style={commonStyle.tabBar}
          source={{uri: navData.category.iconUrl}} />
      );
    }
  };

  state = {
    categorysData: [],
    contentData: [],
    goTop: false
  };

  _toggleMenu = areaId => {
    this._getItemsById(areaId);
    this.setState({
      goTop: true
    });
  };

  _getCategorys = callback => {
    const data = api.getCategorys();
    this.setState({
      categorysData: data
    });
    isFunction(callback) && callback(data);
  };

  _getItemsById = async areaId => {
    const data = api.getItemsById(areaId);
    this.setState({
      contentData: data
    });
  };

  componentWillMount(){
    this._getCategorys(categorys => {
      const actived = categorys.find(item => !!item.defaultActived);
      this._getItemsById(actived.areaId);
    });
  }

  componentDidMount(){}

  render(){
    return (
      <View style={commonStyle.flex}>
        <CHeader navigation={this.props.navigation}></CHeader>
        <View style={[commonStyle.flex, commonStyle.rowAlign]}>
          <CMenu dataList={this.state.categorysData} toggleMenu={this._toggleMenu}></CMenu>
          <CContent dataList={this.state.contentData} goTop={this.state.goTop}></CContent>
        </View>
      </View>
    );
  }
}