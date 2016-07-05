/*
    从结算页面点击支付按钮进入到支付页面之前 - 弹出短信验证页
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

export default class VerifyByPhone extends React.Component {
    constructor(props){
        super (props);

        this.state = {
            offset: new Animated.Value(-deviceHeight)
        };
    }

    componentDidMount() {
        Animated.timing(this.state.offset, {
            duration: 150,
            toValue: 0
        }).start();
    }

    closeModal() {
        Animated.timing(this.state.offset, {
            duration: 150,
            toValue: -deviceHeight
        }).start(Actions.pop);
    }

    submitVerify() {
        Animated.timing(this.state.offset, {
            duration: 150,
            toValue: -deviceHeight
        }).start(Actions.Payment);
    }

    render(){
        return (
            <Animated.View style={[styles.container, {backgroundColor:"rgba(52,52,52,0.5)"}, {transform: [{translateY: this.state.offset}]}]}>
                <View style={styles.mainBox}>

                    <View style = {styles.verifyTitleBox}>
                        <Text style = {styles.verifyTitle}>{this.props.data}</Text>
                    </View>

                    <View style = {styles.CloseBox}>
                        <Button onPress={this.closeModal.bind(this)} containerStyle={styles.CloseContainer} style = {styles.closeButton}>
                            <Image source = {require('../../images/common/icon_close_blue.png')} style = {styles.closeIcon} />
                        </Button>
                    </View>
                    <View style = {styles.verifyDescript}>
                        <Text style = {styles.verifyDesc}>
                            您的账户有异常，请验证 <Text style = {styles.verifyPhone}>15266668888</Text>
                        </Text>
                        <Text style = {styles.verifyTips}>
                            （温馨提示：一天只能输入5次验证码）
                        </Text>
                    </View>

                    <View style = {styles.verifyCon}>
                      <View style = {styles.vfLabelBox}>
                          <View style = {styles.vfLabelWrap}>
                              <Text style = {styles.vfLabelText}>验证码</Text>
                          </View>
                      </View>
                      <View style = {styles.vfKeyBox}>
                          <TextInput
                              style={styles.vfInput}
                          />
                      </View>
                      <View style = {styles.vfBtnBox}>
                          <View style = {styles.vfBtn}>
                              <Text style = {styles.vfBtnText}>已发送</Text>
                              <Text style = {styles.vfBtnTime}>(26S)</Text>
                          </View>
                      </View>
                    </View>

                    <View style = {styles.vfSubmitBox}>
                        <Button onPress={this.submitVerify.bind(this)} containerStyle={styles.submitContainer} style = {styles.submitButton}>
                            提交验证
                        </Button>
                    </View>

                    <View style = {styles.vfTipsBox}>
                        <Text style = {styles.vfTips}>未收到验证码？拨打</Text>
                        <Button onPress={this.closeModal.bind(this)} containerStyle={styles.dialContainer} style = {styles.dialButton}>
                            <Text style = {styles.freeOnline}>免费热线</Text>
                        </Button>
                        <Text style = {styles.vfTips}>快速获取</Text>
                    </View>

                </View>
            </Animated.View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        position: "absolute",
        top:0,
        bottom:0,
        left:0,
        right:0,
        backgroundColor:"transparent",
        justifyContent: "center",
        alignItems: "center",

    },
    mainBox: {
        width: deviceWidth - getAdaptWidth(20) - getAdaptWidth(20),
        marginLeft: getAdaptWidth(20),
        marginRight: getAdaptWidth(20),
        backgroundColor: 'white',
    },

    CloseContainer: {
        borderWidth: 0, borderColor: 'red',
    },
    closeButton: {
        borderWidth: 0, borderColor: 'red',
    },
    CloseBox: {
        position: 'absolute', right: 5, top: 0 - getAdaptHeight(15),
        width: getAdaptWidth(34), height: getAdaptHeight(30),
    },
    closeIcon: {
        width: getAdaptWidth(34), height: getAdaptHeight(30),
    },
    verifyTitleBox: {
        paddingTop: 15, paddingBottom: 15,
        alignItems: 'center',
    },
    verifyTitle: {
        color: '#2f2e2e', fontSize: getAdaptHeight(18),
    },

    verifyDescript: {
        paddingTop: 12, paddingBottom: 12,
        marginLeft: 10, marginRight: 10,
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    verifyDesc: {
        flexDirection: 'row',
        color: '#626262', fontSize: getAdaptHeight(15),
    },
    verifyPhone: {
        color: '#00a0e9', fontSize: getAdaptHeight(15),
    },
    verifyTips: {
        marginTop: 5,
        color: '#919095', fontSize: getAdaptHeight(13),
    },

    verifyCon: {
        flexDirection: 'row',
        marginLeft: 10, marginRight: 10,
        marginTop: 10,
        paddingTop: 8, paddingBottom: 8,
        borderBottomWidth: 0.5, borderBottomColor: '#e5e5e5',
    },
    vfLabelBox: {
        flex: 1, alignItems: 'flex-start', justifyContent: 'center',
        borderWidth: 0, borderColor: 'red',
    },
    vfLabelWrap: {
        paddingRight: 6,
        borderRightWidth: 1.5, borderRightColor: '#e3edfd',
    },
    vfLabelText: {
        color: '#111', fontSize: getAdaptHeight(13),
    },
    vfKeyBox: {
        flex: 3,
        borderWidth: 0, borderColor: 'red',
    },
    vfInput: {
        flex: 1, height: getAdaptHeight(35),
        borderWidth: 0, borderColor: 'green',
        color: '#333', fontSize: getAdaptHeight(13),
    },
    vfBtnBox: {
        width: getAdaptWidth(100), height: getAdaptHeight(35),
        borderWidth: 0, borderColor: 'red',
    },
    vfBtn: {
        flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
        width: getAdaptWidth(100), height: getAdaptHeight(35),
        backgroundColor: '#ccc', borderRadius: 2,
    },
    vfBtnText: {
        color: '#fffefe', fontSize: getAdaptHeight(13), fontWeight: '400',
    },
    vfBtnTime: {
        color: '#fffefe', fontSize: getAdaptHeight(13), fontWeight: '400',
    },

    vfSubmitBox: {
        marginLeft: 10, marginRight: 10,
        marginTop: 10,
    },
    submitContainer: {
        flex:1, height: getAdaptHeight(44), justifyContent: 'center', alignItems: 'center',
        backgroundColor: '#00a0e9', borderRadius: 2,
    },
    submitButton: {
        color: 'white', fontSize: getAdaptHeight(16),
    },

    vfTipsBox: {
        flexDirection: 'row',
        paddingTop: 10, paddingBottom: 10,
        justifyContent: 'center',
    },
    vfTips: {
        color: '#919095', fontSize: getAdaptHeight(13),
    },
    dialContainer: {
        borderWidth: 0, borderColor: 'red',
    },
    freeOnline: {
      color: '#00a0e9', fontSize: getAdaptHeight(13),
    },


});
