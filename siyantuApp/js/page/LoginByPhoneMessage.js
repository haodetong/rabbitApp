/*
    登录页 - 账号登录标签页
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

export default class LoginByPhoneMessage extends React.Component{

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
            <View style = {styles.proBody}>

                <View style = {styles.logItemBox}>
                    <View style = {styles.logLable}>
                        <Text style= {styles.labelTitle}>手机号</Text>
                    </View>
                    <View style = {styles.logOpt}>
                        <TextInput
                            style={styles.logIphone}
                            placeholder = '请输入手机号码'
                        />
                    </View>
                </View>

                <View style = {styles.logItemBox}>
                    <View style = {styles.logLable}>
                        <Text style= {styles.labelTitle}>短信验证码</Text>
                    </View>
                    <View style = {styles.logOpt}>
                        <TextInput
                            style={styles.logVeryCode}
                            placeholder = '请输入手机验证码'
                        />
                        <Button onPress={Actions.pop} containerStyle={styles.veryBtnContainer} style = {styles.veryButton}>
                            获取验证码
                        </Button>
                    </View>
                </View>

                <View style = {styles.logSubmit}>
                    <Button onPress={Actions.pop} containerStyle={styles.logBtnContainer} style = {styles.logButton}>
                        验证并登录
                    </Button>
                </View>

            </View>
        );
    }

};

var styles = StyleSheet.create({
  	container: {
        flex:1, flexDirection:'column',
    },
    proBody: {
        flex: 1,
        borderWidth: 0, borderColor: 'red',
    },
    logItemBox: {
        flexDirection: 'row',
        marginLeft: getAdaptWidth(18), marginRight: getAdaptWidth(18),
        paddingTop: getAdaptHeight(10), paddingBottom: getAdaptHeight(10),
        borderBottomWidth: 0.5, borderBottomColor: '#adacac',
    },
    logLable: {
        flex: 3, alignItems: 'flex-start', justifyContent: 'center',
        borderWidth: 0, borderColor: 'red',
    },
    labelTitle: {
      color: '#111111', fontSize: getAdaptHeight(14), fontWeight: '500',
    },
    logOpt: {
        flex: 8, flexDirection: 'row', alignItems: 'center', borderWidth: 0, borderColor: 'green',
    },
    logIphone: {
        flex:1, height: getAdaptHeight(45), fontSize: getAdaptHeight(14), fontWeight: '900', color:'#8f8f94',
        borderWidth: 0, borderColor: 'yellow',
    },

    logVeryCode: {
        flex:5, height: getAdaptHeight(45), fontSize: getAdaptHeight(14), fontWeight: '900', color:'#8f8f94',
        borderWidth: 0, borderColor: 'yellow',
    },
    veryBtnContainer: {
        flex: 3, alignItems: 'center', justifyContent: 'center', height: getAdaptHeight(35),
        backgroundColor: '#00a0e9', borderRadius: 2,
    },
    veryButton: {
        color: '#fffefe', fontSize: getAdaptHeight(13), fontWeight: '300',
    },


    logSubmit: {
      flexDirection: 'row',
      marginTop: getAdaptHeight(30),
      marginLeft: getAdaptWidth(18), marginRight: getAdaptWidth(18),
      borderBottomWidth: 0, borderBottomColor: '#adacac',
    },
    logBtnContainer: {
        flex: 1,  alignItems: 'center', justifyContent: 'center',
        height: getAdaptHeight(44), backgroundColor: '#00a0e9',
        borderRadius: 2,
    },
    logButton: {
        color: '#ffffff', fontSize: getAdaptHeight(16), fontWeight: '500',
    },



});
