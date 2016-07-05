/*
    产品列表页ProLists.js - 头部navBar - 包括左边的pop按钮，中间的搜索框，右边的下拉按钮
*/
import React from 'react';
import {AppRegistry, Navigator, StyleSheet, TouchableHighlight, Text, TextInput, Image, View,Animated} from 'react-native'
import getAdaptHeight from './getAdaptHeight';
import getAdaptWidth from './getAdaptWidth';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';

export default class SearchHeader extends React.Component{

    static defaultProps = {
        //bannerImgInitalHeight: 201//设计图（iphone6 @x2）中为750px * 403px，所以为375dp * 201dp
    };
    static propTypes = {
        //bannerImgInitalHeight: React.PropTypes.number.isRequired
    };

    constructor(props){
        super(props);
        this.state = {
            text: '搜索关键词',
        };
    }

    render() {
        return  <View style={styles.searchwrap}>
                    <View style={styles.cellfixed}>
                        <Button onPress={Actions.pop} containerStyle={styles.popBtnContainer} style = {styles.popButton}>
                            <Image source = {require('../../images/common/icon_blue_pop.png')} style = {styles.popBlueIcon} />
                        </Button>
                    </View>
                    <View style={styles.cell}>
                        <Button onPress={Actions.searchPros} containerStyle={styles.searchBtnContainer} style = {styles.searchButton}>
                            <View style = {styles.searchInner} >
                                <View style = {styles.searchKey}>
                                    <Image style = {styles.proSearchIcon} source = {require('../../images/common/icon_gray_search.png')} />
                                    <TextInput
                                        style={styles.searchText}
                                        defaultValue = '搜索关键词'
                                        editable = {false}
                                    />
                                </View>
                            </View>
                        </Button>
                    </View>
                    <View style={styles.cellfixed}>
                        <Image source = {require('../../images/common/icon_blue_drop.png')} style = {styles.dropBlueIcon} />
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

    },
    popBlueIcon:{
        width:getAdaptHeight(11), height: getAdaptHeight(18),
    },
    dropBlueIcon: {
        width: getAdaptWidth(18), height: getAdaptHeight(17),
    },
    cell: {
        flex: 1, flexDirection:'column', height: getAdaptHeight(30), borderRadius: 30, borderWidth: 0.5, borderColor: '#dfdfe0',
    },

    searchBtnContainer: {
        flex: 1, borderWidth: 0, borderColor: 'red',
    },
    searchButton: {

    },

    searchInner: {
       flex: 1, flexDirection:'row', backgroundColor: '#efeff4', borderRadius: 30,
    },
    searchKey: {
        flex:1, flexDirection:'row', justifyContent:'center', alignItems: 'center',
    },
    proSearchIcon: {
        flex:1, height:getAdaptHeight(12.5) ,resizeMode: Image.resizeMode.contain,
    },
    searchText: {
        flex:4, height: getAdaptHeight(30), fontSize: getAdaptHeight(14), fontWeight: '900', color:'#8f8f94'
    },
});
