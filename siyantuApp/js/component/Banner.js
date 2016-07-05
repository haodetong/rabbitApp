/*
    头部 - banner
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

export default class Banner extends React.Component{

    static defaultProps = {

    };
    static propTypes = {

    };

    constructor(props){
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <View style = {styles.bannerbox}>
                <View style = {styles.bannerImgWrap}>
                    <Image style = {styles.bannerImg} source={require('../../images/waimai/bg_banner.png')}/>
                </View>
            </View>
        );
    }

};

var styles = StyleSheet.create({
    bannerbox: {
        borderWidth:0, borderColor:'#ff0000',
    },
    bannerImgWrap:{
        flex:1,flexDirection:'row'
    },
    bannerImg: {
        flex:1, resizeMode: Image.resizeMode.stretch, height:getAdaptHeight(201)
    },
});
