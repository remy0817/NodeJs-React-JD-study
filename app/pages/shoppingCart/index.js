/**
 * @filename index.js
 * @authors remy
 * @creatTime 2018-08-06 10:22:48
 * @description 购物车
 * @version 0.0.1
 */

import React, { Component } from 'react';
import { View, Text, Image, AsyncStorage } from 'react-native';

import { commonStyle } from '../../styles';

export default class Home extends Component {
  
  static navigationOptions = {
    tabBarLabel: '购物车',
    tabBarIcon: ({focused}) => {
      if(focused){
        return (
          // <Image source={require('../../assets/nav_icon_home_active.png')} />
          // <Image source={{uri: baseIcon_actived}} />
          <Image style={commonStyle.tabBar}
            source={{uri: 'https://m.360buyimg.com/mobilecms/jfs/t18583/69/717127328/4407/5e47882b/5aa10ceaN649eec12.png'}} />
        );
      }
      return (
        // <Image source={require('../../assets/nav_icon_home.png')} />
        // <Image source={{uri: baseIcon}} />
        <Image style={commonStyle.tabBar}
          source={{uri: 'https://m.360buyimg.com/mobilecms/jfs/t18583/69/717127328/4407/5e47882b/5aa10ceaN649eec12.png'}} />
      );
    }
  };

  state = {};

  getUserInfo(){
    fetch('http://10.10.254.26:3000/user/92617f90-f6ca-11e8-aa53-89997c73e8b5', {
      headers: {
        'Authorization': 'Bearer ' + AsyncStorage.token
      }
    })
    .then(res => res.json())
    .then(res => {
      alert('success');
    }).catch(err => alert(err));
  }

  componentWillMount(){
  }

  componentDidMount(){
  }

  render(){
    return (
      <View>
        <Text>购物车</Text>
      </View>
    );
  }
}