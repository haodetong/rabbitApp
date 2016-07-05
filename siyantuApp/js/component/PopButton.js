/*
    返回上一个页面的蓝色按钮  - 显示在页面顶部导航栏的左上角
*/
import React from 'react';
import {AppRegistry, Navigator, StyleSheet, TouchableHighlight, Text, Image, View,Animated} from 'react-native'
import getAdaptHeight from './getAdaptHeight';
import getAdaptWidth from './getAdaptWidth';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';

export default class PopButton extends React.Component{
    render() {
        return  <View style = {styles.popBtnBox}>
                    <Button onPress={Actions.pop} containerStyle={styles.popBtnContainer} style = {styles.popButton}>
                        <View style = {styles.popBtnWrap}>
                            <Image source = {require('../../images/common/icon_blue_pop.png')} style={styles.popBtn} />
                        </View>
                    </Button>
                </View>
    }
}

const styles = StyleSheet.create({
    popBtnBox: {
        position: "absolute",
        bottom: 10,
        left: 0,
        padding: 0,
        width: 50,
        height: 28,
        borderWidth: 0,
        borderColor: 'blue',
    },
    popBtnContainer: {

    },
    popButton: {

    },
    popBtnWrap: {
        width: 50, height: 28,
        justifyContent: 'center',
        alignItems: 'center',
    },
    popBtn: {
        width: getAdaptWidth(11),
        height: getAdaptHeight(18),
    },
});
