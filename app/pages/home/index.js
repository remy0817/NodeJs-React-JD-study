/**
 * @filename index.js
 * @authors remy
 * @creatTime 2018-08-03 15:53:08
 * @description 首页
 * @version 0.0.1
 */

import React, { Component } from 'react';
import { ScrollView, View, Text, Image } from 'react-native';

import Header from './Header';
import Banner from './Banner';
import QuickNav from './QuickNav';
import ScrollNews from './ScrollNews';
import Graphic from './Graphic';
import SecondKill from './SecondKill';
import F_2_4 from './F_2_4';
import F_4_4 from './F_4_4';
import F_2_2_4 from './F_2_2_4';
import F_2_2_4_4 from './F_2_2_4_4';
import F_2_4_4 from './F_2_4_4';

import { commonStyle, home_bannerHeight } from '../../styles';

export default class Home extends Component {
  
  static navigationOptions = {
    tabBarLabel: '首页',
    tabBarIcon: ({focused}) => {
      if(focused){
        return (
          // <Image source={require('../../assets/nav_icon_home_active.png')} />
          // <Image source={{uri: baseIcon_actived}} />
          <Image style={commonStyle.tabBar}
            source={{uri: 'https://m.360buyimg.com/mobilecms/jfs/t15145/137/2502885754/3106/de5e0b14/5aa10cd2N46f18ce6.png'}} />
        );
      }
      return (
        // <Image source={require('../../assets/nav_icon_home.png')} />
        // <Image source={{uri: baseIcon}} />
        <Image style={commonStyle.tabBar}
          source={{uri: 'https://m.360buyimg.com/mobilecms/jfs/t18526/211/696109898/3876/a61be82c/5aa10cd2N1318ac50.png'}} />
      );
    }
  };

  state = {
    headerBgColor: 'rgba(222,24,27,0)',
    secondKillData: [],
    data_floor1: {titleImg: '', list: []},
    data_floor2: {titleImg: '', list: []},
    data_floor3: {titleImg: '', list: []},
    data_floor4: {titleImg: '', list: []},
    data_floor5: {titleImg: '', list: []}
  };

  _updateBgColor = opacity => {
    this.setState({
      headerBgColor: 'rgba(222,24,27,'+ opacity +')'
    });
  };


  _handleScrollOffset = e => {
    let y = e.nativeEvent.contentOffset.y;
    this._updateBgColor(y / home_bannerHeight);
  };

  componentDidMount(){
    // debugger
    // this
    this.setState({
      secondKillData: [
        {id: 1, url: 'https://m.360buyimg.com/mobilecms/s140x140_jfs/t20323/18/2201783733/207605/6459fb16/5b4c3e04N486d8508.jpg!q70.jpg.dpg', currentPrice: 19.9, originPrice: 65},
        {id: 2, url: 'https://m.360buyimg.com/mobilecms/s140x140_jfs/t23665/346/1495119858/158590/5b8e59d/5b61d548N2a536764.jpg!q70.jpg.dpg', currentPrice: 25, originPrice: 79},
        {id: 3, url: 'https://m.360buyimg.com/mobilecms/s140x140_jfs/t20716/236/2645858696/158195/3baa52c0/5b5eb513N2a86c998.jpg!q70.jpg.dpg', currentPrice: 168, originPrice: 560},
        {id: 4, url: 'https://m.360buyimg.com/mobilecms/s140x140_jfs/t21706/25/2579285334/191279/f3c71e85/5b5dc19cN5d94780f.jpg!q70.jpg.dpg', currentPrice: 136, originPrice: 450},
        {id: 5, url: 'https://m.360buyimg.com/mobilecms/s140x140_jfs/t19669/255/909662133/265258/3e37214/5ab0ac42Nbcb0c1bb.jpg!q70.jpg.dpg', currentPrice: 7.9, originPrice: 19.9},
        {id: 6, url: 'https://m.360buyimg.com/mobilecms/s220x220_jfs/t20968/184/2671740003/191821/5142399/5b602db1N071ef8c4.jpg!q70.jpg', currentPrice: 34.8, originPrice: 68},
        {id: 7, url: 'https://m.360buyimg.com/mobilecms/s220x220_jfs/t20824/191/2592999605/109656/fab6adbf/5b5edc6dNebee4536.jpg!q70.jpg', currentPrice: 1780, originPrice: 2262},
        {id: 8, url: 'https://m.360buyimg.com/mobilecms/s220x220_jfs/t23866/177/1769513552/188148/db4f7ab3/5b6915dbN8dc87ddf.jpg!q70.jpg', currentPrice: 288, originPrice: 340},
        {id: 9, url: 'https://m.360buyimg.com/mobilecms/s220x220_jfs/t2314/109/1846436732/160948/41129be4/5673ad8eN20467d76.jpg!q70.jpg', currentPrice: 3699, originPrice: 4800},
        {id: 10, url: 'https://m.360buyimg.com/mobilecms/s220x220_jfs/t24562/170/1715221953/199731/5c50e181/5b668efaNf2dc1681.jpg!q70.jpg', currentPrice: 54, originPrice: 69},
        {id: 11, url: 'https://m.360buyimg.com/mobilecms/s220x220_jfs/t25390/258/131675634/199147/aaeb06dd/5b668e98N61f31ef5.jpg!q70.jpg', currentPrice: 49.9, originPrice: 88},
        {id: 12, url: 'https://m.360buyimg.com/mobilecms/s220x220_jfs/t20641/227/2689939561/180612/d2d3d2c2/5b618cfbN4cfeaa93.jpg!q70.jpg', currentPrice: 378, originPrice: 599},
        {id: 13, url: 'https://m.360buyimg.com/mobilecms/s220x220_jfs/t24142/277/1671445445/201160/9a64cf8e/5b67aa7bN7f78e7cd.jpg!q70.jpg', currentPrice: 3799, originPrice: 4999},
        {id: 14, url: 'https://m.360buyimg.com/mobilecms/s220x220_jfs/t20992/26/2424243183/24318/36cf8cf4/5b5934b5Nd44d4b52.jpg!q70.jpg', currentPrice: 1949, originPrice: 2699},
        {id: 15, url: 'https://m.360buyimg.com/mobilecms/s220x220_jfs/t20992/26/2424243183/24318/36cf8cf4/5b5934b5Nd44d4b52.jpg!q70.jpg', currentPrice: 6579, originPrice: 7199},
        {id: 16, url: 'https://m.360buyimg.com/mobilecms/s220x220_jfs/t22687/23/1487750835/161358/b548b9ad/5b61dbcaN97b3c2fe.jpg!q70.jpg', currentPrice: 3088, originPrice: 4099},
        {id: 17, url: 'https://m.360buyimg.com/mobilecms/s220x220_jfs/t22837/220/1603267966/176282/350f0635/5b64543bN6278dfbe.jpg!q70.jpg', currentPrice: 649, originPrice: 899},
        {id: 18, url: 'https://m.360buyimg.com/mobilecms/s220x220_jfs/t21571/357/2663931464/120061/c7b6f2ec/5b6168d5N420df668.jpg!q70.jpg', currentPrice: 73.5, originPrice: 160},
        {id: 19, url: 'https://m.360buyimg.com/mobilecms/s220x220_jfs/t22618/163/1516185944/116839/734f186d/5b627e37N9d7bb743.jpg!q70.jpg', currentPrice: 3698, originPrice: 4000},
        {id: 20, url: 'https://m.360buyimg.com/mobilecms/s220x220_jfs/t23041/83/1387365449/160354/5af43f09/5b5e8c44N39bf9b3b.jpg!q70.jpg', currentPrice: 168, originPrice: 498}
      ],
      data_floor1: {
        titleImg: 'https://m.360buyimg.com/mobilecms/jfs/t5971/14/8972486772/42670/e6ced36f/598c3fdcN04406a90.jpg!q70.jpg',
        list: [
          {
            id: 1,
            type: 'two',
            title: '奇妙物语',
            description: '新奇解压小玩具儿',
            imgUrls: [
              'https://m.360buyimg.com/mobilecms/s130x130_jfs/t5707/41/4750410684/41408/f0e75bd0/595349adN1700cf41.jpg!q70.jpg.dpg',
              'https://m.360buyimg.com/mobilecms/s130x130_jfs/t17023/237/1274316936/28903/985e65a6/5ac197f6N86004659.jpg!q70.jpg.dpg'
              ]
          },
          {
            id: 2,
            type: 'two',
            title: '学院少女',
            description: '青春潮搭配',
            imgUrls: [
              'https://m.360buyimg.com/mobilecms/s130x130_jfs/t20899/91/2374609865/510140/af817422/5b51a110Nd0d72871.jpg!q70.jpg.dpg',
              'https://m.360buyimg.com/mobilecms/s130x130_jfs/t21199/244/2515650373/303346/e6771b85/5b597446Nf0864667.jpg!q70.jpg.dpg'
              ]
          },
          {
            id: 3,
            type: 'one',
            title: '礼尚往来',
            description: '送礼不用愁',
            imgUrl: 'https://m.360buyimg.com/mobilecms/s130x130_jfs/t19894/150/1586361167/51981/82c90e33/5b20d546Nb7fb6a21.jpg!q70.jpg.dpg'
          },
          {
            id: 4,
            type: 'one',
            title: '相约户外',
            description: '去户外穿啥',
            imgUrl: 'https://m.360buyimg.com/mobilecms/s130x130_jfs/t18958/81/932069481/255306/7753cad0/5ab13336Naef44982.jpg!q70.jpg.dpg'
          },
          {
            id: 5,
            type: 'one',
            title: '吸睛大法',
            description: '秒变男神',
            imgUrl: 'https://m.360buyimg.com/mobilecms/s130x130_jfs/t23299/94/1761613749/248623/90c7df5b/5b69bc70Nd8c16c74.jpg!q70.jpg.dpg'
          },
          {
            id: 6,
            type: 'one',
            title: '欧美范儿',
            description: '经典必备款',
            imgUrl: 'https://m.360buyimg.com/mobilecms/s130x130_jfs/t18958/81/932069481/255306/7753cad0/5ab13336Naef44982.jpg!q70.jpg.dpg'
          }
        ]
      },
      data_floor2: [],
      data_floor3: [],
      data_floor4: [],
      data_floor5: []
    });
  }

  // 绝对定位的Header放在ScrollView之前时布局中位于其下层，不显示；
  // 绝对定位的Header放在ScrollView之后时布局中位于其上层，显示
  render(){
    return (
      <View style={commonStyle.flex}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={true}
          onScroll={this._handleScrollOffset}>
          <Banner></Banner>
          <QuickNav></QuickNav>
          <ScrollNews></ScrollNews>
          <Graphic></Graphic>
          <SecondKill dataList={this.state.secondKillData}></SecondKill>
          <F_2_4 titleImg={this.state.data_floor1.titleImg} dataList={this.state.data_floor1.list}></F_2_4>
        </ScrollView>
        <Header style={{backgroundColor: this.state.headerBgColor}} placeholder="dell台式机" navigation={this.props.navigation}></Header>
      </View>
    );
  }
          // <F_4_4 dataList={[]}></F_4_4>
          // <F_2_2_4 dataList={[]}></F_2_2_4>
          // <F_2_2_4_4 dataList={[]}></F_2_2_4_4>
          // <F_2_4_4 dataList={[]}></F_2_4_4>
}