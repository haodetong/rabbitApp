/*
    我的 - 标签页 - 在线客服
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

export default class OnlineService extends React.Component{

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
                    <View style={styles.serviceBox}>
                        <View style = {styles.serviceItem}>
                            <View style = {styles.titleBox}>
                                <Text style = {styles.titles}>订单问题</Text>
                            </View>
                            <View style = {styles.rightBtnBox}>
                                <Image source = {require('../../images/common/icon_arrow_right.png')} style = {styles.rightBtnIcon}  />
                            </View>
                        </View>
                        <View style = {styles.serviceItem}>
                            <View style = {styles.titleBox}>
                                <Text style = {styles.titles}>质量问题</Text>
                            </View>
                            <View style = {styles.rightBtnBox}>
                                <Image source = {require('../../images/common/icon_arrow_right.png')} style = {styles.rightBtnIcon}  />
                            </View>
                        </View>
                        <View style = {styles.serviceItem}>
                            <View style = {styles.titleBox}>
                                <Text style = {styles.titles}>服务问题</Text>
                            </View>
                            <View style = {styles.rightBtnBox}>
                                <Image source = {require('../../images/common/icon_arrow_right.png')} style = {styles.rightBtnIcon}  />
                            </View>
                        </View>
                        <View style = {styles.serviceItem}>
                            <View style = {styles.titleBox}>
                                <Text style = {styles.titles}>支付问题</Text>
                            </View>
                            <View style = {styles.rightBtnBox}>
                                <Image source = {require('../../images/common/icon_arrow_right.png')} style = {styles.rightBtnIcon}  />
                            </View>
                        </View>
                        <View style = {styles.serviceItem}>
                            <View style = {styles.titleBox}>
                                <Text style = {styles.titles}>其他问题</Text>
                            </View>
                            <View style = {styles.rightBtnBox}>
                                <Image source = {require('../../images/common/icon_arrow_right.png')} style = {styles.rightBtnIcon}  />
                            </View>
                        </View>
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

    serviceBox: {


    },
    serviceItem: {
      paddingLeft: getAdaptWidth(20),
      paddingRight: getAdaptWidth(20),
      paddingTop: getAdaptWidth(20),
      paddingBottom: getAdaptWidth(20),
      flexDirection: 'row',
      backgroundColor: '#fff',
      borderBottomWidth: 0.5,
      borderBottomColor: '#e5e5e5',
    },

    rightBtnBox: {
        width: 20,
        alignItems: 'flex-end',
        justifyContent: 'center',
        borderWidth: 0,
        borderColor: 'green',
    },
    rightBtnIcon: {
        width: getAdaptWidth(8),
        height: getAdaptHeight(12),
    },

    titleBox: {
        flex:1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        borderWidth: 0,
        borderColor: 'red',
    },
    title: {
        fontSize: getAdaptHeight(16),
        color: '#111111',
    },




});
