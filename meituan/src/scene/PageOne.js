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
	import Shopinfo from '../data/shopinfo.json';
	
//Image 的require参数不能为变量，无法存入json，暂时找不到好的存储图片方式
	var Imgurl = new Array();
	Imgurl.push(
		require('../img/shopinfo/alsk.png'),  
		require('../img/shopinfo/zhclx.png'),
		require('../img/shopinfo/bxky.png'),
		require('../img/shopinfo/jwyb.png'),
		require('../img/shopinfo/wlxhmj.png'),
		require('../img/shopinfo/lrtyy.png'),
		require('../img/shopinfo/alsk.png'),  
		require('../img/shopinfo/zhclx.png'),
		require('../img/shopinfo/bxky.png'),
		require('../img/shopinfo/jwyb.png'),
		require('../img/shopinfo/wlxhmj.png'),
		require('../img/shopinfo/lrtyy.png'),
		require('../img/shopinfo/alsk.png'),  
		require('../img/shopinfo/zhclx.png'),
		require('../img/shopinfo/bxky.png'),
		require('../img/shopinfo/jwyb.png'),
		require('../img/shopinfo/wlxhmj.png'),
		require('../img/shopinfo/lrtyy.png'),
		);



	export default class PageOne extends Component {

		constructor(props) {
			super(props);
			const ds=new ListView.DataSource({
				rowHasChanged:(r1,r2)=>r1!=r2});
			this.state = {
				headLoading:false,
				dataSource:ds.cloneWithRows(Shopinfo.shopdata)
			};
		}

		_combineData() {
			this.setState({ headLoading: true })

			setTimeout(() => {
				this.setState({ headLoading: false })
			}, 2500);
		}

		renderRow1(rowData: string,sectionID: number, rowID: number){
			var imgSource=Imgurl[rowID]; 
			return(
				<TouchableOpacity activeOpacity={0.9}>
				<View style={styles.container}>
				<View style={styles.listviewitem}>
				<View style={{flex:1,backgroundColor:'#2E2b2b'}}>
				<Image source={imgSource} style={{height:60,margin:5,width:scw/4.5}} />
				
				</View>
				<View style ={{flex:3,backgroundColor:'#2e2b2b'}}>
				<Text style={styles.listitemtext1}>{rowData.shopname}</Text>
				<Text style={styles.listitemtext2}>★★★★★ 
				<Text style={{color:'#CBC4C4'}}>月售{rowData.yuexiaoliang} {rowData.time}分钟 {rowData.discount}m</Text></Text>
				<Text style={styles.listitemtext3}>起送{rowData.qisongprice},配送{rowData.peisongprice},人均{rowData.renjun}</Text>
				<Text style={styles.listitemtext4}>{rowData.jian}</Text>
				<Text style={styles.listitemtext5}>{rowData.firstcustom}</Text>

				</View>


				</View>
				</View>
				</TouchableOpacity>

				);
		}

		

		render() {

			let scw=Dimensions.get('window').width;
			let sch=Dimensions.get('window').height;
			return (
				<ScrollView 
				style={{
					backgroundColor:'#2b2e2e',
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

				renderRow={this.renderRow1}

				/>

				
				<View style={{
					height:100,
					backgroundColor:'#2e2b2b',
				}}></View>
				</ScrollView>				
				

				);

		}

	}

	let scw=Dimensions.get('window').width;
	const styles=StyleSheet.create(
	{
		container:{
			borderBottomWidth:2,
			alignItems:'center',
			justifyContent:'space-around',
			backgroundColor:'#2e2b2b',
			borderColor:'#009b85',
		},


		listviewitem:{
			backgroundColor:'#897451',
			height:160,
			
			flexDirection:'row',
		},

		listitemtext1:{
			flex:1,fontSize:18,
			color:'#F8F4F4',
			paddingTop:5,
			fontWeight:'bold',

		},
		listitemtext2:{

			flex:1,
			color:'#FD4D00',

		},
		listitemtext3:{

			flex:1,
			color:'white',

		},
		listitemtext4:{
			flex:1,
			color:'#FB0B4F',
			fontWeight:'bold',

		},
		listitemtext5:{
			flex:1,
			
			color:'#F8D808',
			fontWeight:'bold',

		},
		

	})


