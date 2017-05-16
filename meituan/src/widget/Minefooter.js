import React, { Component } from 'react';
import {View, Text, StyleSheet, StatusBar,Dimensions, Platform, PixelRatio,
	ListView,Image, TouchableOpacity, ScrollView, RefreshControl} from 'react-native';
import Swiper from 'react-native-swiper';

export default class Minefooter extends Component{
	render(){
		return(
	 			<View style={{
	 				borderBottomWidth:3,
	 				
	 				height:60,
	 				backgroundColor:'#2b2e2e',
	 			}}>
	 			<Text style={{
	 				alignSelf:'center',
	 				color:'#FCFCFC',
	 				fontSize:25,
	 			}}>
	 			客服·电话：1010977
	 			</Text></View>
	 			);


	}

}