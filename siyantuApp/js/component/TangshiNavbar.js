'use strict'
import React from 'react';
import {AppRegistry, Navigator, StyleSheet, TouchableHighlight, Text, Image, View, Animated, Dimensions} from 'react-native';
import getAdaptHeight from '../component/getAdaptHeight';
import getAdaptWidth from '../component/getAdaptWidth';
import Button from 'react-native-button';
import {Actions} from 'react-native-router-flux';


export default function TangshiNavbar() {
        return (
            <View style={[styles.tangshiNavBar, {width:Dimensions.get('window').width}]}>
                <Text style = {{color:'blue', fontSize: 13}}>custom navbar</Text>

            </View>
        );
}

var styles = StyleSheet.create({
  	tangshiNavBar: {
        position:'absolute',left:0, top:0, height:64,
        flex:1, alignItems:'center', justifyContent:'center',
        borderBottomWidth:0.5, borderBottomColor:'#666666',
        backgroundColor: '#eeeeee',
    },
    test: {
        borderWidth:1, borderColor:'black',
        position:'absolute',left:0, top:16,
    },

});
