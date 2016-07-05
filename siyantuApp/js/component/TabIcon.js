/*
    TabBar
*/
import React from 'react';
import {AppRegistry, Navigator, StyleSheet, Text, Image, View,Animated} from 'react-native'
import getAdaptHeight from './getAdaptHeight';
import getAdaptWidth from './getAdaptWidth';

export default class TabIcon extends React.Component{
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
    render(){
        let key = this.props.sceneKey;
        this.iconImage = this.props.selected ? this.props.icon_tabbar_selected[key] : this.props.icon_tabar[key];
        //console.log(key);
        return (
            <View style = {styles.tabs} >
                <Image source={this.iconImage}/>
                <Text style={{color: this.props.selected ? "#009ae8" :"#666666",fontSize: 10,marginTop:2}}>{this.props.title}</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    tabs: {
        alignItems: 'center',
        marginBottom: -8,
    },
});
