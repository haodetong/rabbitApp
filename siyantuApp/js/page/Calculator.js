/*
    结算页
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
    TouchableHighlight
} from 'react-native';
import getAdaptHeight from '../component/getAdaptHeight';
import getAdaptWidth from '../component/getAdaptWidth';
import FooterCalculatorBar from '../component/FooterCalculatorBar';
import AddShippingAddress from '../page/AddShippingAddress';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
import Picker from 'react-native-picker';

function createDateData(){
  	let date = {};
  	for(let i=1950;i<2050;i++){
    		let month = {};
    		for(let j = 1;j<13;j++){
      			let day = [];
      			if(j === 2){
        				for(let k=1;k<29;k++){
        					  day.push(k+'日');
        				}
      			}
      			else if(j in {1:1, 3:1, 5:1, 7:1, 8:1, 10:1, 12:1}){
        				for(let k=1;k<32;k++){
        					  day.push(k+'日');
        				}
      			}
      			else{
        				for(let k=1;k<31;k++){
        					  day.push(k+'日');
        				}
      			}
      			month[j+'月'] = day;
    		}
    		date[i+'年'] = month;
  	}
  	return date;
};

export default class Calculator extends React.Component{

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

    _pickerToggle(){
        this.picker.toggle();
    }

    render() {
        return (
            <View style={styles.container}>
                <View style = {styles.proBody}>
                    <ScrollView vertical = {true} showsVerticalScrollIndicator = {false} directionalLockEnabled = {true} showsHorizontalScrollIndicator = {false}>
                        <Button onPress={Actions.AddShippingAddress} containerStyle={styles.addUserInfoContainer} style = {styles.addUserInfoButton}>
                            <View style = {styles.calculateSection}>
                                <View style = {[styles.calcIconBox, styles.addUserInfoIconBox]}>
                                    <Image source = {require('../../images/common/icon_locate.png')} style = {styles.locateIcon} />
                                </View>
                                <View style = {styles.addUserInfoBox}>
                                    <View style = {styles.addUserInfoTitBox}>
                                        <Text style = {styles.addUserInfoTitle}>添加收货人信息</Text>
                                    </View>
                                    <View style = {styles.locateNow}>
                                        <Text style = {styles.locateNowText}>金湾区三灶镇樱雪名苑旁（近映月路）</Text>
                                    </View>
                                </View>
                                <View style = {styles.calcRightBtnBox}>
                                    <Image source = {require('../../images/common/icon_arrow_right.png')} style = {styles.calcRightBtnIcon}  />
                                </View>
                            </View>
                        </Button>

                        <View style = {styles.calcSectionSpaces}></View>

                        <View style = {styles.calculateSection}>
                            <View style = {styles.calcIconBox}>
                                <Image source = {require('../../images/common/icon_pay_online.png')} style = {styles.payOnlineIcon} />
                            </View>
                            <View style = {styles.calcTitleBox}>
                                <Text style = {styles.calcTitle}>在线支付</Text>
                            </View>
                            <View style = {styles.calcRightBtnBox}>
                                <Image source = {require('../../images/common/icon_selected.png')} style = {styles.calcSelectBtnIcon}  />
                            </View>
                        </View>

                        <View style = {styles.separaterLine}></View>

                        <View style = {styles.calculateSection}>
                            <View style = {styles.calcIconBox}>
                                <Image source = {require('../../images/common/icon_pay_offline.png')} style = {styles.payOfflineIcon} />
                            </View>
                            <View style = {styles.calcTitleBox}>
                                <Text style = {styles.calcTitle}>货到付款</Text>
                            </View>
                            <View style = {styles.calcRightBtnBox}>
                                <Image source = {require('../../images/common/icon_not_selected.png')} style = {styles.calcSelectBtnIcon}  />
                            </View>
                        </View>

                        <View style = {styles.calcSectionSpaces}></View>

                        <Button onPress={this._pickerToggle.bind(this)} containerStyle={styles.sendtimeContainer} style = {styles.sendtimeButton}>
                            <View style = {styles.calculateSection}>
                                <View style = {styles.calcIconBox}>
                                    <Image source = {require('../../images/common/icon_send_time.png')} style = {styles.sendtimeIcon} />
                                </View>
                                <View style = {styles.calcTitleBox}>
                                    <Text style = {styles.calcTitle}>送达时间</Text>
                                </View>
                                <View style = {styles.optionsBox}>
                                    <Text style = {styles.optionSelected}>尽快送达</Text>
                                </View>
                                <View style = {styles.calcRightBtnBox}>
                                    <Image source = {require('../../images/common/icon_arrow_right.png')} style = {styles.calcRightBtnIcon}  />
                                </View>
                            </View>
                        </Button>

                        <View style = {styles.separaterLine}></View>

                        <Button onPress={Actions.pop} containerStyle={styles.orderbackupContainer} style = {styles.orderbackupButton}>
                            <View style = {styles.calculateSection}>
                                <View style = {styles.calcIconBox}>
                                    <Image source = {require('../../images/common/icon_order_backup.png')} style = {styles.orderbackupIcon} />
                                </View>
                                <View style = {styles.calcTitleBox}>
                                    <Text style = {styles.calcTitle}>订单备注</Text>
                                </View>
                                <View style = {styles.optionsBox}>
                                    <Text style = {styles.optionSelected}>口味喜好</Text>
                                </View>
                                <View style = {styles.calcRightBtnBox}>
                                    <Image source = {require('../../images/common/icon_arrow_right.png')} style = {styles.calcRightBtnIcon}  />
                                </View>
                            </View>
                        </Button>

                        <View style = {styles.calcSectionSpaces}></View>

                        <View style = {styles.orderProsSection}>
                            <View style = {styles.orderProsLists}>
                                <View style = {styles.orderProItem}>
                                    <View style = {styles.orderProTitleBox}>
                                        <Text style = {styles.orderProTitle} numberOfLines = {1}>东南亚风味秘制烤鸡风味独特香辣可口</Text>
                                    </View>
                                    <View style = {styles.orderProNumsBox}>
                                        <Text style = {styles.orderProNums}>×2</Text>
                                    </View>
                                    <View style = {styles.orderProCostBox}>
                                        <Text style = {styles.orderProCost}>￥80</Text>
                                    </View>
                                </View>
                                <View style = {styles.orderProItem}>
                                    <View style = {styles.orderProTitleBox}>
                                        <Text style = {styles.orderProTitle} numberOfLines = {1}>东南亚风味秘制烤鸡风味独特香辣可口</Text>
                                    </View>
                                    <View style = {styles.orderProNumsBox}>
                                        <Text style = {styles.orderProNums}>×2</Text>
                                    </View>
                                    <View style = {styles.orderProCostBox}>
                                        <Text style = {styles.orderProCost}>￥80</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style = {styles.separaterLine}></View>

                        <View style = {styles.orderProsSection}>
                            <View style = {styles.orderProsLists}>
                                <View style = {styles.orderProItem}>
                                    <View style = {styles.proCostLableBox}>
                                        <Text style = {styles.proCostLable}>商品金额</Text>
                                    </View>
                                    <View style = {styles.proCostNumsBox}>
                                        <Text style = {styles.proCostNums}>￥20</Text>
                                    </View>
                                </View>
                                <View style = {styles.orderProItem}>
                                    <View style = {styles.proCostLableBox}>
                                        <Text style = {styles.proCostLable}>打包费</Text>
                                    </View>
                                    <View style = {styles.proCostNumsBox}>
                                        <Text style = {styles.proCostNums}>￥20</Text>
                                    </View>
                                </View>
                                <View style = {styles.orderProItem}>
                                    <View style = {styles.proCostLableBox}>
                                        <Text style = {styles.proCostLable}>配送费</Text>
                                    </View>
                                    <View style = {styles.proCostTipsBox}>
                                        <Text style = {styles.proCostTips}>四眼兔专送</Text>
                                    </View>
                                    <View style = {styles.proCostNumsBox}>
                                        <Text style = {styles.proCostNums}>￥20</Text>
                                    </View>
                                </View>
                                <View style = {styles.orderProItem}>
                                    <View style = {styles.proCostLableBox}>
                                        <Text style = {styles.proCostLable}>优惠减免</Text>
                                    </View>
                                    <View style = {styles.proCostNumsBox}>
                                        <Text style = {styles.proCostNums}>-￥20</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style = {styles.couponDetailBox}>
                            <Button onPress={Actions.pop} containerStyle={styles.couponContainer} style = {styles.couponButton}>
                                优惠说明
                            </Button>
                        </View>

                        <View style = {styles.calcTotalBox}>
                            <Text style = {styles.calcTotalLable}>应付款：</Text>
                            <Text style = {styles.calcTotalCost}>￥80</Text>
                            <Text style = {styles.calcTotalTime}>(付款时间：未支付)</Text>
                        </View>

                    </ScrollView>
                </View>

                <View style = {styles.proFooter}>
                    <FooterCalculatorBar />
                </View>

                <Picker
                    ref={picker => this.picker = picker}
                    style={{height: 320}}
                    showDuration={300}
                    pickerToolBarStyle = {styles.pickerToolBar}
                    pickerTitle = '选择配送时间'
                    pickerTitleStyle = {styles.pickerTitle}
                    pickerBtnText = '确认'
                    pickerCancelBtnText = '取消'
                    pickerBtnStyle = {styles.pickerBtn}
                    showMask={true}
                    pickerData = {[
                        ['即时送餐','预约今天','预约明天','预约后天',],
                        ['7:00-7:30','7:30-8:00','8:00-8:30','8:30-9:00'],
                    ]}
                    selectedValue = {['即时送餐', '7:00-7:30']}
                    onPickerDone={(pickedValue) => {
                      console.log(pickedValue);
                    }}
                />
            </View>
        );
    }

};

var styles = StyleSheet.create({
    container:{
  	    flex: 1,
  	    backgroundColor: '#f4f4f4',
  	},
    proBody: {
        flex: 1, marginBottom: getAdaptHeight(50),
        borderWidth: 0, borderColor: 'red',
    },
    proFooter: {
        position: 'absolute', bottom: 0, left: 0,
        width: Dimensions.get('window').width, height: getAdaptHeight(50),
        borderTopWidth: 0.5, borderTopColor: '#cccccc', backgroundColor: '#f8f8f8',
    },

    calcSectionSpaces: {
        height: getAdaptHeight(12),
    },
    separaterLine: {
        height: 1,
        overflow: 'hidden',
        backgroundColor: '#f4f4f4',
    },
    calculateSection: {
        flexDirection: 'row',
        paddingTop: getAdaptHeight(23),
        paddingBottom: getAdaptHeight(23),
        paddingLeft: getAdaptWidth(20),
        paddingRight: getAdaptWidth(20),
        backgroundColor: '#ffffff',
        borderWidth: 0, borderColor: 'yellow'
    },
    calcRightBtnBox: {
        width: 20,
        alignItems: 'flex-end',
        justifyContent: 'center',
        borderWidth: 0,
        borderColor: 'green',
    },
    calcRightBtnIcon: {
        width: getAdaptWidth(8),
        height: getAdaptHeight(12),
    },
    calcSelectBtnIcon: {
        width: getAdaptWidth(18),
        height: getAdaptHeight(18),
    },
    calcIconBox: {
        alignItems: 'center',
        justifyContent: 'center',
        width: getAdaptWidth(18),
        borderWidth: 0,
        borderColor: 'red',
    },
    addUserInfoIconBox: {
        justifyContent: 'flex-start', paddingTop: getAdaptHeight(5),
    },
    calcTitleBox: {
        flex:1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginLeft: getAdaptWidth(16),
        borderWidth: 0,
        borderColor: 'red',
    },
    calcTitle: {
        fontSize: getAdaptHeight(16),
        color: '#111111',
    },
    locateIcon: {
        width: getAdaptWidth(16),
        height: getAdaptHeight(17),
    },
    payOnlineIcon: {
        width: getAdaptWidth(16),
        height: getAdaptHeight(17),
    },
    payOfflineIcon: {
        width: getAdaptWidth(16),
        height: getAdaptHeight(17),
    },
    optionsBox: {
        width: 100,
        alignItems: 'flex-end',
        borderWidth: 0,
        borderColor: 'red',
    },
    optionSelected: {
        fontSize: getAdaptHeight(14),
        color: '#8f8f94',
    },
    sendtimeIcon: {
        width: getAdaptWidth(16),
        height: getAdaptHeight(17),
    },
    orderbackupIcon: {
        width: getAdaptWidth(16),
        height: getAdaptHeight(17),
    },

    addUserInfoBox: {
        flex:1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginLeft: getAdaptWidth(12),
    },
    addUserInfoTitBox: {
        marginTop: getAdaptHeight(5),
        borderWidth: 0,
        borderColor: 'blue'
    },
    addUserInfoTitle: {
        color: '#111111',
        fontSize: getAdaptHeight(16),
    },
    locateNow: {
        alignItems: 'center',
        marginTop: getAdaptHeight(12),
        borderWidth: 0,
        borderColor: 'green'
    },
    locateNowText: {
        color: '#8f8f94',
        fontSize: getAdaptHeight(13),
    },

    orderProsSection: {
        paddingLeft: getAdaptWidth(20),
        paddingRight: getAdaptWidth(20),
        backgroundColor: '#ffffff',
        borderWidth: 0, borderColor: 'yellow'
    },
    orderProsLists: {
         flex: 1, paddingTop: getAdaptHeight(8), paddingBottom: getAdaptHeight(8), borderWidth: 0, borderColor: 'green',
    },
    orderProItem: {
        flexDirection: 'row', paddingTop: getAdaptHeight(8), paddingBottom: getAdaptHeight(8),
        borderWidth: 0, borderColor: 'blue',
    },
    orderProTitleBox: {
        flex: 4, borderWidth: 0, borderColor: 'red',
    },
    orderProTitle: {
        color: '#606060', fontSize: getAdaptHeight(14),
    },
    orderProNumsBox: {
        flex: 1, alignItems: 'center', borderWidth: 0, borderColor: 'red',
    },
    orderProNums: {
        color: '#606060', fontSize: getAdaptHeight(14),
    },
    orderProCostBox: {
        flex: 1, alignItems: 'flex-end', borderWidth: 0, borderColor: 'red',
    },
    orderProCost: {
        color: '#606060', fontSize: getAdaptHeight(14),
    },

    proCostLableBox: {
        flex: 1,
    },
    proCostLable: {
        color: '#606060', fontSize: getAdaptHeight(14),
    },
    proCostNumsBox: {
        flex: 1, alignItems: 'flex-end', borderWidth: 0, borderColor: 'red',
    },
    proCostNums: {
        color: '#00a0e9', fontSize: getAdaptHeight(14),
    },
    proCostTipsBox: {
        flex: 3,
    },
    proCostTips: {
        color: '#8f8f94', fontSize: getAdaptHeight(14),
    },

    couponDetailBox: {
        alignItems: 'flex-end', paddingLeft: getAdaptWidth(20), paddingRight: getAdaptWidth(20),
    },
    couponContainer: {
      justifyContent: 'center', alignItems: 'flex-end',
      width: 100, height: 30, borderWidth: 0, borderColor: 'red',
    },
    couponButton: {
        color: '#00a0e9', fontSize: getAdaptHeight(13),
    },

    calcTotalBox: {
        flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center',
        paddingBottom: getAdaptHeight(24), paddingLeft: getAdaptWidth(20), paddingRight: getAdaptWidth(20),
    },
    calcTotalLable: {
        color: '#8f8f94', fontSize: getAdaptHeight(13),
    },
    calcTotalCost: {
        color: '#e60012', fontSize: getAdaptHeight(15),
    },
    calcTotalTime: {
        marginLeft: getAdaptWidth(20), color: '#8f8f94', fontSize: getAdaptHeight(13),
    },
    pickerTitle: {
        color: '#666', fontSize: getAdaptHeight(18),
    },
    pickerBtn: {
        color: '#00a0e9', fontSize: getAdaptHeight(18),
    },
    pickerToolBar: {
        height: getAdaptHeight(55), backgroundColor: '#ffffff'
    },

});
