/*
    订单 - 配送状态
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
} from 'react-native';
import getAdaptHeight from '../component/getAdaptHeight';
import getAdaptWidth from '../component/getAdaptWidth';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';


export default class DingdanSendStatus extends React.Component{

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

    render() {
        return (
            <View style = {styles.proBody}>
                <ScrollView vertical = {true} showsVerticalScrollIndicator = {false} directionalLockEnabled = {true} showsHorizontalScrollIndicator = {false}>

                    <View style = {styles.detailBox}>
                        <View style = {styles.sideBox}>
                            <View style = {styles.verticalLine}></View>
                            <View style = {styles.stepNums}>
                              <Text style = {styles.step}>1</Text>
                            </View>
                        </View>
                        <View style = {styles.conBox}>
                            <View style = {styles.infoBox}>
                                <View style = {styles.iconArrowBox}>
                                    <Image source = {require('../../images/dingdan/icon_arrow_left_shadow.png')} style = {styles.iconarrow} />
                                </View>

                                <View style = {styles.statusBox}>
                                    <View style = {styles.statusHeader}>
                                        <Text style = {styles.statusTitle}>订单已提交</Text>
                                        <Text style = {styles.statusDate}>04-11 9:22</Text>
                                    </View>
                                    <View style = {styles.statusCon}>
                                        <Text style = {styles.statusContent}>请耐心等待商家接单</Text>
                                    </View>
                                </View>

                            </View>
                        </View>
                    </View>

                    <View style = {styles.detailBox}>
                        <View style = {styles.sideBox}>
                            <View style = {styles.verticalLine}></View>
                            <View style = {styles.stepNums}>
                              <Text style = {styles.step}>2</Text>
                            </View>
                        </View>
                        <View style = {styles.conBox}>
                            <View style = {styles.infoBox}>
                                <View style = {styles.iconArrowBox}>
                                    <Image source = {require('../../images/dingdan/icon_arrow_left_shadow.png')} style = {styles.iconarrow} />
                                </View>

                                <View style = {styles.statusBox}>
                                    <View style = {styles.statusHeader}>
                                        <Text style = {styles.statusTitle}>支付成功</Text>
                                        <Text style = {styles.statusDate}>04-11 9:30</Text>
                                    </View>
                                    <View style = {styles.statusCon}>
                                        <Text style = {styles.statusContent}>请耐心等待商家接单</Text>
                                    </View>
                                </View>

                            </View>
                        </View>
                    </View>

                    <View style = {styles.detailBox}>
                        <View style = {styles.sideBox}>
                            <View style = {styles.verticalLine}></View>
                            <View style = {styles.stepNums}>
                              <Text style = {styles.step}>3</Text>
                            </View>
                        </View>
                        <View style = {styles.conBox}>
                            <View style = {styles.infoBox}>
                                <View style = {styles.iconArrowBox}>
                                    <Image source = {require('../../images/dingdan/icon_arrow_left_shadow.png')} style = {styles.iconarrow} />
                                </View>

                                <View style = {styles.statusBox}>
                                    <View style = {styles.statusHeader}>
                                        <Text style = {styles.statusTitle}>商家已接单</Text>
                                        <Text style = {styles.statusDate}>04-11 9:35</Text>
                                    </View>
                                    <View style = {styles.statusCon}>
                                        <Text style = {styles.statusContent}>商品准备中，由四眼兔配送</Text>
                                    </View>
                                </View>

                            </View>
                        </View>
                    </View>

                    <View style = {styles.detailBox}>
                        <View style = {styles.sideBox}>
                            <View style = {styles.verticalLine}></View>
                            <View style = {styles.stepNums}>
                              <Text style = {styles.step}>4</Text>
                            </View>
                        </View>
                        <View style = {styles.conBox}>
                            <View style = {styles.infoBox}>
                                <View style = {styles.iconArrowBox}>
                                    <Image source = {require('../../images/dingdan/icon_arrow_left_shadow.png')} style = {styles.iconarrow} />
                                </View>

                                <View style = {styles.statusBox}>
                                    <View style = {styles.statusHeader}>
                                        <Text style = {styles.statusTitle}>配送中</Text>
                                        <Text style = {styles.statusDate}>04-11 9:40</Text>
                                    </View>
                                    <View style = {styles.statusCon}>
                                        <Text style = {styles.statusContent}>商品正在配送中，预计30分钟内送达</Text>
                                        <Text style = {styles.statusContent}>配送员：王师傅</Text>
                                        <Text style = {styles.statusContent}>联系电话：13488888888</Text>
                                    </View>
                                </View>

                            </View>
                        </View>
                    </View>

                    <View style = {styles.detailBox}>
                        <View style = {styles.sideBox}>
                            <View style = {styles.verticalLine}></View>
                            <View style = {[styles.stepNums, styles.stepNumsActive]}>
                              <Text style = {[styles.step, styles.stepActive]}>5</Text>
                            </View>
                        </View>
                        <View style = {styles.conBox}>
                            <View style = {styles.infoBox}>
                                <View style = {styles.iconArrowBox}>
                                    <Image source = {require('../../images/dingdan/icon_arrow_left_shadow.png')} style = {styles.iconarrow} />
                                </View>

                                <View style = {styles.statusBox}>
                                    <View style = {styles.statusHeader}>
                                        <Text style = {[styles.statusTitle, styles.statusTitleActive]}>已送达</Text>
                                        <Text style = {[styles.statusDate, styles.statusDateActive]}>04-11 9:50</Text>
                                    </View>
                                    <View style = {styles.statusCon}>
                                        <Text style = {[styles.statusContent, styles.statusContentActive]}>订单完成，请您及时确认，评价。</Text>
                                    </View>
                                </View>

                            </View>
                        </View>
                    </View>

                </ScrollView>
            </View>
        );
    }

};

var styles = StyleSheet.create({
    proBody: {
        flex: 1,
        paddingTop: getAdaptHeight(5),
        borderWidth: 0, borderColor: 'red',
    },
    detailBox: {
        flex: 1, flexDirection: 'row',
        paddingLeft: getAdaptWidth(30), paddingRight: getAdaptWidth(30),
        borderWidth: 0, borderColor: 'blue',
    },
    sideBox: {
        width: getAdaptWidth(36), flexDirection: 'row',
        borderWidth: 0, borderColor: 'red',
    },
    verticalLine: {
        marginLeft: getAdaptWidth(10),
        width: 0.5, backgroundColor: '#ccc',
    },
    stepNums: {
        position: 'absolute', top: getAdaptHeight(26), left: 0,
        justifyContent: 'center', alignItems: 'center',
        width: getAdaptWidth(20), height: getAdaptHeight(20),
        borderRadius: 20,
        backgroundColor: '#ccc'
    },
    stepNumsActive: {
        backgroundColor: '#00a0e9',
    },
    step: {
        color: '#8f8f94', fontSize: getAdaptHeight(13),
    },
    stepActive: {
        color: '#fff',
    },

    conBox: {
        flex: 1, flexDirection: 'row',
        marginTop: getAdaptHeight(15),
        paddingBottom: 2, paddingRight: 1,
        borderWidth: 0, borderColor: 'blue',
    },

    infoBox: {
        flex: 1, flexDirection: 'row',
        borderRadius: 2,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowRadius: 1,
        shadowOffset: {width: 0.5, height: 1},
        shadowOpacity: 0.2
    },
    iconArrowBox: {
        position: 'relative', marginLeft: -10,
        width: 10, alignItems: 'flex-end',
        borderWidth: 0, borderColor: 'blue',
    },
    iconarrow: {
        marginTop: getAdaptHeight(15),
        width: getAdaptWidth(7), height: getAdaptHeight(12),
    },

    statusBox: {
        flex: 1,
        paddingLeft: getAdaptWidth(12), paddingRight: getAdaptWidth(12),
        paddingTop: getAdaptWidth(8), paddingBottom: getAdaptWidth(8),
        borderWidth: 0, borderColor: 'red'
    },
    statusHeader: {
        flexDirection: 'row', paddingTop: getAdaptHeight(8), paddingBottom: getAdaptHeight(6),
    },
    statusTitle: {
        flex: 1, color: '#8f8f94', fontSize: getAdaptHeight(16),
    },
    statusTitleActive: {
        color: '#00a0e9'
    },
    statusDate: {
        flex: 1, textAlign: 'right', color: '#8f8f94', fontSize: getAdaptHeight(13),
    },
    statusDateActive: {
        color: '#00a0e9'
    },
    statusCon: {
        paddingBottom: getAdaptHeight(8),
    },
    statusContent: {
        color: '#8f8f94', fontSize: getAdaptHeight(13), lineHeight: 20,
    },
    statusContentActive: {
        color: '#00a0e9'
    },


});
