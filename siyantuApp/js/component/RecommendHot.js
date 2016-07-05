/*
		外卖 - 标签页 - 热点推荐
*/
'use strict'
import React from 'react';
import {AppRegistry, Navigator, StyleSheet, Platform, ProgressBarAndroid, ListView, Text, Image, View, Animated} from 'react-native';
import RecommendCell from './RecommendCell';
import getAdaptHeight from '../component/getAdaptHeight';
import getAdaptWidth from '../component/getAdaptWidth';

var commend_url =   'http://api.meituan.com/group/v1/recommend/homepage/city/1?__skck=40aaaf01c2fc4801b9c059efcd7aa146&__skcy=mrUZYo7999nH8WgTicdfzaGjaSQ=&__skno=51156DC4-B59A-4108-8812-AD05BF227A47&__skts=1434530933.303717&__skua=bd6b6e8eadfad15571a15c3b9ef9199a&__vhost=api.mobile.meituan.com&ci=1&client=iphone&limit=40&movieBundleVersion=100&msid=48E2B810-805D-4821-9CDD-D5C9E01BC98A2015-06-17-14-50363&offset=0&position=39.982223,116.310502&userId=10086&userid=10086&utm_campaign=AgroupBgroupD100Fab_chunceshishuju__a__a___b1junglehomepagecatesort__b__leftflow___ab_gxhceshi__nostrategy__leftflow___ab_gxhceshi0202__b__a___ab_pindaochangsha__a__leftflow___ab_xinkeceshi__b__leftflow___ab_gxtest__gd__leftflow___ab_gxh_82__nostrategy__leftflow___ab_pindaoshenyang__a__leftflow___i_group_5_2_deallist_poitype__d__d___ab_b_food_57_purepoilist_extinfo__a__a___ab_trip_yidizhoubianyou__b__leftflow___ab_i_group_5_3_poidetaildeallist__a__b___ab_waimaizhanshi__b__b1___a20141120nanning__m1__leftflow___ab_pind';

var resultsCache = {
	 shopData:{},
};

var LOADING = {};

export default class RecommendHot extends React.Component{

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
        this.getCommendData();
  	}

  	getCommendData() {
  		  //this.timeoutID = null;

  		  // LOADING
    		resultsCache.shopData = null;
    		this.setState({
      			isLoading: true,
      			isLoadingTail: false,
    		});

    		fetch(commend_url)
      			.then((response) => response.json())
      			.catch((error) => {
                //console.log(1);
        				resultsCache.shopData = undefined;
        				this.setState({
          					dataSource: this.getDataSource([]),
          					isLoading: false,
        				});
    			  })
      			.then((responseData) => {
                //console.log(22);
                //console.log(responseData.data);
        				resultsCache.shopData = responseData.data;
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

		//RecommendCell组件里的onSelect属性是在Waimai.js的RecommendHot组件里定义的
  	renderRow (
	  		shopData: Object,
	  		sectionID: number | string,
	    	rowID: number | string,
	    	highlightRowFunc: (sectionID: ?number | string, rowID: ?number | string) => void,
  	){
				//console.log(this);
				return (
  	  			<RecommendCell
  	  					key = {shopData.id}
  	        		onHighlight={() => highlightRowFunc(sectionID, rowID)}
  	        		onUnhighlight={() => highlightRowFunc(null, null)}
  	        		shopData={shopData}
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
        		<NoCommend
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
								<View style = {styles.hotHeader}>
										<View style = {styles.hotBorder}>
												<Text style = {styles.hotTitle}>热点推荐</Text>
										</View>
								</View>
            		{content}
            </View>
        )
    }
};

class NoCommend extends React.Component{
  	render() {
    		var text = '';
    		if (!this.props.isLoading) {
    		    text = 'No recommend shop';
    		};
    		return (
      			<View style={[styles.container, styles.centerText]}>
        				<Text style = {styles.noCommendText}>{text}</Text>
      			</View>
    		)
  	}
};

var styles = StyleSheet.create({
  	container:{
  	    flex: 1,
  	    backgroundColor: '#f4f4f4',
				paddingLeft: getAdaptWidth(18),
				paddingRight: getAdaptWidth(18),
  	},
		hotHeader: {
				paddingTop: getAdaptHeight(20),
				paddingBottom: getAdaptHeight(20),
		},
		hotBorder: {
				borderLeftWidth: 4,
				borderLeftColor: '#00a0e9',
				paddingLeft: getAdaptWidth(10),
		},
		hotTitle: {
				fontSize: getAdaptHeight(18),
				color: '#111',
		},

  	centerText: {
      	alignItems: 'center',
    },
    noCommendText:{
    		marginTop: 80,
    		color: '#888888',
    },


});
