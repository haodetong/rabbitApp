/*
    订单 - 订单详情页
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
} from 'react-native';
import getAdaptHeight from '../component/getAdaptHeight';
import getAdaptWidth from '../component/getAdaptWidth';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';


export default class DingdanDetail extends React.Component{

    static defaultProps = {
    };
    static propTypes = {
    };

    constructor(props){
        super(props);
        this.state = {
            //isSelected: false,
        };
    }

    _pickerToggle(){
        this.picker.toggle();
    }

    render() {
        return (
            <View style={styles.container}>

                <View style = {styles.proBody}>
                    <ScrollView vertical = {true} showsVerticalScrollIndicator = {false} directionalLockEnabled = {true} showsHorizontalScrollIndicator = {false}>
                        <View style = {styles.detailBox}>
                            <View style = {styles.shopBox}>
                                <View style = {styles.shopHeader}>
                                    <Image source = {require('../../images/common/icon_rabbit_blue.png')} style = {styles.shopLogs} />
                                    <Text style = {styles.shopName}>四眼兔体验店（三灶店）</Text>
                                </View>
                                <View style = {styles.prosLists}>
                                    <View style = {styles.prosItem}>
                                        <View style = {styles.prosPic}>
                                            <Image source = {require('../../images/common/product_pic.png')} style = {styles.proImg} />
                                        </View>
                                        <View style = {styles.prosCon}>
                                            <View style = {styles.proTitleBox}>
                                                <Text style = {styles.proTitle}>东南亚风味 秘制蜜汁烤鸡</Text>
                                            </View>
                                            <View style = {styles.proInfoBox}>
                                                <Text style = {styles.proNums}>×2</Text>
                                                <Text style = {styles.proCosts}>￥18.00</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style = {styles.prosItem}>
                                        <View style = {styles.prosPic}>
                                            <Image source = {require('../../images/common/product_pic.png')} style = {styles.proImg} />
                                        </View>
                                        <View style = {styles.prosCon}>
                                            <View style = {styles.proTitleBox}>
                                                <Text style = {styles.proTitle}>东南亚风味 秘制蜜汁烤鸡</Text>
                                            </View>
                                            <View style = {styles.proInfoBox}>
                                                <Text style = {styles.proNums}>×2</Text>
                                                <Text style = {styles.proCosts}>￥18.00</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style = {styles.prosItem}>
                                        <View style = {styles.prosPic}>
                                            <Image source = {require('../../images/common/product_pic.png')} style = {styles.proImg} />
                                        </View>
                                        <View style = {styles.prosCon}>
                                            <View style = {styles.proTitleBox}>
                                                <Text style = {styles.proTitle}>东南亚风味 秘制蜜汁烤鸡</Text>
                                            </View>
                                            <View style = {styles.proInfoBox}>
                                                <Text style = {styles.proNums}>×2</Text>
                                                <Text style = {styles.proCosts}>￥18.00</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style = {styles.sendInfoBox}>
                            <View style = {styles.sendBox}>
                                <View style = {styles.shopHeader}>
                                    <Image source = {require('../../images/common/icon_send.png')} style = {styles.iconSend} />
                                    <Text style = {styles.headerName}>配送信息</Text>
                                </View>
                                <View style = {styles.sendSection}>
                                    <View style = {styles.sendLists}>
                                        <View style = {styles.sendLabelBox}>
                                            <Text style = {styles.sendLabel}>期望时间：</Text>
                                        </View>
                                        <View style = {styles.sendConBox}>
                                            <Text style = {styles.sendCon}>立即配送</Text>
                                        </View>
                                    </View>
                                    <View style = {styles.sendLists}>
                                        <View style = {styles.sendLabelBox}>
                                            <Text style = {styles.sendLabel}>配送地址：</Text>
                                        </View>
                                        <View style = {styles.sendConBox}>
                                            <View style = {styles.sendUser}>
                                                <Text style = {styles.userName}>郝杰</Text>
                                                <Text style = {styles.userSex}>先生</Text>
                                                <Text style = {styles.userPhone}>15020358722</Text>
                                            </View>
                                            <View style = {styles.sendAddrBox}>
                                                <Text style = {styles.sendAddr}>金湾区三灶镇映月星城B座1301</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style = {styles.sendLists}>
                                        <View style = {styles.sendLabelBox}>
                                            <Text style = {styles.sendLabel}>配送服务：</Text>
                                        </View>
                                        <View style = {styles.sendConBox}>
                                            <Text style = {styles.sendCon}>四眼兔专送</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style = {styles.sendInfoBox}>
                            <View style = {styles.sendBox}>
                                <View style = {styles.shopHeader}>
                                    <Image source = {require('../../images/common/icon_order.png')} style = {styles.iconOrder} />
                                    <Text style = {styles.headerName}>订单信息</Text>
                                </View>
                                <View style = {styles.sendSection}>
                                    <View style = {styles.sendLists}>
                                        <View style = {styles.sendLabelBox}>
                                            <Text style = {styles.sendLabel}>订单编号：</Text>
                                        </View>
                                        <View style = {styles.sendConBox}>
                                            <Text style = {styles.sendCon}>1122666688888</Text>
                                        </View>
                                    </View>
                                    <View style = {styles.sendLists}>
                                        <View style = {styles.sendLabelBox}>
                                            <Text style = {styles.sendLabel}>下单时间：</Text>
                                        </View>
                                        <View style = {styles.sendConBox}>
                                            <Text style = {styles.sendCon}>2016-7-11 10:52:33</Text>
                                        </View>
                                    </View>
                                    <View style = {styles.sendLists}>
                                        <View style = {styles.sendLabelBox}>
                                            <Text style = {styles.sendLabel}>支付方式：</Text>
                                        </View>
                                        <View style = {styles.sendConBox}>
                                            <Text style = {styles.sendCon}>货到付款</Text>
                                        </View>
                                    </View>
                                    <View style = {styles.sendLists}>
                                        <View style = {styles.sendLabelBox}>
                                            <Text style = {styles.sendLabel}>商品总额</Text>
                                        </View>
                                        <View style = {styles.sendConBox}>
                                            <Text style = {styles.sendCon02}>￥11</Text>
                                        </View>
                                    </View>
                                    <View style = {styles.sendLists}>
                                        <View style = {styles.sendLabelBox}>
                                            <Text style = {styles.sendLabel}>打包费</Text>
                                        </View>
                                        <View style = {styles.sendConBox}>
                                            <Text style = {styles.sendCon02}>￥3</Text>
                                        </View>
                                    </View>
                                    <View style = {styles.sendLists}>
                                        <View style = {styles.sendLabelBox}>
                                            <Text style = {styles.sendLabel}>配送费</Text>
                                        </View>
                                        <View style = {styles.sendConBox}>
                                            <Text style = {styles.sendCon02}>￥5</Text>
                                        </View>
                                    </View>
                                    <View style = {styles.sendLists}>
                                        <View style = {styles.sendLabelBox}>
                                            <Text style = {styles.sendLabel}>优惠减免</Text>
                                        </View>
                                        <View style = {styles.sendConBox}>
                                            <Text style = {styles.sendCon02}>-￥5</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style = {styles.calculatorBox}>
                            <View style = {styles.calBox}>
                                <Text style = {styles.priceLabel}>实付款：</Text>
                                <Text style = {styles.priceNums}>￥200.00</Text>
                            </View>
                            <View style = {styles.calBox}>
                                <Text style = {styles.priceLabel}>付款时间：</Text>
                                <Text style = {styles.priceTime}>2016-7-11 11:18:20</Text>
                            </View>
                        </View>

                    </ScrollView>
                </View>

                <View style = {styles.proFooter}>
                    <View style = {styles.ddProHandle}>
                        <Button containerStyle={styles.ddProHandleBtn} style={styles.ddProHandleBtnText}>再来一单</Button>
                        <Button onPress={Actions.Comment} containerStyle={[styles.ddProHandleBtn, styles.ddProCommentBtn]} style={[styles.ddProHandleBtnText,styles.ddProCommentBtnText]}>评价晒单</Button>
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
        flex: 1, marginBottom: getAdaptHeight(50),
        borderWidth: 0, borderColor: 'red',
    },
    proFooter: {
        position: 'absolute', bottom: 0, left: 0,
        width: Dimensions.get('window').width, height: getAdaptHeight(50),
        borderTopWidth: 0.5, borderTopColor: '#cccccc', backgroundColor: '#fff',
    },

    detailBox: {
        flex: 1,
        borderWidth: 0, borderColor: 'blue',
    },

    shopBox: {
        paddingLeft: getAdaptWidth(20), paddingRight: getAdaptWidth(20),
        backgroundColor: '#fff',
    },
    shopHeader: {
        flexDirection: 'row', alignItems: 'center',
        paddingTop: getAdaptHeight(18), paddingBottom: getAdaptHeight(2),
    },
    shopLogs: {
        width: getAdaptWidth(10), height: getAdaptHeight(15),
    },
    shopName: {
        marginLeft: 6, color: '#111', fontSize: getAdaptHeight(14),
    },
    prosLists: {
        borderWidth: 0, borderColor: 'red',
    },
    prosItem: {
        flexDirection: 'row',
        paddingTop: getAdaptHeight(10), paddingBottom: getAdaptHeight(10),
        borderBottomWidth: 0.5, borderBottomColor: '#e5e5e5'
    },
    prosPic: {
        width: getAdaptWidth(75),
    },
    proImg: {
        width: getAdaptWidth(75), height: getAdaptHeight(75),
    },
    prosCon: {
        flex: 1, flexDirection: 'column', marginLeft: getAdaptWidth(15),
    },
    proTitleBox: {
        flex: 1,
        paddingTop: getAdaptHeight(4), paddingBottom: getAdaptHeight(4),
    },

    proTitle: {
        color: '#606060', fontSize: getAdaptHeight(14),
    },
    proInfoBox: {
        flex: 1, flexDirection: 'row', alignItems: 'flex-end',
        paddingTop: getAdaptHeight(4), paddingBottom: getAdaptHeight(4),
    },
    proNums: {
        flex: 1, color: '#606060', fontSize: getAdaptHeight(14),
    },
    proCosts: {
        flex: 1, textAlign: 'right', color: '#00a0e9', fontSize: getAdaptHeight(14),
    },

    sendInfoBox: {
        flex: 1, marginTop: getAdaptHeight(10),
        borderWidth: 0, borderColor: 'blue',
    },
    sendBox: {
        paddingLeft: getAdaptWidth(20), paddingRight: getAdaptWidth(20),
        backgroundColor: '#fff',
    },
    iconSend: {
        width: getAdaptWidth(19), height: getAdaptHeight(14),
    },
    headerName: {
        marginLeft: 6, color: '#111', fontSize: getAdaptHeight(14),
    },



    sendSection: {
        paddingBottom: 15,
    },
    sendLists: {
        flexDirection: 'row',
    },
    sendLabelBox: {
        flex: 1,
    },
    sendLabel: {
        color: '#606060', fontSize: getAdaptHeight(14), textAlign: 'left', lineHeight: 24,
    },
    sendConBox: {
        flex: 3, paddingLeft: 5,
    },
    sendCon: {
      flexDirection: 'column',
      color: '#606060', fontSize: getAdaptHeight(14), textAlign: 'left', lineHeight: 24,
    },
    sendUser: {
        flexDirection: 'row',
    },
    userName: {
      color: '#606060', fontSize: getAdaptHeight(14), lineHeight: 24,

    },
    userSex: {
        marginLeft: 10,
      color: '#606060', fontSize: getAdaptHeight(14), lineHeight: 24,

    },
    userPhone: {
      marginLeft: 10,
      color: '#606060', fontSize: getAdaptHeight(14), lineHeight: 24,

    },
    sendAddrBox: {

    },
    sendAddr: {
      color: '#606060', fontSize: getAdaptHeight(14), lineHeight: 24,

    },

    iconOrder: {
        width: getAdaptWidth(11), height: getAdaptHeight(14),
    },
    sendCon02: {
        color: '#00a0e9', fontSize: getAdaptHeight(14), textAlign: 'right', lineHeight: 24,
    },


    calculatorBox: {
        paddingTop: 10, paddingBottom: 15,
        paddingLeft: getAdaptWidth(20), paddingRight: getAdaptWidth(20),
    },
    calBox: {
        flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center',
    },
    priceLabel: {
        color: '#8f8f94', fontSize: getAdaptHeight(14), lineHeight: 24,
    },
    priceNums: {
      color: '#00a0e9', fontSize: getAdaptHeight(18), lineHeight: 24,

    },
    priceTime: {
      color: '#8f8f94', fontSize: getAdaptHeight(14), lineHeight: 24,
    },

    ddProHandle: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        paddingTop: 12,
        paddingBottom: 12,
    },
    ddProHandleBtn: {
        marginRight: 10,
        width: 70,
        height: getAdaptHeight(25),
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: '#959595',
        borderRadius: 2,
        backgroundColor: 'white',
    },
    ddProCommentBtn:{
        borderColor: '#00a0e9',
    },
    ddProHandleBtnText: {
        fontSize: getAdaptHeight(13),
        color: '#111111',
    },
    ddProCommentBtnText: {
        color: '#00a0e9'
    },



});
