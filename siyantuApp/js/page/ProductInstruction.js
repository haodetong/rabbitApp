/*
    商品介绍页
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
    Dimensions,
    WebView,
} from 'react-native';
import getAdaptHeight from '../component/getAdaptHeight';
import getAdaptWidth from '../component/getAdaptWidth';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';


export default class ProductInstruction extends React.Component{

    static defaultProps = {
    };
    static propTypes = {
    };

    constructor(props){
        super(props);
        this.state = {
            url: 'http://sports.qq.com/',
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style = {styles.proBody}>

                        <View style = {styles.proTitleBox}>
                            <Text style = {styles.proTitle} numberOfLines = {2}>
                                东南亚风味 秘制蜜汁烤鸡翼每天限量50份，售罄为止，美味得辣 东南亚特制
                            </Text>
                        </View>

                        <View style = {styles.proIntroCon}>
                            <WebView
                              ref='webview'
                              automaticallyAdjustContentInsets={false}
                              style={styles.webView}
                              source={{uri: this.state.url}}
                              javaScriptEnabled={true}
                              domStorageEnabled={true}
                              decelerationRate="normal"
                              startInLoadingState={true}
                              scalesPageToFit={true}
                            />
                        </View>

                </View>

            </View>
        );
    }

};

var styles = StyleSheet.create({
  	container: {
        flex:1,
        backgroundColor: '#f4f4f4',
    },
    proBody: {
        flex: 1,
        borderWidth: 0, borderColor: 'red',
    },
    proTitleBox: {
        paddingLeft: getAdaptWidth(18), paddingRight: getAdaptWidth(18),
        paddingTop: getAdaptHeight(18),
    },
    proTitle: {
        color: '#111111', fontSize: getAdaptHeight(15),
    },
    proIntroCon: {
        flex: 1, borderWidth: 0, borderColor: 'blue',
        paddingLeft: getAdaptWidth(18), paddingRight: getAdaptWidth(18),
        paddingTop: getAdaptHeight(18), paddingBottom: getAdaptHeight(18),
    },
    webView: {
        backgroundColor: '#f4f4f4',
    },
});
