/*
    我的 - tab标签页 - 我的晒单页面
*/
'use strict'
import React from 'react';
import {AppRegistry, Navigator, StyleSheet, Platform, ProgressBarAndroid, ListView, Text, Image, View, Animated} from 'react-native';
import ShenbianCell from '../component/ShenbianCell';
import getAdaptHeight from '../component/getAdaptHeight';
import getAdaptWidth from '../component/getAdaptWidth';

var shenbian_url =   'http://api.meituan.com/group/v1/recommend/homepage/city/1?__skck=40aaaf01c2fc4801b9c059efcd7aa146&__skcy=mrUZYo7999nH8WgTicdfzaGjaSQ=&__skno=51156DC4-B59A-4108-8812-AD05BF227A47&__skts=1434530933.303717&__skua=bd6b6e8eadfad15571a15c3b9ef9199a&__vhost=api.mobile.meituan.com&ci=1&client=iphone&limit=40&movieBundleVersion=100&msid=48E2B810-805D-4821-9CDD-D5C9E01BC98A2015-06-17-14-50363&offset=0&position=39.982223,116.310502&userId=10086&userid=10086&utm_campaign=AgroupBgroupD100Fab_chunceshishuju__a__a___b1junglehomepagecatesort__b__leftflow___ab_gxhceshi__nostrategy__leftflow___ab_gxhceshi0202__b__a___ab_pindaochangsha__a__leftflow___ab_xinkeceshi__b__leftflow___ab_gxtest__gd__leftflow___ab_gxh_82__nostrategy__leftflow___ab_pindaoshenyang__a__leftflow___i_group_5_2_deallist_poitype__d__d___ab_b_food_57_purepoilist_extinfo__a__a___ab_trip_yidizhoubianyou__b__leftflow___ab_i_group_5_3_poidetaildeallist__a__b___ab_waimaizhanshi__b__b1___a20141120nanning__m1__leftflow___ab_pind';

var resultsCache = {
	 shenbianData:{},
};

var LOADING = {};

export default class Myshaidan extends React.Component{

  	//timeoutID: (null: any),

    static defaultProps = {
        //bannerImgInitalHeight: 201//设计图（iphone6 @x2）中为750px * 403px，所以为375dp * 201dp
    };
    static propTypes = {
        //bannerImgInitalHeight: React.PropTypes.number.isRequired
    };

    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
            isLoadingTail: false,
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            filter:'',
            queryNumber:0,
        };
    }

  	componentDidMount() {
        this.getShenbianData();
  	}

  	getShenbianData() {
  		  //this.timeoutID = null;

  		  // LOADING
    		resultsCache.shenbianData = null;
    		this.setState({
      			isLoading: true,
      			isLoadingTail: false,
    		});

    		fetch(shenbian_url)
      			.then((response) => response.json())
      			.catch((error) => {
                //console.log(1);
        				resultsCache.shenbianData = undefined;
        				this.setState({
          					dataSource: this.getDataSource([]),
          					isLoading: false,
        				});
    			  })
      			.then((responseData) => {
                //console.log(22);
                //console.log(responseData.data);
        				resultsCache.shenbianData = responseData.data;
        				this.setState({
          					isLoading: false,
          					dataSource: this.getDataSource(responseData.data),
        				});
      			})
      			.done();
  	}

  	getDataSource(datas: Array<any>): ListView.DataSource {
  		  return this.state.dataSource.cloneWithRows(datas);
  	}

		renderRow (
	  		shenbianData: Object,
	  		sectionID: number | string,
	    	rowID: number | string,
	    	highlightRowFunc: (sectionID: ?number | string, rowID: ?number | string) => void,
  	){
				//console.log(this);
				return (
  	  			<ShenbianCell
  	  					key = {shenbianData.id}
  	        		onHighlight={() => highlightRowFunc(sectionID, rowID)}
  	        		onUnhighlight={() => highlightRowFunc(null, null)}
  	        		shenbianData={shenbianData}
  	  			/>
	  		);
  	}
		/*
				ListView属性标注：
				renderSeparator = {this.renderSeparator} 行与行之前的分隔线
				keyboardDismissMode="on-drag" 滚动时隐藏键盘
				keyboardShouldPersistTaps 默认为false，表示如果当前是textinput控件，并且键盘是弹出状态，点击textinput之外的地方时会隐藏键盘。反之不会有效果，键盘还是打开状态
		*/
		render() {
				var content = this.state.dataSource.getRowCount === 0 ?
        		<NoShenbian
        			isLoading = {this.state.isLoading}
        		/> :
        		<ListView
        				ref = "listview"
        				dataSource={this.state.dataSource}
            		renderRow={this.renderRow}
            		automaticallyAdjustContentInsets={true}
            		keyboardDismissMode="on-drag"
            		keyboardShouldPersistTaps={true}
            		showsVerticalScrollIndicator={false}
        		/>;
        return (
            <View style = {styles.container}>
            		{content}
            </View>
        )
    }
};

class NoShenbian extends React.Component{
  	render() {
    		var text = '';
    		if (!this.props.isLoading) {
    		    text = 'No Shenbian Data.';
    		};
    		return (
      			<View style={[styles.container, styles.centerText]}>
        				<Text style = {styles.noShenbianText}>{text}</Text>
      			</View>
    		)
  	}
};

var styles = StyleSheet.create({
  	container:{
  	    flex: 1,
  	    backgroundColor: '#f4f4f4',
  	},

  	centerText: {
      	alignItems: 'center',
    },
    noShenbianText:{
    		marginTop: 80,
    		color: '#888888',
    },


});
