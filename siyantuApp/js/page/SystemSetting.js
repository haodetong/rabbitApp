/*
    设置页
*/
'use strict'
import React from 'react';
import {AppRegistry, Navigator, StyleSheet, ScrollView, TouchableHighlight, Platform, ProgressBarAndroid, ListView, Text, Image, View, Animated} from 'react-native';
import ShenbianCell from '../component/ShenbianCell';
import getAdaptHeight from '../component/getAdaptHeight';
import getAdaptWidth from '../component/getAdaptWidth';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
import Login from './Login'

var LOADING = {};

export default class SystemSetting extends React.Component{

  	//timeoutID: (null: any),

    static defaultProps = {
        //bannerImgInitalHeight: 201//设计图（iphone6 @x2）中为750px * 403px，所以为375dp * 201dp
    };
    static propTypes = {
        //bannerImgInitalHeight: React.PropTypes.number.isRequired
    };

    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
        };
    }

		render() {
        return (
            <View style = {styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>

                    <Button onPress={Actions.pop} containerStyle={styles.BtnContainer} style = {styles.sectionButton}>
                        <View style = {styles.wodeSection}>
                            <View style = {styles.wodeIconBox}>
                                <Image source = {require('../../images/wode/icon_pwd.png')} style = {styles.pwdIcon} />
                            </View>
                            <View style = {styles.wodeTitleBox}>
                                <Text style = {styles.wodeTitle}>密码修改</Text>
                            </View>
                            <View style = {styles.wodeRightBtnBox}>
                                <Image source = {require('../../images/common/icon_arrow_right.png')} style = {styles.wodeRightBtnIcon}  />
                            </View>
                        </View>
                    </Button>

                    <View style = {styles.separaterLine}></View>

                    <Button onPress={Actions.pop} containerStyle={styles.BtnContainer} style = {styles.sectionButton}>
                        <View style = {styles.wodeSection}>
                            <View style = {styles.wodeIconBox}>
                                <Image source = {require('../../images/wode/icon_notice.png')} style = {styles.noticeIcon} />
                            </View>
                            <View style = {styles.wodeTitleBox}>
                                <Text style = {styles.wodeTitle}>晒单动态通知</Text>
                            </View>
                            <View style = {styles.statusBox}>
                                <Text style = {styles.curStatus}>是</Text>
                            </View>
                            <View style = {styles.wodeRightBtnBox}>
                                <Image source = {require('../../images/common/icon_arrow_right.png')} style = {styles.wodeRightBtnIcon}  />
                            </View>
                        </View>
                    </Button>

                    <View style = {styles.wodeSectionSpaces}></View>

                    <Button onPress={Actions.pop} containerStyle={styles.BtnContainer} style = {styles.sectionButton}>
                        <View style = {styles.wodeSection}>
                            <View style = {styles.wodeIconBox}>
                                <Image source = {require('../../images/wode/icon_night.png')} style = {styles.nightIcon} />
                            </View>
                            <View style = {styles.wodeTitleBox}>
                                <Text style = {styles.wodeTitle}>夜间免打扰</Text>
                            </View>
                            <View style = {styles.statusBox}>
                                <Text style = {styles.curStatus}>是</Text>
                            </View>
                            <View style = {styles.wodeRightBtnBox}>
                                <Image source = {require('../../images/common/icon_arrow_right.png')} style = {styles.wodeRightBtnIcon}  />
                            </View>
                        </View>
                    </Button>

                    <View style = {styles.separaterLine}></View>

                    <Button onPress={Actions.pop} containerStyle={styles.BtnContainer} style = {styles.sectionButton}>
                        <View style = {styles.wodeSection}>
                            <View style = {styles.wodeIconBox}>
                                <Image source = {require('../../images/wode/icon_msg.png')} style = {styles.msgIcon} />
                            </View>
                            <View style = {styles.wodeTitleBox}>
                                <Text style = {styles.wodeTitle}>新消息通知</Text>
                            </View>
                            <View style = {styles.statusBox}>
                                <Text style = {styles.curStatus}>震动</Text>
                            </View>
                            <View style = {styles.wodeRightBtnBox}>
                                <Image source = {require('../../images/common/icon_arrow_right.png')} style = {styles.wodeRightBtnIcon}  />
                            </View>
                        </View>
                    </Button>

                    <View style = {styles.wodeSectionSpaces}></View>

                    <View style = {styles.wodeSection}>
                        <View style = {styles.versionBox}>
                            <Text style = {styles.versions}>当前版本：v1.01</Text>
                        </View>
                    </View>

                    <View style = {styles.wodeSectionSpaces}></View>

                    <View style = {styles.wodeSection}>
                        <Button onPress={Actions.pop} containerStyle={styles.logoutBtnContainer} style = {styles.sectionButton}>
                            <View style = {styles.logoutBox}>
                                <Text style = {styles.logout}>退出当前登录</Text>
                            </View>
                        </Button>
                    </View>

                </ScrollView>
            </View>
        )
    }
};

var styles = StyleSheet.create({
  	container:{
  	    flex: 1,
  	    backgroundColor: '#f4f4f4',
  	},
    wodeSectionSpaces: {
        height: getAdaptHeight(12),
    },
    separaterLine: {
        height: 1,
        overflow: 'hidden',
        backgroundColor: '#f4f4f4',
    },
    wodeHeaderSection: {
        flexDirection: 'row',
        paddingTop: getAdaptHeight(18),
        paddingBottom: getAdaptHeight(18),
        paddingLeft: getAdaptWidth(20),
        paddingRight: getAdaptWidth(20),
        backgroundColor: '#ffffff',
    },
    wodeSection: {
        flexDirection: 'row',
        paddingTop: getAdaptHeight(23),
        paddingBottom: getAdaptHeight(23),
        paddingLeft: getAdaptWidth(20),
        paddingRight: getAdaptWidth(20),
        backgroundColor: '#ffffff',
    },
    wodePhoto: {
        alignItems: 'center',
        justifyContent: 'center',
        width: getAdaptWidth(53),
        height: getAdaptHeight(53),
        backgroundColor: '#eeeeee',
        borderRadius: 53,
    },
    wodePhotoPic: {
        width: getAdaptWidth(27),
        height: getAdaptHeight(36),
    },
    wodeInfo: {
        flex:1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginLeft: getAdaptWidth(12),
    },
    wodeNameBox: {
        marginTop: getAdaptHeight(5),
        borderWidth: 0,
        borderColor: 'blue'
    },
    wodeName: {
        color: '#111111',
        fontSize: getAdaptHeight(16),

    },
    wodeSign: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: getAdaptHeight(12),
        borderWidth: 0,
        borderColor: 'green'
    },
    wodePhoneImg: {
        marginLeft: getAdaptWidth(5),
        width: getAdaptWidth(9),
        height: getAdaptHeight(14),
    },
    wodePhone: {
        color: '#8f8f94',
        fontSize: getAdaptHeight(13),
    },
    wodeRightBtnBox: {
        width: 20,
        alignItems: 'flex-end',
        justifyContent: 'center',
        borderWidth: 0,
        borderColor: 'green',
    },
    wodeRightBtnIcon: {
        width: getAdaptWidth(8),
        height: getAdaptHeight(12),
    },
    wodeIconBox: {
        alignItems: 'center',
        justifyContent: 'center',
        width: getAdaptWidth(18),
        borderWidth: 0,
        borderColor: 'red',
    },
    wodeTitleBox: {
        flex:1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginLeft: getAdaptWidth(16),
        borderWidth: 0,
        borderColor: 'red',
    },
    wodeTitle: {
        fontSize: getAdaptHeight(16),
        color: '#111111',
    },

    orderSection: {
        flexDirection: 'row',
        paddingLeft: getAdaptWidth(20),
        paddingRight: getAdaptWidth(20),
        backgroundColor: '#ffffff',
    },
    orderMenusBox: {
        flex: 1, flexDirection: 'row',
        borderWidth: 0, borderColor: 'blue'
    },
    orderBtnContainer: {
        flex: 1,
    },
    orderMenu: {
        flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
        paddingTop: getAdaptHeight(23),
        paddingBottom: getAdaptHeight(23),
        borderWidth: 0, borderColor: 'red'
    },
    orderMenuTit: {
        color: '#111', fontSize: getAdaptHeight(14),
    },
    orderMenuNums: {
        color: '#999', fontSize: getAdaptHeight(14),
    },

    pwdIcon: {
        width: getAdaptWidth(20),
        height: getAdaptHeight(21),
    },
    noticeIcon: {
        width: getAdaptWidth(20),
        height: getAdaptHeight(21),
    },
    statusBox: {
        width: 40,
        alignItems: 'flex-end',
        borderWidth: 0,
        borderColor: 'red',
    },
    curStatus: {
        fontSize: getAdaptHeight(13),
        color: '#00a0e9',
    },
    nightIcon: {
        width: getAdaptWidth(20),
        height: getAdaptHeight(21),
    },
    msgIcon: {
        width: getAdaptWidth(20),
        height: getAdaptHeight(21),
    },
    jifenIcon: {
        width: getAdaptWidth(16),
        height: getAdaptHeight(13),
    },
    kefuIcon: {
        width: getAdaptWidth(17),
        height: getAdaptHeight(15),
    },
    versionBox: {
        flex: 1,
        justifyContent: 'center',
    },
    versions: {
        color: '#00a0e9',
        fontSize: getAdaptHeight(16),
    },
    logoutBtnContainer: {
        flex: 1,
    },
    logoutBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logout: {
        color: '#00a0e9',
        fontSize: getAdaptHeight(16),
    },
    openTimeBox: {
        flex:1,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    openTime: {
        color: '#8f8f94',
        fontSize: getAdaptHeight(12),
    },
    loginBox: {
        flex:1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginLeft: getAdaptWidth(12),
    },
    loginNow: {
        marginTop: getAdaptHeight(5),
        borderWidth: 0,
        borderColor: 'blue'
    },
    loginTitle: {
        color: '#111111',
        fontSize: getAdaptHeight(16),
    },
    loginTips: {
        alignItems: 'center',
        marginTop: getAdaptHeight(12),
        borderWidth: 0,
        borderColor: 'green'
    },
    loginTipsText: {
        color: '#8f8f94',
        fontSize: getAdaptHeight(13),
    },


});
