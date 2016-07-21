/*
    消息详情页
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

export default class MyMessageDetail extends React.Component{

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
                    <View style = {styles.commentBox}>

                        <View style = {styles.commentItem}>
                            <View style = {styles.comHeader}>
                                <View style = {styles.userPhotoWrap}>
                                    <Image source = {require('../../images/common/user_photo.png')} style = {styles.comPhoto} />
                                </View>
                            </View>
                            <View style = {styles.comContent}>
                                <View style = {styles.comName}>
                                    <Text style = {styles.nameText}>四眼兔消息中心</Text>
                                </View>
                            </View>
                            <View style = {styles.comDate}>
                                 <Text style = {styles.dateText}>12分钟前</Text>
                            </View>
                        </View>

                        <View style = {styles.comDetail}>
                            <View style = {styles.detailItem}>
                                <Text style = {styles.itemTitle}>1、</Text>
                                <Text style = {styles.itemContent}>在订单送达后，系统发送消息。</Text>
                            </View>
                            <View style = {styles.detailItem}>
                                <Text style = {styles.itemTitle}>2、</Text>
                                <Text style = {styles.itemContent}>在退单、退货完成后，系统发送消息。</Text>
                            </View>
                            <View style = {styles.detailItem}>
                                <Text style = {styles.itemTitle}>3、</Text>
                                <Text style = {styles.itemContent}>在支付失败时发送FAQ消息。</Text>
                            </View>
                            <View style = {styles.detailItem}>
                                <Text style = {styles.itemTitle}>4、</Text>
                                <Text style = {styles.itemContent}>在应急机制开启式，恶劣天气等造成的延迟、拒单时，下发系统消息。</Text>
                            </View>
                            <View style = {styles.detailItem}>
                                <Text style = {styles.itemTitle}>5、</Text>
                                <Text style = {styles.itemContent}>系统消息的下发标准，各部门提出需求，该功能理解为向全站用户推送的系统消息，由系统自动发送、人工发送两种形式。自动发送的需要产品部协调其他部门提出需求。</Text>
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

    commentBox: {
    },
    commentItem: {
        flexDirection: 'row',
        paddingTop: getAdaptHeight(20),
        paddingBottom: getAdaptHeight(20),
        backgroundColor: '#fff',
        borderBottomWidth: 0.5,
        borderBottomColor: '#e5e5e5',
    },
    comHeader: {
        flex: 1, justifyContent: 'center', alignItems: 'center',
        borderWidth: 0, borderColor: 'red',
    },
    userPhotoWrap: {
      alignItems: 'center',
      justifyContent: 'center',
      width: getAdaptWidth(40),
      height: getAdaptHeight(40),
      backgroundColor: '#eeeeee',
      borderRadius: 53,
    },
    comPhoto: {
      width: getAdaptWidth(20),
      height: getAdaptHeight(26),
    },
    comContent: {
      flex: 3, justifyContent: 'center',
      borderWidth: 0, borderColor: 'red',

    },
    comName: {

    },
    nameText: {
        color: '#111', fontSize: getAdaptHeight(13), lineHeight: 14,
    },
    comArea: {
        flexDirection: 'row', alignItems: 'center',
        borderWidth: 0, borderColor: 'blue', overflow: 'hidden',
    },
    distances: {
      marginRight: 5,
      color: '#8f8f94', fontSize: getAdaptHeight(13), lineHeight: 18,
    },
    reply: {
      color: '#8f8f94', fontSize: getAdaptHeight(13), lineHeight: 18,
    },
    comments: {
        color: '#8f8f94', fontSize: getAdaptHeight(13), lineHeight: 18,
        borderWidth: 0, borderColor: 'green',
    },
    comDate: {
      flex: 1, alignItems: 'center', justifyContent: 'center',
      borderWidth: 0, borderColor: 'red',
    },
    dateText: {
        color: '#8f8f94', fontSize: getAdaptHeight(12), lineHeight: 18,
    },

    comDetail: {
        marginTop: getAdaptHeight(20),
        marginLeft: 10,
        marginRight: 10,
        paddingTop: 10, paddingBottom: 10,
        backgroundColor: '#fff',
        borderTopWidth: 0.5,
        borderTopColor: '#e5e5e5',
        borderBottomWidth: 0.5,
        borderBottomColor: '#e5e5e5',
        borderLeftWidth: 0.5,
        borderLeftColor: '#e5e5e5',
        borderRightWidth: 0.5,
        borderRightColor: '#e5e5e5',
        borderRadius: 2,
    },
    detailItem: {
        paddingLeft: 10, paddingRight: 10,
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    itemTitle: {
        flex: 1, borderWidth: 0, borderColor: 'green',
        color: '#8f8f94', fontSize: getAdaptHeight(13),
        textAlign: 'center', lineHeight: 20,
    },
    itemContent: {
        flex: 8, borderWidth: 0, borderColor: 'blue',
        color: '#8f8f94', fontSize: getAdaptHeight(13),
        lineHeight: 20,
    },

});
