import React, { Component } from 'react';
import {View, Text, StyleSheet, StatusBar,Dimensions, Platform, PixelRatio,
	ListView,Image, TouchableOpacity, ScrollView, RefreshControl} from 'react-native';
	import { Actions } from 'react-native-router-flux';
	import ScrollableTabView, {ScrollableTabBar } from 'react-native-scrollable-tab-view';
	import AllOrder from './Allorder';
	import Mine from './Mine';


	export default class Order extends Component {
		static renderTitle = () => {
			return (
				
				<View style={styles.headview}>

				<Text 
				style={styles.text1}
				>订单</Text>
				<Text
				style={styles.text2}
			
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
				tabBarUnderlineStyle={{backgroundColor: '#F1F2F2'}}
				tabBarBackgroundColor='#009b85'
				tabBarActiveTextColor='#FCF9F9'
				tabBarInactiveTextColor='#E6E4E6'
				tabBarTextStyle={{fontSize: 17}}
				locked={false}
				initialPage={0}
				style={{
					borderTopWidth:1,
					backgroundColor:"#454444",
					borderColor:'#009b85',
				
				}} >
				<AllOrder tabLabel="全部订单" />
				<Text tabLabel="待评价"
				style={{
					marginTop:100,
					fontSize:30,
					textAlign:'center',
					color:'white',
				}}>
				<Text  >
				暂无评价
				</Text>
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
			backgroundColor:'#009b85',
			
			borderColor:'white',
		},	

		text1:{
			
			color:'#212121',
			fontSize:24,
			width:80,
			position:'absolute',
			top:10,
			marginLeft:Dimensions.get('window').width/2-30,
			fontWeight:'bold',
		},
		text2:{
			color:'#212121',
			height:30,
			width:50,
			fontSize:18,
			position:'absolute',
			right:10,
			top:10,			
		}






	});