/*
    外卖 - 标签页 - 热点推荐列表 - Cell
*/
'use strict'
import React from 'react';
import {AppRegistry, Navigator, StyleSheet, TouchableHighlight, TouchableNativeFeedback, Text, Image, PixelRatio, Platform, View, Animated} from 'react-native';
import getImageSource from './getImageSource';
import getAdaptHeight from '../component/getAdaptHeight';
import getAdaptWidth from '../component/getAdaptWidth';

export default class RecommendCell extends React.Component{
  	render() {
    		var price = this.props.shopData.price;
    		var TouchableElement = TouchableHighlight;

    		if (Platform.OS === 'android') {
    			//
    		};

    		return (
      			<View style = {styles.recHotListBox}>
        				<TouchableElement
          					onPress = {this.props.onSelect}//$$
          					onShowUnderlay = {this.props.onHighlight}
          					onHideUnderlay = {this.props.onUnhighlight}>
          					<View style = {styles.row}>
            						<Image
              							source = {getImageSource(this.props.shopData, 'imgurl')}
              							style = {styles.cellImage}
            						/>

            						<View style = {styles.textContainer}>
            								<Text style = {styles.shopTitle} numberOfLines = {1}>
            										{this.props.shopData.brandname}
            								</Text>
                            <View style = {styles.prosTagsBox}>
                                <View style = {[styles.proTag, styles.proTagGreen]}>
                                    <Text style = {styles.proTagTitle}>香啊</Text>
                                </View>
                                <View style = {[styles.proTag, styles.proTagOrange]}>
                                    <Text style = {styles.proTagTitle}>微辣</Text>
                                </View>
                                <View style = {[styles.proTag, styles.proTagYellow]}>
                                    <Text style = {styles.proTagTitle}>百吃不厌</Text>
                                </View>
                            </View>
                            <View style = {styles.prosPriceBox}>
                                <Text style = {styles.priceDel}>￥22.00</Text>
                                <Text style = {styles.priceNow}>￥18.00</Text>
                            </View>
                            <View style = {styles.prosBrandBox}>
                                <Text style = {styles.proBrand}>范师兄</Text>
                                <Text style = {styles.proSales}>销量：2210</Text>
                            </View>
                            <View style = {styles.prosCommentsBox}>
                                <Text style = {styles.proComment} numberOfLines = {1}>每次必点，我的最爱，希望可以配一点..</Text>
                                <Text style = {styles.proComDetail}>
                                    <Text style = {styles.proComUser}>郝德同</Text>
                                    <Text style = {styles.proComDate}>2016-02-03 12:12</Text>
                                </Text>
                            </View>
                        </View>

          					</View>
        				</TouchableElement>
      			</View>
    		)
  	}
};

var styles = StyleSheet.create({
    recHotListBox: {
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
        marginLeft:getAdaptWidth(10),
        marginRight: getAdaptHeight(10),
    },
    shopTitle: {
        fontSize: getAdaptHeight(15),
        fontWeight: '500',
        marginTop: getAdaptHeight(5),
        color: "#111111",
        fontSize: 15,
    },
    prosTagsBox: {
        flexDirection: 'row',
        marginTop: getAdaptHeight(5)
    },
    proTag: {
        marginRight:4 ,
        paddingLeft: getAdaptWidth(9),
        paddingRight: getAdaptWidth(9),
        height: getAdaptHeight(13),
        borderRadius: getAdaptHeight(13),
        justifyContent: 'center',
        alignItems: 'center',
    },
    proTagGreen: {
        backgroundColor: '#19d167',
    },
    proTagOrange: {
        backgroundColor: '#eb6100',
    },
    proTagYellow: {
        backgroundColor: '#efa600',
    },
    proTagTitle: {
        color: '#ffffff',
        fontSize: 10,
    },
    prosPriceBox: {
        flexDirection: 'row',
        marginTop: getAdaptHeight(5),
    },
    priceDel: {
        marginRight: 15,
        fontSize: getAdaptHeight(12),
        color: '#a0a0a0',
        textDecorationLine: 'line-through'
    },
    priceNow: {
        fontSize: getAdaptHeight(12),
        color: '#e60012',
    },
    prosBrandBox: {
        flexDirection: 'row',
        marginTop: getAdaptHeight(5),
        alignItems:'center',
    },
    proBrand: {
        marginRight:16,
        fontSize: 10,
        color: '#a0a0a0'
    },
    proSales: {
        fontSize: 10,
        color: '#a0a0a0',
    },
    prosCommentsBox: {
        marginTop: getAdaptHeight(5),
        paddingTop: getAdaptHeight(5),
        borderTopWidth: 1,
        borderTopColor: '#e5e5e5'
    },
    proComment: {
        color: '#626262',
        fontSize: 10
    },
    proComDetail: {
        marginTop: getAdaptHeight(5),
        color: '#626262',
        fontSize: 10,
    },
    proComUser: {
        marginRight: 12
    },
    proComDate: {
        marginRight: 1
    },


});
