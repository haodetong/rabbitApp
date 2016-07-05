/*
    注册页
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


export default class Register extends React.Component{

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
                <View style = {styles.proBody}>

                    <View style = {styles.registItemBox}>
                        <View style = {styles.registLable}>
                            <Text style= {styles.labelTitle}>手机号</Text>
                        </View>
                        <View style = {styles.registOpt}>
                            <TextInput
                                style={styles.registIphone}
                                placeholder = '请输入手机号码'
                            />
                        </View>
                    </View>

                    <View style = {styles.registItemBox}>
                        <View style = {styles.registLable}>
                            <Text style= {styles.labelTitle}>短信验证码</Text>
                        </View>
                        <View style = {styles.registOpt}>
                            <TextInput
                                style={styles.registVeryCode}
                                placeholder = '请输入手机验证码'
                            />
                            <Button onPress={Actions.pop} containerStyle={styles.registBtnContainer} style = {styles.registButton}>
                                获取验证码
                            </Button>
                        </View>
                    </View>

                    <View style = {styles.registItemBox}>
                        <View style = {styles.registLable}>
                            <Text style= {styles.labelTitle}>密码</Text>
                        </View>
                        <View style = {styles.registOpt}>
                            <TextInput
                                style={styles.registPwd}
                                placeholder = '请输入密码'
                            />
                            <Button onPress={Actions.pop} containerStyle={styles.pwdBtnContainer} style = {styles.pwdButton}>
                                <Image source = {require('../../images/common/icon_hidden.png')} style = {styles.pwdIcon} />
                            </Button>
                        </View>
                    </View>

                    <View style = {styles.agreement}>
                        <Text style = {styles.agreeText}>点击完成即同意</Text>
                        <Button onPress={Actions.pop} containerStyle={styles.protocolContainer} style = {styles.protocolButton}>
                            <Text style = {styles.protocols}>《四眼兔用户注册协议》</Text>
                        </Button>
                    </View>

                    <View style = {styles.registerSubmit}>
                        <Button onPress={Actions.pop} containerStyle={styles.regBtnContainer} style = {styles.regButton}>
                            完成注册，进入四眼兔
                        </Button>
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
    registItemBox: {
        flexDirection: 'row',
        marginLeft: getAdaptWidth(18), marginRight: getAdaptWidth(18),
        paddingTop: getAdaptHeight(10), paddingBottom: getAdaptHeight(10),
        borderBottomWidth: 0.5, borderBottomColor: '#adacac',
    },
    registLable: {
        flex: 3, alignItems: 'flex-start', justifyContent: 'center',
        borderWidth: 0, borderColor: 'red',
    },
    labelTitle: {
      color: '#111111', fontSize: getAdaptHeight(14), fontWeight: '500',
    },
    registOpt: {
        flex: 8, flexDirection: 'row', alignItems: 'center', borderWidth: 0, borderColor: 'green',
    },
    registIphone: {
        flex:1, height: getAdaptHeight(45), fontSize: getAdaptHeight(14), fontWeight: '900', color:'#8f8f94',
        borderWidth: 0, borderColor: 'yellow',
    },
    registVeryCode: {
        flex:5, height: getAdaptHeight(45), fontSize: getAdaptHeight(14), fontWeight: '900', color:'#8f8f94',
        borderWidth: 0, borderColor: 'yellow',
    },
    registBtnContainer: {
        flex: 3, alignItems: 'center', justifyContent: 'center', height: getAdaptHeight(35),
        backgroundColor: '#00a0e9', borderRadius: 2,
    },
    registButton: {
        color: '#fffefe', fontSize: getAdaptHeight(13), fontWeight: '300',
    },

    registPwd: {
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

    agreement: {
        flexDirection: 'row', alignItems: 'center',
        marginLeft: getAdaptWidth(18), marginRight: getAdaptWidth(18),
        paddingTop: getAdaptHeight(24), paddingBottom: getAdaptHeight(24),
        borderBottomWidth: 0, borderBottomColor: '#adacac',
    },
    agreeText: {
        color: '#111111', fontSize: getAdaptHeight(12),
    },
    protocolContainer: {

    },
    protocolButton: {

    },
    protocols: {
        color: '#00a0e9', fontSize: getAdaptHeight(12),
    },

    registerSubmit: {
      flexDirection: 'row',
      marginLeft: getAdaptWidth(18), marginRight: getAdaptWidth(18),
      borderBottomWidth: 0, borderBottomColor: '#adacac',
    },
    regBtnContainer: {
        flex: 1,  alignItems: 'center', justifyContent: 'center',
        height: getAdaptHeight(44), backgroundColor: '#00a0e9',
        borderRadius: 2,
    },
    regButton: {
        color: '#ffffff', fontSize: getAdaptHeight(16), fontWeight: '500',
    },

});
