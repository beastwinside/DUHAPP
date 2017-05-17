import React, { Component } from 'react';
import {View, Text, StyleSheet, StatusBar,Dimensions, Platform, PixelRatio,
	ListView,Image, TouchableOpacity, ScrollView, RefreshControl} from 'react-native';
	import Shopinfo from '../data/shopinfobysales.json';
		import { Actions } from 'react-native-router-flux';

	//Image 的require参数不能为变量，无法存入json，暂时找不到好的存储图片方式
	var Imgurl = new Array();
	Imgurl.push(
		require('../img/shopinfo/bxky.png'),
		require('../img/shopinfo/wlxhmj.png'),
		require('../img/shopinfo/zhclx.png'), 
		require('../img/shopinfo/alsk.png'),
		require('../img/shopinfo/jwyb.png'),  
		require('../img/shopinfo/lrtyy.png'),
		require('../img/shopinfo/alsk.png'),
		require('../img/shopinfo/bxky.png'),
		require('../img/shopinfo/jwyb.png'),
		require('../img/shopinfo/wlxhmj.png'),
		require('../img/shopinfo/lrtyy.png'),
		require('../img/shopinfo/alsk.png'),
		require('../img/shopinfo/zhclx.png'),  
		require('../img/shopinfo/bxky.png'),
		require('../img/shopinfo/bxky.png'),
		require('../img/shopinfo/jwyb.png'),
		require('../img/shopinfo/wlxhmj.png'),
		require('../img/shopinfo/lrtyy.png'),
		);


	export default class Homelistbygeneral extends Component {



		constructor(props) {
			super(props);
			const ds=new ListView.DataSource({
				rowHasChanged:(r1,r2)=>r1!=r2});
			this.state = {
				dataSource:ds.cloneWithRows(Shopinfo.shopdata)
			};
		}





		renderRow1(rowData: string,sectionID: number, rowID: number){
			var imgSource=Imgurl[rowID]; 
			// Actions传值要先用const，不然每次render重复赋值
			  const goToShop = () => Actions.Shop({shopinfo: rowData,img:imgSource});
			return(
				<TouchableOpacity activeOpacity={0.9} 
				onPress={goToShop}
				>
				<View style={styles.container}  >
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
				<Text  style={styles.listitemtext5}>{rowData.firstcustom}</Text>

				</View>
				</View>
				</View>
				</TouchableOpacity>

				);
		}




		render(){
			return(

				<ScrollView>
				<ListView
				dataSource={this.state.dataSource}

				renderRow={this.renderRow1}

				/>
				<Text style={{
					color:'white',
					textAlign:'center',
				}}>已无更多数据</Text>
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

