'use strict'
import React from 'react';
import {AppRegistry, Navigator, StyleSheet, Platform, ProgressBarAndroid, ListView, Text, Image, View} from 'react-native';
export default class NoCommend extends React.Component{
  	render() {
    		var text = '';
    		if (!this.props.isLoading) {
    		    text = 'No recommend shop';
    		};
    		return (
      			<View style={[styles.container, styles.centerText]}>
        				<Text style = {styles.noCommendText}>{text}</Text>
      			</View>
    		)
  	}
};
