/*
    登录页
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
    Dimensions,
    WebView,
} from 'react-native';
import getAdaptHeight from '../component/getAdaptHeight';
import getAdaptWidth from '../component/getAdaptWidth';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
import Register from './Register';
import {CustomSegmentedControl} from 'react-native-custom-segmented-control';


export default class Login extends React.Component{

    static defaultProps = {
    };
    static propTypes = {
    };

    constructor(props){
        super(props);
        this.state = {
            //url: 'http://sports.qq.com/',
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style = {styles.pageBody}>
                    <View style = {{ height: 50, borderWidth: 1, borderColor: 'red'}}>
                        <CustomSegmentedControl
                            style={{
                                flex:1,
                                backgroundColor: 'white',
                                marginVertical: 8
                            }}
                            textValues={['ORDERS','PRODUCTS' ]}
                            selected={0}
                            segmentedStyle={{
                                selectedLineHeight: 2,
                                fontSize:17,
                                fontWeight: 'bold', // bold, italic, regular (default)
                                segmentBackgroundColor: 'transparent',
                                segmentTextColor: '#7a92a5',
                                segmentHighlightTextColor: '#7a92a599',
                                selectedLineColor: '#00adf5',
                                selectedLineAlign: 'bottom', // top/bottom/text
                                selectedLineMode: 'text', // full/text
                                selectedTextColor: 'black',
                                selectedLinePaddingWidth: 30,
                                segmentFontFamily: 'system-font-bold'
                            }}
                            animation={{
                                duration: 0.7,
                                damping: 0.5,
                                animationType: 'middle-line',
                                initialDampingVelocity: 0.4
                            }}
                            onSelectedWillChange={(event)=> {
                            }}
                            onSelectedDidChange={(event)=> {
                            }}
                        />
                    </View>
                </View>
                <View style = {styles.pageFooter}>
                    <Button onPress={Actions.pop} containerStyle={styles.regBtnContainer} style = {styles.regButton}>
                        手机快速注册
                    </Button>
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
    pageBody: {
        flex: 9,
        borderWidth: 0, borderColor: 'red',
    },
    pageFooter: {
        flex: 1, marginLeft: getAdaptWidth(18), marginRight: getAdaptWidth(18),
        borderWidth: 0, borderColor: 'red',
    },
    regBtnContainer: {
        alignItems: 'center', justifyContent: 'center',
        height: getAdaptHeight(44), borderWidth: 1, borderColor: '#00a0e9',
        borderRadius: 2,
    },
    regButton: {
        color: '#00a0e9', fontSize: getAdaptHeight(16), fontWeight: '500',
    },

});
