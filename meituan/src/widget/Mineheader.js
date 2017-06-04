import React, { Component } from 'react';
import {View, Text, StyleSheet, StatusBar,Dimensions, Platform, PixelRatio,
	ListView,Image, TouchableOpacity, ScrollView, RefreshControl} from 'react-native';
import Swiper from 'react-native-swiper';
import { Actions } from 'react-native-router-flux';


let test=1;
export default class Mineheader extends Component{

		constructor(props) {
	 		super(props);
	 		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
	 		this.state = {
	 			id:'未登录',
	 			
	 		};
	 	}





	render(){
		const login=()=>{
			if(this.state.id=='未登录')
			{Actions.Login()}
		else ;

		}




		return(<View style={{
	 				height:160,
	 				backgroundColor:'#009b85',
	 			}}>

	 			<TouchableOpacity 
	 				onPress={login}
	 			activeOpacity={0.6} >
	 			<Image
	 		
	 			 style={{
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

	 			<Text 
	 			onPress={login}
	 			style={{
	 				alignSelf:'center',
	 				fontSize:20,
	 				color:'#252424',

	 			}}>
	 			{this.state.id}
	 			</Text>
	 			</View>);


	}




}