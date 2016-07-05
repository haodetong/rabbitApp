/*
    产品列表页ProLists.js - 九大分类下 - 产品列表 - Cell
*/
'use strict'
import React from 'react';
import {AppRegistry, Navigator, StyleSheet, TouchableHighlight, TouchableNativeFeedback, Text, Image, PixelRatio, Platform, View, Animated} from 'react-native';
import getImageSource from './getImageSource';
import getAdaptHeight from '../component/getAdaptHeight';
import getAdaptWidth from '../component/getAdaptWidth';
import ProBuyBtns from '../component/ProBuyBtns';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';

export default class ProsItemsCell extends React.Component{
  	render() {
    		var price = this.props.prosData.price;
    		var TouchableElement = TouchableHighlight;

    		if (Platform.OS === 'android') {
    			//
    		};

    		return (
      			<View style = {styles.proCellBox}>
                <Button onPress={Actions.ProductDetails} containerStyle={styles.detailContainer} style = {styles.detailBtn}>
          					<View style = {styles.row}>
            						<Image
              							source = {getImageSource(this.props.prosData, 'imgurl')}
              							style = {styles.cellImage}
            						/>

            						<View style = {styles.textContainer}>
            								<Text style = {styles.proTitle} numberOfLines = {2}>
            										东南亚风味 秘制蜜汁烤鸡 东南亚风味 秘制蜜汁烤鸡 东南亚风味 秘制蜜汁烤鸡
            								</Text>
                            <View style = {styles.prosPriceBox}>
                                <Text style = {styles.priceDel}>￥22.00</Text>
                                <Text style = {styles.priceNow}>￥18.00</Text>
                            </View>
                            <View style = {styles.prosBrandBox}>
                                <Text style = {styles.proBrand}>范师兄</Text>
                            </View>
                            <View style = {styles.prosSaleBox}>
                                <Text style = {styles.proSales}>销量：888</Text>
                            </View>
                            <View style = {styles.proBuy}>
                                <ProBuyBtns />
                            </View>
                        </View>

          					</View>
                </Button>
      			</View>
    		)
  	}
};

var styles = StyleSheet.create({
    proCellBox: {
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: getAdaptHeight(15),
        backgroundColor: 'white',
    },
    cellImage: {
        width: getAdaptWidth(130),
        height: getAdaptHeight(130),
    },
    textContainer: {
        flex: 1,
        flexDirection: 'column',
        marginLeft:getAdaptWidth(10),
        marginRight: getAdaptHeight(10),
    },
    proTitle: {
        fontSize: getAdaptHeight(15),
        fontWeight: '400',
        paddingTop: getAdaptHeight(8),
        paddingBottom: getAdaptHeight(8),
        color: "#111111",
    },

    prosPriceBox: {
        flex: 2,
        flexDirection: 'row',
        marginTop: getAdaptHeight(5),
    },
    priceDel: {
        marginRight: 15,
        fontSize: getAdaptHeight(14),
        fontWeight: '400',
        color: '#a0a0a0',
        textDecorationLine: 'line-through'
    },
    priceNow: {
        fontSize: getAdaptHeight(14),
        fontWeight: '400',
        color: '#e60012',
    },
    prosBrandBox: {
        flex: 2,
        flexDirection: 'column',
        marginTop: getAdaptHeight(5),
        justifyContent: 'space-between'
    },
    proBrand: {
        marginRight:16,
        fontSize: 11,
        color: '#a0a0a0'
    },
    prosSaleBox: {
        flex: 2,
    },
    proSales: {
        fontSize: 10,
        color: '#a0a0a0',
    },
    proBuy: {
        position: 'absolute',
        right: 0,
        bottom: 5,
        width: getAdaptWidth(86),
        borderWidth: 0,
        borderColor: 'green'
    },



});
