/*
    我的 - 标签页 - 美食收藏页
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
import getAdaptHeight from '../component/getAdaptHeight';
import getAdaptWidth from '../component/getAdaptWidth';
import ProsItems from '../component/ProsItems';
import FooterShoppingBar from '../component/FooterShoppingBar';

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
            //text: '搜索关键词',
        };
    }

    render() {
        return (
            <View style={styles.container}>

                <View style = {styles.proBody}>
                    <ScrollView vertical = {true} showsVerticalScrollIndicator = {false} directionalLockEnabled = {true} showsHorizontalScrollIndicator = {false}>
                        {/*prolists*/}
                        <ProsItems />
                    </ScrollView>
                </View>

                <View style = {styles.proFooter}>
                    <FooterShoppingBar />
                </View>
            </View>
        );
    }

};

var styles = StyleSheet.create({
  	container: {
        flex:1,
        backgroundColor: '#f4f4f4',
    },

    proBody: {
        flex: 1, marginBottom: getAdaptHeight(50),
        borderWidth: 0, borderColor: 'blue',
    },
    proFooter: {
        position: 'absolute', bottom: 0, left: 0,
        width: Dimensions.get('window').width, height: getAdaptHeight(50),
        borderTopWidth: 0.5, borderTopColor: '#cccccc', backgroundColor: '#f8f8f8',
    },

});
