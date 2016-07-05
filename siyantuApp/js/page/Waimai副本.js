'use strict'

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TabBarIOS,
} from 'react-native';

export default class Waimai extends React.Component{

    static defaultProps = {
        autoPlay: false,
        maxLoops: 10,
    };

    static propTypes = {
        autoPlay: React.PropTypes.bool.isRequired,
        maxLoops: React.PropTypes.number.isRequired,
    };

    constructor(props){
        super(props);
        this.state = {

        };
    }

    componentWillMount() {

    }

    render() {
        return (
            <View style = {styles.banners}>
                <Image style = {styles.bannerImg} source = {require('./images/waimai/bg-banner.png')} />
            </View>
        );
    }

};

var styles = StyleSheet.create({
  	container: {
        flex: 1,
    },
    bannerImg: {
        resizeMode: Image.resizeMode.stretch,

    },
});
