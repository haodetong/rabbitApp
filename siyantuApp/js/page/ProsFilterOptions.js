/*
    分类页点击筛选条件 - 类别、品牌、排序等 - 下拉页
*/
import React from 'react';
import {View, Text, StyleSheet, Image, TextInput, Animated, Dimensions} from "react-native";
import Button from "react-native-button";
import {Actions} from "react-native-router-flux";
import getAdaptHeight from '../component/getAdaptHeight';
import getAdaptWidth from '../component/getAdaptWidth';
import Payment from './Payment';

var {
  height: deviceHeight,
  width: deviceWidth
} = Dimensions.get("window");

export default class ProsFilterOptions extends React.Component {
    constructor(props){
        super (props);
        this.state = {
            offset: new Animated.Value(0),
            opacity: new Animated.Value(0)
        };
    }

    componentDidMount() {
        if(this.props.active){
            Animated.timing(this.state.offset, {
                duration: 200,
                toValue: 185
            }).start();
            Animated.timing(this.state.opacity, {
                duration: 250,
                toValue: 1
            }).start();
        }else{
            Animated.timing(this.state.offset, {
                duration: 200,
                toValue: 0
            }).start();
            Animated.timing(this.state.opacity, {
                duration: 150,
                toValue: 0
            }).start(Actions.pop);
        }

    }

    closeModal() {
        Animated.timing(this.state.offset, {
            duration: 200,
            toValue: 0
        }).start();
        Animated.timing(this.state.opacity, {
            duration: 150,
            toValue: 0
        }).start(Actions.pop);
    }

    render(){
        if(this.props.filter == 'type' && this.props.active) {
            return (
                <Animated.View style={[styles.container, {opacity: this.state.opacity}]}>
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
            );
        }else{
            return null;
        }

    }
}

var styles = StyleSheet.create({
    container: {
        position: "absolute",
        top:64 + getAdaptHeight(43),
        bottom:0,
        left:0,
        right:0,
        backgroundColor:"rgba(52,52,52,0.5)"
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
