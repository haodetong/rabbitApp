/*
    九大分类 - 产品列表页
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


export default class ProBuyBtns extends React.Component{

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
            <View style={styles.buyBtnsBox}>
                <View style = {styles.delBtnBox}>
                    <Text style = {styles.delBtn}>-</Text>
                </View>
                <View style = {styles.buyNumsBox}>
                    <Text style = {styles.buyNums}>1</Text>
                </View>
                <View style = {styles.addBtnBox}>
                    <Text style = {styles.addBtn}>+</Text>
                </View>
            </View>
        );
    }

};

var styles = StyleSheet.create({
  	buyBtnsBox: {
        flex: 1, flexDirection: 'row',
    },
    delBtnBox: {
        alignItems: 'center', justifyContent: 'flex-end',
        width: getAdaptWidth(28), height: getAdaptHeight(28),
        borderRadius: 28, borderWidth: 1, borderColor: '#cccccc',
    },
    delBtn: {
        color: '#8f8f96', fontSize: getAdaptHeight(26),
        fontWeight: '400', backgroundColor: 'transparent',
    },
    buyNumsBox: {
        flex: 1, alignItems: 'center', justifyContent: 'center',
    },
    buyNums: {
        color: '#111111', fontSize: getAdaptHeight(17),
    },
    addBtnBox: {
        alignItems: 'center', justifyContent: 'flex-end',
        width:getAdaptWidth(28), height: getAdaptHeight(28),
        borderRadius: 28, borderWidth: 1, borderColor: '#cccccc',
    },
    addBtn: {
        color: '#8f8f96', fontSize: getAdaptHeight(26),
        fontWeight: '400', backgroundColor: 'transparent',
    },
});
