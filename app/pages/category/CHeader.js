/**
 * @filename CHeader.js
 * @authors remy
 * @creatTime 2018-08-09 12:24:10
 * @description 分类页头部
 * @version 0.0.1
 */

import React, { Component } from 'react';
import { View, Image, TouchableWithoutFeedback, Text } from 'react-native';

import { commonStyle } from '../../styles';
import { category_headerStyle } from '../../styles/category';

let styles = category_headerStyle;

let backIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAYUExURUdwTF1famFhal1fal1fal5ga2FhcF1falIa7fwAAAAHdFJOUwDxN1zamie3ypN1AAAAP0lEQVQoz2NgGAjA5GiAKahYLoCpUByLoGJ5uQEWhcXDRiGDOxaFDOXlAQzEqcRqJlbbh4VSAeLSEvZURyUAAGHYICnlu7kGAAAAAElFTkSuQmCC',
  searchIcon = 'data:image/png;base64,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',
  shortcutBarIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAAAMBAMAAAAzCuYOAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAPUExURUdwTF1fal1fal1famZmcA0W5H0AAAAFdFJOUwD+w2UZS9p4HgAAAEpJREFUGNNjYGBWFDJgQACsXBZFQUEhB7ggdi6TIBAowEWxcw1BlDBcFDtXEUQJwUWxcwXBAC6KnUuUIqKsI8rhRAUBUYFJTLQAAIISEL00zytiAAAAAElFTkSuQmCC';

export default class CHeader extends Component {

  _goBack = () => {
    this.props.navigation.goBack();
  };

  render(){
    return (
      <View style={[styles.container, commonStyle.flexCenter, commonStyle.rowAlign]}>
        <TouchableWithoutFeedback onPress={this._goBack}>
          <Image style={styles.backIcon} source={{uri: backIcon}} />
        </TouchableWithoutFeedback>
        <View style={[commonStyle.flexGrow, commonStyle.rowAlign, styles.searchBox]}>
          <Image style={styles.searchIcon} source={{uri: searchIcon}} />
          <Text style={styles.placeholder}>箱包超级品类日抢299减150券</Text>
        </View>
        <Image style={styles.shortcutBarIcon} source={{uri: shortcutBarIcon}} />
      </View>
    );
  }
}