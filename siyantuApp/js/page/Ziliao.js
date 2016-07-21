/*
    我的 - 标签页 - 个人资料页面
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

export default class Ziliao extends React.Component{

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
                    <View style = {styles.headerBox}>
                        <View style = {styles.headerBg}>
                            <Image source = {require('../../images/wode/bg_header.png')} style = {styles.bgImg} />
                        </View>
                        <View style = {styles.headerPhoto}>
                            <View style = {styles.userPhoto}>
                                <Image source = {require('../../images/common/user_photo.png')} style = {styles.userPhotoImg} />
                            </View>
                        </View>
                        <View style = {styles.headerHandle}>
                            <Button containerStyle={styles.handleContainer} style = {styles.handleButton}>
                                设置背景
                            </Button>
                            <Button containerStyle={styles.handleContainer} style = {styles.handleButton}>
                                设置头像
                            </Button>
                        </View>
                    </View>

                    <View style = {styles.ziliaoLists}>

                        <View style = {styles.ziliaoItem}>
                            <View style = {styles.ziliaoLabel}>
                                <Text style = {styles.labelText}>昵称</Text>
                            </View>
                            <View style = {styles.ziliaoContent}>
                                <Button onPress={()=>Actions.ZiliaoEdit({data: "郝杰", title: "昵称"})} containerStyle={styles.editContainer} style = {styles.editButton}>
                                    <Text style = {styles.contentText}>郝杰</Text>
                                    <Image source = {require('../../images/common/icon_arrow_right.png')} style = {styles.rightBtnIcon}  />
                                </Button>
                            </View>
                        </View>

                        <View style = {styles.ziliaoItem}>
                            <View style = {styles.ziliaoLabel}>
                                <Text style = {styles.labelText}>吃货签名</Text>
                            </View>
                            <View style = {styles.ziliaoContent}>
                                <Text numberOfLines = {1} style = {styles.contentText}>誓要高傲的吃着肥，不要卑微的饿着瘦，我胖我骄傲</Text>
                                <Image source = {require('../../images/common/icon_arrow_right.png')} style = {styles.rightBtnIcon}  />
                            </View>
                        </View>

                        <View style = {styles.ziliaoItem}>
                            <View style = {styles.ziliaoLabel}>
                                <Text style = {styles.labelText}>性别</Text>
                            </View>
                            <View style = {styles.ziliaoContent}>
                                <Text style = {styles.contentText}>男</Text>
                                <Image source = {require('../../images/common/icon_arrow_right.png')} style = {styles.rightBtnIcon}  />
                            </View>
                        </View>

                        <View style = {styles.ziliaoItem}>
                            <View style = {styles.ziliaoLabel}>
                                <Text style = {styles.labelText}>职业</Text>
                            </View>
                            <View style = {styles.ziliaoContent}>
                                <Text style = {styles.contentText}>学生</Text>
                                <Image source = {require('../../images/common/icon_arrow_right.png')} style = {styles.rightBtnIcon}  />
                            </View>
                        </View>

                        <View style = {styles.ziliaoItem}>
                            <View style = {styles.ziliaoLabel}>
                                <Text style = {styles.labelText}>家乡</Text>
                            </View>
                            <View style = {styles.ziliaoContent}>
                                <Text style = {styles.contentText}>珠海</Text>
                                <Image source = {require('../../images/common/icon_arrow_right.png')} style = {styles.rightBtnIcon}  />
                            </View>
                        </View>

                        <View style = {styles.ziliaoItem}>
                            <View style = {styles.ziliaoLabel}>
                                <Text style = {styles.labelText}>口味偏好</Text>
                            </View>
                            <View style = {styles.ziliaoContent}>
                                <Text style = {styles.contentText}>无辣不席、无肉不欢</Text>
                                <Image source = {require('../../images/common/icon_arrow_right.png')} style = {styles.rightBtnIcon}  />
                            </View>
                        </View>

                        <View style = {styles.ziliaoItem}>
                            <View style = {styles.ziliaoLabel}>
                                <Text style = {styles.labelText}>美食爱好</Text>
                            </View>
                            <View style = {styles.ziliaoContent}>
                                <Text style = {styles.contentText}>哼哈烤扒、剁椒鱼头</Text>
                                <Image source = {require('../../images/common/icon_arrow_right.png')} style = {styles.rightBtnIcon}  />
                            </View>
                        </View>

                        <View style = {styles.ziliaoItem}>
                            <View style = {styles.ziliaoLabel}>
                                <Text style = {styles.labelText}>年龄</Text>
                            </View>
                            <View style = {styles.ziliaoContent}>
                                <Text style = {styles.contentText}>23</Text>
                                <Image source = {require('../../images/common/icon_arrow_right.png')} style = {styles.rightBtnIcon}  />
                            </View>
                        </View>

                        <View style = {styles.ziliaoItem}>
                            <View style = {styles.ziliaoLabel}>
                                <Text style = {styles.labelText}>生日</Text>
                            </View>
                            <View style = {styles.ziliaoContent}>
                                <Text style = {styles.contentText}>1993-02-22</Text>
                                <Image source = {require('../../images/common/icon_arrow_right.png')} style = {styles.rightBtnIcon}  />
                            </View>
                        </View>

                        <View style = {styles.ziliaoItem}>
                            <View style = {styles.ziliaoLabel}>
                                <Text style = {styles.labelText}>情感状态</Text>
                            </View>
                            <View style = {styles.ziliaoContent}>
                                <Text style = {styles.contentText}>单身</Text>
                                <Image source = {require('../../images/common/icon_arrow_right.png')} style = {styles.rightBtnIcon}  />
                            </View>
                        </View>

                        <View style = {styles.ziliaoItem}>
                            <View style = {styles.ziliaoLabel}>
                                <Text style = {styles.labelText}>个人说明</Text>
                            </View>
                            <View style = {styles.ziliaoContent}>
                                <Text style = {styles.contentText}>未设置</Text>
                                <Image source = {require('../../images/common/icon_arrow_right.png')} style = {styles.rightBtnIcon}  />
                            </View>
                        </View>

                        <View style = {styles.ziliaoItem}>
                            <View style = {styles.ziliaoLabel}>
                                <Text style = {styles.labelText}>注册时间</Text>
                            </View>
                            <View style = {styles.ziliaoContent}>
                                <Text style = {styles.contentText}>2015-03-22</Text>
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
        backgroundColor: '#fff',
    },
    headerBox: {
        height: getAdaptHeight(250),
          borderWidth: 0, borderColor: 'red',
    },
    headerBg: {
        justifyContent: 'center',
        height:getAdaptHeight(250),
        borderWidth: 0, borderColor: 'blue',
    },
    bgImg: {
        width: deviceWidth,
        height:getAdaptHeight(250)
    },
    headerPhoto: {
        position: 'relative', marginTop: 0 - getAdaptHeight(180),
        alignItems: 'center',
        borderWidth: 0, borderColor: 'red',
    },
    userPhoto: {
      alignItems: 'center',
      justifyContent: 'center',
      width: getAdaptWidth(53),
      height: getAdaptHeight(53),
      backgroundColor: '#eeeeee',
      borderRadius: 53,
    },
    userPhotoImg: {
      width: getAdaptWidth(27),
      height: getAdaptHeight(36),

    },
    headerHandle: {
      marginTop: 40,
      flexDirection: 'row', justifyContent: 'center',
      borderWidth: 0, borderColor: 'red',
    },
    handleContainer: {
        marginLeft: 30, marginRight: 30,
        width: getAdaptWidth(100), height: getAdaptHeight(30),
        borderWidth: 1, borderColor: '#fff', borderRadius: 20,
        justifyContent: 'center', alignItems:'center',
    },
    handleButton: {
        color: '#fff', fontSize: getAdaptHeight(14), backgroundColor: 'transparent',
    },

    ziliaoLists: {

    },
    ziliaoItem: {
        flexDirection: 'row', paddingTop: 15, paddingBottom: 15,
        borderBottomWidth: 0.5, borderBottomColor: '#e5e5e5',
    },
    ziliaoLabel: {
        flex: 1, justifyContent: 'center', alignItems: 'flex-end',
    },
    labelText: {
        color: '#8f8f94', fontSize: getAdaptHeight(13),
    },
    ziliaoContent: {
        flex: 5, flexDirection: 'row', alignItems: 'center',
    },
    editContainer: {
        flex: 1,
    },
    contentText: {
        flex: 1, paddingLeft: 20,
        paddingRight: 20,
        color: '#00a0e9', fontSize: getAdaptHeight(16),
    },
    rightBtnIcon: {
        marginRight: 20,
        width: getAdaptWidth(8),
        height: getAdaptHeight(12),
    },

});
