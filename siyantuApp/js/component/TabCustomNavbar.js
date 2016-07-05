'use strict'
import React from 'react';
import {AppRegistry, Navigator, StyleSheet, TouchableHighlight, Text, Image, View,Animated} from 'react-native';
import getAdaptHeight from '../component/getAdaptHeight';
import getAdaptWidth from '../component/getAdaptWidth';
import Button from 'react-native-button';
import {Actions} from 'react-native-router-flux';


export default function TabCustomNavbar() {
        return (
            <View style={{ position:'absolute',left:0, top:0, width:50, height:20, borderWidth:1, borderColor:'#ff0000'}}>
                <Text style = {{color:'blue', fontSize: 13}}>custom navbar</Text>
            </View>
        );
}
