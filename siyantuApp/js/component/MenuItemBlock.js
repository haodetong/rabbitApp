/*
    外卖 - 标签页 - 9大分类 - 分类block
*/
'use strict'
import React from 'react';
import {AppRegistry, Navigator, StyleSheet, TouchableHighlight, Text, Image, View,Animated} from 'react-native';
import getAdaptHeight from '../component/getAdaptHeight';
import getAdaptWidth from '../component/getAdaptWidth';
import Button from 'react-native-button';
import {Actions} from 'react-native-router-flux';
import Util from '../util/util';
import Service from '../util/service';

export default class MenuItemBlock extends React.Component{

  static defaultProps = {
      //bannerImgInitalHeight: 201//设计图（iphone6 @x2）中为750px * 403px，所以为375dp * 201dp
  };
  static propTypes = {
      //bannerImgInitalHeight: React.PropTypes.number.isRequired
  };

  constructor(props){
      super(props);
      this.state = {

      };
  }

	render(){
      var items = this.props.data;
      var imgPath = Service.host + items.img;

  		return (
          <View style = {styles.boxtd}>
              <Button onPress={()=>Actions.productLists({title:items.text})} containerStyle={styles.menuContainer} style = {styles.menuButton}>
                  <View style = {styles.boxtdWrap}>
                      <Image source={{uri: imgPath}} style={styles.cardImg} />
                      <Text style = {styles.cardText}>{items.text}</Text>
                  </View>
              </Button>
          </View>
  		)
	}

};

var styles = StyleSheet.create({
  	boxtd:{
        width: Util.size.width/5,
        borderWidth: 0, borderColor: 'red',
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
