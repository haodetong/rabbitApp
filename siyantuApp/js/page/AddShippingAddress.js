/*
    添加收货地址页
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
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';


export default class AddShippingAddress extends React.Component{

    static defaultProps = {
        icon_tabar: {
                  'waimaiIndex':require('../../images/tabbaricon/icon_tabbar_waimai.png'),
                  'tangshiIndex':require('../../images/tabbaricon/icon_tabbar_tangshi.png'),
                  'dingdanIndex':require('../../images/tabbaricon/icon_tabbar_dingdan.png'),
                  'shenbianIndex':require('../../images/tabbaricon/icon_tabbar_shenbian.png'),
                  'wodeIndex':require('../../images/tabbaricon/icon_tabbar_wode.png')
              },
        icon_tabbar_selected: {
                  'waimaiIndex':require('../../images/tabbaricon/icon_tabbar_waimai_selected.png'),
                  'tangshiIndex':require('../../images/tabbaricon/icon_tabbar_tangshi_selected.png'),
                  'dingdanIndex':require('../../images/tabbaricon/icon_tabbar_dingdan_selected.png'),
                  'shenbianIndex':require('../../images/tabbaricon/icon_tabbar_shenbian_selected.png'),
                  'wodeIndex':require('../../images/tabbaricon/icon_tabbar_wode_selected.png')
              },
    };
    static propTypes = {
        icon_tabar: React.PropTypes.object.isRequired,
        icon_tabbar_selected: React.PropTypes.object.isRequired,
    };

    constructor(props){
        super(props);
        this.state = {
            isMale: false,
            isFemale: false,
            isCommonAddr: false,
            isTagHome: false,
            isTagCompany: false,
            isTagSchool: false,
            tagValue: '',
        };
    }

    //性别
    selectSex(sex) {
        if(sex == 'male') {
            this.setState({
                isMale: true,
                isFemale: false
            });
        }else{
            this.setState({
                isMale: false,
                isFemale: true
            });
        }
    }

    //保存为常用地址
    saveAsCommonAddr() {
        this.setState({
            isCommonAddr: !(this.state.isCommonAddr)
        });
    }

    //标签
    selectTag(tag) {
        if(tag == 'home'){

            this.setState({
                isTagHome: !(this.state.isTagHome),
                isTagCompany: false,
                isTagSchool: false
            });
        }
        if(tag == 'company'){
            this.setState({
                isTagHome: false,
                isTagCompany: !(this.state.isTagCompany),
                isTagSchool: false
            });
        }
        if(tag == 'school'){
            this.setState({
                isTagHome: false,
                isTagCompany: false,
                isTagSchool: !(this.state.isTagSchool)
            });
        }
    }

    render() {
        var maleIcon = this.state.isMale ? <Image source = {require('../../images/common/icon_checked.png')} style = {styles.sexIcon} /> : <Image source = {require('../../images/common/icon_not_checked.png')} style = {styles.sexIcon} />;
        var femaleIcon = this.state.isFemale ? <Image source = {require('../../images/common/icon_checked.png')} style = {styles.sexIcon} /> : <Image source = {require('../../images/common/icon_not_checked.png')} style = {styles.sexIcon} />;
        var commonAddrIcon = this.state.isCommonAddr ? <Image source = {require('../../images/common/icon_radio_checked.png')} style = {styles.usedAddrIcon} /> : <Image source = {require('../../images/common/icon_radio_not_checked.png')} style = {styles.usedAddrIcon} />;

        return (
            <View style={styles.container}>
                <View style = {styles.proBody}>
                    <ScrollView vertical = {true} showsVerticalScrollIndicator = {false} directionalLockEnabled = {true} showsHorizontalScrollIndicator = {false}>

                        <View style = {styles.shippingSection}>
                            <View style = {styles.shipTitleBox}>
                                <Text style = {styles.shipTitle}>联系人</Text>
                            </View>
                            <View style = {styles.shipConBox}>
                                <View style = {styles.contactBox}>
                                    <View style = {styles.contactInput}>
                                        <TextInput
                                            style={styles.shipInput}
                                            placeholder = '姓名'
                                            placeholderTextColor = '#ccc'
                                        />
                                    </View>
                                    <View style = {styles.contactSex}>
                                        <Button onPress={()=>this.selectSex('male')} containerStyle={styles.sexBtnContainer}>
                                            <View style = {styles.sexOption}>
                                                {maleIcon}
                                                <Text style = {styles.sexText}>先生</Text>
                                            </View>
                                        </Button>
                                        <Button onPress={()=>this.selectSex('female')} containerStyle={styles.sexBtnContainer}>
                                            <View style = {styles.sexOption}>
                                                {femaleIcon}
                                                <Text style = {styles.sexText}>女士</Text>
                                            </View>
                                        </Button>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style = {styles.separaterLine}></View>

                        <View style = {styles.shippingSection}>
                            <View style = {styles.shipTitleBox}>
                                <Text style = {styles.shipTitle}>联系电话</Text>
                            </View>
                            <View style = {styles.shipConBox}>
                                <View style = {styles.contactInput}>
                                    <TextInput
                                        style={styles.shipInput}
                                        placeholder = '请输入电话号码'
                                        placeholderTextColor = '#ccc'
                                    />
                                </View>
                            </View>
                        </View>

                        <View style = {styles.separaterLine}></View>

                        <View style = {styles.shippingAdress}>
                            <View style = {styles.shippingSection}>
                                <View style = {styles.shipTitleBox}>
                                    <Text style = {styles.shipTitle}>收货地址</Text>
                                </View>
                                <View style = {styles.shipConBox}>
                                    <View style = {styles.contactInput}>
                                        <TextInput
                                            style={styles.shipInput}
                                            placeholder = '详细地址（单元/门牌号等）'
                                            placeholderTextColor = '#ccc'
                                        />
                                    </View>
                                </View>
                            </View>
                            <View style = {styles.usedAddrSection}>
                                <View style = {styles.shipTipsBox}>
                                    <Text style = {styles.shipTips}>(定位时的地址不可修改)</Text>
                                </View>
                                <View style = {styles.shipConBox}>
                                    <Button onPress={()=>this.saveAsCommonAddr()} containerStyle={styles.commonAddrBtnContainer}>
                                        <View style = {styles.commonAddr}>
                                            {commonAddrIcon}
                                            <Text style = {styles.usedAddrText}>保存为常用地址</Text>
                                        </View>
                                    </Button>
                                </View>
                            </View>
                        </View>

                        <View style = {styles.separaterLine}></View>

                        <View style = {styles.shippingSection}>
                            <View style = {styles.shipTitleBox}>
                                <Text style = {styles.shipTitle}>标签</Text>
                            </View>
                            <View style = {styles.shipConBox}>
                                <View style = {styles.contactBox}>
                                    <View style = {styles.contactInput}>
                                        <TextInput
                                            style={styles.shipInput}
                                            placeholder = '给地址加一个标签吧'
                                            placeholderTextColor = '#ccc'
                                            value = {this.state.tagValue}
                                        />
                                    </View>
                                    <View style = {styles.addrTagsLists}>
                                        <Button onPress={()=>this.selectTag('home')} containerStyle={styles.selectTagContainer}>
                                            <View style = {this.state.isTagHome ? styles.addrTagBoxSelected : styles.addrTagBox}>
                                                <Text style = {this.state.isTagHome ? styles.addrTagSelected : styles.addrTag}>家</Text>
                                            </View>
                                        </Button>
                                        <Button onPress={()=>this.selectTag('company')} containerStyle={styles.selectTagContainer}>
                                            <View style = {this.state.isTagCompany ? styles.addrTagBoxSelected : styles.addrTagBox}>
                                                <Text style = {this.state.isTagCompany ? styles.addrTagSelected : styles.addrTag}>公司</Text>
                                            </View>
                                        </Button>
                                        <Button onPress={()=>this.selectTag('school')} containerStyle={styles.selectTagContainer}>
                                            <View style = {this.state.isTagSchool ? styles.addrTagBoxSelected : styles.addrTagBox}>
                                                <Text style = {this.state.isTagSchool ? styles.addrTagSelected : styles.addrTag}>学校</Text>
                                            </View>
                                        </Button>
                                    </View>
                                </View>
                            </View>
                        </View>

                    </ScrollView>
                </View>

                <View style = {styles.proFooter}>
                    <Button containerStyle={styles.saveBtnContainer} style = {styles.saveButton}>
                        <View style = {styles.saveBtnBox}>
                            <Text style = {styles.saveBtn}>确定</Text>
                        </View>
                    </Button>
                </View>
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

    separaterLine: {
        height: 1,
        overflow: 'hidden',
        backgroundColor: '#f4f4f4',
    },
    shippingAdress: {
        backgroundColor: '#ffffff',
        borderWidth: 0, borderColor: 'yellow'
    },
    shippingSection: {
        flexDirection: 'row',
        paddingTop: getAdaptHeight(16),
        paddingBottom: getAdaptHeight(16),
        paddingLeft: getAdaptWidth(20),
        paddingRight: getAdaptWidth(20),
        backgroundColor: '#ffffff',
        borderWidth: 0, borderColor: 'yellow'
    },
    usedAddrSection: {
        flexDirection: 'row',
        paddingBottom: getAdaptHeight(16),
        paddingLeft: getAdaptWidth(20),
        paddingRight: getAdaptWidth(20),
        backgroundColor: '#ffffff',
        borderWidth: 0, borderColor: 'yellow'
    },
    saveBtnContainer: {
        flex: 1,
    },
    saveBtnBox: {
        flex: 1, alignItems: 'center', justifyContent: 'center', borderWidth: 0, borderColor: 'red',
        backgroundColor: '#ccc',
    },
    saveBtn: {
        color: '#ffffff', fontSize: getAdaptHeight(18), fontWeight: '400',
    },

    shipTitleBox: {
        flex: 2, alignItems: 'flex-end', justifyContent: 'flex-start', marginTop: 8,
        flexDirection: 'column', borderWidth: 0, borderColor: 'red',
    },
    shipTitle: {
        color: '#8f8f94', fontSize: getAdaptHeight(13),
    },
    shipTipsBox: {
        flex: 2, alignItems: 'flex-end', justifyContent: 'flex-start',
        flexDirection: 'column', borderWidth: 0, borderColor: 'red',
    },
    shipTips: {
        color: '#8f8f94', fontSize: getAdaptHeight(11),
    },
    shipConBox: {
        flex: 9,
        paddingLeft: 20, borderWidth: 0, borderColor: 'red',
    },

    contactBox: {
        flex: 1, flexDirection: 'column',
        borderWidth: 0, borderColor: 'red',
    },
    contactInput: {
        borderWidth: 0, borderColor: 'green',
    },
    shipInput: {
        height: 30, color: '#00a0e9', fontSize: getAdaptHeight(16),
        borderWidth: 0, borderColor: 'blue',
    },
    contactSex: {
        flexDirection: 'row', marginTop: getAdaptHeight(8),
    },
    sexOption: {
        flexDirection: 'row', marginRight: 20, alignItems: 'center',
        borderWidth: 0, borderColor: 'yellow',
    },
    sexIcon: {
        width: getAdaptWidth(16), height: getAdaptHeight(16),
    },
    sexText: {
        marginLeft: 5, color: '#8f8f94', fontSize: getAdaptHeight(12),
    },


    commonAddr: {
        flexDirection: 'row', alignItems: 'center',
        borderWidth: 0, borderColor: 'yellow',
    },
    usedAddrIcon: {
        width: getAdaptWidth(10), height: getAdaptHeight(10),
    },
    usedAddrText: {
        marginLeft: 5, color: '#8f8f94', fontSize: getAdaptHeight(12),
    },
    addrTagsLists: {
        flexDirection: 'row', marginTop: getAdaptHeight(8),
    },
    addrTagBox: {
        marginRight: 5, height: getAdaptHeight(24),
        paddingLeft: 10, paddingRight: 10,
        borderWidth: 0.5, borderColor: '#ccc', borderRadius: 20,
        justifyContent: 'center', alignItems: 'center',
    },
    addrTagBoxSelected: {
        marginRight: 5, height: getAdaptHeight(24),
        paddingLeft: 10, paddingRight: 10,
        borderWidth: 0.5, borderColor: '#00a0e9', borderRadius: 20,
        justifyContent: 'center', alignItems: 'center',
    },
    addrTag: {
        color: '#ccc', fontSize: getAdaptHeight(14),
    },
    addrTagSelected: {
        color: '#00a0e9', fontSize: getAdaptHeight(14),
    },

});
