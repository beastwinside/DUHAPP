import React, { Component } from 'react';
import {View, Text, StyleSheet, StatusBar,
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

			return (
				<View style={{
					backgroundColor:'#0EF0B7',
				}}>
				

				<View style={{
					marginTop:55,
					height:800,
					borderTopWidth:1,
					borderColor:'#9C9C9C'

				}}>
				<ScrollableTabView 

				tabBarPosition='overlayTop'
				tabBarUnderlineStyle={{
					backgroundColor: '#201F20',
					height:2,}}
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
					<PageThree tabLabel="待评价" />

					</ScrollableTabView>
					</View>

					</View>

					)
		}
	}