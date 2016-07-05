/*
    页面 - 底部固定位置的购物车栏 - 包括购物车图标，总价格，打包费，结算按钮
*/
import React from 'react';
import {AppRegistry, Navigator, StyleSheet, TouchableHighlight, Text, TextInput, Image, View,Animated} from 'react-native'
import getAdaptHeight from './getAdaptHeight';
import getAdaptWidth from './getAdaptWidth';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';

export default class FooterShoppingBar extends React.Component{

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
        return  <View style = {styles.shoppingBar}>
                    <View style = {styles.shpBarBox}>
                        <View style = {styles.shopBarWrap}>
                            <Image source = {require('../../images/common/icon_shopping_cart.png')} style = {styles.shpBarIcon} />
                            <View style = {styles.proNumsInBar}>
                                <Text style = {styles.proNums}>13</Text>
                            </View>
                        </View>
                        <View style = {styles.shpBarPrices}>
                            <Text style = {styles.totalPrices}>￥22.00</Text>
                            <Text style = {styles.packagePrices}>另需打包费2元</Text>
                        </View>
                    </View>
                    <View style = {styles.calBox}>
                        <Button onPress={Actions.Calculator} containerStyle={styles.calculateBtnContainer} style = {styles.calculateButton}>
                            <View style = {styles.calBtnBox}>
                                <Text style = {styles.calBtn}>去结算</Text>
                            </View>
                        </Button>
                    </View>
                </View>
    }

}

const styles = StyleSheet.create({
    shoppingBar: {
        flex:1, flexDirection: 'row',
    },
    shpBarBox: {
        flex: 7, flexDirection: 'row',
    },
    calBox: {
      flex: 3,
      backgroundColor: '#00a0e9',
    },
    calculateBtnContainer: {
        flex: 1,
    },
    calBtnBox: {
        flex: 1, alignItems: 'center', justifyContent: 'center', borderWidth: 0, borderColor: 'red'
    },
    calBtn: {
        color: '#ffffff', fontSize: getAdaptHeight(16), fontWeight: '400',
    },

    shopBarWrap:{
        marginLeft: getAdaptWidth(20), marginRight: getAdaptWidth(20),
        alignItems: 'center', justifyContent: 'center',
    },
    shpBarIcon:{
        width: getAdaptWidth(35), height: getAdaptHeight(32),
    },
    proNumsInBar:{
        position: 'absolute', right: -7, top: 4,
        alignItems: 'center', justifyContent: 'center',
        width: getAdaptWidth(15), height: getAdaptHeight(15), borderRadius: 20,
        backgroundColor: '#ff3c00', overflow: 'hidden'
    },
    proNums:{
        color: '#ffffff', fontSize: getAdaptHeight(10), backgroundColor: 'transparent'
    },
    shpBarPrices:{
        flex: 1, flexDirection: 'row', alignItems:'center',
    },
    totalPrices: {
        color: '#e60012', fontSize: getAdaptHeight(16), fontWeight: '400',
    },
    packagePrices: {
        marginLeft: 5, color: '#666666', fontSize: getAdaptHeight(11),
    },
});
