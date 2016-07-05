/*
    产品列表页ProLists.js - 头部 - 筛选条件
*/
import React from 'react';
import {AppRegistry, Navigator, StyleSheet, TouchableHighlight, ScrollView, Text, TextInput, Image, View, Animated, Dimensions} from 'react-native'
import getAdaptHeight from './getAdaptHeight';
import getAdaptWidth from './getAdaptWidth';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';

var {
  height: deviceHeight,
  width: deviceWidth
} = Dimensions.get("window");

export default class ProsFilter extends React.Component{

    static defaultProps = {
        //bannerImgInitalHeight: 201//设计图（iphone6 @x2）中为750px * 403px，所以为375dp * 201dp
    };
    static propTypes = {
        //bannerImgInitalHeight: React.PropTypes.number.isRequired
    };

    constructor(props){
        super(props);
        this.state = {
            active: false,
            containerHeight: 0,
            containerTop: deviceHeight,
            offset: new Animated.Value(0),
            opacity: new Animated.Value(0)
        };
    }


    filterClick(e) {
        if(this.state.active) {
            Animated.timing(this.state.offset, {
                duration: 200,
                toValue: 0
            }).start();
            Animated.timing(this.state.opacity, {
                duration: 200,
                toValue: 0,
            }).start();
            this.setState({
                active: false,
                containerHeight: 0,
                containerTop: deviceHeight,
            });
        }else{
            Animated.timing(this.state.offset, {
                duration: 200,
                toValue: 185
            }).start();
            Animated.timing(this.state.opacity, {
                duration: 200,
                toValue: 1,
            }).start();
            this.setState({
                active: true,
                containerHeight: deviceHeight - getAdaptHeight(43),
                containerTop: getAdaptHeight(43),
            });
        }
    }

    render() {
        return (
            <View style = {styles.filterMain}>

                <View style = {styles.filterBox}>
                    <Button onPress={this.filterClick.bind(this)} containerStyle={styles.filterContainer} style = {styles.filterButton}>
                        <View style = {styles.filterOptions}>
                            <Text style = {this.state.active ? styles.optTitleActive : styles.optTitle}>类别</Text>
                            <Image source = {require('../../images/common/icon_arrow_black_down.png')} style = {styles.optArrowDown} />
                        </View>
                    </Button>
                    <View style = {styles.filterOptions}>
                        <Text style = {styles.optTitle}>品牌</Text>
                        <Image source = {require('../../images/common/icon_arrow_black_down.png')} style = {styles.optArrowDown} />
                    </View>
                    <View style = {styles.filterOptions}>
                        <Text style = {styles.optTitle}>排序</Text>
                        <Image source = {require('../../images/common/icon_arrow_black_down.png')} style = {styles.optArrowDown} />
                    </View>
                    <View style = {styles.filterOptions}>
                        <Text style = {styles.optTitle}>筛选</Text>
                        <Image source = {require('../../images/common/icon_arrow_black_down.png')} style = {styles.optArrowDown} />
                    </View>
                </View>

                <Animated.View style={[styles.container, {opacity: this.state.opacity}, {height: this.state.containerHeight}, {top: this.state.containerTop}]}>
                    <Animated.View style={[styles.mainBox, {height: this.state.offset}]}>

                        <Animated.View style={[styles.filterRow, {opacity: this.state.opacity}]}>
                            <Animated.View style={[styles.filterOpt, {opacity: this.state.opacity}]}>
                                <Animated.View style={[styles.filterTextBox, {opacity: this.state.opacity}]}>
                                    <Text style = {styles.filterText}>全部结果</Text>
                                </Animated.View>
                                <Animated.View style={[styles.filterNumsBox, {opacity: this.state.opacity}]}>
                                    <Text style = {styles.filterNums}>90</Text>
                                </Animated.View>
                            </Animated.View>
                            <Animated.View style={[styles.filterOpt, {opacity: this.state.opacity}]}>
                                <Animated.View style={[styles.filterTextBox, {opacity: this.state.opacity}]}>
                                    <Text style = {styles.filterText}>醒晨早餐</Text>
                                </Animated.View>
                                <Animated.View style={[styles.filterNumsBox, {opacity: this.state.opacity}]}>
                                    <Text style = {styles.filterNums}>10</Text>
                                </Animated.View>
                            </Animated.View>
                        </Animated.View>

                        <Animated.View style={[styles.filterRow, {opacity: this.state.opacity}]}>
                            <Animated.View style={[styles.filterOpt, {opacity: this.state.opacity}]}>
                                <Animated.View style={[styles.filterTextBox, {opacity: this.state.opacity}]}>
                                    <Text style = {styles.filterText}>下午茶</Text>
                                </Animated.View>
                                <Animated.View style={[styles.filterNumsBox, {opacity: this.state.opacity}]}>
                                    <Text style = {styles.filterNums}>90</Text>
                                </Animated.View>
                            </Animated.View>
                            <Animated.View style={[styles.filterOpt, {opacity: this.state.opacity}]}>
                                <Animated.View style={[styles.filterTextBox, {opacity: this.state.opacity}]}>
                                    <Text style = {styles.filterText}>中式餐品</Text>
                                </Animated.View>
                                <Animated.View style={[styles.filterNumsBox, {opacity: this.state.opacity}]}>
                                    <Text style = {styles.filterNums}>10</Text>
                                </Animated.View>
                            </Animated.View>
                        </Animated.View>

                        <Animated.View style={[styles.filterRow, {opacity: this.state.opacity}]}>
                            <Animated.View style={[styles.filterOpt, {opacity: this.state.opacity}]}>
                                <Animated.View style={[styles.filterTextBox, {opacity: this.state.opacity}]}>
                                    <Text style = {styles.filterText}>西式精选</Text>
                                </Animated.View>
                                <Animated.View style={[styles.filterNumsBox, {opacity: this.state.opacity}]}>
                                    <Text style = {styles.filterNums}>90</Text>
                                </Animated.View>
                            </Animated.View>
                            <Animated.View style={[styles.filterOpt, {opacity: this.state.opacity}]}>
                                <Animated.View style={[styles.filterTextBox, {opacity: this.state.opacity}]}>
                                    <Text style = {styles.filterText}>经典面食</Text>
                                </Animated.View>
                                <Animated.View style={[styles.filterNumsBox, {opacity: this.state.opacity}]}>
                                    <Text style = {styles.filterNums}>10</Text>
                                </Animated.View>
                            </Animated.View>
                        </Animated.View>

                        <Animated.View style={[styles.filterRow, {opacity: this.state.opacity}]}>
                            <Animated.View style={[styles.filterOpt, {opacity: this.state.opacity}]}>
                                <Animated.View style={[styles.filterTextBox, {opacity: this.state.opacity}]}>
                                    <Text style = {styles.filterText}>特色小吃</Text>
                                </Animated.View>
                                <Animated.View style={[styles.filterNumsBox, {opacity: this.state.opacity}]}>
                                    <Text style = {styles.filterNums}>90</Text>
                                </Animated.View>
                            </Animated.View>
                            <Animated.View style={[styles.filterOpt, {opacity: this.state.opacity}]}>
                                <Animated.View style={[styles.filterTextBox, {opacity: this.state.opacity}]}>
                                    <Text style = {styles.filterText}>糖水甜品</Text>
                                </Animated.View>
                                <Animated.View style={[styles.filterNumsBox, {opacity: this.state.opacity}]}>
                                    <Text style = {styles.filterNums}>10</Text>
                                </Animated.View>
                            </Animated.View>
                        </Animated.View>

                        <Animated.View style={[styles.filterRow, {opacity: this.state.opacity}]}>
                            <Animated.View style={[styles.filterOpt, {opacity: this.state.opacity}]}>
                                <Animated.View style={[styles.filterTextBox, {opacity: this.state.opacity}]}>
                                    <Text style = {styles.filterText}>快捷便当</Text>
                                </Animated.View>
                                <Animated.View style={[styles.filterNumsBox, {opacity: this.state.opacity}]}>
                                    <Text style = {styles.filterNums}>90</Text>
                                </Animated.View>
                            </Animated.View>
                            <Animated.View style={[styles.filterOpt, {opacity: this.state.opacity}]}>
                                <Animated.View style={[styles.filterTextBox, {opacity: this.state.opacity}]}>
                                    <Text style = {styles.filterText}>南亚风味</Text>
                                </Animated.View>
                                <Animated.View style={[styles.filterNumsBox, {opacity: this.state.opacity}]}>
                                    <Text style = {styles.filterNums}>10</Text>
                                </Animated.View>
                            </Animated.View>
                        </Animated.View>

                    </Animated.View>
                </Animated.View>

            </View>
        );
    }

}

const styles = StyleSheet.create({

    filterMain: {
        flex: 1,
        position: 'absolute', top: 0, left: 0, width: Dimensions.get('window').width,
        backgroundColor: '#ffffff',borderWidth: 0, borderColor: 'green',
    },

    filterBox: {
        flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
        height: getAdaptHeight(43), borderBottomWidth: 0.5, borderBottomColor: '#ccc',
    },
    filterContainer: {
        flex: 1, height: getAdaptHeight(43), borderWidth: 0, borderColor: 'red',
    },
    filterOptions: {
        flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
        borderWidth: 0, borderColor: 'red',
    },
    optTitle: {
        color: '#111', fontSize: getAdaptHeight(14),
    },
    optTitleActive: {
        color: '#00a0e9', fontSize: getAdaptHeight(14),
    },
    optArrowDown: {
        marginLeft: 2, width: getAdaptWidth(7), height: getAdaptHeight(4),
    },

    container: {
        position: "absolute",
        left:0,
        right:0,
        backgroundColor:"rgba(52,52,52,0.5)",
        borderWidth: 0, borderColor: 'red',
    },
    mainBox: {
        paddingTop: 10,
        backgroundColor: 'white',
        borderWidth: 0, borderColor: 'blue',
    },
    filterRow: {
        flexDirection: 'row', borderWidth: 0, borderColor: 'red',
    },
    filterOpt: {
        flex: 1, flexDirection: 'row', justifyContent: 'center',
        paddingTop: 10, paddingBottom: 10, borderWidth: 0, borderColor: 'green',
    },
    filterTextBox: {
        borderWidth: 0, borderColor: 'red',
    },
    filterText: {
        color: '#666', fontSize: getAdaptHeight(14), fontWeight: '400',
    },
    filterNumsBox: {
        justifyContent: 'center', alignItems: 'center',
        paddingLeft: 5, paddingRight: 5,
        marginLeft: 20, height: getAdaptHeight(14),
        backgroundColor: '#ccc',
        borderRadius: 8,
    },
    filterNums: {
         color: '#fff', fontSize: getAdaptHeight(10),
    },


});
