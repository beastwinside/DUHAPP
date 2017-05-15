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
					img:require('../img/shopinfo/alsk.png'),
					shopname:'阿良烧烤',
					yuexiaoliang:1381,
					qisongprice:15,
					peisongprice:0,
					renjun:15,
					time:47,
					discount:405,
					jian:'■满5减1',
					firstcustom:'♦新用户立减5元',
				},
				{
					img:require('../img/shopinfo/zhclx.png'),
					shopname:'真好吃龙虾',
					yuexiaoliang:231,
					qisongprice:12,
					peisongprice:12,
					renjun:18,
					time:33,
					discount:657,
					jian:'■满5减1',
					firstcustom:'♦新用户立减5元',


				},
				{
					img:require('../img/shopinfo/bxky.png'),
					shopname:'巴西烤鱼',
					yuexiaoliang:234,
					qisongprice:16,
					peisongprice:20,
					renjun:32,
					time:44,
					discount:555,
					jian:'■满5减1',
					firstcustom:'♦新用户立减5元',


				},
				{
					img:require('../img/shopinfo/jwyb.png'),
					shopname:'精武鸭脖',
					yuexiaoliang:12,
					qisongprice:3,
					peisongprice:2,
					renjun:10,
					time:23,
					discount:200,
					jian:'■满5减1',
					firstcustom:'♦新用户立减5元',


				},
				{
					img:require('../img/shopinfo/wlxhmj.png'),
					shopname:'碗留香黄焖鸡',
					yuexiaoliang:131,
					qisongprice:12,
					peisongprice:12,
					renjun:10,
					time:67,
					discount:445,
					jian:'■满5减1',
					firstcustom:'♦新用户立减5元',


				},
				{
					img:require('../img/shopinfo/lrtyy.png'),
					shopname:'李日天鱿鱼',
					yuexiaoliang:234,
					qisongprice:4,
					peisongprice:2,
					renjun:12,
					time:42,
					discount:231,
					jian:'■满5减1',
					firstcustom:'♦新用户立减5元',


				},
				{
					img:require('../img/shopinfo/bxky.png'),
					shopname:'巴西烤鱼',
					yuexiaoliang:1381,
					qisongprice:15,
					peisongprice:0,
					renjun:15,
					time:47,
					discount:405,
					jian:'■满5减1',
					firstcustom:'♦新用户立减5元',


				},
				{
					img:require('../img/shopinfo/alsk.png'),
					shopname:'阿良烧烤',
					yuexiaoliang:81,
					qisongprice:5,
					peisongprice:30,
					renjun:5,
					time:4,
					discount:40,
					jian:'■满5减1',
					firstcustom:'♦新用户立减5元',


				},
				{
					img:require('../img/shopinfo/jwyb.png'),
					shopname:'精武鸭脖',
					yuexiaoliang:121,
					qisongprice:44,
					peisongprice:2,
					renjun:33,
					time:57,
					discount:556,
					jian:'■满5减1',
					firstcustom:'♦新用户立减5元',


				},
				{
					img:require('../img/shopinfo/zhclx.png'),
					shopname:'真好吃龙虾',
					yuexiaoliang:777,
					qisongprice:11,
					peisongprice:55,
					renjun:23,
					time:42,
					discount:666,
					jian:'■满5减1',
					firstcustom:'♦新用户立减5元',


				},
				{
					img:require('../img/shopinfo/alsk.png'),
					shopname:'阿良烧烤',
					yuexiaoliang:2381,
					qisongprice:20,
					peisongprice:10,
					renjun:23,
					time:20 ,
					discount:666,
					jian:'■满5减1',
					firstcustom:'♦新用户立减5元',


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
				renderRow={
					(rowData)=>
					<TouchableOpacity activeOpacity={0.9}>
					<View style={styles.container}>
					<View style={styles.listviewitem}>
					<View style={{flex:1,backgroundColor:'#2E2b2b'}}>
					<Image source={rowData.img} style={{height:60,margin:5,width:scw/4.5}}/>
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
		container:{
			borderBottomWidth:0.5,
			alignItems:'center',
			justifyContent:'space-around',
			backgroundColor:'#2e2b2b',
			borderColor:'white',
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