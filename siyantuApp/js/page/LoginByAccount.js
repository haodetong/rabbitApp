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

export default class LoginByAccount extends React.Component{

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
                        <Text style= {styles.labelTitle}>账号</Text>
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
                        <Text style= {styles.labelTitle}>密码</Text>
                    </View>
                    <View style = {styles.logOpt}>
                        <TextInput
                            style={styles.logPwd}
                            placeholder = '请输入密码'
                        />
                        <Button onPress={Actions.pop} containerStyle={styles.pwdBtnContainer} style = {styles.pwdButton}>
                            <Image source = {require('../../images/common/icon_hidden.png')} style = {styles.pwdIcon} />
                        </Button>
                    </View>
                </View>

                <View style = {styles.forgetPass}>
                    <Button onPress={Actions.pop} containerStyle={styles.forgetPassContainer} style = {styles.forgetPassButton}>
                        <Text style = {styles.forgetpwd}>忘记密码</Text>
                    </Button>
                </View>

                <View style = {styles.logSubmit}>
                    <Button onPress={Actions.pop} containerStyle={styles.logBtnContainer} style = {styles.logButton}>
                        登录
                    </Button>
                </View>

                <View style = {styles.otherLogs}>
                    <View style = {styles.lineThrough}></View>
                </View>

                <View style = {styles.otherHeader}>
                    <Text style = {styles.otherTitle}>第三方账号登录</Text>
                </View>

                <View style = {styles.otherCon}>
                    <Button onPress={Actions.pop} containerStyle={styles.otherBtnContainer} style = {styles.otherButton}>
                        <View style = {styles.otherBox}>
                            <Image source = {require('../../images/login/icon_log_qq.png')} style = {styles.otherIcon} />
                        </View>
                    </Button>
                    <Button onPress={Actions.pop} containerStyle={styles.otherBtnContainer} style = {styles.otherButton}>
                        <View style = {styles.otherBox}>
                            <Image source = {require('../../images/login/icon_log_webchat.png')} style = {styles.otherIcon} />
                        </View>
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
        flex: 1, alignItems: 'flex-start', justifyContent: 'center',
        borderWidth: 0, borderColor: 'red',
    },
    labelTitle: {
      color: '#111111', fontSize: getAdaptHeight(14), fontWeight: '500',
    },
    logOpt: {
        flex: 5, flexDirection: 'row', alignItems: 'center', borderWidth: 0, borderColor: 'green',
    },
    logIphone: {
        flex:1, height: getAdaptHeight(45), fontSize: getAdaptHeight(14), fontWeight: '900', color:'#8f8f94',
        borderWidth: 0, borderColor: 'yellow',
    },

    logPwd: {
        flex:5, height: getAdaptHeight(45), fontSize: getAdaptHeight(14), fontWeight: '900', color:'#8f8f94',
        borderWidth: 0, borderColor: 'yellow',
    },
    pwdBtnContainer: {
        flex:2, alignItems: 'center', justifyContent: 'center', height: getAdaptHeight(45),
        borderWidth: 0, borderColor: 'gray',
    },
    pwdButton: {

    },
    pwdIcon: {
        width: getAdaptHeight(20), height: getAdaptHeight(11),
        borderWidth: 0, borderColor: 'gray',
    },

    forgetPass: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end',
        marginLeft: getAdaptWidth(18), marginRight: getAdaptWidth(18),
        paddingTop: getAdaptHeight(24), paddingBottom: getAdaptHeight(24),
        borderBottomWidth: 0, borderBottomColor: '#adacac',
    },
    forgetPassContainer: {

    },
    forgetPassButton: {

    },
    forgetpwd: {
        color: '#666666', fontSize: getAdaptHeight(12),
    },

    logSubmit: {
      flexDirection: 'row',
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

    otherLogs: {
        justifyContent: 'flex-end',
        height: 30, borderWidth: 0, borderColor: 'red',
    },
    lineThrough: {
        height: 0.5, backgroundColor: '#ccc'
    },
    otherHeader: {
        justifyContent: 'center', alignItems: 'center',
        height: 30, borderWidth: 0, borderColor: 'blue',
    },
    otherTitle: {
        position: 'relative', marginTop: -30,
        paddingLeft: 5, paddingRight: 5,
        color: '#8f8f94', fontSize: getAdaptHeight(11),
    },

    otherCon: {
        flexDirection: 'row', justifyContent: 'center',
    },
    otherBtnContainer: {
        marginLeft: 10, marginRight: 10,
    },
    otherButton: {

    },
    otherBox: {
        justifyContent: 'center', alignItems: 'center',
        width: getAdaptWidth(50), height: getAdaptHeight(50), borderWidth: 1, borderColor: '#ccc',
        borderRadius: 50,
    },
    otherIcon: {
      width: getAdaptWidth(25), height: getAdaptHeight(25),
    },

});
