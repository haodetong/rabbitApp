/*
    身边晒单 - 某一个晒单的详情页
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


export default class ShenbianDetail extends React.Component{

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

                <View style = {styles.proBody}>
                    <ScrollView vertical = {true} showsVerticalScrollIndicator = {false} directionalLockEnabled = {true} showsHorizontalScrollIndicator = {false}>

                        <View style = {styles.row}>

                            <View style = {styles.shenbianHeader}>
                                <View style = {styles.userPhoto}>
                                    <Image source = {require('../../images/common/user_photo.png')} style = {styles.userPhotoImg} />
                                </View>
                                <View style = {styles.userInfo}>
                                    <View style = {styles.userNameBox}><Text style = {styles.userName}>郝杰</Text></View>
                                    <View style = {styles.userSign}>
                                        <Image source = {require('../../images/shenbian/shenbian_user_male.png')} style = {styles.userSexImg} />
                                        <Text style = {styles.userAge}>28</Text>
                                    </View>
                                </View>
                                <View style = {styles.shbDateBox}>
                                    <Text style = {styles.shbDate}>04-15</Text>
                                    <Image source = {require('../../images/shenbian/shenbian_handle_btn.png')} style = {styles.shbHandleBtn} />
                                </View>
                            </View>

                            <View style = {styles.shbContentBox}>
                                <Text style = {styles.shbContent}>味道好极了，每次都是百吃不厌啊，这是治愈宅男宅女们的最好美食了~！</Text>
                            </View>

                            <View style = {styles.shbShareImgsBox}>
                                <Image source = {require('../../images/dingdan/dingdan_product.png')} style = {styles.shbShareImg} />
                                <Image source = {require('../../images/dingdan/dingdan_product.png')} style = {styles.shbShareImg} />
                                <Image source = {require('../../images/dingdan/dingdan_product.png')} style = {styles.shbShareImg} />
                            </View>

                            <View style = {styles.commentProsBox}>
                                <View style = {styles.commentPros}>
                                    <Text style = {styles.commentProTitle}>剁椒鱼头</Text>
                                </View>
                                <View style = {styles.commentPros}>
                                    <Text style = {styles.commentProTitle}>馋嘴蛙</Text>
                                </View>
                                <View style = {styles.commentPros}>
                                    <Text style = {styles.commentProTitle}>猪手饭</Text>
                                </View>
                            </View>

                            <View style = {styles.commentHandleBox}>
                                <View style = {styles.distanceAndReads}>
                                    <Text style = {styles.distanceText}>0.01km</Text>
                                    <Text style = {styles.readsText}>12阅读</Text>
                                </View>
                                <View style = {styles.approveAndPost}>
                                    <View style = {styles.approveBox}>
                                        <Image source = {require('../../images/shenbian/icon_approve.png')} style = {styles.approveImg} />
                                        <Text style = {styles.approveTitle}>赞</Text>
                                    </View>
                                    <View style = {styles.postBox}>
                                        <Image source = {require('../../images/shenbian/icon_post.png')} style = {styles.postImg} />
                                        <Text style = {styles.postTitle}>我说</Text>
                                    </View>
                                </View>
                            </View>

                        </View>

                        <View style = {styles.commentBox}>
                            <View style = {styles.commentItem}>
                                <View style = {styles.comHeader}>
                                    <View style = {styles.userPhotoWrap}>
                                        <Image source = {require('../../images/common/user_photo.png')} style = {styles.comPhoto} />
                                    </View>
                                </View>
                                <View style = {styles.comContent}>
                                    <View style = {styles.comName}>
                                        <Text style = {styles.nameText}>张三</Text>
                                    </View>
                                    <View style = {styles.comArea}>
                                        <Text style = {styles.comments}>哎哟不错哦，我也喜欢这个的。</Text>
                                    </View>
                                </View>
                                <View style = {styles.comDate}>
                                     <Text style = {styles.dateText}>12分钟前</Text>
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
                                        <Text style = {styles.nameText}>李四</Text>
                                    </View>
                                    <View style = {styles.comArea}>
                                        <Text style = {styles.comments}>哎哟不错哦，我也喜欢这个的。</Text>
                                    </View>
                                </View>
                                <View style = {styles.comDate}>
                                     <Text style = {styles.dateText}>12分钟前</Text>
                                </View>
                            </View>
                        </View>

                    </ScrollView>
                </View>

                <View style = {styles.proFooter}>
                    <View style = {styles.comPublish}>
                        <View style = {styles.pubLabel}>
                            <Image source = {require('../../images/common/icon_comment.png')} style = {styles.iconComment} />
                        </View>
                        <View style = {styles.pubText}>
                            <TextInput
                                style={styles.pubInput}
                                placeholder = '发布评论'
                            />
                        </View>
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
    proHeader: {
        position: 'absolute', top: 0, left: 0, width: Dimensions.get('window').width,
        backgroundColor: '#ffffff',borderWidth: 0, borderColor: 'green', flex: 1,
    },
    proBody: {
        flex: 1, marginBottom: getAdaptHeight(50),
        borderWidth: 0, borderColor: 'blue',
    },
    proFooter: {
        position: 'absolute', bottom: 0, left: 0,
        width: Dimensions.get('window').width, height: getAdaptHeight(50),
        borderTopWidth: 0.5, borderTopColor: '#cccccc', backgroundColor: '#f8f8f8',
    },

    row: {
        paddingLeft: getAdaptWidth(20),
        paddingRight: getAdaptHeight(20),
        backgroundColor: 'white',
    },
    shenbianHeader: {
        flexDirection: 'row',
        marginTop: getAdaptHeight(20),
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
    userInfo: {
        flex:1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginLeft: 12,
    },
    userNameBox: {
        borderWidth: 0,
        borderColor: 'blue'
    },
    userName: {
        color: '#111111',
        fontSize: getAdaptHeight(16),

    },
    userSign: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: getAdaptHeight(16),
        borderWidth: 0,
        borderColor: 'green'
    },
    userSexImg: {
        width: getAdaptWidth(11),
        height: getAdaptHeight(11),
    },
    userAge: {
        marginLeft: 8,
        color: '#8f8f94',
        fontSize: getAdaptHeight(13),
    },
    shbDateBox: {
        flexDirection:'row',
        width: 80,
        height: 16,
        alignItems: 'center',
        justifyContent:'flex-end',
        borderWidth: 0,
        borderColor: '#ff0000'
    },
    shbDate: {
        color: '#8f8f94',
        fontSize: getAdaptHeight(12),
    },
    shbHandleBtn: {
        marginLeft: 8,
        width: getAdaptWidth(12),
        height: getAdaptHeight(8),
    },
    shbContentBox: {
        marginTop: getAdaptHeight(8),
    },
    shbContent: {
        color: '#111111',
        fontSize: getAdaptHeight(13),
        lineHeight: 16,
    },
    shbShareImgsBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: getAdaptHeight(12)
    },
    shbShareImg: {
        width: getAdaptWidth(97),
        height: getAdaptHeight(97),
    },
    commentProsBox: {
        flexDirection: 'row',
        marginTop: getAdaptHeight(15)
    },
    commentPros: {
        marginRight:9 ,
        paddingLeft: getAdaptWidth(6),
        paddingRight: getAdaptWidth(6),
        height: getAdaptHeight(16),
        borderRadius: getAdaptHeight(16),
        borderWidth: 0.5,
        borderColor: '#00a0e9',
        justifyContent: 'center',
        alignItems: 'center',
    },
    commentProTitle: {
        color: '#00a0e9',
        fontSize: 11,
    },
    commentHandleBox: {
        marginTop: getAdaptHeight(15),
        marginBottom: getAdaptHeight(15),
        flexDirection: 'row'
    },
    distanceAndReads: {
        flex: 1,
        flexDirection: 'row',
    },
    distanceText: {
        color: '#8f8f94',
        fontSize: getAdaptHeight(12),
    },
    readsText: {
        marginLeft: getAdaptWidth(26),
        color: '#00a0e9',
        fontSize: getAdaptHeight(12),
    },
    approveAndPost: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        borderWidth: 0,
        borderColor: 'blue',
    },
    approveBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0,
        borderColor: 'green',
    },
    approveImg: {
        width: getAdaptWidth(11),
        height: getAdaptHeight(10),
    },
    approveTitle: {
        marginLeft: 3,
        color: '#8f8f94',
        fontSize: getAdaptHeight(12),
    },
    postBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: getAdaptWidth(25),
        borderWidth: 0,
        borderColor: 'green',
    },
    postImg: {
        width: getAdaptWidth(12),
        height: getAdaptHeight(9),
    },
    postTitle: {
        marginLeft: 3,
        color: '#8f8f94',
        fontSize: getAdaptHeight(12),
    },


commentBox: {
    borderTopWidth: 0.5, borderTopColor: '#ccc',
    paddingLeft: 5, paddingRight: 5,
},
commentItem: {
    flexDirection: 'row',
    marginTop: getAdaptHeight(20),
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
    color: '#111', fontSize: getAdaptHeight(13), lineHeight: 18,
},
comArea: {

},
comments: {
    color: '#8f8f94', fontSize: getAdaptHeight(13), lineHeight: 18,
},
comDate: {
  flex: 1, alignItems: 'center',
  borderWidth: 0, borderColor: 'red',
},
dateText: {
    color: '#8f8f94', fontSize: getAdaptHeight(12), lineHeight: 18,
},

comPublish: {
    flex: 1,
    paddingLeft: 10, paddingRight: 10,
    flexDirection: 'row',
},
pubLabel: {
    flex: 1, justifyContent: 'center', alignItems: 'center',
},
iconComment: {
    width: getAdaptWidth(22), height: getAdaptHeight(22),
},
pubText: {
    flex: 7, justifyContent: 'center', alignItems: 'center',
},
pubInput: {
    paddingLeft: 10, paddingRight: 10,
    height: getAdaptHeight(30), fontSize: getAdaptHeight(14), fontWeight: '900', color:'#808083',
    backgroundColor: '#e4e3ec', borderRadius: getAdaptHeight(15),
},

});
