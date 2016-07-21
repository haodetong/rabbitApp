/*
    我的 - 标签页 - 我的抵用券页
*/
'use strict'
import React, { Component } from 'react';
import {
    AppRegistry,
    Navigator,
    StyleSheet,
    ScrollView,
    Text,
    View,
    Image,
    TextInput,
    TabBarIOS,
    StatusBarIOS,
    PixelRatio,
    Platform,
    Dimensions
} from 'react-native';
import getAdaptHeight from '../component/getAdaptHeight';
import getAdaptWidth from '../component/getAdaptWidth';

import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';

var {
  height: deviceHeight,
  width: deviceWidth
} = Dimensions.get("window");

export default class MyCoupon extends React.Component{

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

    render() {
        return (
            <View style={styles.container}>
                <ScrollView vertical = {true} showsVerticalScrollIndicator = {false} directionalLockEnabled = {true} showsHorizontalScrollIndicator = {false}>
                    <View style={styles.couponBox}>

                        <View style={styles.couponItem}>
                            <View style={styles.couponContent}>
                                <Text style = {styles.couponTitle}>抵金券</Text>
                                <Text style = {styles.couponDate}>有效期至：2016-06-14</Text>
                            </View>
                            <View style={styles.couponSide}>
                                <View style={styles.couponImg}>
                                    <Image source = {require('../../images/wode/bg_coupon.png')} style = {styles.cpPic}  />
                                </View>
                                <View style={styles.couponPrice}>
                                    <Text style = {styles.priceText}>￥3.00</Text>
                                </View>
                                <View style={styles.couponOption}>
                                    <Text style = {styles.optText}>满20可用</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.couponItem}>
                            <View style={styles.couponContent}>
                                <Text style = {styles.couponTitle}>抵金券</Text>
                                <Text style = {styles.couponDate}>有效期至：2016-06-14</Text>
                            </View>
                            <View style={styles.couponSide}>
                                <View style={styles.couponImg}>
                                    <Image source = {require('../../images/wode/bg_coupon.png')} style = {styles.cpPic}  />
                                </View>
                                <View style={styles.couponPrice}>
                                    <Text style = {styles.priceText}>￥3.00</Text>
                                </View>
                                <View style={styles.couponOption}>
                                    <Text style = {styles.optText}>满20可用</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.couponItem}>
                            <View style={styles.couponContent}>
                                <Text style = {styles.couponTitle}>抵金券</Text>
                                <Text style = {styles.couponDate}>有效期至：2016-06-14</Text>
                                <Image source = {require('../../images/wode/flag_used.png')} style = {styles.flagUsed}  />
                            </View>
                            <View style={styles.couponSide}>
                                <View style={styles.couponImg}>
                                    <Image source = {require('../../images/wode/icon_coupon_uneffect.png')} style = {styles.cpPic}  />
                                </View>
                                <View style={styles.couponPrice}>
                                    <Text style = {[styles.priceText, styles.priceUsed]}>￥3.00</Text>
                                </View>
                                <View style={styles.couponOption}>
                                    <Text style = {[styles.optText, styles.optUsed]}>满20可用</Text>
                                </View>
                            </View>
                        </View>

                    </View>
                </ScrollView>
            </View>
        );
    }

};

var styles = StyleSheet.create({
  	container: {
        flex:1,
        backgroundColor: '#f4f4f4',
    },

    couponBox: {
      paddingLeft: getAdaptWidth(20),
      paddingRight: getAdaptWidth(20),
    },
    couponItem: {
      flexDirection: 'row',
      marginTop: 10,
      height: getAdaptHeight(77),
      backgroundColor: '#fff',
    },
    couponContent: {
        flex: 1,
    },
    couponTitle: {
      marginLeft: 10,
        color: '#111', fontSize: getAdaptHeight(16), lineHeight: 28,
    },
    couponDate: {
      marginLeft: 10,
      color: '#8e8e93', fontSize: getAdaptHeight(12), lineHeight: 22,
    },
    couponSide: {
        width: getAdaptWidth(145), height: getAdaptHeight(77),
    },
    couponImg: {
        flex: 1,
    },
    cpPic: {
      width: getAdaptWidth(145), height: getAdaptHeight(77),
    },
    couponPrice: {
        position: 'absolute', top: 10, right: 10,
        borderWidth: 0,
        borderColor: 'blue'
    },
    priceText: {
        color: '#fff', fontSize: getAdaptHeight(28), fontWeight: '400', lineHeight: 24,
        backgroundColor: 'transparent',
    },
    priceUsed: {
        color: '#5f5f5f',
    },
    couponOption: {
      position: 'absolute', bottom: 10, right: 10,
      borderWidth: 0,
      borderColor: 'blue'
    },
    optText: {
      color: '#fff', fontSize: getAdaptHeight(15), fontWeight: '400', lineHeight: 20,
      backgroundColor: 'transparent',
    },
    optUsed: {
      color: '#5f5f5f',
    },
    flagUsed: {
      position: 'absolute', top: 10, right: 5,
      width: getAdaptWidth(46), height: getAdaptHeight(46),
    },



});
