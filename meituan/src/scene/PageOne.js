import React, { Component } from 'react';
import {View, Text, StyleSheet, StatusBar,Dimensions, Platform, PixelRatio,
	ListView,Image, TouchableOpacity, ScrollView, RefreshControl} from 'react-native';
	import { Actions } from 'react-native-router-flux';
	import ScrollableTabView, {ScrollableTabBar } from 'react-native-scrollable-tab-view';
	import Swiper from 'react-native-swiper';
	import Homemenu from '../widget/Homemenu';
	import Homeheader from '../widget/Homeheader';
	import HomeDiscountArea from '../widget/HomeDiscountArea';
	import HomeScrollArea from  '../widget/HomeScrollArea';
	import HomeQualityArea from  '../widget/HomeQualityArea';
	import HomeListHeader from  '../widget/HomeListHeader';
	



	export default class PageOne extends Component {

		constructor(props) {
			super(props);
			const ds=new ListView.DataSource({
				rowHasChanged:(r1,r2)=>r1!=r2});
			this.state = {
				headLoading:false,
				dataSource:ds.cloneWithRows([
				{
					img=require('../img/home/shopinfo/')
					shopname:'小胖哥烧烤',
					yuexiaoliang:1381,
					qisongprice:15,
					peisongprice:0,
					renjun:15,
					time:47,
					discount:405,
					jian:'满5减1',
					firstcustom:'新用户立减5元',
				},
				{
					img=require('../img/home/shopinfo/')
					shopname:'小胖哥烧烤',
					yuexiaoliang:1381,
					qisongprice:15,
					peisongprice:0,
					renjun:15,
					time:47,
					discount:405,
					jian:'满5减1',
					firstcustom:'新用户立减5元',


				},
				{
					img=require('../img/home/shopinfo/')
					shopname:'小胖哥烧烤',
					yuexiaoliang:1381,
					qisongprice:15,
					peisongprice:0,
					renjun:15,
					time:47,
					discount:405,
					jian:'满5减1',
					firstcustom:'新用户立减5元',


				},
				{
					img=require('../img/home/shopinfo/')
					shopname:'小胖哥烧烤',
					yuexiaoliang:1381,
					qisongprice:15,
					peisongprice:0,
					renjun:15,
					time:47,
					discount:405,
					jian:'满5减1',
					firstcustom:'新用户立减5元',


				},
				{
					img=require('../img/home/shopinfo/')
					shopname:'小胖哥烧烤',
					yuexiaoliang:1381,
					qisongprice:15,
					peisongprice:0,
					renjun:15,
					time:47,
					discount:405,
					jian:'满5减1',
					firstcustom:'新用户立减5元',


				},
				{
					img=require('../img/home/shopinfo/')
					shopname:'小胖哥烧烤',
					yuexiaoliang:1381,
					qisongprice:15,
					peisongprice:0,
					renjun:15,
					time:47,
					discount:405,
					jian:'满5减1',
					firstcustom:'新用户立减5元',


				},
				{
					img=require('../img/home/shopinfo/')
					shopname:'小胖哥烧烤',
					yuexiaoliang:1381,
					qisongprice:15,
					peisongprice:0,
					renjun:15,
					time:47,
					discount:405,
					jian:'满5减1',
					firstcustom:'新用户立减5元',


				},
				{
					img=require('../img/home/shopinfo/')
					shopname:'小胖哥烧烤',
					yuexiaoliang:1381,
					qisongprice:15,
					peisongprice:0,
					renjun:15,
					time:47,
					discount:405,
					jian:'满5减1',
					firstcustom:'新用户立减5元',


				},
				{
					img=require('../img/home/shopinfo/')
					shopname:'小胖哥烧烤',
					yuexiaoliang:1381,
					qisongprice:15,
					peisongprice:0,
					renjun:15,
					time:47,
					discount:405,
					jian:'满5减1',
					firstcustom:'新用户立减5元',


				},
				{
					img=require('../img/home/shopinfo/')
					shopname:'小胖哥烧烤',
					yuexiaoliang:1381,
					qisongprice:15,
					peisongprice:0,
					renjun:15,
					time:47,
					discount:405,
					jian:'满5减1',
					firstcustom:'新用户立减5元',


				},
				{
					img=require('../img/home/shopinfo/')
					shopname:'小胖哥烧烤',
					yuexiaoliang:1381,
					qisongprice:15,
					peisongprice:0,
					renjun:15,
					time:47,
					discount:405,
					jian:'满5减1',
					firstcustom:'新用户立减5元',


				}

				])
			};
		}

		_combineData() {
			this.setState({ headLoading: true })

			setTimeout(() => {
				this.setState({ headLoading: false })
			}, 2500);
		}

		

		render() {

			let scw=Dimensions.get('window').width;
			let sch=Dimensions.get('window').height;
			return (
				<ScrollView 
				style={{
					backgroundColor:'#2e2b2b',
				}}
				refreshControl={
					<RefreshControl
					refreshing={this.state.headLoading}
					onRefresh={() => this._combineData()}
					tintColor="#F90C7A"
					title="Loading..."
					colors={['#ff0000','#00ff00','#0000ff']}
					processBackgroundColor="#ffff00"
					/>
				}
				>
				<Homeheader/>
				<Homemenu/>
				<HomeDiscountArea/>
				<HomeScrollArea/>
				<HomeQualityArea/>
				<HomeListHeader/>
				<ListView
				dataSource={this.state.dataSource}
				renderRow={
					(rowData)=>
					<View style={styles.listviewitem}>
					<View style={{flex:1,backgroundColor:'#2E7190'}}></View>
					<View style={{flex:3,backgroundColor:'#CD4F13'}}></View>


					</View>


				}


				/>

				
				<View style={{
					height:800,
					backgroundColor:'#2e2b2b',
				}}></View>
				</ScrollView>				
				

				);

		}

	}

	let scw=Dimensions.get('window').width;
	const styles=StyleSheet.create(
	{
		listviewitem:{
			backgroundColor:'#897451',
			height:160,
			marginBottom:20,
			flexDirection:'row',
		}
		

	})