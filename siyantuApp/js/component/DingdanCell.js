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
import { Actions } from 'react-native-router-flux';

export default class DingdanCell extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            status: this.props.orderStatus
        };
    }

  	render() {

    		var TouchableElement = TouchableHighlight;

    		if (Platform.OS === 'android') {
    			//
    		};

    		return (
      			<View style = {styles.dingdanListBox}>
      					<View style = {styles.row}>

                    <View style = {styles.ddHeader}>
                        <View style = {styles.ddShop}>
                            <Image source = {require('../../images/dingdan/dingdan_shopLogo.png')} style = {styles.ddShopLogo} />
                            <Text style = {styles.ddShopName}>四眼兔体验店（三灶店）</Text>
                        </View>
                        <View style = {styles.ddSendStatus}>
                          <Text style = {styles.ddStatusText}>待付款</Text>
                        </View>
                    </View>

                    <Button onPress={Actions.dingdanMore} containerStyle={styles.ddMoreContainer} style = {styles.ddMoreButton}>
                        <View style = {styles.ddProduct}>
                            <View style = {styles.ddProImgBox}>
                                <Image source = {require('../../images/dingdan/dingdan_product.png')} style = {styles.ddProImg} />
                            </View>
                            <View style = {styles.ddProImgBox}>
                                <Image source = {require('../../images/dingdan/dingdan_product.png')} style = {styles.ddProImg} />
                            </View>
                            <View style = {styles.ddProImgBox}>
                                <Image source = {require('../../images/dingdan/dingdan_product.png')} style = {styles.ddProImg} />
                            </View>
                            <View style = {styles.ddProMoreBox}>
                                <Image source = {require('../../images/dingdan/icon_big_arrow_right.png')} style = {styles.proMoreIcon} />
                            </View>
                        </View>
                    </Button>

                    <View style = {styles.ddProCalc}>
                        <Text style = {styles.ddProNums}>4件商品</Text>
                        <Text style = {styles.ddProPrice}>总计：</Text>
                        <Text style = {styles.ddProCost}>￥36.00</Text>
                    </View>

                    <View style = {styles.ddProHandle}>
                        <Button onPress = {Actions.OrderCancel} containerStyle={styles.ddProHandleBtn} style={styles.ddProHandleBtnText}>申请取消</Button>
                        <Button containerStyle={styles.ddProHandleBtn} style={styles.ddProHandleBtnText}>立即支付</Button>
                    </View>

      					</View>
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
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: "#fafafa",
    },
    ddProImgBox: {
        marginLeft: getAdaptWidth(10),
        width: getAdaptWidth(75),
        height: getAdaptHeight(75),
    },
    ddProImg: {
        width: getAdaptWidth(75),
        height: getAdaptHeight(75),
    },
    ddProMoreBox: {
        flex: 1, justifyContent: 'center', alignItems: 'flex-end',
        borderWidth: 0, borderColor: 'red',
    },
    proMoreIcon: {
        marginRight: getAdaptWidth(10), width: getAdaptWidth(13), height: getAdaptHeight(23),
    },

    ddProCalc: {
        flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center',
        marginTop: getAdaptHeight(10), paddingTop: getAdaptHeight(10), paddingBottom: getAdaptHeight(10),
        borderTopWidth: 0.5, borderTopColor: '#e5e5e5',
    },
    ddProNums: {
        color: '#111', fontSize: getAdaptHeight(13),
    },
    ddProPrice: {
        marginLeft: getAdaptWidth(10), color: '#111', fontSize: getAdaptHeight(13),
    },
    ddProCost: {
        color: '#e60012', fontSize: getAdaptHeight(16), fontWeight: '400',
    },


    ddProHandle: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end',
        paddingBottom: getAdaptHeight(10),
    },
    ddProHandleBtn: {
        marginLeft: 10,
        width: 70,
        height: getAdaptHeight(25),
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: '#00a0e9',
        borderRadius: 2,
        backgroundColor: 'white',
    },
    ddProHandleBtnText: {
        fontSize: getAdaptHeight(13),
        color: '#00a0e9',
    },







});
