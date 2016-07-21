/*
    晒单评价页
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


export default class Comment extends React.Component{

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
                        <View style = {styles.commentBox}>

                            <View style = {styles.commentHeader}>
                                <View style = {styles.commentStars}>
                                    <View style = {styles.starItem}>
                                        <Image source = {require('../../images/dingdan/icon_star_active.png')} style = {styles.starIcon} />
                                    </View>
                                    <View style = {styles.starItem}>
                                        <Image source = {require('../../images/dingdan/icon_star_active.png')} style = {styles.starIcon} />
                                    </View>
                                    <View style = {styles.starItem}>
                                        <Image source = {require('../../images/dingdan/icon_star_active.png')} style = {styles.starIcon} />
                                    </View>
                                    <View style = {styles.starItem}>
                                        <Image source = {require('../../images/dingdan/icon_star_default.png')} style = {styles.starIcon} />
                                    </View>
                                    <View style = {styles.starItem}>
                                        <Image source = {require('../../images/dingdan/icon_star_default.png')} style = {styles.starIcon} />
                                    </View>
                                </View>
                                <View style = {styles.commentDesc}>
                                    <Text style = {styles.descText}>一般，需要改善</Text>
                                </View>
                            </View>

                            <View style = {styles.commentTags}>
                                <View style = {styles.tagRow}>
                                    <View style = {[styles.tagBox, styles.tagBoxActive]}>
                                        <Text style = {[styles.tagText, styles.tagTextActive]}>态度热情</Text>
                                    </View>
                                    <View style = {styles.tagBox}>
                                        <Text style = {styles.tagText}>物流快速</Text>
                                    </View>
                                    <View style = {styles.tagBox}>
                                        <Text style = {styles.tagText}>质量很好</Text>
                                    </View>
                                </View>
                                <View style = {styles.tagRow}>
                                    <View style = {styles.tagBox}>
                                        <Text style = {styles.tagText}>态度热情</Text>
                                    </View>
                                    <View style = {styles.tagBox}>
                                        <Text style = {styles.tagText}>物流快速</Text>
                                    </View>
                                    <View style = {styles.tagBox}>
                                        <Text style = {styles.tagText}>质量很好</Text>
                                    </View>
                                </View>
                            </View>

                            <View style = {styles.commentShare}>
                                <TextInput
                                    style={styles.commentInput}
                                    placeholder = '此时此刻，想和大家分享什么？'
                                    placeholderTextColor = '#ccc'
                                    maxLength = {100}
                                    multiline = {true}
                                    numberOfLines = {5}
                                />
                                <Text style = {styles.shareLimit}>100</Text>
                            </View>

                            <View style = {styles.commentCamara}>
                                <View style = {styles.camaraBox}>
                                    <Image source = {require('../../images/dingdan/icon_camara.png')} style = {styles.camaraIcon} />
                                </View>
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

    commentBox: {
        borderWidth: 0, borderColor: 'blue',
    },

    commentHeader: {
        borderBottomWidth: 0.5, borderBottomColor: '#e5e5e5',
    },
    commentStars: {
        flexDirection: 'row', justifyContent: 'center',
    },
    starItem: {
        paddingTop: 15, paddingBottom: 15, paddingLeft: 10, paddingRight: 10,
        borderWidth: 0, borderColor: 'red',
    },
    starIcon: {
        width: getAdaptWidth(27), height: getAdaptHeight(25),
    },
    commentDesc: {
        alignItems: 'center', paddingBottom: 15,
    },
    descText: {
        color: '#efa600', fontSize: getAdaptHeight(9),
    },

    commentTags: {
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
        borderColor: '#efa600',
    },
    tagText: {
        color: '#ccc', fontSize: getAdaptHeight(14),
        backgroundColor: 'transparent',
    },
    tagTextActive: {
        color: '#efa600',
    },

    commentShare: {
        paddingLeft: 10, paddingRight: 10, paddingTop: 15,
        height: 110,
        borderWidth: 0, borderColor: 'red',
    },
    commentInput: {
        flex: 1, paddingLeft: 5, paddingRight: 5,
        color: '#111', fontSize: getAdaptHeight(14),
        backgroundColor: '#fff', borderWidth: 0.5, borderColor: '#e5e5e5', borderRadius: 2,
    },
    shareLimit: {
        position: 'absolute', right: 15, bottom: 5, color: '#ccc', fontSize: getAdaptHeight(14),
        backgroundColor: 'transparent',
    },

    commentCamara: {
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

    






});
