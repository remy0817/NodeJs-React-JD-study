/**
 * @filename Header.js
 * @authors remy
 * @creatTime 2018-08-06 15:38:01
 * @description 首页头部
 * @version 0.0.1
 */

import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';

import { commonStyle } from '../../styles';
import { home_headerStyle } from '../../styles/home';

let styles = home_headerStyle;

let baseIcon_category = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAgCAYAAABgrToAAAAAAXNSR0IArs4c6QAAAHlJREFUWAnt2LEJwDAMRFE5c2ShLOKhsp69h3ISeAI1CnyBiJvA8dwcHu7+mNmrvbWdZivMHAq4dOgW7kDt65y6fiPg1AZnt8kr7haKPAgggAACfxOIskCbKdwabaaAlw0rmhaDAAIIIIBAQYA2U8CLX2kzFcB8m/kAgGUmQShl8pcAAAAASUVORK5CYII=',
  baseIcon_jd = 'data:image/png;base64,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',
  baseIcon_search = 'data:image/png;base64,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',
  baseIcon_msg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAA/CAMAAACl83p8AAAApVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+4/eNVAAAANnRSTlMA8/f76zMEZVC5XBjdvp6PIhTRhibmKtcQrqazmB0J8OFIopWMc24uy8SrVgyCfV9AOcaadmqCicfPAAACt0lEQVRIx+XV6XKiQBSG4Q8aEAUUjbggKiru+3bu/9Lm0NCDK5P/81QlaZM3DcemSjxzag3PNTSt60XbJr4ZHauCHly2Fj45xqrQ1CK4402nRWwcVkzHguWYlXBMbN3BMzvdpVUboWDV0v/Vt3h0IyLjiFc1g4gWKFT4tefgneMR0RzKRBBNP09oTYnECZleQLTBNxsePr9YxGOMvr+7PNIVqSVvvsR3S0GinW84Q5kZTwBgp5EYosxQkDYCtkRrlFsT2UBCdEO5OVEEeEQmyplEHhAQNVGuSeQCBulgPzqR/lOsnn6lp804CzViWrEqFjIcq0uX7tjjS8thSs5Fnd0KaKRPXLmFPLtaOns5vqidHaGDMo4g0QNQT5/hMkn2UMDUxAQl2jx8Bym/9AitC1Efv3AlMhz8W4PkyIV5v4N3uz53+6enmGiAN5P4tUPnw9s+8TgTc3wKOzd7aKWjDu1GTKxr4kPYnAliY3dMGeMwwnu4XozpSWu+Az6E0ma60tJNV+HCB/AtXJ0hWfjK5yw44hc2xs8O/yFrMsQz+4RCb10DdokPNKnCdXgu/qTvH/eZ0QHWysvDuZZtO3NdN6DATVWRqYi6tRRHGfraAlK/VVG8LnLbOrDvWmkYrpCHVSiNLLSc7MdI7tgbqlBoisjCa9wGMGm1Wl0K+HuUhxdTCbPQWRkmUKOoIak776/byjQLMapqbQ6bkAYqpEIXeXkHh6YvedWPwygcKips2crgb7hPOOw4UjUP60ZhrU5KO7zcozI84dFB63EY1qU4Cxs2vBsWelr6rpnNYszwGpo0QdAAovESPi5uD+wufLxeOnQhQ2uzhV5p61Pw2t3gIZTDOGLO4RWpDm++4C9Ozn/D+yGRn1Q23zWqYhpFUT1O1+EJOCdgdsAvkcRx6MtxASxng1RyhvQHEc9mMdxFHaoAAAAASUVORK5CYII=';

export default class Header extends Component {
  // 构造器中需要使用props时需加入参props
  constructor(props){
    super(props);
  }

  componentDidMount(){}

  _goCategory = () => {
    this.props.navigation.navigate('Category');
  }

  render(){
    return (
      <View style={[styles.container, commonStyle.rowAlign, this.props.style || {}]}>
        <TouchableOpacity style={styles.categoryBtn} onPress={this._goCategory}>
          <Image style={styles.categoryIcon} source={{uri: baseIcon_category}} />
        </TouchableOpacity>
        <View style={styles.searchContainer}>
          <View style={styles.searchBox}>
            <Image style={styles.jdIcon} source={{uri: baseIcon_jd}} />
            <Image style={styles.searchIcon} source={{uri: baseIcon_search}} />
            <View style={styles.labelBox}>
              <Text style={styles.label}>{this.props.placeholder}</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.msgBtn}>
          <Image style={styles.msgIcon} source={{uri: baseIcon_msg}} />
        </TouchableOpacity>
      </View>
    );
  }
}