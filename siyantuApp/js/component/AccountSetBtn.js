/*
    我的 - 标签页 - 右上角 - 代表设置的图片按钮
*/
import React from 'react';
import {AppRegistry, Navigator, StyleSheet, TouchableHighlight, Text, Image, View,Animated} from 'react-native'
import getAdaptHeight from './getAdaptHeight';
import getAdaptWidth from './getAdaptWidth';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';

export default class AccountSetBtn extends React.Component{

    _onPressAccountSetBtn() {
        alert('pressed account set btn.');
    }

    render() {
        return  <View style = {styles.acSetBtnBox}>
                    <Button onPress={Actions.SystemSetting} containerStyle={styles.shbBtnContainer} style = {styles.shbButton}>
                        <View style = {styles.acSetBtn}>
                            <Image source = {require('../../images/wode/icon_account_set_btn.png')} style={styles.acSetBtnIcon} />
                        </View>
                    </Button>
                </View>
    }

}

const styles = StyleSheet.create({
    acSetBtnBox: {
        position: "absolute",
        bottom: 11,
        right: 12,
        padding: 0,
    },
    acSetBtn: {
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0,
        borderColor: 'blue',
    },
    acSetBtnIcon: {
        width: getAdaptWidth(23),
        height: getAdaptHeight(23),
    },
});
