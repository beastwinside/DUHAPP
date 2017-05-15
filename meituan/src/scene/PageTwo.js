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
				
				<View style={styles.headview}>

				<Text
				style={styles.text1}
				>订单</Text>

				<Text
				style={styles.text2}
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
				
				}}>
				

				<View style={{
					marginTop:53,
					height:sch-124,
				}}>
				<ScrollableTabView 

				tabBarPosition='overlayTop'
				tabBarUnderlineStyle={{backgroundColor: '#0f5ca0'}}
				tabBarBackgroundColor='#2b2e2e'
				tabBarActiveTextColor='#FCF9F9'
				tabBarInactiveTextColor='#E6E4E6'
				tabBarTextStyle={{fontSize: 18}}
				locked={false}
				initialPage={0}
				style={{
					backgroundColor:"#454444",
				
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


	const styles=StyleSheet.create({
		headview:{
			height:60,
			width:420,	
			backgroundColor:'#2b2e2e',
		},	

		text1:{
			
			color:'#FFFFFF',
			fontSize:30,
			width:80,
			position:'absolute',
			top:10,
			marginLeft:Dimensions.get('window').width/2-30,
			fontWeight:'bold',
		},
		text2:{
			color:'#DBDBDB',
			height:30,
			width:50,
			fontSize:18,
			position:'absolute',
			right:10,
			top:10,			
		}






	});