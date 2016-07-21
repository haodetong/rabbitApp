/*
    我的 - 标签页 - 右上角 - 代表消息的图片按钮
*/
import React from 'react';
import {AppRegistry, Navigator, StyleSheet, TouchableHighlight, Text, Image, View,Animated} from 'react-native'
import getAdaptHeight from './getAdaptHeight';
import getAdaptWidth from './getAdaptWidth';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';

export default class MyMessageBtn extends React.Component{
    render() {
        return  <View style = {styles.myMessageBtnBox}>
                    <Button onPress={Actions.MyMessages} containerStyle={styles.shbBtnContainer} style = {styles.shbButton}>
                        <View>
                            <Image source = {require('../../images/wode/icon_my_message_btn.png')} style={styles.myMessageBtn} />
                            <View style = {styles.myMessageCount}>
                                <Text style = {styles.myMessageDigs}>3</Text>
                            </View>
                        </View>
                    </Button>
                </View>
    }
}

const styles = StyleSheet.create({
    myMessageBtnBox: {
        position: "absolute",
        bottom: 14,
        left: 15,
        padding: 0,
        borderWidth: 0,
        borderColor: 'blue'
    },
    myMessageBtn: {
        width: getAdaptWidth(21),
        height: getAdaptHeight(26),
    },
    myMessageCount: {
        position: 'absolute',
        right: 0 - getAdaptHeight(5),
        top: 0 - getAdaptHeight(5),
        width: getAdaptWidth(15),
        height: getAdaptHeight(15),
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ff3c00',
    },
    myMessageDigs: {
        color: '#ffffff',
        fontSize: getAdaptHeight(11),
        fontWeight: 'bold',
    },
});
