/*
    九大分类 - 产品列表页
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


export default class ProLists extends React.Component{

    static defaultProps = {
        //bannerImgInitalHeight: 201//设计图（iphone6 @x2）中为750px * 403px，所以为375dp * 201dp
    };
    static propTypes = {
        //bannerImgInitalHeight: React.PropTypes.number.isRequired
    };

    constructor(props){
        super(props);
        this.state = {
            text: '搜索关键词',
        };
    }

    render() {
        return (

            <View style={styles.container}>
                <ScrollView>

                    {/*banner*/}
                    <Banner />

                    {/*search-box*/}
                    <View style = {[styles.searchbox, {width:Dimensions.get('window').width}]}>
                        <View style={styles.searchwrap}>
                            <View style={styles.cellfixed}>
                                <Button onPress={Actions.pop} containerStyle={styles.popBtnContainer} style = {styles.popButton}>
                                    <Image source = {require('../../images/common/icon_pop.png')} style = {styles.popWhiteIcon} />
                                </Button>
                            </View>
                            <View style={styles.cell}>
                                <View style = {styles.searchBorder}></View>
                                <View style = {styles.searchOpacity}></View>
                                <View style = {styles.searchInner} >

                                  <View style = {styles.searchKey}>
                                      <Image style = {styles.proSearchIcon} source = {require('../../images/waimai/icon_search.png')} />
                                      <TextInput
                                          style={styles.searchText}
                                          onChangeText={(text) => this.setState({text})}
                                          value={this.state.text}
                                      />
                                  </View>

                                </View>
                            </View>
                            <View style={styles.cellfixed}>
                                <Image source = {require('../../images/common/icon_drop.png')} style = {styles.dropWhiteIcon} />
                            </View>
                        </View>
                    </View>

                    <View style = {styles.horizontalMenusBox}>
                        <ScrollView horizontal = {true} showsHorizontalScrollIndicator = {false} directionalLockEnabled = {true} showsVerticalScrollIndicator = {false}>
                            <Button style={[styles.horMenuBtn, styles.horMenuBtnSeled]} containerStyle={[styles.horMenuBtnContainter, styles.horMenuBtnConSeled]}>全部</Button>
                            <Button style={styles.horMenuBtn} containerStyle={styles.horMenuBtnContainter}>醒晨早餐</Button>
                            <Button style={styles.horMenuBtn} containerStyle={styles.horMenuBtnContainter}>下午茶</Button>
                            <Button style={styles.horMenuBtn} containerStyle={styles.horMenuBtnContainter}>中式餐品</Button>
                            <Button style={styles.horMenuBtn} containerStyle={styles.horMenuBtnContainter}>西式餐品</Button>
                            <Button style={styles.horMenuBtn} containerStyle={styles.horMenuBtnContainter}>经典面食</Button>
                            <Button style={styles.horMenuBtn} containerStyle={styles.horMenuBtnContainter}>特色小吃</Button>
                            <Button style={styles.horMenuBtn} containerStyle={styles.horMenuBtnContainter}>糖水甜品</Button>
                            <Button style={styles.horMenuBtn} containerStyle={styles.horMenuBtnContainter}>南亚风味</Button>
                        </ScrollView>
                    </View>

                    <View style = {{ marginTop: 20, borderWidth: 1, borderColor: '#ff0000'}}>
                        <Text>this is test section.{this.props.data}</Text>
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
    bannerbox: {
        borderWidth:0, borderColor:'#ff0000',
    },
    bannerImgWrap:{
        flex:1,flexDirection:'row'
    },
    bannerImg: {
        flex:1, resizeMode: Image.resizeMode.stretch, height:getAdaptHeight(201)
    },
    searchbox: {
        position:'absolute', top:30
    },
    searchwrap: {
        flex:1, flexDirection: 'row',
    },
    cellfixed: {
        alignItems: 'center', justifyContent: 'center', width: 60, height: 30, borderWidth: 0,
        borderColor: '#ff0000',
    },
    popBtnContainer: {
        width:58, height:28, overflow:'hidden', borderWidth: 0, borderColor: 'green', alignItems:'center',
        justifyContent: 'center',
    },
    popButton: {

    },
    popWhiteIcon:{
        width:getAdaptHeight(11), height: getAdaptHeight(18),
    },
    dropWhiteIcon: {
        width: getAdaptWidth(18), height: getAdaptHeight(17),
    },
    cell: {
        flex: 1, flexDirection:'column', height: 90, borderRadius: 30
    },
    searchBorder: {
        flex:1,  borderWidth: 0.5, borderRadius: 30, opacity:1, borderWidth:0.5, borderColor:'#ffffff'
    },
    searchOpacity: {
        position: 'relative', top: -30, left: 0, flex: 1, backgroundColor: '#ffffff', borderRadius: 30, opacity: 0.3,
    },
    searchInner: {
        position: 'relative', top: -60, left: 0, flex: 1, flexDirection:'row', backgroundColor: 'transparent', borderRadius: 30, opacity: 1,
    },
    searchKey: {
        flex:1, flexDirection:'row', justifyContent:'center', alignItems: 'center',
    },
    proSearchIcon: {
        flex:1, height:12.5 ,resizeMode: Image.resizeMode.contain,
    },
    searchText: {
        flex:4, height: 30, fontSize: 13, fontWeight: '900', color:'#ffffff'
    },

    horizontalMenusBox: {
        flexDirection: 'row', height: getAdaptHeight(42), borderBottomWidth:0.5, borderBottomColor: '#cccccc',
    },
    horMenuBtn: {
        fontSize: getAdaptHeight(13), color: '#111111',
    },
    horMenuBtnContainter: {
        alignItems: 'center', justifyContent: 'center', width:getAdaptWidth(81), height:getAdaptHeight(42),
        overflow:'hidden', backgroundColor: 'white',borderBottomWidth: 0, borderBottomColor: '#00a0e9',
    },
    horMenuBtnSeled: {
        color: '#00a0e9',
    },
    horMenuBtnConSeled: {
        borderBottomWidth: 2, borderBottomColor: '#00a0e9',
    },


});
