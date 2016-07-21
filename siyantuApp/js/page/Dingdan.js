/*
    订单 - 标签页
*/
'use strict'
import React from 'react';
import {AppRegistry, Navigator, StyleSheet, Platform, ProgressBarAndroid, ListView, Text, Image, View, Animated} from 'react-native';
import DingdanContent from './DingdanContent';
import getAdaptHeight from '../component/getAdaptHeight';
import getAdaptWidth from '../component/getAdaptWidth';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';

export default class Dingdan extends React.Component{

  	//timeoutID: (null: any),

    static defaultProps = {
        //bannerImgInitalHeight: 201//设计图（iphone6 @x2）中为750px * 403px，所以为375dp * 201dp
    };
    static propTypes = {
        //bannerImgInitalHeight: React.PropTypes.number.isRequired
    };

    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
        };
    }

		render() {
        return (
						<View style={styles.container}>
								<ScrollableTabView
										style={{marginTop: 0, borderWidth: 0, borderColor: 'red'}}
										tabBarActiveTextColor = '#00a0e9'
										tabBarInactiveTextColor = '#666'
										tabBarBackgroundColor = '#fff'
										tabBarTextStyle = {{fontSize: 13}}
										renderTabBar={() => <DefaultTabBar tabStyle = {{paddingBottom: 0,}} style = {{height: 40,  borderWidth: 0.5, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, borderBottomColor: '#ccc',}} underlineHeight = {2} underlineColor = '#00a0e9' />}
								>
										<DingdanContent status = 'notPay' tabLabel="待付款(8)" />
										<DingdanContent status = 'notReceipt' tabLabel="待收货(6)" />
										<DingdanContent status = 'notComment' tabLabel="待评价(5)" />
								</ScrollableTabView>
						</View>
        )
    }
};

var styles = StyleSheet.create({
  	container:{
  	    flex: 1,
  	    backgroundColor: '#f4f4f4',
  	},


});
