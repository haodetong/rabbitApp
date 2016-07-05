/*
    搜索产品 - 搜索结果页面
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
import SearchProsHeader from '../component/SearchProsHeader';

export default class SearchProsResults extends React.Component{

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
                <View style = {styles.proHeader}>
                    <View style = {styles.searchHeader}>
                        <SearchProsHeader />
                    </View>
                </View>

                <View style = {styles.proBody}>
                    <ScrollView vertical = {true} showsVerticalScrollIndicator = {false} directionalLockEnabled = {true} showsHorizontalScrollIndicator = {false}>
                        <View style = {styles.spaceOfTop}></View>
                        <View style = {styles.schKeyHeader}>
                            <View style = {styles.schKeyTitBox}><Text style = {styles.schKeyTitle}>热门搜索</Text></View>
                            <View style = {styles.schKeyTitBox}></View>
                            <View style = {styles.schKeyTitBox}></View>
                        </View>
                        <View style = {styles.schKeyContents}>
                            <View style = {styles.schKeyConOuter}>
                                <Button onPress={()=>{alert('search key.')}} containerStyle={styles.schKeyBtnContainer} style = {styles.schKeyBtn}>
                                    <View style = {styles.schKeyConInner}>
                                        <Text style = {styles.schKeyBtnTxt}>重庆家常面</Text>
                                    </View>
                                </Button>
                                <Button onPress={()=>{alert('search key.')}} containerStyle={styles.schKeyBtnContainer} style = {styles.schKeyBtn}>
                                    <View style = {styles.schKeyConInner}>
                                        <Text style = {styles.schKeyBtnTxt}>重庆家常面</Text>
                                    </View>
                                </Button>
                                <Button onPress={()=>{alert('search key.')}} containerStyle={styles.schKeyBtnContainer} style = {styles.schKeyBtn}>
                                    <View style = {[styles.schKeyConInner, styles.schkeyConInnerNoborder]}>
                                        <Text style = {styles.schKeyBtnTxt}>重庆家常面</Text>
                                    </View>
                                </Button>
                            </View>
                            <View style = {[styles.schKeyConOuter, styles.schKeyConOuterNoborder]}>
                                <Button onPress={()=>{alert('search key.')}} containerStyle={styles.schKeyBtnContainer} style = {styles.schKeyBtn}>
                                    <View style = {styles.schKeyConInner}>
                                        <Text style = {styles.schKeyBtnTxt}>重庆家常面</Text>
                                    </View>
                                </Button>
                                <Button onPress={()=>{alert('search key.')}} containerStyle={styles.schKeyBtnContainer} style = {styles.schKeyBtn}>
                                    <View style = {styles.schKeyConInner}>
                                        <Text style = {styles.schKeyBtnTxt}>重庆家常面</Text>
                                    </View>
                                </Button>
                                <Button onPress={()=>{alert('search key.')}} containerStyle={styles.schKeyBtnContainer} style = {styles.schKeyBtn}>
                                    <View style = {[styles.schKeyConInner, styles.schkeyConInnerNoborder]}>
                                        <Text style = {styles.schKeyBtnTxt}>重庆家常面</Text>
                                    </View>
                                </Button>
                            </View>
                        </View>

                        <View style = {styles.schKeyHeader}>
                            <View style = {styles.schKeyTitBox}><Text style = {styles.schKeyTitle}>搜索历史</Text></View>
                            <View style = {styles.schKeyTitBox}></View>
                            <Button onPress={()=>{alert('clear history.')}} containerStyle={styles.schKeyBtnContainer} style = {styles.schKeyBtn}>
                                <View style = {styles.schKeyClearBox}>
                                    <Text style = {styles.clearHistoryKeyBtn}>清空历史</Text>
                                </View>
                            </Button>
                        </View>
                        <View style = {styles.schKeyContents}>
                            <View style = {styles.schKeyConOuter}>
                                <Button onPress={()=>{alert('search key.')}} containerStyle={styles.schKeyBtnContainer} style = {styles.schKeyBtn}>
                                    <View style = {styles.schKeyConInner}>
                                        <Text style = {styles.schKeyBtnTxt}>重庆家常面</Text>
                                    </View>
                                </Button>
                                <Button onPress={()=>{alert('search key.')}} containerStyle={styles.schKeyBtnContainer} style = {styles.schKeyBtn}>
                                    <View style = {styles.schKeyConInner}>
                                        <Text style = {styles.schKeyBtnTxt}>重庆家常面</Text>
                                    </View>
                                </Button>
                                <Button onPress={()=>{alert('search key.')}} containerStyle={styles.schKeyBtnContainer} style = {styles.schKeyBtn}>
                                    <View style = {[styles.schKeyConInner, styles.schkeyConInnerNoborder]}>
                                        <Text style = {styles.schKeyBtnTxt}>重庆家常面</Text>
                                    </View>
                                </Button>
                            </View>
                            <View style = {[styles.schKeyConOuter, styles.schKeyConOuterNoborder]}>
                                <Button onPress={()=>{alert('search key.')}} containerStyle={styles.schKeyBtnContainer} style = {styles.schKeyBtn}>
                                    <View style = {styles.schKeyConInner}>
                                        <Text style = {styles.schKeyBtnTxt}>重庆家常面</Text>
                                    </View>
                                </Button>
                                <Button onPress={()=>{alert('search key.')}} containerStyle={styles.schKeyBtnContainer} style = {styles.schKeyBtn}>
                                    <View style = {styles.schKeyConInner}>
                                        <Text style = {styles.schKeyBtnTxt}>重庆家常面</Text>
                                    </View>
                                </Button>
                                <Button onPress={()=>{alert('search key.')}} containerStyle={styles.schKeyBtnContainer} style = {styles.schKeyBtn}>
                                    <View style = {[styles.schKeyConInner, styles.schkeyConInnerNoborder]}>
                                        <Text style = {styles.schKeyBtnTxt}>重庆家常面</Text>
                                    </View>
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
    proHeader: {
        position: 'absolute', top: 0, left: 0, paddingTop: 16,
        width: Dimensions.get('window').width, height: getAdaptHeight(48),
        backgroundColor: '#ffffff', borderWidth: 0, borderColor: 'red',
    },
    searchHeader: {
        height: getAdaptHeight(48), borderBottomWidth: 0.5, borderBottomColor: '#cccccc', backgroundColor: '#ffffff'
    },
    proBody: {
        flex: 1, marginTop: getAdaptHeight(48) + 16, marginBottom: getAdaptHeight(50),
        borderWidth: 0, borderColor: 'red',
    },
    spaceOfTop: {
        height: getAdaptHeight(10),
    },
    schKeyHeader: {
        flex: 1, flexDirection: 'row',
        justifyContent: 'center',
        height: 30,
    },
    schKeyTitBox: {
        flex: 1, alignItems: 'center', justifyContent: 'center',
    },
    schKeyTitle: {
        color: '#111111', fontSize: getAdaptHeight(14), fontWeight: '400',
    },
    schKeyContents: {
        paddingLeft: 15, paddingRight: 15, paddingTop: 8, paddingBottom: 8,
        backgroundColor: '#ffffff',
    },
    schKeyConOuter: {
        flex: 1, flexDirection: 'row', paddingTop: 8, paddingBottom: 8,
        borderBottomWidth: 0.5, borderBottomColor: '#e5e5e5',
    },
    schKeyConOuterNoborder: {
        borderBottomWidth: 0,
    },
    schKeyConInner: {
        flex: 1, alignItems:'center',
        paddingTop: 6, paddingBottom: 6,
        borderRightWidth: 0.5, borderRightColor: '#e5e5e5',
    },
    schkeyConInnerNoborder: {
        borderRightWidth: 0,
    },
    schKeyBtnContainer: {
       flex: 1,
    },
    schKeyBtnTxt: {
        color: '#111111', fontSize: getAdaptHeight(14), fontWeight: '300'
    },
    clearHistoryKeyBtn: {
        color: '#00a0e9', fontSize: getAdaptHeight(12), fontWeight: '400'
    },
    schKeyClearBox: {
        flex: 1, alignItems: 'flex-end', justifyContent: 'center', paddingRight: 20,
    },

});
