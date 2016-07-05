/*
    订单 - 标签页 - 订单列表 - Cell
*/
'use strict'
import React from 'react';
import {AppRegistry, Navigator, StyleSheet, TouchableHighlight, TouchableNativeFeedback, Text, Image, PixelRatio, Platform, View, Animated} from 'react-native';
import getImageSource from './getImageSource';
import getAdaptHeight from '../component/getAdaptHeight';
import getAdaptWidth from '../component/getAdaptWidth';
import Button from 'react-native-button';

export default class DingdanCell extends React.Component{
  	render() {

    		var TouchableElement = TouchableHighlight;

    		if (Platform.OS === 'android') {
    			//
    		};

    		return (
      			<View style = {styles.dingdanListBox}>
        				<TouchableElement
          					onPress = {this.props.onSelect}//$$
          					onShowUnderlay = {this.props.onHighlight}
          					onHideUnderlay = {this.props.onUnhighlight}>
          					<View style = {styles.row}>

                        <View style = {styles.ddHeader}>
                            <View style = {styles.ddShop}>
                                <Image source = {require('../../images/dingdan/dingdan_shopLogo.png')} style = {styles.ddShopLogo} />
                                <Text style = {styles.ddShopName}>四眼兔体验店（三灶店）</Text>
                            </View>
                            <View style = {styles.ddSendStatus}>
                              <Text style = {styles.ddStatusText}>已送到</Text>
                            </View>
                        </View>

                        <View style = {styles.ddProduct}>
                            <View style = {styles.ddProImgBox}>
                                <Image source = {require('../../images/dingdan/dingdan_product.png')} style = {styles.ddProImg} />
                            </View>
                            <View style = {styles.ddProInfoBox}>
                                <View style = {styles.ddProInfo}>
                                    <Text style = {styles.ddProName} numberOfLines = {1}>什锦肉哨炒饭+鸡腿+煎蛋</Text>
                                    <Text style = {styles.ddProSend}>四眼兔专送</Text>
                                    <Text style = {styles.ddProDate}>04-09 09:23</Text>
                                </View>
                            </View>
                            <View style = {styles.ddProPrice}>
                                <Text style = {styles.ddProPriceNow}>￥23.00</Text>
                                <Text style = {styles.ddProPriceDel}>￥30.00</Text>
                            </View>
                        </View>

                        <View style = {styles.ddProHandle}>
                            <Button containerStyle={[styles.ddProHandleBtn, styles.ddProCommentBtn]} style={[styles.ddProHandleBtnText,styles.ddProCommentBtnText]}>评价</Button>
                            <Button containerStyle={styles.ddProHandleBtn} style={styles.ddProHandleBtnText}>确认收到</Button>
                            <Button containerStyle={styles.ddProHandleBtn} style={styles.ddProHandleBtnText}>再来一单</Button>
                        </View>

          					</View>
        				</TouchableElement>
      			</View>
    		)
  	}
};

var styles = StyleSheet.create({
    dingdanListBox: {
    },
    row: {
        marginBottom: 12,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: 'white',
    },
    ddHeader: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginTop: 12,
        paddingLeft: 10,
        paddingRight: 10,
    },
    ddShop: {
        flex:4,
        flexDirection:'row',
        alignItems: 'flex-start'
    },
    ddShopLogo: {
        width: getAdaptWidth(15),
        height: getAdaptHeight(13),
    },
    ddShopName: {
        marginLeft: 10,
        fontSize: getAdaptHeight(13),
        color: '#111111'
    },
    ddSendStatus: {
        flex:1,
        alignItems: 'flex-end'
    },
    ddStatusText: {
        fontSize: getAdaptHeight(13),
        color: '#00a0e9'
    },
    ddProduct: {
        flexDirection: 'row',
        marginTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: "#fafafa",
    },
    ddProImgBox: {
        width: getAdaptWidth(75),
        height: getAdaptHeight(75),
    },
    ddProImg: {
        width: getAdaptWidth(75),
        height: getAdaptHeight(75),
    },
    ddProInfoBox: {
        flex: 1,
    },
    ddProInfo: {
        flexDirection: 'column',
        marginLeft: 13,
    },
    ddProName: {
        fontSize: getAdaptHeight(13),
        color: '#111111'
    },
    ddProSend: {
        marginTop: 10,
        fontSize: getAdaptHeight(12),
        color: '#a0a0a0',
    },
    ddProDate: {
        marginTop: 10,
        fontSize: getAdaptHeight(12),
        color: '#a0a0a0'
    },
    ddProPrice: {
        width: 80,
        flexDirection: 'column',
        alignItems: 'flex-end'
    },
    ddProPriceNow: {
        fontSize: getAdaptHeight(16),
        color: '#111111'
    },
    ddProPriceDel: {
        marginTop: 10,
        fontSize: getAdaptHeight(16),
        color: '#a0a0a0'
    },
    ddProHandle: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        paddingTop: 12,
        paddingBottom: 12,
    },
    ddProHandleBtn: {
        marginLeft: 10,
        width: 70,
        height: getAdaptHeight(25),
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: '#959595',
        borderRadius: 2,
        backgroundColor: 'white',
    },
    ddProCommentBtn:{
        borderColor: '#00a0e9',
    },
    ddProHandleBtnText: {
        fontSize: getAdaptHeight(13),
        color: '#111111',
    },
    ddProCommentBtnText: {
        color: '#00a0e9'
    },


});
