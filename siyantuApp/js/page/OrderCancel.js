/*
    申请取消订单页
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


export default class OrderCancel extends React.Component{

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
                        <View style = {styles.cancelBox}>

                            <View style = {styles.cancelHeader}>
                                <Image source = {require('../../images/dingdan/icon_warn.png')} style = {styles.reasionIcon} />
                                <Text style = {styles.reasonText}>选择原因</Text>
                            </View>

                            <View style = {styles.cancelTags}>
                                <View style = {styles.tagRow}>
                                    <View style = {[styles.tagBox, styles.tagBoxActive]}>
                                        <Text style = {[styles.tagText, styles.tagTextActive]}>物流太慢</Text>
                                    </View>
                                    <View style = {styles.tagBox}>
                                        <Text style = {styles.tagText}>质量太差</Text>
                                    </View>
                                    <View style = {styles.tagBox}>
                                        <Text style = {styles.tagText}>态度恶劣</Text>
                                    </View>
                                </View>
                                <View style = {styles.tagRow}>
                                    <View style = {styles.tagBox}>
                                        <Text style = {styles.tagText}>商品损坏</Text>
                                    </View>
                                    <View style = {styles.tagBox}>
                                        <Text style = {styles.tagText}>实际不符</Text>
                                    </View>
                                    <View style = {styles.tagBox}>
                                        <Text style = {styles.tagText}>服务不好</Text>
                                    </View>
                                </View>
                            </View>

                            <View style = {styles.cancelShare}>
                                <TextInput
                                    style={styles.cancelInput}
                                    placeholder = '请输入您申请取消的原因'
                                    placeholderTextColor = '#ccc'
                                    maxLength = {100}
                                    multiline = {true}
                                    numberOfLines = {5}
                                />
                                <Text style = {styles.cancelLimit}>100</Text>
                            </View>

                            <View style = {styles.cancelCamara}>
                                <View style = {styles.camaraBox}>
                                    <Image source = {require('../../images/dingdan/icon_camara.png')} style = {styles.camaraIcon} />
                                </View>
                            </View>

                            <View style = {styles.btnBox}>
                                <Button onPress={Actions.pop} containerStyle={styles.BtnContainer} style = {styles.subButton}>
                                    提交申请
                                </Button>
                            </View>

                        </View>
                    </ScrollView>
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

    cancelBox: {
        borderWidth: 0, borderColor: 'blue',
    },


    cancelHeader: {
        flexDirection: 'row', alignItems: 'center',
        paddingTop: 10, paddingBottom: 10, marginLeft: 10, marginRight: 10,
        borderBottomWidth: 0.5, borderBottomColor: '#e5e5e5',
    },
    reasionIcon: {
        marginLeft: 5, width: getAdaptWidth(20), height: getAdaptHeight(20),
    },
    reasonText: {
        marginLeft: 5, color: '#606060', fontSize: getAdaptHeight(15),
    },

    cancelTags: {
        paddingLeft: 20, paddingRight: 20,
    },
    tagRow: {
        flexDirection: 'row', justifyContent: 'space-around',
        paddingTop: 10,
    },
    tagBox: {
        justifyContent: 'center', alignItems: 'center',
        paddingLeft: 10, paddingRight: 10,
        height: 18,
        borderWidth: 0.5, borderColor: '#ccc',
        borderRadius: 15,
    },
    tagBoxActive: {
        borderColor: '#00a0e9',
    },
    tagText: {
        color: '#ccc', fontSize: getAdaptHeight(14),
        backgroundColor: 'transparent',
    },
    tagTextActive: {
        color: '#00a0e9',
    },

    cancelShare: {
        paddingLeft: 10, paddingRight: 10, paddingTop: 15,
        height: 110,
        borderWidth: 0, borderColor: 'red',
    },
    cancelInput: {
        flex: 1, paddingLeft: 5, paddingRight: 5,
        color: '#111', fontSize: getAdaptHeight(14),
        backgroundColor: '#fff', borderWidth: 0.5, borderColor: '#e5e5e5', borderRadius: 2,
    },
    cancelLimit: {
        position: 'absolute', right: 15, bottom: 5, color: '#ccc', fontSize: getAdaptHeight(14),
        backgroundColor: 'transparent',
    },

    cancelCamara: {
        paddingLeft: 10, paddingRight: 10, paddingTop: 10,
    },
    camaraBox: {
        justifyContent: 'center', alignItems: 'center',
        width: getAdaptWidth(80), height: getAdaptHeight(55),
        borderWidth: 0.5, borderColor: '#e5e5e5',
        backgroundColor: '#fff', borderRadius: 2,
    },
    camaraIcon: {
        width: getAdaptWidth(31), height: getAdaptHeight(25),
    },


    btnBox: {
        paddingTop: 10, paddingLeft: 10, paddingRight: 10, paddingBottom: 10,
    },
    BtnContainer: {
        height: getAdaptHeight(50), backgroundColor: '#00a0e9',
        justifyContent: 'center', alignItems: 'center',
        borderRadius: 2,
    },
    subButton: {
         color: '#fff', fontSize: getAdaptHeight(18),
    },
    



});
