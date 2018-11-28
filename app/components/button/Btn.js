/**
 * @filename Btn.js
 * @authors remy
 * @creatTime 2018-08-03 17:54:12
 * @description 自定义按钮
 * @version 0.0.1
 */

import React, { Component } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

export default class Btn extends Component {

  constructor(){
    super();
  }

  _noop(){}

  render(){
    return (
      <TouchableOpacity
        onPress={this.props.onPress || this._noop}
        activeOpacity={this.props.activeOpacity || 0.5}
        style={this.props.style}>
        <Text style={this.props.textStyle}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}