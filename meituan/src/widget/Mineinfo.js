import React, { Component } from 'react';
import {View, Text, StyleSheet, StatusBar,Dimensions, Platform, PixelRatio,
	ListView,Image, TouchableOpacity, ScrollView, RefreshControl} from 'react-native';
import Swiper from 'react-native-swiper';

export default class Mineinfo extends Component{
	render(){
		return(<View style={{
	 				height:80,
	 				backgroundColor:'#2b2e2e',
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
	 					color:'white',
	 				}}>1亿张
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
	 					color:'white',
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
	 						color:'white',
	 					}}>1亿元
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
	 						color:'white',
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
	 							color:'white',
	 						}}>0张
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
	 							color:'white',
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


