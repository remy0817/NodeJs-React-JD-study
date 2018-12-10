/**
 * @filename index.js
 * @authors remy
 * @creatTime 2018-08-06 10:21:25
 * @description 分类
 * @version 0.0.1
 */

import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import CHeader from './CHeader';
import CMenu from './CMenu';
import CContent from './CContent';

import { commonStyle } from '../../styles';

export default class Category extends Component {
  
  static navigationOptions = {
    tabBarLabel: '分类',
    tabBarIcon: ({focused}) => {
      if(focused){
        return (
          // <Image source={require('../../assets/nav_icon_home_active.png')} />
          // <Image source={{uri: baseIcon_actived}} />
          <Image style={commonStyle.tabBar}
            source={{uri: 'https://m.360buyimg.com/mobilecms/jfs/t17578/307/690695366/3731/8695ed50/5aa10cdbNf3977e9f.png'}} />
        );
      }
      return (
        // <Image source={require('../../assets/nav_icon_home.png')} />
        // <Image source={{uri: baseIcon}} />
        <Image style={commonStyle.tabBar}
          source={{uri: 'https://m.360buyimg.com/mobilecms/jfs/t19183/49/696491919/3763/dec8cceb/5aa10cdbNa9cd0320.png'}} />
      );
    }
  };

  state = {
    menuData: [],
    contentData: []
  };

  _categoryData = [
    {
      menuId: 1, data: [
        {
          id: 1, title: '热门分类', list: [
            {id: 1, text: '手机', url: 'https://img11.360buyimg.com/focus/s140x140_jfs/t21388/146/237407622/26923/221da1b3/5b054fedN2ba90518.jpg'},
            {id: 2, text: '空调', url: 'https://img30.360buyimg.com/focus/s140x140_jfs/t22051/318/235303191/9297/c5ea2761/5b055000N410a7553.png'},
            {id: 3, text: '电风扇', url: 'https://img20.360buyimg.com/focus/s140x140_jfs/t17962/238/2678578741/19614/71205ad3/5b056472N771896da.png'},
            {id: 4, text: '耳机', url: 'https://img20.360buyimg.com/focus/s140x140_jfs/t20128/208/216721929/9242/472993da/5b05522dNa2aae1bb.png'},
            {id: 5, text: '冰箱', url: 'https://img20.360buyimg.com/focus/s140x140_jfs/t21115/83/225125274/13856/5473fb3f/5b0567c1N59d53b27.png'},
            {id: 6, text: '洗衣机', url: 'https://img14.360buyimg.com/focus/s140x140_jfs/t21664/15/237213959/24996/a3c6c7d6/5b0567c7N9cc1c355.png'},
            {id: 7, text: '电视', url: 'https://img12.360buyimg.com/focus/s140x140_jfs/t18106/218/2672347202/29951/3618e960/5b0567cdN275fbcdd.png'}
          ]
        },
        {
          id: 2, title: '家电热搜', list: [
            {id: 1, text: '冰箱', url: 'https://img20.360buyimg.com/focus/s140x140_jfs/t21115/83/225125274/13856/5473fb3f/5b0567c1N59d53b27.png'},
            {id: 2, text: '洗衣机', url: 'https://img14.360buyimg.com/focus/s140x140_jfs/t21664/15/237213959/24996/a3c6c7d6/5b0567c7N9cc1c355.png'},
            {id: 3, text: '电视', url: 'https://img12.360buyimg.com/focus/s140x140_jfs/t18106/218/2672347202/29951/3618e960/5b0567cdN275fbcdd.png'}
          ]
        },
        {
          id: 3, title: '家电热搜2', list: [
            {id: 1, text: '冰箱2', url: 'https://img20.360buyimg.com/focus/s140x140_jfs/t21115/83/225125274/13856/5473fb3f/5b0567c1N59d53b27.png'},
            {id: 2, text: '洗衣机2', url: 'https://img14.360buyimg.com/focus/s140x140_jfs/t21664/15/237213959/24996/a3c6c7d6/5b0567c7N9cc1c355.png'},
            {id: 3, text: '电视2', url: 'https://img12.360buyimg.com/focus/s140x140_jfs/t18106/218/2672347202/29951/3618e960/5b0567cdN275fbcdd.png'}
          ]
        }
      ]
    },
    {
      menuId: 2, data: [
        {
          id: 1, title: '热门品牌', list: [
            {id: 1, text: '小米', url: 'https://img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png'},
            {id: 2, text: '华为', url: 'https://img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg'},
            {id: 3, text: '荣耀', url: 'https://img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg'},
            {id: 4, text: 'iPhone', url: 'https://img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg'},
            {id: 5, text: 'vivo', url: 'https://img11.360buyimg.com/focus/s140x140_jfs/t11014/359/2341377211/2777/1755c29c/5a169244Nff0179e0.png'},
            {id: 6, text: 'OPPO', url: 'https://img13.360buyimg.com/focus/s140x140_jfs/t13036/273/932026474/2570/a3517c7d/5a169254N4bbbd9fb.png'},
            {id: 7, text: '魅族', url: 'https://img20.360buyimg.com/focus/s140x140_jfs/t12820/326/909017718/7138/68cde747/5a169243N40eca33c.jpg'},
            {id: 8, text: '三星', url: 'https://img13.360buyimg.com/focus/s140x140_jfs/t11509/131/2348573811/3425/4f20fe6/5a16925aN8a6dfd03.png'},
            {id: 9, text: '一加', url: 'https://img13.360buyimg.com/focus/s140x140_jfs/t11209/71/2351231464/4158/fc0c415c/5a16923fNfc14307e.jpg'},
            {id: 10, text: '360手机', url: 'https://img20.360buyimg.com/focus/s140x140_jfs/t13096/309/908035611/5138/5558f001/5a16924fNeac7677e.jpg'},
            {id: 11, text: '锤子手机', url: 'https://img20.360buyimg.com/focus/s140x140_jfs/t19387/332/664528115/8176/5eabe8cb/5a9fa5e0N6754e52a.jpg'},
            {id: 12, text: '努比亚', url: 'https://img12.360buyimg.com/focus/s140x140_jfs/t15085/289/2395028996/2546/1e7e1f7b/5a9fa5e7Nc5cc0f6b.jpg'}
          ]
        },
        {
          id: 2, title: '手机通讯', list: [
            {id: 1, text: '老人机', url: 'https://img12.360buyimg.com/focus/s140x140_jfs/t11461/339/2354953633/8254/8c8c50d3/5a169217N5d1b842e.jpg'},
            {id: 2, text: '手机', url: 'https://img10.360buyimg.com/focus/s140x140_jfs/t11503/241/2246064496/4783/cea2850e/5a169216N0701c7f1.jpg'},
            {id: 3, text: '全面屏手机', url: 'https://img30.360buyimg.com/focus/s140x140_jfs/t18955/187/1309277884/11517/fe100782/5ac48d27N3f5bb821.jpg'},
            {id: 4, text: '游戏手机', url: 'https://img11.360buyimg.com/focus/s140x140_jfs/t11470/45/2362968077/2689/fb36d9a0/5a169238Nc8f0882b.jpg'},
            {id: 5, text: '拍照手机', url: 'https://img20.360buyimg.com/focus/s140x140_jfs/t12022/66/917351804/2257/7ddc58e5/5a169232Ndf76f53c.jpg'}
          ]
        },
        {
          id: 3, title: '运营商', list: [
            {id: 1, text: '合约机', url: 'https://img20.360buyimg.com/focus/s140x140_jfs/t13309/121/902275259/3700/e9f22529/5a168e83Nb1a35aac.png'},
            {id: 2, text: '选号卡', url: 'https://img10.360buyimg.com/focus/s140x140_jfs/t11515/106/2342900928/7913/5a606e3f/5a168e7eNdd5d0121.png'},
            {id: 3, text: '办套餐', url: 'https://img20.360buyimg.com/focus/s140x140_jfs/t14146/201/916948302/5272/8ae80f8e/5a168e78N78b24a8e.jpg'},
            {id: 4, text: '京东网厅', url: 'https://img30.360buyimg.com/focus/s140x140_jfs/t15865/151/2284016087/10155/c4aaceec/5a9faa1fN03a4c9e1.jpg'}
          ]
        }
      ]
    },
    {
      menuId: 3, data: [
        {
          id: 1, title: '常用电器', list: [
            {id: 1, text: '空调', url: 'https://img30.360buyimg.com/focus/s140x140_jfs/t22051/318/235303191/9297/c5ea2761/5b055000N410a7553.png'},
            {id: 2, text: '电风扇', url: 'https://img20.360buyimg.com/focus/s140x140_jfs/t17962/238/2678578741/19614/71205ad3/5b056472N771896da.png'},
            {id: 3, text: '冰箱', url: 'https://img20.360buyimg.com/focus/s140x140_jfs/t21115/83/225125274/13856/5473fb3f/5b0567c1N59d53b27.png'},
            {id: 4, text: '洗衣机', url: 'https://img14.360buyimg.com/focus/s140x140_jfs/t21664/15/237213959/24996/a3c6c7d6/5b0567c7N9cc1c355.png'},
            {id: 5, text: '电视', url: 'https://img12.360buyimg.com/focus/s140x140_jfs/t18106/218/2672347202/29951/3618e960/5b0567cdN275fbcdd.png'}
          ]
        }
      ]
    }
  ]

  _toggleMenu = id => {
    let data = this._categoryData.find(item => item.menuId === id);
    data && this.setState({
      contentData: data.data
    });
  };

  componentWillMount(){
    this.setState({
      menuData: [
        {id: 1, text: '热门推荐', defaultActived: true},
        {id: 2, text: '手机数码'},
        {id: 3, text: '家用电器'},
        {id: 4, text: '电脑办公'},
        {id: 5, text: '计生情趣'},
        {id: 6, text: '美妆护肤'},
        {id: 7, text: '个护清洁'},
        {id: 8, text: '汽车用品'},
        {id: 9, text: '京东超市'},
        {id: 10, text: '图书音影'},
        {id: 11, text: '男装'},
        {id: 12, text: '男鞋'},
        {id: 13, text: '女装'},
        {id: 14, text: '母婴童装'},
        {id: 15, text: '运动户外'},
        {id: 16, text: '内衣配饰'},
        {id: 17, text: '食品生鲜'},
        {id: 18, text: '酒水饮料'},
        {id: 19, text: '家具家装'},
        {id: 20, text: '家居厨具'},
        {id: 21, text: '想报手袋'},
        {id: 22, text: '钟表珠宝'},
        {id: 23, text: '玩具乐器'},
        {id: 24, text: '医药保健'},
        {id: 25, text: '宠物生活'},
        {id: 26, text: '礼品鲜花'},
        {id: 27, text: '农资绿植'},
        {id: 28, text: '生活旅行'},
        {id: 29, text: '奢侈品'},
        {id: 30, text: '全球购'},
        {id: 31, text: '艺术邮币'},
        {id: 32, text: '二手商品'},
        {id: 33, text: '特产馆'},
        {id: 34, text: '京东金融'},
        {id: 35, text: '国际品牌'},
        {id: 36, text: '拍卖'},
        {id: 37, text: '房产'}
      ],
      contentData: this._categoryData[0].data
    });
  }

  componentDidMount(){}

  render(){
    return (
      <View style={commonStyle.flex}>
        <CHeader navigation={this.props.navigation}></CHeader>
        <View style={[commonStyle.flex, commonStyle.rowAlign]}>
          <CMenu dataList={this.state.menuData} toggleMenu={this._toggleMenu}></CMenu>
          <CContent dataList={this.state.contentData}></CContent>
        </View>
      </View>
    );
  }
}