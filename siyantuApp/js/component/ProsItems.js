/*
		产品列表页ProLists.js - 九大分类下 - 产品列表
*/
'use strict'
import React from 'react';
import {AppRegistry, Navigator, StyleSheet, Platform, ProgressBarAndroid, ListView, Text, Image, View, Animated} from 'react-native';
import ProsItemsCell from './ProsItemsCell';
import getAdaptHeight from '../component/getAdaptHeight';
import getAdaptWidth from '../component/getAdaptWidth';

var commend_url =   'http://api.meituan.com/group/v1/recommend/homepage/city/1?__skck=40aaaf01c2fc4801b9c059efcd7aa146&__skcy=mrUZYo7999nH8WgTicdfzaGjaSQ=&__skno=51156DC4-B59A-4108-8812-AD05BF227A47&__skts=1434530933.303717&__skua=bd6b6e8eadfad15571a15c3b9ef9199a&__vhost=api.mobile.meituan.com&ci=1&client=iphone&limit=40&movieBundleVersion=100&msid=48E2B810-805D-4821-9CDD-D5C9E01BC98A2015-06-17-14-50363&offset=0&position=39.982223,116.310502&userId=10086&userid=10086&utm_campaign=AgroupBgroupD100Fab_chunceshishuju__a__a___b1junglehomepagecatesort__b__leftflow___ab_gxhceshi__nostrategy__leftflow___ab_gxhceshi0202__b__a___ab_pindaochangsha__a__leftflow___ab_xinkeceshi__b__leftflow___ab_gxtest__gd__leftflow___ab_gxh_82__nostrategy__leftflow___ab_pindaoshenyang__a__leftflow___i_group_5_2_deallist_poitype__d__d___ab_b_food_57_purepoilist_extinfo__a__a___ab_trip_yidizhoubianyou__b__leftflow___ab_i_group_5_3_poidetaildeallist__a__b___ab_waimaizhanshi__b__b1___a20141120nanning__m1__leftflow___ab_pind';

var resultsCache = {
    prosData:{},
};

var LOADING = {};

export default class ProsItems extends React.Component{

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
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            })
        };
    }

  	componentDidMount() {
        this.getData();
  	}

  	getData() {
  		  // LOADING
    		resultsCache.prosData = null;
    		this.setState({
      			isLoading: true,
    		});

    		fetch(commend_url)
      			.then((response) => response.json())
      			.catch((error) => {
                //console.log(1);
        				resultsCache.prosData = undefined;
        				this.setState({
          					dataSource: this.getDataSource([]),
          					isLoading: false,
        				});
    			  })
      			.then((responseData) => {
        				resultsCache.prosData = responseData.data;
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
	  		prosData: Object,
	  		sectionID: number | string,
	    	rowID: number | string,
	    	highlightRowFunc: (sectionID: ?number | string, rowID: ?number | string) => void,
  	){
				return (
  	  			<ProsItemsCell
  	  					key = {prosData.id}
  	        		onHighlight={() => highlightRowFunc(sectionID, rowID)}
  	        		onUnhighlight={() => highlightRowFunc(null, null)}
  	        		prosData={prosData}
  	  			/>
	  		);
  	}

		render() {
				var content = this.state.dataSource.getRowCount === 0 ?
        		<NoContent
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
            <View style = {styles.prosItemsBox}>
            		{content}
            </View>
        )
    }
};

class NoContent extends React.Component{
  	render() {
    		var text = '';
    		if (!this.props.isLoading) {
    		    text = 'No recommend shop';
    		};
    		return (
      			<View style={[styles.prosItemsBox, styles.centerText]}>
        				<Text style = {styles.NoContentText}>{text}</Text>
      			</View>
    		)
  	}
};

var styles = StyleSheet.create({
  	prosItemsBox:{
  	    flex: 1,
  	    backgroundColor: '#f4f4f4',
        paddingTop: getAdaptHeight(15),
				paddingLeft: getAdaptWidth(18),
				paddingRight: getAdaptWidth(18),
  	},

  	centerText: {
      	alignItems: 'center',
    },
    NoContentText:{
    		marginTop: 80,
    		color: '#888888',
    },


});
