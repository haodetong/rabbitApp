/*
    登录页
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
import Register from './Register';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import LoginByAccount from './LoginByAccount';
import LoginByPhoneMessage from './LoginByPhoneMessage';

export default class Login extends React.Component{

    static defaultProps = {
    };
    static propTypes = {
    };

    constructor(props){
        super(props);
        this.state = {
            //url: 'http://sports.qq.com/',
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style = {styles.pageBody}>
                    <View style = {styles.logContainer}>
                        <ScrollableTabView
                            style={{marginTop: 0, borderWidth: 0, borderColor: 'red'}}
                            tabBarActiveTextColor = '#00a0e9'
                            tabBarInactiveTextColor = '#666'
                            tabBarTextStyle = {{fontSize: 13}}
                            renderTabBar={() => <DefaultTabBar tabStyle = {{paddingBottom: 0,}} style = {{height: 40,  borderWidth: 0.5, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, borderBottomColor: '#ccc',}} underlineHeight = {2} underlineColor = '#00a0e9' />}
                        >
                            <LoginByAccount tabLabel="账号登录" />
                            <LoginByPhoneMessage tabLabel="短信验证登录" />
                        </ScrollableTabView>
                    </View>
                </View>
                <View style = {styles.pageFooter}>
                    <Button onPress={Actions.Register} containerStyle={styles.regBtnContainer} style = {styles.regButton}>
                        手机快速注册
                    </Button>
                </View>
            </View>
        );
    }

};

var styles = StyleSheet.create({
  	container: {
        flex:1,
        backgroundColor: '#fff',
    },
    pageBody: {
        flex: 9,
        borderWidth: 0, borderColor: 'red',
    },
    pageFooter: {
        flex: 1, marginLeft: getAdaptWidth(18), marginRight: getAdaptWidth(18),
        borderWidth: 0, borderColor: 'red',
    },
    regBtnContainer: {
        alignItems: 'center', justifyContent: 'center',
        height: getAdaptHeight(44), borderWidth: 1, borderColor: '#00a0e9',
        borderRadius: 2,
    },
    regButton: {
        color: '#00a0e9', fontSize: getAdaptHeight(16), fontWeight: '500',
    },
    logContainer: {
        flex: 1, borderWidth: 0, borderColor: 'red'
    },
    logTabStyle: {
        fontSize: getAdaptHeight(14),
    },

});
