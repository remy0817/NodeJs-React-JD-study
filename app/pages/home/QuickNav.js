/**
 * @filename QuickNav.js
 * @authors remy
 * @creatTime 2018-08-06 19:55:49
 * @description 首页快捷导航栏
 * @version 0.0.1
 */

import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';

import { commonStyle } from '../../styles';
import { home_quickNavStyle } from '../../styles/home';

let styles = home_quickNavStyle;

export default class QuickNav extends Component {
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.item}>
          <Image style={styles.itemIcon} source={{uri: 'https://m.360buyimg.com/mobilecms/jfs/t16912/18/2046755333/11079/5d93a046/5ae41d1aN7c1bb190.png'}} />
          <Text>京东超市</Text>
        </View>
        <View style={styles.item}>
          <Image style={styles.itemIcon} source={{uri: 'https://m.360buyimg.com/mobilecms/jfs/t21658/347/221358098/7461/f86e6f74/5b03b170Nc9e0ec7c.png'}} />
          <Text>全球购</Text>
        </View>
        <View style={styles.item}>
          <Image style={styles.itemIcon} source={{uri: 'https://m.360buyimg.com/mobilecms/jfs/t18865/90/1804471517/14538/72c79ba/5ad87b67N1ebcb69b.png'}} />
          <Text>京东服饰</Text>
        </View>
        <View style={styles.item}>
          <Image style={styles.itemIcon} source={{uri: 'https://m.360buyimg.com/mobilecms/jfs/t17725/156/1767366877/17404/f45d418b/5ad87bf0N66c5db7c.png'}} />
          <Text>京东生鲜</Text>
        </View>
        <View style={styles.item}>
          <Image style={styles.itemIcon} source={{uri: 'https://m.360buyimg.com/mobilecms/jfs/t16990/157/2001547525/17770/a7b93378/5ae01befN2494769f.png'}} />
          <Text>京东到家</Text>
        </View>
        <View style={styles.item}>
          <Image style={styles.itemIcon} source={{uri: 'https://m.360buyimg.com/mobilecms/jfs/t18454/342/2607665324/6406/273daced/5b03b74eN3541598d.png'}} />
          <Text>充值缴费</Text>
        </View>
        <View style={styles.item}>
          <Image style={styles.itemIcon} source={{uri: 'https://m.360buyimg.com/mobilecms/jfs/t22228/270/207441984/11564/88140ab7/5b03fae3N67f78fe3.png'}} />
          <Text>9.9元拼</Text>
        </View>
        <View style={styles.item}>
          <Image style={styles.itemIcon} source={{uri: 'https://m.360buyimg.com/mobilecms/jfs/t19495/200/1823004232/14065/ca00ab2c/5ad87cf5N4ad8e6f1.png'}} />
          <Text>领券</Text>
        </View>
        <View style={styles.item}>
          <Image style={styles.itemIcon} source={{uri: 'https://m.360buyimg.com/mobilecms/jfs/t16828/63/2653634926/5662/d18f6fa1/5b03b779N5c0b196f.png'}} />
          <Text>赚钱</Text>
        </View>
        <View style={styles.item}>
          <Image style={styles.itemIcon} source={{uri: 'https://m.360buyimg.com/mobilecms/jfs/t21481/263/412160889/15938/4246b4f8/5b0cea29N8fb2865f.png'}} />
          <Text>全部</Text>
        </View>
      </View>
    );
  }
}