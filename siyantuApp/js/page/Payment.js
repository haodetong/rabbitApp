/*
    支付页
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
    TouchableHighlight
} from 'react-native';
import getAdaptHeight from '../component/getAdaptHeight';
import getAdaptWidth from '../component/getAdaptWidth';
import FooterCalculatorBar from '../component/FooterCalculatorBar';
import AddShippingAddress from '../page/AddShippingAddress';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
import Picker from 'react-native-picker';


export default class Payment extends React.Component{

    static defaultProps = {
    };
    static propTypes = {
    };

    constructor(props){
        super(props);
        this.state = {
            //isSelected: false,
        };
    }

    _pickerToggle(){
        this.picker.toggle();
    }

    render() {
        return (
            <View style={styles.container}>
                <View style = {styles.proBody}>
                    <ScrollView vertical = {true} showsVerticalScrollIndicator = {false} directionalLockEnabled = {true} showsHorizontalScrollIndicator = {false}>
                        <View style = {styles.payBox}>

                            <View style = {styles.payOption}>
                                <View style = {styles.optLabel}>
                                    <Text style = {styles.labelTitle}>四眼兔订单：</Text>
                                </View>
                                <View style = {styles.optContent}>
                                    <Text style = {styles.conText}>213128888999977776666</Text>
                                </View>
                            </View>

                            <View style = {styles.payOption}>
                                <View style = {styles.optLabel}>
                                    <Text style = {styles.labelTitle}>收款方：</Text>
                                </View>
                                <View style = {styles.optContent02}>
                                    <Text style = {styles.conText}>四眼兔</Text>
                                </View>
                            </View>

                            <View style = {styles.payCost}>
                                <View style = {styles.costLabel}>
                                    <Text style = {styles.costTitle}>需付款：</Text>
                                </View>
                                <View style = {styles.costContent}>
                                    <Text style = {styles.costText}>￥32.00</Text>
                                </View>
                            </View>

                            <View style = {styles.payNow}>
                                <Button onPress={Actions.pop} containerStyle={styles.payContainer} style = {styles.payButton}>
                                    立即支付
                                </Button>
                            </View>

                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }

};

var styles = StyleSheet.create({
    container:{
  	    flex: 1,
  	    backgroundColor: '#fff',
  	},
    proBody: {
        flex: 1, marginBottom: getAdaptHeight(50),
        borderWidth: 0, borderColor: 'red',
    },

    payBox: {
        marginTop: 5, paddingLeft: getAdaptWidth(30), paddingRight: getAdaptWidth(30),
    },
    payOption: {
        flexDirection: 'row', borderBottomWidth: 0.5, borderBottomColor: '#e5e5e7',
        paddingTop: getAdaptHeight(10), paddingBottom: getAdaptHeight(10),
    },
    optLabel: {
        flex: 2,
    },
    labelTitle: {
        color: '#8f8f94', fontSize: getAdaptHeight(13),
    },
    optContent: {
        flex: 5,
    },
    optContent02: {
        flex: 5, alignItems: 'flex-end',
    },
    conText: {
        color: '#8f8f94', fontSize: getAdaptHeight(13),
    },

    payCost: {
        flexDirection: 'row',
        paddingTop: getAdaptHeight(40), paddingBottom: getAdaptHeight(40),
    },
    costLabel: {
        flex: 2, justifyContent: 'center',
    },
    costTitle: {
        color: '#111', fontSize: getAdaptHeight(14),
    },
    costContent: {
        flex: 5, alignItems: 'flex-end',
    },
    costText: {
        color: '#00a0e9', fontSize: getAdaptHeight(25),
    },

    payNow: {
        borderWidth: 0,
    },
    payContainer: {
        flex: 1, justifyContent: 'center', alignItems: 'center',
        height: getAdaptHeight(44), backgroundColor: '#00a0e9', borderRadius: 2,
    },
    payButton: {
        color: '#fff', fontSize: getAdaptHeight(16),
    },






});
