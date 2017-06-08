import React, { Component } from 'react';
import {View, Text, StyleSheet, StatusBar,Dimensions, Platform, PixelRatio,
	ListView,Image, TouchableOpacity, ScrollView, RefreshControl} from 'react-native';
import Swiper from 'react-native-swiper';

export default class Mineinfo extends Component{

	constructor(props) {
	 		super(props);
	 		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
	 		this.state = {
	 			hongbao:'未登录',
	 			yue:'未登录',
	 			daijinquan:'未登录',
	 			id:'未登录'
	 			
	 		};
	 	}




	render(){
		return(<View style={{
	 				height:80,
	 				backgroundColor:'white',
	 				flexDirection:'row',
	 				justifyContent:'space-around',
	 				alignItems:'center',
	 				borderBottomWidth:5,
	 				borderColor:'white',
	 				
	 			}}>	

	 			<View style={[style.info_viewstyle,
	 				{	}]}>	
	 				<Text style={{
	 					fontSize:15,
	 					alignSelf:'center',
	 					marginTop:10,
	 					color:'grey',
	 				}}>{this.state.hongbao}
	 				</Text>

	 				<View style={{
	 					flexDirection:'row',
	 					alignSelf:'center',
	 				}}>
	 				<Image style={{
	 					marginTop:5,
	 					marginRight:3,
	 					height:15,
	 					width:25,
	 					
	 				}}
	 				source={require('../img/mine/blue.png')}/> 
	 				<Text style={{
	 					fontSize:18,
	 					alignSelf:'center',
	 					color:'grey',
	 				}}>美团红包
	 				</Text>
	 				</View>
	 				</View>

	 				<View style={[style.info_viewstyle,
	 					{}]}>
	 					<Text style={{
	 						fontSize:15,
	 						alignSelf:'center',
	 						marginTop:10,
	 						color:'grey',
	 					}}>{this.state.yue}
	 					</Text>

	 					<View style={{
	 						flexDirection:'row',
	 						alignSelf:'center',
	 					}}>
	 					<Image style={{
	 						marginTop:5,
	 						marginRight:3,
	 						height:15,
	 						width:25,
	 						
	 					}}
	 					source={require('../img/mine/red.png')}/> 
	 					<Text style={{
	 						fontSize:18,
	 						alignSelf:'center',
	 						color:'grey',
	 					}}>余额
	 					</Text>
	 					</View>
	 					</View>

	 					<View style={[style.info_viewstyle,
	 						{	}]}>

	 						<Text style={{
	 							fontSize:15,
	 							alignSelf:'center',
	 							marginTop:10,
	 							color:'grey',
	 						}}>{this.state.daijinquan}
	 						</Text>	

	 						<View style={{
	 							flexDirection:'row',
	 							alignSelf:'center',
	 						}}>
	 						<Image style={{
	 							marginTop:5,
	 							marginRight:3,
	 							height:15,
	 							width:25,
	 							
	 						}}
	 						source={require('../img/mine/yellow.png')}/> 
	 						<Text style={{
	 							fontSize:18,
	 							alignSelf:'center',
	 							color:'grey',
	 						}}>代金券</Text>
	 						</View>
	 						</View>


	 						</View>);


	}




}

	 const style=StyleSheet.create({
	 	

	 	info_viewstyle:{
	 		height:60,
	 		width:120,
	 		borderRadius:8,


	 	},





	 });


