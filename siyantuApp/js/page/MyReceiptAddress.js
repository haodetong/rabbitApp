/*
    我的 - 标签页 - 管理收货地址
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

var {
  height: deviceHeight,
  width: deviceWidth
} = Dimensions.get("window");

export default class MyReceiptAddress extends React.Component{

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
            <View style={styles.container}>
                <ScrollView vertical = {true} showsVerticalScrollIndicator = {false} directionalLockEnabled = {true} showsHorizontalScrollIndicator = {false}>
                    <View style={styles.addrBox}>
                        <View style={styles.addr}>
                            <View style={styles.userInfo}>
                                <Text style = {styles.userName}>郝杰</Text>
                                <Text style = {styles.userSex}>先生</Text>
                                <Text style = {styles.userPhone}>15020358722</Text>
                            </View>
                            <View style = {styles.receiptAddr}>
                                <Text style = {styles.addrText}>金湾区三灶镇映月星城B座</Text>
                            </View>
                        </View>
                        <View style={styles.addrHandle}>
                            <View style = {styles.selectBox}>
                                <Image source = {require('../../images/wode/icon_selected.png')} style = {styles.addrIcon} />
                                <Text style = {[styles.selectText, styles.selectTextActive]}>默认地址</Text>
                            </View>
                            <View style = {styles.eidtBox}>
                                <Image source = {require('../../images/wode/icon_edit.png')} style = {styles.editIcon} />
                                <Text style = {styles.eidtText}>编辑</Text>
                            </View>
                            <View style = {styles.deleteBox}>
                                <Image source = {require('../../images/wode/icon_delete.png')} style = {styles.deleteIcon} />
                                <Text style = {styles.deleteText}>删除</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.addrBox}>
                        <View style={styles.addr}>
                            <View style={styles.userInfo}>
                                <Text style = {styles.userName}>郝杰</Text>
                                <Text style = {styles.userSex}>先生</Text>
                                <Text style = {styles.userPhone}>15020358722</Text>
                            </View>
                            <View style = {styles.receiptAddr}>
                                <Text style = {styles.addrText}>金湾区三灶镇映月星城B座</Text>
                            </View>
                        </View>
                        <View style={styles.addrHandle}>
                            <View style = {styles.selectBox}>
                                <Image source = {require('../../images/wode/icon_default.png')} style = {styles.addrIcon} />
                                <Text style = {styles.selectText}>默认地址</Text>
                            </View>
                            <View style = {styles.eidtBox}>
                                <Image source = {require('../../images/wode/icon_edit.png')} style = {styles.editIcon} />
                                <Text style = {styles.eidtText}>编辑</Text>
                            </View>
                            <View style = {styles.deleteBox}>
                                <Image source = {require('../../images/wode/icon_delete.png')} style = {styles.deleteIcon} />
                                <Text style = {styles.deleteText}>删除</Text>
                            </View>
                        </View>
                    </View>

                    <View style = {styles.addNewAddrBox}>
                        <Button onPress={Actions.pop} containerStyle={styles.popBtnContainer} style = {styles.popButton}>
                            添加新地址
                        </Button>
                    </View>

                </ScrollView>
            </View>
        );
    }

};

var styles = StyleSheet.create({
  	container: {
        flex:1,
        backgroundColor: '#f4f4f4',
    },



    addrBox: {
        marginBottom: 10, backgroundColor: '#fff',
    },
    addr: {
        paddingLeft: getAdaptWidth(20), paddingRight: getAdaptWidth(20),
        paddingTop: 5, paddingBottom: 5,
    },
    userInfo: {
        flexDirection: 'row',
        paddingTop: 5, paddingBottom: 5,
    },
    userName: {
        flex: 1, color: '#111', fontSize: getAdaptHeight(14),
    },
    userSex: {
        flex: 1, color: '#111', fontSize: getAdaptHeight(14),
    },
    userPhone: {
        flex: 4, textAlign: 'right', color: '#111', fontSize: getAdaptHeight(14),
    },
    receiptAddr: {
        paddingTop: 5, paddingBottom: 5,
    },
    addrText: {
        color: '#626262', fontSize: getAdaptHeight(14),
    },

    addrHandle: {
        flexDirection: 'row',
        paddingLeft: getAdaptWidth(20), paddingRight: getAdaptWidth(20),
        paddingTop: 10, paddingBottom: 10,
        borderTopWidth: 0.5, borderTopColor: '#e5e5e5'
    },
    addrIcon: {
        width: getAdaptWidth(16), height: getAdaptHeight(16),
    },
    editIcon: {
      width: getAdaptWidth(15), height: getAdaptHeight(15),
    },
    deleteIcon: {
      width: getAdaptWidth(15), height: getAdaptHeight(15),
    },
    selectBox: {
        flex: 4, flexDirection: 'row', alignItems: 'center',
    },
    selectText: {
        marginLeft: 5, color: '#626262', fontSize: getAdaptHeight(12),
    },
    selectTextActive: {
        color: '#00a0e9',
    },
    eidtBox: {
        flex: 1, flexDirection: 'row', alignItems: 'center',
    },
    eidtText: {
      marginLeft: 5, color: '#626262', fontSize: getAdaptHeight(12),
    },
    deleteBox: {
        flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end',
    },
    deleteText: {
      marginLeft: 5, color: '#626262', fontSize: getAdaptHeight(12),
    },
    
    addNewAddrBox: {
    },
    popBtnContainer: {
      justifyContent: 'center', alignItems: 'center',
      height: getAdaptHeight(50),
      backgroundColor: '#00a0e9',
    },
    popButton: {
        color: '#fff', fontSize: getAdaptHeight(18),
    },











});
