/*
    外卖 - 标签页 - 9大分类
*/
'use strict'
import React from 'react';
import {AppRegistry, Navigator, StyleSheet, TouchableHighlight, Text, Image, View,Animated} from 'react-native';
import getAdaptHeight from '../component/getAdaptHeight';
import getAdaptWidth from '../component/getAdaptWidth';
import Button from 'react-native-button';
import {Actions} from 'react-native-router-flux';

var menuLine1 = [
    {
        img : require('../../images/waimai/icon_menu_zaocan.png'),
        text : '醒晨早餐',
        link : 'http://3c.m.tmall.com'
    },
    {
        img : require('../../images/waimai/icon_menu_xiawucha.png'),
        text : '下午茶',
        link : 'http://3c.m.tmall.com'
    },
    {
        img : require('../../images/waimai/icon_menu_zhongcan.png'),
        text : '中式餐品',
        link : 'http://3c.m.tmall.com'
    },
    {
        img : require('../../images/waimai/icon_menu_xican.png'),
        text : '西式餐品',
        link : 'http://3c.m.tmall.com'
    },
    {
        img : require('../../images/waimai/icon_menu_mianshi.png'),
        text : '经典面食',
        link : 'http://3c.m.tmall.com'
    }
];

var menuLine2 = [
    {
        img : require('../../images/waimai/icon_menu_xiaochi.png'),
        text : '特色小吃',
        link : 'http://3c.m.tmall.com'
    },
    {
        img : require('../../images/waimai/icon_menu_tianpin.png'),
        text : '糖水甜品',
        link : 'http://3c.m.tmall.com'
    },
    {
        img : require('../../images/waimai/icon_menu_biandang.png'),
        text : '快捷便当',
        link : 'http://3c.m.tmall.com'
    },
    {
        img : require('../../images/waimai/icon_menu_fengwei.png'),
        text : '南亚风味',
        link : 'http://3c.m.tmall.com'
    },
    {
        img : '',
        text : '',
        link : ''
    }
];


export default class SiyantuMenus extends React.Component{

  static defaultProps = {
      //bannerImgInitalHeight: 201//设计图（iphone6 @x2）中为750px * 403px，所以为375dp * 201dp
  };
  static propTypes = {
      //bannerImgInitalHeight: React.PropTypes.number.isRequired
  };

  constructor(props){
      super(props);
      this.state = {
          //text: '搜索关键词',
      };
  }

	renderItems(data){
  		return data.map(function(items,i){
          return (
      				<View key={i} style = {styles.boxtd}>
                  <Button onPress={()=>Actions.productLists({title:items.text})} containerStyle={styles.menuContainer} style = {styles.menuButton}>
                      <View style = {styles.boxtdWrap}>
                          <Image source={items.img} style={styles.cardImg} />
            					    <Text style = {styles.cardText}>{items.text}</Text>
                      </View>
                  </Button>
      				</View>
    			)
  		});
	}

	render(){
  		return (
    			<View style = {styles.container}>
      				<View style = {styles.boxtr}>
      					   {this.renderItems(menuLine1)}
      				</View>
      				<View style = {styles.boxtr}>
      					   {this.renderItems(menuLine2)}
      				</View>
    			</View>
  		)
	}

};

var styles = StyleSheet.create({
  	container:{
    		flex:1,
    		backgroundColor:'#fff',
        paddingBottom: getAdaptHeight(20),
  	},
  	boxtr:{
    		flexDirection:'row',
    		justifyContent:'center',
    		paddingTop: getAdaptHeight(20),
        paddingLeft : 5,
        paddingRight: 5,
  	},
  	boxtd:{
        flex:1,
  	},
    boxtdWrap: {
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
  	cardImg:{
    		width: getAdaptWidth(43),
    		height: getAdaptHeight(43),
  	},
  	cardText:{
    		color:'#666666',
    		fontSize: getAdaptHeight(11),
    		marginTop:5.5,
  	},
});
