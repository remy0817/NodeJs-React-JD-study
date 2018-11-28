/**
 * @filename index.js
 * @authors remy
 * @creatTime 2018-08-06 10:23:04
 * @description 个人中心
 * @version 0.0.1
 */

import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import { commonStyle } from '../../styles';

export default class Home extends Component {
  
  static navigationOptions = {
    tabBarLabel: '个人中心',
    tabBarIcon: ({focused}) => {
      if(focused){
        return (
          // <Image source={require('../../assets/nav_icon_home_active.png')} />
          // <Image source={{uri: baseIcon_actived}} />
          <Image style={commonStyle.tabBar}
            source={{uri: 'https://m.360buyimg.com/mobilecms/jfs/t18598/41/712219415/3756/7828621f/5aa10cf6Nbfbdc1af.png'}} />
        );
      }
      return (
        // <Image source={require('../../assets/nav_icon_home.png')} />
        // <Image source={{uri: baseIcon}} />
        <Image style={commonStyle.tabBar}
          source={{uri: 'https://m.360buyimg.com/mobilecms/jfs/t16849/271/702371255/4462/d55edd83/5aa10cf6Nee5122a5.png'}} />
      );
    }
  };

  state = {};

  componentDidMount(){}

  render(){
    return (
      <View>
        <Text>个人中心</Text>
      </View>
    );
  }
}