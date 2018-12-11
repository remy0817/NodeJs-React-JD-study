/**
 * @filename index.js
 * @authors remy
 * @creatTime 2018-08-03 15:53:08
 * @description 首页
 * @version 0.0.1
 */

import React, { Component } from 'react';
import { ScrollView, View, Text, Image } from 'react-native';

import navData from '../../config/nav';

import Header from './Header';
import Banner from './Banner';
import QuickNav from './QuickNav';
import ScrollNews from './ScrollNews';
import Graphic from './Graphic';
import SecondKill from './SecondKill';
import F_2_4 from './F_2_4';
import F_4N from './F_4N';
import F_2_2_4 from './F_2_2_4';
import F_2_2_4_4 from './F_2_2_4_4';
import F_2_4_4 from './F_2_4_4';
import Recommend from './Recommend';

import { handleErr } from '../../api/common';
import * as api from '../../api/home';

import { commonStyle } from '../../styles';
import { home_bannerHeight } from '../../styles/home';

export default class Home extends Component {
  
  static navigationOptions = {
    tabBarLabel: '首页',
    tabBarIcon: ({focused}) => {
      if(focused){
        return (
          // <Image source={require('../../assets/nav_icon_home_active.png')} />
          // <Image source={{uri: baseIcon_actived}} />
          <Image style={commonStyle.tabBar}
            source={{uri: navData.home.focusedUrl}} />
        );
      }
      return (
        // <Image source={require('../../assets/nav_icon_home.png')} />
        // <Image source={{uri: baseIcon}} />
        <Image style={commonStyle.tabBar}
          source={{uri: navData.home.iconUrl}} />
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
    data_floor5: {titleImg: '', list: []},
    recommend: []
  };

  _updateBgColor = opacity => {
    this.setState({
      headerBgColor: 'rgba(222,24,27,'+ opacity +')'
    });
  };


  _handleScrollOffset = event => {
    const e = event.nativeEvent;
    const y = e.contentOffset.y;
    this._updateBgColor(y / home_bannerHeight);
    // 如果拖拽值抵达底部，且当前的scrollview高度大于屏幕layoutMeasurement高度，则加载更多
    const num = e.contentSize.height - e.layoutMeasurement.height - y;
    if(e.contentSize.height > e.layoutMeasurement.height && num <= 0){
      api.getRecommend()
      .then(res => {
        this.setState({
          recommend: this.state.recommend.concat(res)
        });
      })
      .catch(err => handleErr(err));
    }
  };

  componentWillMount(){
    const data = api.getData();
    this.setState({
      secondKillData: data.secondKillData,
      data_floor1: data.data_floor1,
      data_floor2: data.data_floor2,
      data_floor3: data.data_floor3,
      data_floor4: data.data_floor4,
      recommend: data.recommend
    });
  }

  componentDidMount(){}

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
          <F_4N titleImg={this.state.data_floor2.titleImg} dataList={this.state.data_floor2.list}></F_4N>
          <F_2_2_4 titleImg={this.state.data_floor3.titleImg} dataList={this.state.data_floor3.list}></F_2_2_4>
          <F_2_2_4_4 titleImg={this.state.data_floor4.titleImg} dataList={this.state.data_floor4.list}></F_2_2_4_4>
          <Recommend dataList={this.state.recommend}></Recommend>
        </ScrollView>
        <Header style={{backgroundColor: this.state.headerBgColor}} placeholder="dell台式机" navigation={this.props.navigation}></Header>
      </View>
    );
  }
          // <F_2_4_4 dataList={[]}></F_2_4_4>
}