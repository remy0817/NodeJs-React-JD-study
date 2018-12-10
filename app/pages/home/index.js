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
import F_4N from './F_4N';
import F_2_2_4 from './F_2_2_4';
import F_2_2_4_4 from './F_2_2_4_4';
import F_2_4_4 from './F_2_4_4';
import Recommend from './Recommend';

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
    data_floor5: {titleImg: '', list: []},
    recommend: []
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

  componentWillMount(){
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
      data_floor2: {
        titleImg: 'https://m.360buyimg.com/mobilecms/s800x80_jfs/t20863/125/519979559/24806/2e941d67/5b0fecc7N541bb0dd.png!q70.jpg.dpg',
        list: [
          {
            id: 1,
            type: 'one',
            title: '优享免息',
            description: '12期免息',
            imgUrl: 'https://m.360buyimg.com/n1/s150x150_jfs/t27565/103/2567518235/12945/5683be64/5c04cc68Nfae2c9eb.jpg!q70.jpg.dpg'
          },
          {
            id: 2,
            type: 'one',
            title: '品牌秒杀',
            description: '低价抢大牌',
            imgUrl: 'https://m.360buyimg.com/mobilecms/s150x150_jfs/t14641/140/2153329028/68525/d15899f1/5a72e350N312295c0.png!q70.jpg.dpg'
          },
          {
            id: 3,
            type: 'one',
            title: '闪购',
            description: '大牌限时特卖',
            imgUrl: 'https://m.360buyimg.com/n1/s150x150_jfs/t24169/258/886417381/651533/d103c7ca/5b46b2e0N2391a4cd.png!q70.jpg.dpg'
          },
          {
            id: 4,
            type: 'one',
            title: '拍拍二手',
            description: 'iPhone 5折起',
            imgUrl: 'https://m.360buyimg.com/mobilecms/s150x150_jfs/t14251/339/1738489148/26244/792efe55/5a56fd12N458f4fe7.jpg!q70.jpg.dpg'
          },
          {
            id: 5,
            type: 'one',
            title: '排行榜',
            description: '专属购物指南',
            imgUrl: 'https://m.360buyimg.com/n1/s150x150_jfs/t22636/347/1982368416/397749/ce5aa398/5b70fd9cN0352461c.jpg!q70.jpg.dpg'
          },
          {
            id: 6,
            type: 'one',
            title: '发现好货',
            description: '高品质生活',
            imgUrl: 'https://m.360buyimg.com/n1/s150x150_jfs/t19309/94/774457823/163938/367c2fc6/5aa63bcbN51f16ca1.jpg!q70.jpg.dpg'
          },
          {
            id: 7,
            type: 'one',
            title: '会买专辑',
            description: '教你买买买',
            imgUrl: 'https://m.360buyimg.com/n1/s150x150_jfs/t3334/86/1228062119/166894/7687fc1b/5820273bN6fd6d671.jpg!q70.jpg.dpg'
          },
          {
            id: 8,
            type: 'one',
            title: '新品首发',
            description: '新vivo NEX',
            imgUrl: 'https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/24350/19/342/35410/5c08fe24Ec54e422d/6f3b68fd804692b2.jpg!q70.jpg.dpg'
          }
        ]
      },
      data_floor3: {
        titleImg: 'https://m.360buyimg.com/mobilecms/s800x80_jfs/t15526/56/2344102455/23273/d8e15d5a/5aa0dbc1Nefd2bd2a.png!q70.jpg.dpg',
        list: [
          {
            id: 1,
            type: 'two',
            title: '玩3C',
            description: '手机好店 暖冬盛宴',
            imgUrls: [
              'https://m.360buyimg.com/n1/s150x150_jfs/t25144/2/1278469398/101844/cb66b21/5b90f5bfNcd58f18b.png!q70.jpg.dpg',
              'https://m.360buyimg.com/mobilecms/s150x150_jfs/t22792/274/2587775944/59292/3666f607/5b87bf15N9409ba0e.png!q70.jpg.dpg'
            ]
          },
          {
            id: 2,
            type: 'two',
            title: '京东家电',
            description: '家电狂欢 京彩有你',
            imgUrls: [
              'https://m.360buyimg.com/mobilecms/s150x150_jfs/t22363/318/1484948466/11138/8317fc9b/5b2a528eN7c6bde83.jpg!q70.jpg.dpg',
              'https://m.360buyimg.com/mobilecms/s150x150_jfs/t22666/293/257815171/29274/6b5605b1/5b2a5295N5a81ad96.jpg!q70.jpg.dpg'
            ]
          },
          {
            id: 3,
            type: 'two',
            title: '京东超市',
            description: '超市好货特价抢',
            imgUrls: [
              'https://m.360buyimg.com/n1/s150x150_jfs/t19165/201/2652007889/78863/454152bf/5b063c38N5ad400c1.jpg!q70.jpg.dpg',
              'https://m.360buyimg.com/n1/s150x150_jfs/t23029/321/2573497748/63578/2c6c118f/5b8747caN2c41addf.jpg!q70.jpg.dpg'
            ]
          },
          {
            id: 4,
            type: 'two',
            title: '爱家',
            description: '居家日用 部分满199减100',
            imgUrls: [
              'https://m.360buyimg.com/mobilecms/s150x150_jfs/t15211/36/363877971/47743/b6607b0f/5a2a6d49Nc1a009d3.jpg!q70.jpg.dpg',
              'https://m.360buyimg.com/mobilecms/s150x150_jfs/t13321/10/1818685253/46712/e6acfa6f/5a2a6d4dNeae9cdbc.jpg!q70.jpg.dpg'
            ]
          },
          {
            id: 5,
            type: 'one',
            title: '家有萌宝',
            description: '低至五折',
            imgUrl: 'https://m.360buyimg.com/n1/s150x150_jfs/t17929/299/899794385/17291/d90318f9/5ab4c680N7d291625.jpg!q70.jpg.dpg'
          },
          {
            id: 6,
            type: 'one',
            title: '个护馆',
            description: '9.9拼购',
            imgUrl: 'https://m.360buyimg.com/n1/s150x150_jfs/t27610/350/1521087444/195580/3f254ccf/5be4fc45Nef75f57a.jpg!q70.jpg.dpg'
          },
          {
            id: 7,
            type: 'one',
            title: '爱吃',
            description: '9.9包邮',
            imgUrl: 'https://m.360buyimg.com/mobilecms/s150x150_jfs/t14473/103/2042876100/41836/766c1953/5a697f47Nc952ed7f.jpg!q70.jpg.dpg'
          },
          {
            id: 8,
            type: 'one',
            title: '时尚衣橱',
            description: '做百变女神',
            imgUrl: 'https://m.360buyimg.com/mobilecms/s150x150_jfs/t20260/181/224299388/42393/9632586f/5b053603N0f65aec5.jpg!q70.jpg.dpg'
          }
        ]
      },
      data_floor4: {
        titleImg: 'https://m.360buyimg.com/mobilecms/s800x80_jfs/t19381/275/717008577/26686/e58b7ef4/5aa23f27Nfa6d6be3.png!q70.jpg.dpg',
        list: [
          {
            id: 1,
            type: 'two',
            title: '美食城',
            description: '低至五折',
            imgUrls: [
              'https://m.360buyimg.com/mobilecms/s180x180_jfs/t16705/82/285076461/40568/d2f7fc14/5a698c01Nab864629.jpg!q70.jpg.dpg'
            ]
          },
          {
            id: 2,
            type: 'two',
            title: '生鲜馆',
            description: '尝鲜秒杀',
            imgUrls: [
              'https://m.360buyimg.com/n1/s180x180_jfs/t30850/59/469316832/208273/920f26aa/5bf3ebf1N0f4eb314.jpg!q70.jpg.dpg'
            ]
          },
          {
            id: 3,
            type: 'two',
            title: '母婴馆',
            description: '超值拼团',
            imgUrls: [
              'https://m.360buyimg.com/n1/s180x180_jfs/t20326/1/526287096/292334/138c4a26/5b10b79bN40a94dba.jpg!q70.jpg.dpg'
            ]
          },
          {
            id: 4,
            type: 'two',
            title: '大家电馆',
            description: '满千减百',
            imgUrls: [
              'https://m.360buyimg.com/mobilecms/s180x180_jfs/t1/839/25/11121/19615/5bccb3a0E4b504f77/e55c2fb826efe911.jpg!q70.jpg.dpg'
            ]
          },
          {
            id: 5,
            type: 'one',
            title: '手机馆',
            description: '享白条免息',
            imgUrl: 'https://m.360buyimg.com/n1/s150x150_jfs/t1/1618/5/14148/283136/5bdab9c0E9ff8629b/830b87275f02bc56.jpg!q70.jpg.dpg'
          },
          {
            id: 6,
            type: 'one',
            title: '进口馆',
            description: '满199减100',
            imgUrl: 'https://m.360buyimg.com/n1/s150x150_jfs/t6184/55/1490680361/250361/fe9da45b/5952365bNa35e322a.jpg!q70.jpg.dpg'
          },
          {
            id: 7,
            type: 'one',
            title: '医药城',
            description: '大牌直降',
            imgUrl: 'https://m.360buyimg.com/n1/s150x150_jfs/t17266/210/329403888/25547/5451c4a5/5a6aece8Nbd3e4c89.jpg!q70.jpg.dpg'
          },
          {
            id: 8,
            type: 'one',
            title: '内衣馆',
            description: '年中狂欢购',
            imgUrl: 'https://m.360buyimg.com/n1/s150x150_jfs/t20995/242/758982428/30159/affb6143/5b1795cbN1b3b96b1.jpg!q70.jpg.dpg'
          },
          {
            id: 9,
            type: 'one',
            title: '美妆馆',
            description: '领免费试用',
            imgUrl: 'https://m.360buyimg.com/n1/s150x150_jfs/t29980/236/139458105/114579/9b3177ad/5be94126N52fe0c4d.jpg!q70.jpg.dpg'
          },
          {
            id: 10,
            type: 'one',
            title: '鞋靴箱包',
            description: '低至五折',
            imgUrl: 'https://m.360buyimg.com/n1/s150x150_jfs/t21469/359/769885083/29352/68865ed/5b178e49Nc5db7341.jpg!q70.jpg.dpg'
          },
          {
            id: 11,
            type: 'one',
            title: '电脑办公',
            description: '新品好价购',
            imgUrl: 'https://m.360buyimg.com/n1/s150x150_jfs/t12460/183/2350810548/47292/f4c5485/5a914202Nfc1b8a12.png!q70.jpg.dpg'
          },
          {
            id: 12,
            type: 'one',
            title: '小家电馆',
            description: '满减狂欢',
            imgUrl: 'https://m.360buyimg.com/mobilecms/s150x150_jfs/t25183/247/391394027/33684/8e1af9dc/5b6d048aNd7dae520.jpg!q70.jpg.dpg'
          }
        ]
      },
      data_floor5: {
        titleImg: '',
        list: []
      },
      recommend: [
        {
          id: 1,
          goodsImgUrl: 'https://img12.360buyimg.com/mobilecms/s372x372_jfs/t25561/334/1938560255/144831/93ec28d7/5bbf41f0N9cea34a2.jpg!q70.dpg',
          description: '❤乐贝尔（Lebeier） 婴儿学步车宝宝防侧翻多功能音乐学行车儿童 6-18个月静音轮一周岁生日 都市蓝                         ',
          price1: 198,
          activityText: '满减'
        },
        {
          id: 2,
          goodsImgUrl: 'https://img12.360buyimg.com/mobilecms/s372x372_jfs/t1/6640/40/1070/166628/5bcb4a78E395a3505/9b907d319268ce79.jpg!q70.dpg',
          activityIconUrl: 'https://img10.360buyimg.com/jdphoto/s30x30_jfs/t1/17471/6/115/1063/5c074002E12f3baab/70e641dfaf7eba02.png!q70.webp',
          textImgUrl: 'https://img11.360buyimg.com/jdphoto/s102x28_jfs/t14512/288/2659278877/2368/8468a10d/5aadf9daNd4909ddc.png',
          description: '三只松鼠休闲零食网红孕妇儿童早餐面包蛋糕糕点办公室点心礼盒氧气吐司800g整箱装',
          price1: 32,
          price2: 8,
          activityText: '满减'
        },
        {
          id: 3,
          goodsImgUrl: 'https://img14.360buyimg.com/mobilecms/s372x372_jfs/t17548/88/938942146/152809/c95d1ab1/5ab32528Nb16ac8d4.jpg!q70.dpg',
          description: '新款婴儿学步车防侧翻6/7-18个月宝宝手推车多功能三合一可坐助步车 蓝色',
          price1: 298
        },
        {
          id: 4,
          goodsImgUrl: 'https://img12.360buyimg.com/mobilecms/s372x372_jfs/t19816/145/1202113368/412088/6c1de888/5b179c81Ncf2bf4cf.jpg!q70.dpg',
          activityIconUrl: 'https://img10.360buyimg.com/jdphoto/s30x30_jfs/t1/17471/6/115/1063/5c074002E12f3baab/70e641dfaf7eba02.png!q70.webp',
          textImgUrl: 'https://img11.360buyimg.com/jdphoto/s100x28_jfs/t15376/77/2643750731/2688/443ac7d3/5aadf9daNc1b92ee6.png',
          description: '洁柔（C&S）抽纸 活力阳光橙 3层120抽面巾纸*24包（整箱销售 软抽纸巾 母婴可用）',
          price1: 49,
          price2: 9,
          plusPrice: 48.9
        },
        {
          id: 5,
          goodsImgUrl: 'https://img12.360buyimg.com/mobilecms/s372x372_jfs/t28330/93/955777490/62134/30df0248/5c0252acN303ece90.jpg!q70.dpg',
          activityIconUrl: 'https://img10.360buyimg.com/jdphoto/s30x30_jfs/t1/17471/6/115/1063/5c074002E12f3baab/70e641dfaf7eba02.png!q70.webp',
          // textImgUrl: 'https://img11.360buyimg.com/jdphoto/s48x28_jfs/t18820/32/891260489/1085/d4b6cf2c/5aadf9dbN7043e607.png',
          textImgUrl: 'https://img11.360buyimg.com/jdphoto/s98x28_jfs/t16411/341/2502946085/2662/c4af0771/5aadf9daN1916b3f2.png',
          description: '吉米有品(JIMI) 智能水杯 感温提醒喝水杯子 礼品定制 LED温度显示316不锈钢创意情侣保温杯550ml  S1 Plus',
          price1: 185
        },
        {
          id: 6,
          goodsImgUrl: 'https://img12.360buyimg.com/mobilecms/s372x372_jfs/t1/20651/35/290/275038/5c08d64aE9afd8f3a/acf190c3b46cd964.jpg!q70.dpg',
          textImgUrl: 'https://img11.360buyimg.com/jdphoto/s98x28_jfs/t16411/341/2502946085/2662/c4af0771/5aadf9daN1916b3f2.png',
          description: '【买送玻璃杯】夷茗 绿茶茶叶 恩施硒茶买一送一实发500g玉露茶叶充足日照高山绿茶 恩施硒茶',
          price1: 69
        },
        {
          id: 7,
          goodsImgUrl: 'https://img13.360buyimg.com/mobilecms/s372x372_jfs/t19339/55/759661382/91186/a32036b9/5aa77e11Na27afa82.jpg!q70.dpg',
          activityIconUrl: 'https://img10.360buyimg.com/jdphoto/s30x30_jfs/t1/17471/6/115/1063/5c074002E12f3baab/70e641dfaf7eba02.png!q70.webp',
          textImgUrl: 'https://img11.360buyimg.com/jdphoto/s102x28_jfs/t14512/288/2659278877/2368/8468a10d/5aadf9daNd4909ddc.png',
          description: '蒙牛 特仑苏 纯牛奶 250ml*16 礼盒装',
          price1: 68,
          price2: 9
        },
        {
          id: 8,
          goodsImgUrl: 'https://img10.360buyimg.com/mobilecms/s372x372_jfs/t16246/360/1128981343/147579/76ecd8eb/5a4c385cN2cc3391f.jpg!q70.dpg',
          activityIconUrl: 'https://img10.360buyimg.com/jdphoto/s30x30_jfs/t1/17471/6/115/1063/5c074002E12f3baab/70e641dfaf7eba02.png!q70.webp',
          textImgUrl: 'https://img11.360buyimg.com/jdphoto/s102x28_jfs/t14512/288/2659278877/2368/8468a10d/5aadf9daNd4909ddc.png',
          description: '奥利奥Oreo早餐休闲零食蛋糕糕点夹心饼干巧克力味349g',
          price1: 13,
          price2: 9
        },
        {
          id: 9,
          goodsImgUrl: 'https://img10.360buyimg.com/mobilecms/s372x372_jfs/t21574/10/1644863638/101709/3da4fcb2/5b319921Nf2db9775.jpg!q70.dpg',
          activityIconUrl: 'https://img10.360buyimg.com/jdphoto/s30x30_jfs/t1/17471/6/115/1063/5c074002E12f3baab/70e641dfaf7eba02.png!q70.webp',
          textImgUrl: 'https://img11.360buyimg.com/jdphoto/s100x28_jfs/t15376/77/2643750731/2688/443ac7d3/5aadf9daNc1b92ee6.png',
          description: '桃渊茗 茶叶 红茶 金骏眉 蜜香型希捍系列罐装 50g',
          price1: 11,
          price2: 9,
          plusPrice: 10.9
        },
        {
          id: 10,
          goodsImgUrl: 'https://img14.360buyimg.com/mobilecms/s372x372_jfs/t1/1481/6/8838/761760/5baaf347Eff2f48de/6011dce8020b4eee.jpg!q70.dpg',
          activityIconUrl: 'https://img10.360buyimg.com/jdphoto/s30x30_jfs/t1/17471/6/115/1063/5c074002E12f3baab/70e641dfaf7eba02.png!q70.webp',
          textImgUrl: 'https://img11.360buyimg.com/jdphoto/s102x28_jfs/t14512/288/2659278877/2368/8468a10d/5aadf9daNd4909ddc.png',
          description: '木冠 茶叶 乌龙茶 武夷岩茶大红袍礼盒罐装192g',
          price1: 16,
          price2: 8,
          activityText: '满减'
        },
        {
          id: 11,
          goodsImgUrl: 'https://img12.360buyimg.com/mobilecms/s372x372_jfs/t19384/348/927924943/528544/d15ba3a3/5ab0d3b1Nd7aff0cf.jpg!q70.dpg',
          activityIconUrl: 'https://img10.360buyimg.com/jdphoto/s30x30_jfs/t1/17471/6/115/1063/5c074002E12f3baab/70e641dfaf7eba02.png!q70.webp',
          description: '奥利奥（Oreo）夹心饼干58g巧克力味 和 58g原味小包装可选 --- 巧克力58g*10',
          price1: 39,
          price2: 9,
          activityText: '拼购'
        },
        {
          id: 12,
          goodsImgUrl: 'https://img13.360buyimg.com/mobilecms/s372x372_jfs/t18958/232/1069828195/496858/7ad1209f/5ab7938aN1e38dae2.jpg!q70.dpg',
          activityIconUrl: 'https://img10.360buyimg.com/jdphoto/s30x30_jfs/t1/17471/6/115/1063/5c074002E12f3baab/70e641dfaf7eba02.png!q70.webp',
          textImgUrl: 'https://img11.360buyimg.com/jdphoto/s102x28_jfs/t14512/288/2659278877/2368/8468a10d/5aadf9daNd4909ddc.png',
          description: '【买2件立减10元】正宗生晒新会小青柑普洱茶250g 28粒礼盒装陈皮普洱茶柑普茶云南宫廷普洱熟茶叶',
          price1: 78,
          activityText: '满减',
          plusPrice: 68
        }
      ]
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