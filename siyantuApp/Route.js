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


const reducerCreate = params=>{
    const defaultReducer = Reducer(params);
    return (state, action)=>{
        //console.log("ACTION:", action);
        return defaultReducer(state, action);
    }
};

// define this based on the styles/dimensions you use
const getSceneStyle = function (props) {
    return {
        flex: 1,
        marginTop: props.hideNavBar ? 0 : 64,
        marginBottom: props.hideTabBar ? 0 : 49.5,
        backgroundColor: '#ffffff',
        shadowColor: null,
        shadowOffset: null,
        shadowOpacity: null,
        shadowRadius: null,
    };
}

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
