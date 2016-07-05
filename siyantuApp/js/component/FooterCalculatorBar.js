/*
    页面 - 底部固定位置的结算栏 - 包括价格总计，支付按钮
*/
import React from 'react';
import {AppRegistry, Navigator, StyleSheet, TouchableHighlight, Text, TextInput, Image, View,Animated} from 'react-native'
import getAdaptHeight from './getAdaptHeight';
import getAdaptWidth from './getAdaptWidth';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
import VerifyByPhone from '../page/VerifyByPhone';

export default class FooterCalculatorBar extends React.Component{

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
        return  <View style = {styles.calcBar}>
                    <View style = {styles.calcBarBox}>
                        <View style = {styles.calcBarWrap}>
                            <Text style = {styles.totalPricesLable}>合计：</Text>
                            <Text style = {styles.totalPricesNums}>￥22.00</Text>
                        </View>
                    </View>
                    <View style = {styles.calBox}>
                        <Button onPress={()=>Actions.verifyByPhone("用户手机验证")} containerStyle={styles.calculateBtnContainer} style = {styles.calculateButton}>
                            <View style = {styles.calBtnBox}>
                                <Text style = {styles.calBtn}>支付</Text>
                            </View>
                        </Button>
                    </View>
                </View>
    }

}

const styles = StyleSheet.create({
    calcBar: {
        flex:1, flexDirection: 'row',
    },
    calcBarBox: {
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

    calcBarWrap:{
        flexDirection: 'row',
        marginLeft: getAdaptWidth(20), marginRight: getAdaptWidth(20),
        alignItems: 'center', justifyContent: 'center',
    },
    totalPricesLable:{
        color: '#111111', fontSize: getAdaptHeight(16), fontWeight: '400',
    },
    totalPricesNums: {
        marginLeft: getAdaptWidth(10), color: '#e60012', fontSize: getAdaptHeight(16), fontWeight: '400',
    },
});
