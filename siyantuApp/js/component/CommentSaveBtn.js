/*
    晒单评价页 - 右上角 - 发布按钮
*/
import React from 'react';
import {AppRegistry, Navigator, StyleSheet, TouchableHighlight, Text, Image, View,Animated} from 'react-native'
import getAdaptHeight from './getAdaptHeight';
import getAdaptWidth from './getAdaptWidth';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';

export default class CommentSavesBtn extends React.Component{

    render() {
        return  <View style = {styles.btnBox}>
                    <Button onPress={Actions.pop} containerStyle={styles.commentBtnContainer} style = {styles.commentButton}>
                        <View style = {styles.btnWrap}>
                            <Text style = {styles.btntext}>发布</Text>
                        </View>
                    </Button>
                </View>
    }

}

const styles = StyleSheet.create({
    btnBox: {
        position: "absolute",
        bottom: 11,
        right: 12,
        padding: 0,
    },
    btnWrap: {
        width: 60,
        height: 30,
        alignItems: 'flex-end',
        justifyContent: 'center',
        borderWidth: 0,
        borderColor: 'blue',
    },
    btntext: {
        color: '#00a0e9', fontSize: getAdaptHeight(18),
    },
});
