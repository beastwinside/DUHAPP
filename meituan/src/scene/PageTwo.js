import React, { Component } from 'react';
import {View, Text, StyleSheet, StatusBar,Dimensions, Platform, PixelRatio,
	ListView,Image, TouchableOpacity, ScrollView, RefreshControl} from 'react-native';
	import { Actions } from 'react-native-router-flux';
	import ScrollableTabView, {ScrollableTabBar } from 'react-native-scrollable-tab-view';
	import PageTest from './PageTest';
	import PageThree from './PageThree';



	export default class PageTwo extends Component {

		static renderTitle = () => {
			return (
				
				<View style={{
					
					height:60,
					width:420,	
					backgroundColor:'#0EF0B7',
				}}>

				<Text
				style={{
					color:'#DF5709',
					fontSize:30,
					width:80,
					position:'absolute',
					top:10,
					marginLeft:125,


					
				}}
				>订单</Text>

				<Text
				style={{
					color:'#E48A56',
					height:30,
					width:50,
					fontSize:18,
					position:'absolute',
					right:10,
					top:10,
				}}
				onPress={Actions.pageThree}
				>编辑</Text>

				</View>
				);
		}


		render() {
			let scw=Dimensions.get('window').width;
			let sch=Dimensions.get('window').height;

			return (
				<View style={{
					backgroundColor:'#0EF0B7',
				}}>
				

				<View style={{
					marginTop:55,
					height:sch,
					borderTopWidth:1,
					borderColor:'#9C9C9C',
					backgroundColor:'#0EF0B7',


				}}>
				<ScrollableTabView 

				tabBarPosition='overlayTop'
				tabBarUnderlineStyle={{backgroundColor: '#FF0000'}}
				tabBarBackgroundColor='#F0FDA9'
				tabBarActiveTextColor='#201F20'
				tabBarInactiveTextColor='#727272'
				tabBarTextStyle={{fontSize: 18}}
				locked={false}
				initialPage={0}
				style={{
					height:200,
					backgroundColor:"#1DD7AC",
					

				}} >
				<PageTest tabLabel="全部订单" />
				<Text tabLabel="待评价"
				style={{
					marginTop:100,
					fontSize:49,
					textAlign:'center',
				}}>
				暂无评价
				</Text>			
				</ScrollableTabView>
				</View>

				</View>

				)
		}
	}