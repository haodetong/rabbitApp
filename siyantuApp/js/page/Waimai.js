/*
    外卖 - tab标签页
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
import SiyantuMenus from '../component/SiyantuMenus';
import RecommendHot from '../component/RecommendHot';
import getAdaptHeight from '../component/getAdaptHeight';
import getAdaptWidth from '../component/getAdaptWidth';
import Banner from '../component/Banner';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';

export default class Waimai extends React.Component{

    static defaultProps = {
        //bannerImgInitalHeight: 201//设计图（iphone6 @x2）中为750px * 403px，所以为375dp * 201dp
    };
    static propTypes = {
        //bannerImgInitalHeight: React.PropTypes.number.isRequired
    };

    constructor(props){
        super(props);
        this.state = {
            //text: '三灶镇映月星城',
        };
    }

    render() {
        return (

            <View style={styles.container}>
                <ScrollView>
                    {/*banner*/}
                    <Banner />

                    {/*currentLocation*/}
                    <View style = {[styles.curLocBox, {width:Dimensions.get('window').width}]}>
                        <Button onPress={Actions.pop} containerStyle={styles.locateContainer} style = {styles.locateButton}>
                            <View style = {styles.curLoc}>
                                <Image source = {require('../../images/waimai/icon_map.png')} style = {styles.mapIcon} />
                                <Text style = {styles.curLocText}>三灶镇樱雪名苑</Text>
                            </View>
                        </Button>
                    </View>

                    {/*search-box*/}
                    <View style = {[styles.searchbox, {width:Dimensions.get('window').width}]}>
                        <View style={styles.searchwrap}>
                            <View style={styles.cellfixed}></View>
                            <View style={styles.cell}>
                                <View style = {styles.searchBorder}></View>
                                <View style = {styles.searchOpacity}></View>
                                <View style = {styles.searchInner} >

                                  <View style = {styles.searchKey}>
                                      <TextInput
                                          style={styles.searchText}
                                          placeholder = '如鸡扒、便当'
                                          placeholderTextColor = '#ffffff'
                                      />
                                  </View>
                                  <View style = {styles.searchBtn}>
                                      <Image style = {styles.searchBtnImg} source = {require('../../images/waimai/icon_search.png')} />
                                  </View>

                                </View>
                            </View>
                            <View style={styles.cellfixed}></View>
                        </View>
                    </View>

                    {/*menus*/}
                    <View style = {styles.menubox}>
                        <SiyantuMenus />
                    </View>

                    {/*recommend*/}
                    <View style = {styles.recommendbox}>
                        <RecommendHot onSelect = {() => this.selectShop('')} />
                    </View>

                </ScrollView>
            </View>
        );
    }

};

var styles = StyleSheet.create({
  	container: {
        flex:1, flexDirection:'column',
    },
    curLocBox: {
        position: 'absolute', top: 32,
        alignItems: 'center',
    },
    locateContainer: {
        borderWidth: 0, borderColor: 'red',
    },
    curLoc: {
        flexDirection: 'row',
    },
    mapIcon: {
        width: getAdaptWidth(10), height: getAdaptHeight(13),
    },
    curLocText: {
        marginLeft: 6, color: '#fff', fontSize: getAdaptHeight(13), fontWeight: '500',
        backgroundColor: 'transparent',
    },

    searchbox: {
        position:'absolute', top:55
    },
    searchwrap: {
        flex:1, flexDirection: 'row',
    },
    cellfixed: {
        width: 60, height: 30
    },
    cell: {
        flex: 1, flexDirection:'column', height: getAdaptHeight(30) * 3, borderRadius: 30
    },
    searchBorder: {
        flex:1,  borderWidth: 0.5, borderRadius: 30, opacity:1, borderWidth:0.5, borderColor:'#ffffff'
    },
    searchOpacity: {
        position: 'relative', top: 0 - getAdaptHeight(30), left: 0, flex: 1, backgroundColor: '#ffffff', borderRadius: 30, opacity: 0.3,
    },
    searchInner: {
        position: 'relative', top: 0 - 2 * getAdaptHeight(30), left: 0, flex: 1, flexDirection:'row', backgroundColor: 'transparent', borderRadius: 30, opacity: 1,
    },
    searchKey: {
        flex:4, flexDirection:'row', justifyContent:'center', alignItems: 'center',
    },
    searchText: {
        flex:1, paddingLeft: 15, height: getAdaptHeight(30),
        fontSize: getAdaptHeight(13), fontWeight: '900', color:'#ffffff',
    },
    searchBtn: {
        flex:1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'
    },
    searchBtnImg: {
        flex:1, height:getAdaptHeight(12), resizeMode: Image.resizeMode.contain,
    },
    menubox: {
        borderWidth:0, borderColor: 'blue'
    },
    recommendbox: {
        borderWidth:0, borderColor: 'blue'
    }


});
