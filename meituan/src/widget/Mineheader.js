import React, { Component } from 'react';
import {View, Text, StyleSheet, StatusBar,Dimensions, Platform, PixelRatio,
	ListView,Image, TouchableOpacity, ScrollView, RefreshControl} from 'react-native';
import Swiper from 'react-native-swiper';

export default class Mineheader extends Component{
	render(){
		return(<View style={{
	 				height:160,
	 				backgroundColor:'#009b85',
	 			}}>

	 			<TouchableOpacity activeOpacity={0.6} >
	 			<Image style={{
	 				height:90,
	 				width:90,
	 				borderRadius:45,
	 				marginTop:20,
	 				alignSelf:'center',
	 			}}
	 			source={require('../img/mine/touxiang@2x.png')} 
	 			/>
	 			</TouchableOpacity>


	 			<Image style={{
	 				height:30,
	 				width:30,
	 				borderRadius:15,
	 				marginTop:20,
	 				position:'absolute',
	 				top:0,
	 				right:15,
	 			}}
	 			source={require('../img/mine/topright@2x.png')} 
	 			/>

	 			<Text style={{
	 				alignSelf:'center',
	 				fontSize:20,
	 				color:'#252424',

	 			}}>
	 			NGs49753293>
	 			</Text>
	 			</View>);


	}




}