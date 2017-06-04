import React, { Component } from 'react';
import {View,Alert, Text, StyleSheet, StatusBar,Dimensions, Platform, PixelRatio,
	ListView,Image, TouchableOpacity, ScrollView, RefreshControl,TextInput} from 'react-native';
	import { Actions } from 'react-native-router-flux';
	import ScrollableTabView, {ScrollableTabBar } from 'react-native-scrollable-tab-view';
	import Swiper from 'react-native-swiper';
	import Homemenu from '../widget/Homemenu';
	import Homeheader from '../widget/Homeheader';
	import HomeDiscountArea from '../widget/HomeDiscountArea';
	import HomeScrollArea from  '../widget/HomeScrollArea';
	import HomeQualityArea from  '../widget/HomeQualityArea';
	import HomeListHeader from  '../widget/HomeListHeader';
	import Homelistbygeneral from  '../widget/Homelistbygeneral';
	import Homelistbysales from  '../widget/Homelistbysales';
	import Homelistbydiscount from  '../widget/Homelistbydiscount';

	var shangjiaarray=new Array('阿良烧烤','绝味龙虾','巴西烤鱼',
		'精武鸭脖','碗留香黄焖鸡','甜辣鱿鱼','acc');


	var Imgurl=require('../img/shopinfo/alsk.png');

	export default class Home extends Component {

		constructor(props) {
			super(props);

			this.state = {
				headLoading:false,
				text:'',

			};
		}

		_combineData() {
			this.setState({ headLoading: true })

			setTimeout(() => {
				this.setState({ headLoading: false })
			}, 1500);
		}




		render() {
			const search=()=>{
				let temp=0;
				for(let i=0;i<=shangjiaarray.length;i++)
				{
					if(shangjiaarray[i]==this.state.text)
						{Actions.Shop({
							shopinfo: {
								"img":"../img/shopinfo/alsk.png",
								"shopname":this.state.text,
								"yuexiaoliang":1381,
								"qisongprice":15,
								"peisongprice":0,
								"renjun":15,
								"time":47,
								"discount":405,
								"jian":"■满5减1",
								"firstcustom":"♦新用户立减5元",
								"phone":1342361056,
							},
							img:Imgurl
						});temp++}
					else ;
				}
				if(temp==0)
					{Alert.alert('我很抱歉','未找到该商家');}


			};



			let scw=Dimensions.get('window').width;
			let sch=Dimensions.get('window').height;
			var dddd=false;
			return (
				<ScrollView 
				style={{
					backgroundColor:'#2b2e2e',
				}}
				refreshControl={
					<RefreshControl
					refreshing={this.state.headLoading}
					onRefresh={() => alert('刷新结束')}
					tintColor="#F90C7A"
					title="Loading..."
					colors={['#ff0000','#00ff00','#0000ff']}
					processBackgroundColor="#ffff00"
					/>
				}
				>


				<TextInput style={{
					height:40,
					borderWidth: 1,
					position:'absolute',
					backgroundColor:'#FFFFFF',
					top:50,
					width:scw*0.45,
					left:20,
					zIndex:10,
					opacity:0.8,
				}} 
				underlineColorAndroid="transparent"
				placeholder="搜索商家"
				maxLength={10}
				onChangeText={(text) => this.setState({text})}
				onSubmitEditing={search}
				


				/>



				




				<Homeheader/>
				<Homemenu/>
				<HomeDiscountArea/>
				<HomeScrollArea/>
				<HomeQualityArea/>
				<HomeListHeader/>



				<ScrollableTabView 


				tabBarUnderlineStyle={{backgroundColor: '#2b2e2e'}}
				tabBarBackgroundColor='#2b2e2e'
				tabBarActiveTextColor='#D65606'
				tabBarInactiveTextColor='#E6E4E6'
				tabBarTextStyle={{fontSize: 18}}
				locked={true}
				initialPage={0}
				style={{
					borderTopWidth:5,
					backgroundColor:"#454444",
					borderColor:'#009b85',
					height:3000,

				}} >

				<Homelistbygeneral tabLabel="综合排序" />
				<Homelistbysales tabLabel="销量最高" />
				<Homelistbydiscount tabLabel="距离最近" />

				</ScrollableTabView>

				<View style={{
					height:50,
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


