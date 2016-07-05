/*
    大分类页 - 右上角 - 代表搜索的图片按钮
*/
import React from 'react';
import {AppRegistry, Navigator, StyleSheet, TouchableHighlight, Text, Image, View,Animated} from 'react-native'
import getAdaptHeight from './getAdaptHeight';
import getAdaptWidth from './getAdaptWidth';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';

export default class SearchProsBtn extends React.Component{

    render() {
        return  <View style = {styles.btnBox}>
                    <Button onPress={Actions.searchPros} containerStyle={styles.searchBtnContainer} style = {styles.searchButton}>
                        <View style = {styles.btnWrap}>
                            <Image source = {require('../../images/common/icon_search_blue.png')} style={styles.btnIcon} />
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
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0,
        borderColor: 'blue',
    },
    btnIcon: {
        width: getAdaptWidth(18),
        height: getAdaptHeight(18),
    },
});
