import React from 'react';
import {AppRegistry, Navigator, StyleSheet, TouchableHighlight, Text, Image, View,Animated,PixelRatio} from 'react-native'
import {Scene, Reducer, Router, Switch, TabBar, Modal, Schema, Actions} from 'react-native-router-flux'
import Error from './components/Error'
import Home from './components/Home'
import TabView from './components/TabView'
import EchoView from './components/EchoView'
import NavigationDrawer from './components/NavigationDrawer'
import Waimai from './js/page/Waimai'
import Dingdan from './js/page/Dingdan'
import Shenbian from './js/page/Shenbian'
import ShenbianDetail from './js/page/ShenbianDetail';
import Wode from './js/page/Wode'
import getAdaptHeight from './js/component/getAdaptHeight';
import getAdaptWidth from './js/component/getAdaptWidth';
import ProLists from './js/page/ProLists';
import TabIcon from './js/component/TabIcon';
import AccountSetBtn from './js/component/AccountSetBtn';
import MyMessageBtn from './js/component/MyMessageBtn';
import TangshiNavbar from './js/component/TangshiNavbar';
import PopButton from './js/component/PopButton';
import SearchProduct from './js/page/SearchProduct';
import ProductDetails from './js/page/ProductDetails';
import ProductInstruction from './js/page/ProductInstruction';
import Calculator from './js/page/Calculator';
import Register from './js/page/Register';
import Login from './js/page/Login';
import AddShippingAddress from './js/page/AddShippingAddress';
import VerifyByPhone from './js/page/VerifyByPhone';
import Payment from './js/page/Payment';
import SearchProsBtn from './js/component/SearchProsBtn';
import ProsFilterOptions from './js/page/ProsFilterOptions';
import DingdanMore from './js/page/DingdanMore';
import Myshaidan from './js/page/Myshaidan';
import Ziliao from './js/page/Ziliao';
import ZiliaoEdit from './js/page/ZiliaoEdit';
import ZiliaoSaveBtn from './js/component/ZiliaoSaveBtn';
import MyCoupon from './js/page/MyCoupon';
import FoodCollect from './js/page/FoodCollect';
import MyReceiptAddress from './js/page/MyReceiptAddress';
import OnlineService from './js/page/OnlineService';
import MyMessages from './js/page/MyMessages';
import MyMessageDetail from './js/page/MyMessageDetail';
import SystemSetting from './js/page/SystemSetting';
import Comment from './js/page/Comment';
import CommentSaveBtn from './js/component/CommentSaveBtn';
import OrderCancel from './js/page/OrderCancel';


const reducerCreate = params=>{
    const defaultReducer = Reducer(params);
    return (state, action)=>{
        //console.log("ACTION:", action);
        return defaultReducer(state, action);
    }
};

// define this based on the styles/dimensions you use
const getSceneStyle = (/* NavigationSceneRendererProps */ props, computedProps) => {
  const style = {
    flex: 1,
    backgroundColor: '#fff',
    shadowColor: null,
    shadowOffset: null,
    shadowOpacity: null,
    shadowRadius: null,
  };
  if (computedProps.isActive) {
    style.marginTop = computedProps.hideNavBar ? 0 : 64;
    style.marginBottom = computedProps.hideTabBar ? 0 : 50;
  }
  return style;
};

export default class Route extends React.Component {
    testtitle() {
        return (
            <View style={{ width:50, height:20, borderWidth:1, borderColor:'#ff0000'}}>
                <Text style = {{color:'blue', fontSize: 13}}>custom navbar</Text>
            </View>
        );
    }

    render() {
        return <Router createReducer={reducerCreate} getSceneStyle={getSceneStyle}>
                    <Scene key="modal" component={Modal} >

                        <Scene key="root" hideNavBar={true} hideTabBar={true}>

                            <Scene key="productLists">
                                <Scene key="prolists" component={ProLists} renderLeftButton={()=><PopButton/>} title="美食列表" renderRightButton={()=><SearchProsBtn/>} hideTabBar={true} duration={800} />
                            </Scene>

                            <Scene key="FoodCollect">
                                <Scene key="fdCollect" component={FoodCollect} renderLeftButton={()=><PopButton/>} title="美食收藏" hideTabBar={true} duration={800} />
                            </Scene>

                            <Scene key="shenbianDetail">
                                <Scene key="shbDetail" component={ShenbianDetail} renderLeftButton={()=><PopButton/>} title="晒单动态" hideTabBar={true} duration={800} />
                            </Scene>

                            <Scene key="Myshaidan">
                                <Scene key="myshaidan" component={Myshaidan} renderLeftButton={()=><PopButton/>} title="我的晒单" hideTabBar={true} duration={800} />
                            </Scene>

                            <Scene key="Comment">
                                <Scene key="comment" component={Comment} renderLeftButton={()=><PopButton/>} renderRightButton={()=><CommentSaveBtn/>} title="晒单评价" hideTabBar={true} duration={800} />
                            </Scene>

                            <Scene key="OrderCancel">
                                <Scene key="ddcancel" component={OrderCancel} renderLeftButton={()=><PopButton/>} title="申请取消" hideTabBar={true} duration={800} />
                            </Scene>

                            <Scene key="Ziliao">
                                <Scene key="ziliao" component={Ziliao} renderLeftButton={()=><PopButton/>} title="资料" hideTabBar={true} duration={800} />
                            </Scene>

                            <Scene key="ZiliaoEdit">
                                <Scene key="zledit" component={ZiliaoEdit} renderLeftButton={()=><PopButton/>} renderRightButton={()=><ZiliaoSaveBtn/>} title="资料修改" hideTabBar={true} duration={800} />
                            </Scene>

                            <Scene key="MyCoupon">
                                <Scene key="mycoupon" component={MyCoupon} renderLeftButton={()=><PopButton/>} title="优惠抵用券" hideTabBar={true} duration={800} />
                            </Scene>

                            <Scene key="MyReceiptAddress">
                                <Scene key="myReceiptAddr" component={MyReceiptAddress} renderLeftButton={()=><PopButton/>} title="管理收货地址" hideTabBar={true} duration={800} />
                            </Scene>

                            <Scene key="OnlineService">
                                <Scene key="onlineServ" component={OnlineService} renderLeftButton={()=><PopButton/>} title="在线客服" hideTabBar={true} duration={800} />
                            </Scene>

                            <Scene key="MyMessages">
                                <Scene key="messages" component={MyMessages} renderLeftButton={()=><PopButton/>} title="消息" hideTabBar={true} duration={800} />
                            </Scene>

                            <Scene key="MyMessageDetail">
                                <Scene key="messageDetail" component={MyMessageDetail} renderLeftButton={()=><PopButton/>} title="消息" hideTabBar={true} duration={800} />
                            </Scene>

                            <Scene key="SystemSetting">
                                <Scene key="sysSetting" component={SystemSetting} renderLeftButton={()=><PopButton/>} title="设置" hideTabBar={true} duration={800} />
                            </Scene>

                            <Scene key="dingdanMore">
                                <Scene key="dingdanmore" component={DingdanMore} renderLeftButton={()=><PopButton/>} title="订单" hideTabBar={true} duration={800} />
                            </Scene>

                            <Scene key="searchPros">
                                <Scene key="searchPage" component={SearchProduct} title="搜索" hideNavBar={true} hideTabBar={true}  duration={800} />
                            </Scene>

                            <Scene key="ProductDetails">
                                <Scene key="proDetails" component={ProductDetails} title="产品详情" hideNavBar={true} hideTabBar={true}  duration={800} />
                            </Scene>

                            <Scene key="ProductInstruction">
                                <Scene key="proInstruct" component={ProductInstruction} renderLeftButton={()=><PopButton/>} title="商品介绍" hideTabBar={true}  duration={800} />
                            </Scene>

                            <Scene key="Calculator">
                                <Scene key="calculate" component={Calculator} renderLeftButton={()=><PopButton/>} title="结算" hideTabBar={true} duration={800} />
                            </Scene>

                            <Scene key="AddShippingAddress" direction="vertical">
                                <Scene key="addshippingaddr" component={AddShippingAddress} renderLeftButton={()=><PopButton/>} title="收货地址" hideTabBar={true} />
                            </Scene>

                            <Scene key="Payment">
                                <Scene key="pay" component={Payment} renderLeftButton={()=><PopButton/>} title="确认支付" hideTabBar={true} duration={800} />
                            </Scene>

                            <Scene key="Register">
                                <Scene key="regist" component={Register} renderLeftButton={()=><PopButton/>} title="注册" hideTabBar={true}  duration={800} />
                            </Scene>

                            <Scene key="Login">
                                <Scene key="log" component={Login} renderLeftButton={()=><PopButton/>} title="四眼兔欢迎你" onRight={()=>alert("Right button")} rightTitle="取消" hideTabBar={true}  duration={800} />
                            </Scene>

                            <Scene key="tabbar" tabs={true} initial={true} tabBarStyle={styles.tabBarbox}>
                                <Scene key="waimaiIndex" initial={true} title="外卖" icon={TabIcon}>
                                    <Scene key="waimaiTabIndex" component={Waimai} initial = {true} hideNavBar = {true} />
                                </Scene>
                                <Scene key="tangshiIndex" title="堂食" icon={TabIcon}>
                                    <Scene key="tangshiTabIndex" component={TabView} title="堂食" navBar = {TangshiNavbar} />
                                </Scene>
                                <Scene key="dingdanIndex" title="订单" icon={TabIcon}>
                                    <Scene key="dingdanTabIndex" component={Dingdan} title="订单" />
                                </Scene>
                                <Scene key="shenbianIndex" title="身边" icon={TabIcon}>
                                    <Scene key="shenbianTabIndex" component={Shenbian} title="身边" />
                                </Scene>
                                <Scene key="wodeIndex" title="我的" icon={TabIcon}>
                                    <Scene key="wodeTabIndex" component={Wode} title="我的" renderLeftButton={()=><MyMessageBtn/>} renderRightButton={()=><AccountSetBtn/>} />
                                </Scene>
                            </Scene>

                        </Scene>

                        <Scene key="verifyByPhone" component={VerifyByPhone} />
                        <Scene key="prosFilterOpts" component={ProsFilterOptions} />

                    </Scene>
                </Router>;
    }
}

var styles = StyleSheet.create({
    tabBarbox: {
        backgroundColor: '#ffffff',
    },
})
