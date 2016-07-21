/*
    消息页
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

export default class MyMessages extends React.Component{

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

                        <Button onPress={Actions.MyMessageDetail} containerStyle={styles.msgBtnContainer} style = {styles.msgButton}>
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
                                    <View style = {styles.comArea}>
                                        <Text style = {styles.comments} numberOfLines = {1}>
                                            消息标题消息标题消息标题消息标题消息标题
                                        </Text>
                                    </View>
                                </View>
                                <View style = {styles.comDate}>
                                     <Text style = {styles.dateText}>12分钟前</Text>
                                </View>
                            </View>
                        </Button>

                        <View style = {styles.commentItem}>
                            <View style = {styles.comHeader}>
                                <View style = {styles.userPhotoWrap}>
                                    <Image source = {require('../../images/common/user_photo.png')} style = {styles.comPhoto} />
                                </View>
                            </View>
                            <View style = {styles.comContent}>
                                <View style = {styles.comName}>
                                    <Text style = {styles.nameText}>尼采</Text>
                                </View>
                                <View style = {styles.comArea}>
                                    <Text style = {styles.distances}>[0.45km]</Text>
                                    <Text style = {styles.comments}>你这是怎么做的啊？</Text>
                                </View>
                                <View style = {styles.comArea}>
                                    <Text style = {styles.reply}>回复我的主题：</Text>
                                    <Text style = {styles.comments}>你还记得我吗？</Text>
                                </View>
                            </View>
                            <View style = {styles.comDate}>
                                 <Text style = {styles.dateText}>04-15</Text>
                            </View>
                        </View>

                        <View style = {styles.commentItem}>
                            <View style = {styles.comHeader}>
                                <View style = {styles.userPhotoWrap}>
                                    <Image source = {require('../../images/common/user_photo.png')} style = {styles.comPhoto} />
                                </View>
                            </View>
                            <View style = {styles.comContent}>
                                <View style = {styles.comName}>
                                    <Text style = {styles.nameText}>150****8722</Text>
                                </View>
                                <View style = {styles.comArea}>
                                    <Text style = {styles.distances}>[0.45km]</Text>
                                    <Text style = {styles.comments}>赞了您发布的内容。</Text>
                                </View>
                            </View>
                            <View style = {styles.comDate}>
                                 <Text style = {styles.dateText}>04-13</Text>
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
      flex: 3,
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
      flex: 1, alignItems: 'center',
      borderWidth: 0, borderColor: 'red',
    },
    dateText: {
        color: '#8f8f94', fontSize: getAdaptHeight(12), lineHeight: 18,
    },



});
