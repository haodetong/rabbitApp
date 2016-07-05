/*
    产品搜索页SearchProduct.js - 头部navBar - 包括左边的搜索框，右边的取消按钮
*/
import React from 'react';
import {AppRegistry, Navigator, StyleSheet, TouchableHighlight, Text, TextInput, Image, View,Animated} from 'react-native'
import getAdaptHeight from './getAdaptHeight';
import getAdaptWidth from './getAdaptWidth';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';

export default class SearchProsHeader extends React.Component{

    static defaultProps = {
        //bannerImgInitalHeight: 201//设计图（iphone6 @x2）中为750px * 403px，所以为375dp * 201dp
    };
    static propTypes = {
        //bannerImgInitalHeight: React.PropTypes.number.isRequired
    };

    constructor(props){
        super(props);
        this.state = {
            //text: '输入搜索关键词',
        };
    }

    render() {
        return  <View style={styles.searchwrap}>
                    <View style={styles.cell}>
                        <View style = {styles.searchInner} >
                            <View style = {styles.searchKey}>
                                <Image style = {styles.proSearchIcon} source = {require('../../images/common/icon_gray_search.png')} />
                                <TextInput
                                    style={styles.searchText}
                                    placeholder = '输入搜索关键词'
                                    autoFocus = {true}
                                    onSubmitEditing = {this.props.startSearch}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.cellfixed}>
                        <Button onPress={Actions.pop} containerStyle={styles.popBtnContainer} style = {styles.popButton}>取消</Button>
                    </View>
                </View>
    }

}

const styles = StyleSheet.create({
    searchwrap: {
        flex:1, flexDirection: 'row', borderWidth: 0, borderColor: 'yellow', justifyContent: 'center', alignItems: 'center',
    },
    cellfixed: {
        alignItems: 'center', justifyContent: 'center', width: 60, height: getAdaptHeight(30), borderWidth: 0,
        borderColor: '#ff0000',
    },
    popBtnContainer: {
        width:58, height:28, overflow:'hidden', borderWidth: 0, borderColor: 'green', alignItems:'center',
        justifyContent: 'center',
    },
    popButton: {
        color: '#626264', fontSize: getAdaptHeight(15),
    },
    cell: {
        flex: 1, flexDirection:'column', height: getAdaptHeight(30), borderWidth: 0,
    },

    searchInner: {
       flex: 1, flexDirection:'row',
    },
    searchKey: {
        flex:1, flexDirection:'row', justifyContent:'center', alignItems: 'center',
    },
    proSearchIcon: {
        flex:1, height:getAdaptHeight(12.5) ,resizeMode: Image.resizeMode.contain,
    },
    searchText: {
        flex:6, height: getAdaptHeight(30), fontSize: getAdaptHeight(15), color:'#8e8e93',borderWidth: 0, borderColor: '#dfdfe0',
    },
});
