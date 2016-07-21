/*
    我的 - 标签页 - 个人资料 - 资料修改页
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

export default class ZiliaoEdit extends React.Component{

    static defaultProps = {
        //bannerImgInitalHeight: 201//设计图（iphone6 @x2）中为750px * 403px，所以为375dp * 201dp
    };
    static propTypes = {
        //bannerImgInitalHeight: React.PropTypes.number.isRequired
    };

    constructor(props){
        super(props);
        this.state = {
            text: this.props.data,
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView vertical = {true} showsVerticalScrollIndicator = {false} directionalLockEnabled = {true} showsHorizontalScrollIndicator = {false}>
                    <View style = {styles.editBox}>
                        <View style = {styles.editInner}>
                            <View style = {styles.editText}>
                                <TextInput
                                    style={styles.editInput}
                                    autoFocus = {true}
                                    value = {this.state.text}
                                />
                            </View>
                            <View style = {styles.clearBtn}>
                                <Image source = {require('../../images/common/icon_search_shut.png')} style = {styles.clearBtnIcon}  />
                            </View>
                        </View>
                        <View style = {styles.editTips}>
                            <Text style = {styles.tipsText}>昵称可以让吃货更容易的找到和联系你。</Text>
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
    headerBox: {
        height: getAdaptHeight(250),
          borderWidth: 0, borderColor: 'red',
    },

    editBox: {

    },
    editInner: {
        flexDirection: 'row',
        paddingLeft: getAdaptWidth(20), paddingRight: getAdaptWidth(20),
        backgroundColor: '#fff',
        borderBottomWidth: 0.5, borderBottomColor: '#e5e5e5',
    },
    editText: {
        flex: 7,
        borderWidth: 0, borderColor: 'red',
    },
    editInput: {
        flex: 1,
        height: 40,
        borderWidth: 0, borderColor: 'green',
        color: '#111', fontSize: getAdaptHeight(14),
    },
    clearBtn: {
      flex: 1, justifyContent: 'center', alignItems: 'flex-end',
      borderWidth: 0, borderColor: 'blue',
    },
    clearBtnIcon: {
        width: getAdaptWidth(14), height: getAdaptHeight(14),
    },
    editTips: {
        paddingLeft: getAdaptWidth(20), paddingRight: getAdaptWidth(20),
    },
    tipsText: {
        lineHeight: 20, color: '#999', fontSize: getAdaptHeight(13),
    },



});
