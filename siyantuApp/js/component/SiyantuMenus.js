/*
    外卖 - 标签页 - 9大分类
*/
'use strict'
import React from 'react';
import {AppRegistry, Navigator, StyleSheet, AsyncStorage, TouchableHighlight, Text, Image, View,Animated} from 'react-native';
import getAdaptHeight from '../component/getAdaptHeight';
import getAdaptWidth from '../component/getAdaptWidth';
import Button from 'react-native-button';
import {Actions} from 'react-native-router-flux';
import MenuItemBlock from './MenuItemBlock';
import Util from '../util/util';
import Service from '../util/service';

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
          isloading: true,
          menuItem01: [],
          menuItem02: [],
          menuItems: []
      }
  }

  componentDidMount() {
      var that = this;
      AsyncStorage.getItem('menus', function(err, menus){
          if(!err && menus){
              that.setState({
                  menuItems: JSON.parse(menus)
              });
          }else{
              //获取分类导航栏
              var path = Service.host + Service.getMenus;
              Util.post(path, {
                key: Util.key
              }, function(data){
                if(data.status)
                {
                    AsyncStorage.setItem('menus', JSON.stringify(data.data) ,function(err){
                        if(err){
                            console.log('store menus error');
                        }
                    })
                    that.setState({
                      menuItems: data.data
                    });
                }
              })
          }
          that._renderMenuBlock();
      })

  }

  _renderMenuBlock() {
      var that = this;
      var menuItem01 = [];
      var menuItem02 = [];
      var menuItems = this.state.menuItems;
      for(var i = 0; i < 5; i++) {
          menuItem01.push(
              <MenuItemBlock
                  key = {i}
                  data = {menuItems[i]}
              />
          )
      }
      for(var i = 5; i < menuItems.length; i++) {
          menuItem02.push(
              <MenuItemBlock
                  key = {i}
                  data = {menuItems[i]}
              />
          )
      }

      that.setState({
          menuItem01: menuItem01,
          menuItem02: menuItem02,
          isloading: false,
      });

  }

	render(){
  		return (
        			<View>
                  {!this.state.isloading ?
                      <View style = {styles.container}>
                          <View style = {styles.boxtr}>
                  				    {this.state.menuItem01}
                  				</View>
                  				<View style = {styles.boxtr}>
                              {this.state.menuItem02}
                  				</View>
                      </View>
                      : null
                  }
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
    		justifyContent:'flex-start',
    		paddingTop: getAdaptHeight(20),
        paddingLeft : 5,
        paddingRight: 5,
  	},
});
