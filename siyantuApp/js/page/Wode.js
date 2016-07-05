/*
    我的 - tab标签页
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

export default class Wode extends React.Component{

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

    _onPressWodeSection() {
        alert('press wode section.');
    }

		render() {
        return (
            <View style = {styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>

                    <TouchableHighlight onPress={this._onPressWodeSection} underlayColor = 'rgba(0, 0, 0, 0.3)'>
                        <View style = {styles.wodeHeaderSection}>
                            <View style = {styles.wodePhoto}>
                                <Image source = {require('../../images/common/user_photo.png')} style = {styles.wodePhotoPic} />
                            </View>
                            <View style = {styles.wodeInfo}>
                                <View style = {styles.wodeNameBox}><Text style = {styles.wodeName}>郝杰</Text></View>
                                <View style = {styles.wodeSign}>
                                    <Text style = {styles.wodePhone}>150****8722</Text>
                                    <Image source = {require('../../images/common/icon_phone.png')} style = {styles.wodePhoneImg} />
                                </View>
                            </View>
                            <View style = {styles.wodeRightBtnBox}>
                                <Image source = {require('../../images/common/icon_arrow_right.png')} style = {styles.wodeRightBtnIcon}  />
                            </View>
                        </View>
                    </TouchableHighlight>

                    <View style = {styles.wodeSectionSpaces}></View>

                    <TouchableHighlight onPress={Actions.Login} underlayColor = 'rgba(0, 0, 0, 0.3)'>
                        <View style = {styles.wodeHeaderSection}>
                            <View style = {styles.wodePhoto}>
                                <Image source = {require('../../images/common/user_photo.png')} style = {styles.wodePhotoPic} />
                            </View>
                            <View style = {styles.loginBox}>
                                <View style = {styles.loginNow}>
                                    <Text style = {styles.loginTitle}>立即登录</Text>
                                </View>
                                <View style = {styles.loginTips}>
                                    <Text style = {styles.loginTipsText}>登录后可享受更多特权</Text>
                                </View>
                            </View>
                            <View style = {styles.wodeRightBtnBox}>
                                <Image source = {require('../../images/common/icon_arrow_right.png')} style = {styles.wodeRightBtnIcon}  />
                            </View>
                        </View>
                    </TouchableHighlight>

                    <View style = {styles.wodeSectionSpaces}></View>

                    <TouchableHighlight onPress={this._onPressWodeSection} underlayColor = 'rgba(0, 0, 0, 0.3)'>
                        <View style = {styles.wodeSection}>
                            <View style = {styles.wodeIconBox}>
                                <Image source = {require('../../images/wode/icon_shaidan.png')} style = {styles.shaidanIcon} />
                            </View>
                            <View style = {styles.wodeTitleBox}>
                                <Text style = {styles.wodeTitle}>我的身边、晒单</Text>
                            </View>
                            <View style = {styles.wodeRightBtnBox}>
                                <Image source = {require('../../images/common/icon_arrow_right.png')} style = {styles.wodeRightBtnIcon}  />
                            </View>
                        </View>
                    </TouchableHighlight>

                    <View style = {styles.separaterLine}></View>

                    <TouchableHighlight onPress={this._onPressWodeSection} underlayColor = 'rgba(0, 0, 0, 0.3)'>
                        <View style = {styles.wodeSection}>
                            <View style = {styles.wodeIconBox}>
                                <Image source = {require('../../images/wode/icon_diyongquan.png')} style = {styles.diyongquanIcon} />
                            </View>
                            <View style = {styles.wodeTitleBox}>
                                <Text style = {styles.wodeTitle}>优惠抵用券</Text>
                            </View>
                            <View style = {styles.diyongquanNumsBox}>
                                <Text style = {styles.diyongquanNums}>5张</Text>
                            </View>
                            <View style = {styles.wodeRightBtnBox}>
                                <Image source = {require('../../images/common/icon_arrow_right.png')} style = {styles.wodeRightBtnIcon}  />
                            </View>
                        </View>
                    </TouchableHighlight>

                    <View style = {styles.wodeSectionSpaces}></View>

                    <TouchableHighlight onPress={this._onPressWodeSection} underlayColor = 'rgba(0, 0, 0, 0.3)'>
                        <View style = {styles.wodeSection}>
                            <View style = {styles.wodeIconBox}>
                                <Image source = {require('../../images/wode/icon_shoucang.png')} style = {styles.shoucangIcon} />
                            </View>
                            <View style = {styles.wodeTitleBox}>
                                <Text style = {styles.wodeTitle}>美食收藏家</Text>
                            </View>
                            <View style = {styles.wodeRightBtnBox}>
                                <Image source = {require('../../images/common/icon_arrow_right.png')} style = {styles.wodeRightBtnIcon}  />
                            </View>
                        </View>
                    </TouchableHighlight>

                    <View style = {styles.separaterLine}></View>

                    <TouchableHighlight onPress={this._onPressWodeSection} underlayColor = 'rgba(0, 0, 0, 0.3)'>
                        <View style = {styles.wodeSection}>
                            <View style = {styles.wodeIconBox}>
                                <Image source = {require('../../images/wode/icon_dizhi.png')} style = {styles.dizhiIcon} />
                            </View>
                            <View style = {styles.wodeTitleBox}>
                                <Text style = {styles.wodeTitle}>管理收藏地址</Text>
                            </View>
                            <View style = {styles.wodeRightBtnBox}>
                                <Image source = {require('../../images/common/icon_arrow_right.png')} style = {styles.wodeRightBtnIcon}  />
                            </View>
                        </View>
                    </TouchableHighlight>

                    <View style = {styles.wodeSectionSpaces}></View>

                    <TouchableHighlight onPress={this._onPressWodeSection} underlayColor = 'rgba(0, 0, 0, 0.3)'>
                        <View style = {styles.wodeSection}>
                            <View style = {styles.wodeIconBox}>
                                <Image source = {require('../../images/wode/icon_jifen.png')} style = {styles.jifenIcon} />
                            </View>
                            <View style = {styles.wodeTitleBox}>
                                <Text style = {styles.wodeTitle}>积分商城</Text>
                            </View>
                            <View style = {styles.wodeRightBtnBox}>
                                <Image source = {require('../../images/common/icon_arrow_right.png')} style = {styles.wodeRightBtnIcon}  />
                            </View>
                        </View>
                    </TouchableHighlight>

                    <View style = {styles.separaterLine}></View>

                    <TouchableHighlight onPress={this._onPressWodeSection} underlayColor = 'rgba(0, 0, 0, 0.3)'>
                        <View style = {styles.wodeSection}>
                            <View style = {styles.wodeIconBox}>
                                <Image source = {require('../../images/wode/icon_kefu.png')} style = {styles.kefuIcon} />
                            </View>
                            <View style = {styles.wodeTitleBox}>
                                <Text style = {styles.wodeTitle}>在线客服</Text>
                            </View>
                            <View style = {styles.wodeRightBtnBox}>
                                <Image source = {require('../../images/common/icon_arrow_right.png')} style = {styles.wodeRightBtnIcon}  />
                            </View>
                        </View>
                    </TouchableHighlight>

                    <View style = {styles.wodeSectionSpaces}></View>

                    <View style = {styles.wodeSection}>
                        <View style = {styles.kefuPhoneBox}>
                            <Text style = {styles.kefuPhone}>客服电话：88888888</Text>
                        </View>
                    </View>

                    <View style = {styles.openTimeBox}>
                        <Text style = {styles.openTime}>营业时间：9:00 - 23:00</Text>
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
    shaidanIcon: {
        width: getAdaptWidth(18),
        height: getAdaptHeight(16),
    },
    diyongquanIcon: {
        width: getAdaptWidth(15),
        height: getAdaptHeight(10),
    },
    diyongquanNumsBox: {
        width: 40,
        alignItems: 'flex-end',
        borderWidth: 0,
        borderColor: 'red',
    },
    diyongquanNums: {
        fontSize: getAdaptHeight(13),
        color: '#00a0e9',
    },
    shoucangIcon: {
        width: getAdaptWidth(15),
        height: getAdaptHeight(15),
    },
    dizhiIcon: {
        width: getAdaptWidth(13),
        height: getAdaptHeight(17),
    },
    jifenIcon: {
        width: getAdaptWidth(16),
        height: getAdaptHeight(13),
    },
    kefuIcon: {
        width: getAdaptWidth(17),
        height: getAdaptHeight(15),
    },
    kefuPhoneBox: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    kefuPhone: {
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
