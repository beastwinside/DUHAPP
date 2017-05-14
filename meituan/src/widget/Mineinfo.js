import React, { Component } from 'react';
import {View, Text, StyleSheet, StatusBar,Dimensions, Platform, PixelRatio,
	ListView,Image, TouchableOpacity, ScrollView, RefreshControl} from 'react-native';
import Swiper from 'react-native-swiper';

export default class Mineinfo extends Component{
	render(){
		return(<View style={{
	 				height:120,
	 				backgroundColor:'#72dcbd',
	 				flexDirection:'row',
	 				justifyContent:'space-around',
	 				alignItems:'center',
	 				borderTopWidth:1,
	 				borderColor:'#838080',
	 			}}>	

	 			<View style={[style.info_viewstyle,
	 				{	backgroundColor:'#32ACE9',}]}>	
	 				<Text style={{
	 					fontSize:15,
	 					alignSelf:'center',
	 					marginTop:10,
	 				}}>1亿张
	 				</Text>

	 				<View style={{
	 					flexDirection:'row',
	 					alignSelf:'center',
	 				}}>
	 				<Image style={{
	 					height:25,
	 					width:25,
	 					borderRadius:12.5,
	 				}}
	 				source={require('../img/mine/dingdan@2x.png')}/> 
	 				<Text style={{
	 					fontSize:18,
	 					alignSelf:'center',
	 					color:'#2E2B2B',
	 				}}>美团红包
	 				</Text>
	 				</View>
	 				</View>

	 				<View style={[style.info_viewstyle,
	 					{backgroundColor:'#ed1b45',}]}>
	 					<Text style={{
	 						fontSize:15,
	 						alignSelf:'center',
	 						marginTop:10,
	 					}}>1亿元
	 					</Text>

	 					<View style={{
	 						flexDirection:'row',
	 						alignSelf:'center',
	 					}}>
	 					<Image style={{
	 						height:25,
	 						width:25,
	 						borderRadius:12.5,
	 					}}
	 					source={require('../img/mine/dingdan@2x.png')}/> 
	 					<Text style={{
	 						fontSize:18,
	 						alignSelf:'center',
	 						color:'#2E2B2B',
	 					}}>余额
	 					</Text>
	 					</View>
	 					</View>

	 					<View style={[style.info_viewstyle,
	 						{	backgroundColor:'#eac735',}]}>

	 						<Text style={{
	 							fontSize:15,
	 							alignSelf:'center',
	 							marginTop:10,
	 						}}>0张
	 						</Text>	

	 						<View style={{
	 							flexDirection:'row',
	 							alignSelf:'center',
	 						}}>
	 						<Image style={{
	 							height:25,
	 							width:25,
	 							borderRadius:12.5,
	 						}}
	 						source={require('../img/mine/dingdan@2x.png')}/> 
	 						<Text style={{
	 							fontSize:18,
	 							alignSelf:'center',
	 							color:'#2E2B2B',
	 						}}>代金券</Text>
	 						</View>
	 						</View>


	 						</View>);


	}




}

	 const style=StyleSheet.create({
	 	

	 	info_viewstyle:{
	 		height:80,
	 		width:100,
	 		borderRadius:8,


	 	},





	 });


