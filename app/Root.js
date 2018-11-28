/**
 * @filename Root.js
 * @authors remy
 * @creatTime 2018-08-03 15:41:55
 * @description app入口
 * @version 0.0.1
 */

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

import LoginPage from './pages/accounts/Login';
import { TabNav } from './pages/RootPage';

const App = createStackNavigator({
    Login: {
      screen: LoginPage
    },
    Main: {
      screen: TabNav,
      navigationOptions: ({navigation}) => {
        header: null
      }
    }
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none' // 定义标题该如何渲染
});

export default App;