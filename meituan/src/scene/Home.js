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
	import Homelistbygeneral from  '../widget/Homelistbygeneral';
	import Homelistbysales from  '../widget/Homelistbysales';
	import Homelistbydiscount from  '../widget/Homelistbydiscount';

	




	export default class Home extends Component {

		constructor(props) {
			super(props);

			this.state = {
				headLoading:false,

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


