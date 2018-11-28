/**
 * @filename Login.js
 * @authors remy
 * @creatTime 2018-08-03 16:04:19
 * @description 登录
 * @version 0.0.1
 */

import React, { Component } from 'react';
import { View, Text, TextInput, Button, KeyboardAvoidingView } from 'react-native';

// 避免 React Native 应用中的键盘遮挡问题最简单、最容易安装使用的方法是 KeyboardAvoidingView。
// 这是一个核心组件，同时也非常简单。
// 你可以使用这段存在键盘覆盖输入框问题的代码，然后更新它，使输入框不再被覆盖。
// 你要做的第一件事是用 KeyboardAvoidView 替换 View，然后给它加一个 behavior 的 prop。
// 查看文档的话你会发现，他可以接收三个不同的值作为参数 —— height， padding， position。
// 我发现 padding 的表现是最在我意料之内的，所以我将使用它。

import Btn from '../../components/button/Btn';
import { commonStyle, loginStyle } from '../../styles';

let styles = loginStyle;

export default class Login extends Component {

  state = {};

  componentWillMount(){
    this.props.navigation.navigate('Category');
  }

  componentDidMount(){}

  _login = () => {
    // this.props.navigation.navigate('Home');
  }

  render(){
    return (
      <View style={[commonStyle.flex, commonStyle.flexCenter]}>
        <Text>登录</Text>
        <TextInput placeholder='Email' style={styles.input}
        />
        <TextInput placeholder='Username' style={styles.input}
        />
        <TextInput placeholder='Password' style={styles.input}
        />
        <TextInput placeholder='Confirm Password' style={styles.input}
        />
        <Button
          title='登录'
          width={100} height={40}
          style={{width:100,height:40}}
          onPress={this._login}>
        </Button>
        <Btn
          style={loginStyle.submitBtn}
          textStyle={loginStyle.submitBtnText}
          onPress={this._login} text='登录'>
        </Btn>
      </View>
    );
  }
}