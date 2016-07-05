/*
    产品列表页ProLists.js - 头部 - 水平排列的九大分类
*/
import React from 'react';
import {AppRegistry, Navigator, StyleSheet, TouchableHighlight, ScrollView, Text, TextInput, Image, View,Animated} from 'react-native'
import getAdaptHeight from './getAdaptHeight';
import getAdaptWidth from './getAdaptWidth';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';

export default class HorizontalMenus extends React.Component{

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
        return  <View style = {styles.horizontalMenusBox}>
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
    }

}

const styles = StyleSheet.create({
    horizontalMenusBox: {
        flexDirection: 'row', height: getAdaptHeight(42), borderBottomWidth:0.5, borderBottomColor: '#cccccc', backgroundColor: '#ffffff'
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
