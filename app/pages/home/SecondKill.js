/**
 * @filename SecondKill.js
 * @authors remy
 * @creatTime 2018-08-07 13:53:47
 * @description 首页秒杀层
 * @version 0.0.1
 */

import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

import { getDateItemValue, dateFormat, MobileDate } from '../../utils/time';

import { deviceWidth, scaleSize } from '../../styles/screenUtil';
import { commonStyle } from '../../styles';
import { home_floorStyle, home_secondKill_item_width } from '../../styles/home';

let styles = home_floorStyle;
let itemWidth = home_secondKill_item_width;

class KillItem extends Component {
  render(){
    return (
      <View style={styles.secondKill_item}>
        <Image style={styles.secondKill_img} source={{uri: this.props.url}} />
        <View style={[commonStyle.rowAlign, styles.secondKill_cPriceBox]}>
          <Text style={styles.secondKill_dollar}>￥</Text>
          <Text style={styles.secondKill_cPrice}>{this.props.currentPrice}</Text>
        </View>
        <Text style={styles.secondKill_oPrice}>{'￥' + this.props.originPrice}</Text>
      </View>
    );
  }
}

const _countdown = 2 * 60 * 60 * 1000; // 倒计时2小时

export default class SecondKill extends Component {

  state = {
    hour: '00',
    minute: '00',
    second: '00',
    name: '点场',
    marginLeft: 0
  }

  _getTime = () => {
    let hour = getDateItemValue(new Date(), 'HH').text;
    hour = Number(hour);
    return hour % 2 === 1 ? hour - 1 : hour;
  }

  _getText = (num) => {
    return num < 10 ? '0' + num : num;
  }

  _updateTime = (surplusTime) => {
    let hour = Math.floor(surplusTime / 60 / 60 / 1000);
    let minute = Math.floor((surplusTime - hour * 60 * 60 * 1000) / 60 / 1000);
    let second = Math.floor((surplusTime - hour * 60 * 60 * 1000 - minute * 60 * 1000) / 1000);
    this.setState({
      hour: this._getText(hour),
      minute: this._getText(minute),
      second: this._getText(second)
    });
  }

  _startup(){
    let hour = this.props.time || this._getTime();
    let startTimeStr = dateFormat('yyyy-MM-dd', new Date()) + ' ' + (hour + 2) +':00:00';
    let startTime = new MobileDate(startTimeStr);
    this.setState({name: hour + '点场'});
    let nowTime = Date.now();
    let surplusTime = Date.parse(startTime) - nowTime;
    if(surplusTime > 0){
      let timer = setInterval(() => {
        surplusTime -= 1 * 1000;
        if(surplusTime > 0){
          this._updateTime(surplusTime);
        }else{
          clearInterval(timer);
          this._startup();
        }
      }, 1000);
    }
  }

  // _startX = 0;

  // _updateMarginLeft = (event) => {
  //   let changeX = event.nativeEvent.pageX - _startX;
  //   let marginLeft = this.state.marginLeft + changeX;
  //   if(changeX >= 0){
  //     marginLeft = Math.min(marginLeft, 0);
  //   }else{
  //     marginLeft = Math.max(marginLeft, -1 * (this.props.dataList.length * itemWidth + scaleSize(10) * 2) + deviceWidth - scaleSize(40));
  //   }
  //   this.setState({
  //     marginLeft: marginLeft
  //   });
  // }

  // _startMove = (event) => {
  //   _startX = event.nativeEvent.pageX;
  //   return true;
  // }

  // _move = (event) => {
  //   this._updateMarginLeft(event);
  //   _startX = event.nativeEvent.pageX;
  // }

  // _endMove = (event) => {
  //   this._updateMarginLeft(event);
  // }

  componentDidMount(){
    this._startup();
  }

  render(){
    return (
      <View style={[styles.container, styles.secondKill]}>
        <View style={[styles.secondKill_head, commonStyle.rowAlign]}>
          <Text style={styles.secondKill_title}>京东秒杀</Text>
          <Text style={styles.secondKill_name}>{this.state.name}</Text>
          <View style={[commonStyle.rowAlign, styles.secondKill_timeBox]}>
            <Text style={styles.secondKill_time}>{this.state.hour}</Text>
            <Text style={styles.secondKill_timeSplit}>:</Text>
            <Text style={styles.secondKill_time}>{this.state.minute}</Text>
            <Text style={styles.secondKill_timeSplit}>:</Text>
            <Text style={styles.secondKill_time}>{this.state.second}</Text>
          </View>
          <View style={[commonStyle.rowAlign, styles.secondKill_more]}>
            <Text style={styles.secondKill_moreText}>更多秒杀</Text>
            <Image
              style={styles.secondKill_icon_arrow}
              source={{uri: 'https://st.360buyimg.com/m/images/index/arrow_rt.png'}} />
          </View>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} alwaysBounceHorizontal={true}>
            {
              this.props.dataList.map((item, i, arr) => {
                return (
                  <KillItem
                    key={item.id}
                    url={item.url}
                    currentPrice={item.currentPrice}
                    originPrice={item.originPrice}>
                    </KillItem>
                )
              })
            }
        </ScrollView>
      </View>
    );

    // return (
    //   <View style={[styles.container, styles.secondKill]}>
    //     <View style={[styles.secondKill_head, commonStyle.rowAlign]}>
    //       <Text style={styles.secondKill_title}>京东秒杀</Text>
    //       <Text style={styles.secondKill_name}>{this.state.name}</Text>
    //       <View style={[commonStyle.rowAlign, styles.secondKill_timeBox]}>
    //         <Text style={styles.secondKill_time}>{this.state.hour}</Text>
    //         <Text style={styles.secondKill_timeSplit}>:</Text>
    //         <Text style={styles.secondKill_time}>{this.state.minute}</Text>
    //         <Text style={styles.secondKill_timeSplit}>:</Text>
    //         <Text style={styles.secondKill_time}>{this.state.second}</Text>
    //       </View>
    //       <View style={[commonStyle.rowAlign, styles.secondKill_more]}>
    //         <Text style={styles.secondKill_moreText}>更多秒杀</Text>
    //         <Image
    //           style={styles.secondKill_icon_arrow}
    //           source={{uri: 'https://st.360buyimg.com/m/images/index/arrow_rt.png'}} />
    //       </View>
    //     </View>
    //     <View onStartShouldSetResponder={this._startMove} onResponderMove={this._move} onResponderRelease={this._endMove}>
    //       <View style={[
    //         commonStyle.rowAlign,
    //         {
    //           width: this.props.dataList.length * itemWidth + scaleSize(10) * 2,
    //           marginLeft: this.state.marginLeft,
    //           paddingLeft: scaleSize(10),
    //           paddingRight: scaleSize(10)
    //         }
    //           ]}>
    //         {
    //           this.props.dataList.map((item, i, arr) => {
    //             return (
    //               <KillItem
    //                 key={item.id}
    //                 url={item.url}
    //                 currentPrice={item.currentPrice}
    //                 originPrice={item.originPrice}>
    //                 </KillItem>
    //             )
    //           })
    //         }
    //       </View>
    //     </View>
    //   </View>
    // );
  }
}