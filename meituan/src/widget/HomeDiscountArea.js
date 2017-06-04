import React, { Component } from 'react';
import {View, Text, StyleSheet, StatusBar,Dimensions, Platform, PixelRatio,
	ListView,Image, TouchableOpacity, ScrollView, RefreshControl} from 'react-native';
	import Swiper from 'react-native-swiper';

	export default class HomeDiscountArea extends Component{
		render(){
			return(
				<View style={styles.h_d_a_container}>
				<Text style={styles.hdtext}>—优惠专区—</Text>
				<View style={styles.leftview}>

				<TouchableOpacity>
				<Image style={{
					height:210,
					width:scw*0.38,
					marginLeft:10,
						borderWidth:2,
					borderColor:'white',
				}}
				
				source={require('../img/home/discountarea/left.png')}/>
				</TouchableOpacity>
				</View>
				<View style={styles.rightview}>
				<TouchableOpacity>
				<Image style={{
					width:scw*0.58*0.35,
					height:80,
					marginTop:0,
						borderWidth:2,
					borderColor:'white',
				}} source={require('../img/home/discountarea/r1.png')}/>
				</TouchableOpacity>
				<TouchableOpacity>
				<Image style={{
					width:scw*0.58*0.35,
					height:80,
					marginTop:0,
					borderWidth:2,
					borderColor:'white',
				}} source={require('../img/home/discountarea/r2.png')}/>
				</TouchableOpacity>
				<TouchableOpacity>
				<Image style={{
					width:scw*0.58*0.35,
					height:80,
					marginTop:15,
						borderWidth:2,
					borderColor:'white',
				}} source={require('../img/home/discountarea/r3.png')}/>
				</TouchableOpacity>
				<TouchableOpacity>
				<Image style={{
					width:scw*0.58*0.35,
					height:80,
					marginTop:15,
						borderWidth:2,
					borderColor:'white',
				}} source={require('../img/home/discountarea/r4.png')}/>
				</TouchableOpacity>
				</View>


				</View>
				);
		}



	}

	var scw=Dimensions.get('window').width;
	const styles=StyleSheet.create(
	{
		h_d_a_container:{
			height:250,
			backgroundColor:'#2e2b2b',


		},
		hdtext:{
			color:'#282525',
			fontSize:25,
			textAlign:'center',
			
			backgroundColor:'#F1F4D7',
			fontWeight:'bold'
		},

		leftview:{
			width:scw*42,
			backgroundColor:'#F1F4D7',
			height:220,
			justifyContent:'center',


		},

		rightview:{
			marginTop:10,
			width:scw*0.58,
			backgroundColor:'#F1F4D7',
			height:220,
			position:'absolute',
			right:0,
			top:47,
			zIndex:3,
			justifyContent:'space-around',
			alignItems:'center',
			flexWrap:'wrap',
			flexDirection:'row',

		},



	})