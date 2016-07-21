/*
    产品详情页
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
    Dimensions
} from 'react-native';
import getAdaptHeight from '../component/getAdaptHeight';
import getAdaptWidth from '../component/getAdaptWidth';
import FooterShoppingBar from '../component/FooterShoppingBar';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';


export default class ProductDetails extends React.Component{

    static defaultProps = {
    };
    static propTypes = {
    };

    constructor(props){
        super(props);
        this.state = {
            isSelected: false,
        };
    }

    collectProduct() {
       this.state.isSelected ? this.setState({isSelected: false}) : this.setState({isSelected: true});
    }

    render() {
        var collectIcon = this.state.isSelected ?
                              <Image source = {require('../../images/common/icon_collected.png')} style = {styles.collectIcon} /> :
                              <Image source = {require('../../images/common/icon_collect.png')} style = {styles.collectIcon} />;
        return (
            <View style={styles.container}>
                <View style = {styles.proBody}>
                    <ScrollView vertical = {true} showsVerticalScrollIndicator = {false} directionalLockEnabled = {true} showsHorizontalScrollIndicator = {false}>

                        <View style = {styles.bannerbox}>
                            <View style = {styles.bannerImgWrap}>
                                <Image style = {styles.bannerImg} source={require('../../images/common/product_pic.png')}/>
                            </View>
                            <View style = {styles.popBtnBox}>
                                <Button onPress={Actions.pop} containerStyle={styles.popBtnContainer} style = {styles.popButton}>
                                    <Image source = {require('../../images/common/icon_pop.png')} style = {styles.popBlueIcon} />
                                </Button>
                            </View>
                            <View style = {styles.collectBtnBox}>
                                <Button onPress={() => this.collectProduct()} containerStyle={styles.collectBtnContainer} style = {styles.collectButton}>
                                    {collectIcon}
                                </Button>
                            </View>
                        </View>

                        <View style = {styles.proTitleBox}>
                            <Text style = {styles.proTitle} numberOfLines = {1}>
                                东南亚风味 秘制蜜汁烤鸡 东南亚风味 秘制蜜汁烤鸡 东南亚风味 秘制蜜汁烤鸡
                            </Text>
                        </View>

                        <View style = {styles.proDetails}>
                            <View style = {styles.prosPriceBox}>
                                <View style = {styles.priceBox}>
                                    <Text style = {styles.priceDel}>￥22.00</Text>
                                    <Text style = {styles.priceNow}>￥18.00</Text>
                                </View>
                                <View style = {styles.brandBox}>
                                    <Text style = {styles.proBrand}>真功夫</Text>
                                    <Text style = {styles.proSales}>销量：888</Text>
                                </View>
                            </View>
                            <View style = {styles.proDetailSide}>
                                <Text style = {styles.proLeft}>仅剩88份</Text>
                                <Button onPress={Actions.addToShoppingBar} containerStyle={styles.addToBarContainer} style = {styles.addToBarButton}>
                                    加入购物车
                                </Button>
                            </View>
                        </View>

                        <View style = {styles.proIntroduceBox}>
                            <Button onPress={Actions.ProductInstruction} containerStyle={styles.proIntroBtnContainer} style = {styles.proIntroButton}>
                                <View style = {styles.proIntroduce}>
                                    <View style = {styles.proIntroTitleBox}>
                                        <Text style = {styles.proIntroTitle}>商品详情</Text>
                                    </View>
                                    <View style = {styles.proIntroIconBox}>
                                        <Image source = {require('../../images/common/icon_arrow_right.png')} style = {styles.proIntroIcon} />
                                    </View>
                                </View>
                            </Button>
                        </View>

                        <View style = {styles.commentBox}>

                            <View style = {styles.commentTitleBox}>
                                <Text style = {styles.commentTitle}>评价晒单</Text>
                            </View>

                            <View style = {styles.commentTagsLists}>
                                <Button onPress={Actions.pop} containerStyle={styles.comBtnContainer} style = {styles.comButton}>
                                    <View style = {[styles.commentTag, styles.commentTagSelected]}>
                                        <Text style = {[styles.comTagTitle, styles.comTagTitleSelected]}>全部</Text>
                                        <Text style = {[styles.comTagNums, styles.comTagNumsSelected]}>(5)</Text>
                                    </View>
                                </Button>
                                <Button onPress={Actions.pop} containerStyle={styles.comBtnContainer} style = {styles.comButton}>
                                    <View style = {styles.commentTag}>
                                        <Text style = {styles.comTagTitle}>喜欢</Text>
                                        <Text style = {styles.comTagNums}>(4)</Text>
                                    </View>
                                </Button>
                                <Button onPress={Actions.pop} containerStyle={styles.comBtnContainer} style = {styles.comButton}>
                                    <View style = {styles.commentTag}>
                                        <Text style = {styles.comTagTitle}>不喜欢</Text>
                                        <Text style = {styles.comTagNums}>(3)</Text>
                                    </View>
                                </Button>
                            </View>

                            <View style = {styles.comLists}>
                                <View style = {styles.comBox}>
                                    <View style = {styles.comHeader}>
                                        <Text style = {styles.comUser}>郝德同</Text>
                                        <Text style = {styles.comDate}>2016-02-03 12:12</Text>
                                    </View>
                                    <View style = {styles.comContents}>
                                        <Text style = {styles.comConText}>每次必点，我的最爱，色香味俱全，值得大家去尝试的一份美味佳肴，推荐大家都去尝试一下</Text>
                                    </View>
                                    <View style = {styles.comPicLists}>
                                        <Image source = {require('../../images/common/product_pic.png')} style = {styles.comPic} />
                                        <Image source = {require('../../images/common/product_pic.png')} style = {styles.comPic} />
                                        <Image source = {require('../../images/common/product_pic.png')} style = {styles.comPic} />
                                        <Image source = {require('../../images/common/product_pic.png')} style = {styles.comPic} />
                                        <Image source = {require('../../images/common/product_pic.png')} style = {styles.comPic} />
                                        <Image source = {require('../../images/common/product_pic.png')} style = {styles.comPic} />
                                        <Image source = {require('../../images/common/product_pic.png')} style = {styles.comPic} />
                                        <Image source = {require('../../images/common/product_pic.png')} style = {styles.comPic} />
                                    </View>
                                </View>
                                <View style = {styles.comBox}>
                                    <View style = {styles.comHeader}>
                                        <Text style = {styles.comUser}>郝德同</Text>
                                        <Text style = {styles.comDate}>2016-02-03 12:12</Text>
                                    </View>
                                    <View style = {styles.comContents}>
                                        <Text style = {styles.comConText}>每次必点，我的最爱，色香味俱全，值得大家去尝试的一份</Text>
                                    </View>
                                    <View style = {styles.comPicLists}>
                                        <Image source = {require('../../images/common/product_pic.png')} style = {styles.comPic} />
                                        <Image source = {require('../../images/common/product_pic.png')} style = {styles.comPic} />
                                        <Image source = {require('../../images/common/product_pic.png')} style = {styles.comPic} />
                                        <Image source = {require('../../images/common/product_pic.png')} style = {styles.comPic} />
                                        <Image source = {require('../../images/common/product_pic.png')} style = {styles.comPic} />
                                        <Image source = {require('../../images/common/product_pic.png')} style = {styles.comPic} />
                                    </View>
                                </View>
                                <View style = {styles.comBox}>
                                    <View style = {styles.comHeader}>
                                        <Text style = {styles.comUser}>郝德同</Text>
                                        <Text style = {styles.comDate}>2016-02-03 12:12</Text>
                                    </View>
                                    <View style = {styles.comContents}>
                                        <Text style = {styles.comConText}>每次必点，我的最爱，色香味俱全，值得大</Text>
                                    </View>
                                    <View style = {styles.comPicLists}>
                                        <Image source = {require('../../images/common/product_pic.png')} style = {styles.comPic} />
                                        <Image source = {require('../../images/common/product_pic.png')} style = {styles.comPic} />
                                        <Image source = {require('../../images/common/product_pic.png')} style = {styles.comPic} />
                                        <Image source = {require('../../images/common/product_pic.png')} style = {styles.comPic} />
                                    </View>
                                </View>
                            </View>

                        </View>

                    </ScrollView>
                </View>

                <View style = {styles.proFooter}>
                    <FooterShoppingBar />
                </View>
            </View>
        );
    }

};

var styles = StyleSheet.create({
  	container: {
        flex:1,
        backgroundColor: '#f8f8f8',
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

    bannerbox: {
        borderWidth:0, borderColor:'#ff0000',
    },
    bannerImgWrap:{
        flex:1,flexDirection:'row'
    },
    bannerImg: {
        flex:1, resizeMode: Image.resizeMode.stretch, height:getAdaptHeight(292)
    },

    popBtnBox: {
        position: 'absolute', left: 0, top: 24,
    },
    popBtnContainer: {
        width:50, height:30, overflow:'hidden', borderWidth: 0, borderColor: 'green', alignItems:'center',
        justifyContent: 'center',
    },
    popButton: {

    },
    popBlueIcon:{
        width:getAdaptHeight(11), height: getAdaptHeight(18),
    },

    proTitleBox: {
        paddingLeft: getAdaptWidth(18), paddingRight: getAdaptWidth(18), marginTop: getAdaptHeight(13),
    },
    proTitle: {
        color: '#111111', fontSize: getAdaptHeight(15), fontWeight: '400',
    },

    proDetails: {
        paddingLeft: getAdaptWidth(18), paddingRight: getAdaptWidth(18),
        flexDirection: 'row',
    },
    prosPriceBox: {
        flex: 2, flexDirection: 'column',  borderWidth: 0, borderColor: 'red',
    },
    priceBox: {
        flexDirection: 'row', marginTop: getAdaptHeight(13),
    },
    priceDel: {
        flex: 1, color: '#a0a0a0', fontSize: getAdaptHeight(15), textDecorationLine: 'line-through'
    },
    priceNow: {
        flex: 2, color: '#e60012', fontSize: getAdaptHeight(15),
    },
    brandBox: {
        flexDirection: 'row', marginTop: getAdaptHeight(13),
    },
    proBrand: {
        flex: 1, color: '#a0a0a0', fontSize: getAdaptHeight(12),
    },
    proSales: {
        flex: 2, color: '#a0a0a0', fontSize: getAdaptHeight(12),
    },
    proDetailSide: {
        flex: 1, flexDirection: 'column', alignItems: 'flex-end', borderWidth: 0, borderColor: 'red',
    },
    proLeft: {
        marginTop: getAdaptHeight(13), color: '#a0a0a0', fontSize: getAdaptHeight(12),
    },
    addToBarContainer: {
        marginTop: getAdaptHeight(20),
        width: getAdaptWidth(90), height: getAdaptHeight(28),
        backgroundColor: '#48cfad', borderRadius: 5,
        justifyContent: 'center', alignItems: 'center',
    },
    addToBarButton: {
        color: '#ffffff', fontSize: getAdaptHeight(14), fontWeight: '300',
    },

    proIntroduceBox: {
        marginTop: getAdaptHeight(20), paddingLeft: getAdaptWidth(18), paddingRight: getAdaptWidth(18),
        borderTopWidth: 1, borderTopColor: '#e5e5e5',
        borderBottomWidth: 1, borderBottomColor: '#e5e5e5',
    },
    proIntroBtnContainer: {
        borderWidth: 0, borderColor: 'green'
    },
    proIntroButton: {

    },
    proIntroduce: {
        flex: 1, flexDirection: 'row',  height: getAdaptHeight(43),
    },
    proIntroTitleBox: {
        flex: 4, justifyContent: 'center', borderWidth: 0, borderColor: 'red',
    },
    proIntroTitle: {
        color: '#626262', fontSize: getAdaptHeight(14),
    },
    proIntroIconBox: {
        flex: 1, alignItems: 'flex-end', justifyContent: 'center', borderWidth: 0, borderColor: 'red'
    },
    proIntroIcon: {
        width: 8, height: getAdaptHeight(13),
    },

    collectBtnBox: {
        position: 'absolute', right: 0, top: 24,
    },
    collectBtnContainer: {
        width:50, height:30, overflow:'hidden', borderWidth: 0, borderColor: 'green', alignItems:'center',
        justifyContent: 'center',
    },
    collectButton: {

    },
    collectIcon:{
        width:getAdaptHeight(25), height: getAdaptHeight(23),
    },

    commentBox: {
        paddingTop: getAdaptHeight(7), paddingBottom: getAdaptHeight(7), paddingLeft: getAdaptWidth(18), paddingRight: getAdaptWidth(18),
    },
    commentTitleBox: {
        paddingTop: getAdaptHeight(20), paddingBottom: getAdaptHeight(20),
    },
    commentTitle: {
        color: '#626262', fontSize: getAdaptHeight(13),
    },
    commentTagsLists: {
        flexDirection: 'row',
    },
    commentTag: {
        flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
        marginRight: getAdaptWidth(11), height: getAdaptHeight(25),
        paddingLeft: getAdaptWidth(5), paddingRight: getAdaptWidth(5),
        paddingLeft: getAdaptWidth(10), paddingRight: getAdaptWidth(10),
        backgroundColor: '#f8f8f8', borderWidth: 0.5, borderColor: '#00a0e9', borderRadius: 20,
    },
    commentTagSelected: {
        backgroundColor: '#00a0e9', borderWidth: 0.5, borderColor: '#00a0e9',
    },
    comTagTitle: {
        color: '#00a0e9', fontSize: getAdaptHeight(14),
    },
    comTagNums: {
        marginLeft: getAdaptWidth(6), color: '#00a0e9', fontSize: getAdaptHeight(14),
    },
    comTagTitleSelected: {
        color: '#fefefe', fontSize: getAdaptHeight(14),
    },
    comTagNumsSelected: {
        color: '#fefefe', fontSize: getAdaptHeight(14),
    },

    comLists: {
        marginTop: getAdaptHeight(18),
        borderTopWidth: 0.5, borderTopColor: '#e5e5e5',
    },
    comBox: {
        paddingTop: getAdaptHeight(5),
    },
    comHeader: {
        paddingTop: getAdaptHeight(12),
        flexDirection: 'row',
    },
    comUser: {
        color: '#8f8f94', fontSize: getAdaptHeight(12),
    },
    comDate: {
        marginLeft: getAdaptWidth(12), color: '#8f8f94', fontSize: getAdaptHeight(12),
    },
    comContents: {
        paddingTop: getAdaptHeight(8),
    },
    comConText: {
        color: '#111111', fontSize: getAdaptHeight(12), fontWeight: '400',
        lineHeight: getAdaptHeight(16),
    },
    comPicLists: {
        flexWrap: 'wrap', flexDirection: 'row', paddingTop: getAdaptHeight(14),
        justifyContent: 'flex-start', alignItems: 'flex-start',
    },
    comPic: {
        marginBottom: getAdaptHeight(8), marginRight: getAdaptWidth(12),
        width: getAdaptWidth(70), height: getAdaptHeight(70),
    },

});
