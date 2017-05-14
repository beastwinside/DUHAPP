import React, { Component } from 'react';
import {View, Text, StyleSheet, StatusBar,Dimensions, Platform, PixelRatio,
	ListView,Image, TouchableOpacity, ScrollView, RefreshControl} from 'react-native';
	import Swiper from 'react-native-swiper';

	export default class HomeDiscountArea extends Component{
		render(){
			return(
				<View style={styles.h_d_a_container}>
				<Text style={styles.hdtext}>Discount</Text>
				<View style={styles.leftview}>

				<TouchableOpacity>
				<Image style={{
					height:210,
					width:scw*0.38,
					marginLeft:10,
				}}
				
				source={require('../img/home/discountarea/left.png')}/>
				</TouchableOpacity>
				</View>
				<View style={styles.rightview}>
				<TouchableOpacity>
				<Image style={{
					width:scw*0.58*0.35,
					height:100,
					marginTop:40,
				}} source={require('../img/home/discountarea/r1.png')}/>
				</TouchableOpacity>
				<TouchableOpacity>
				<Image style={{
					width:scw*0.58*0.35,
					height:100,
					marginTop:40,
				}} source={require('../img/home/discountarea/r2.png')}/>
				</TouchableOpacity>
				<TouchableOpacity>
				<Image style={{
					width:scw*0.58*0.35,
					height:100,
					marginTop:15,
				}} source={require('../img/home/discountarea/r3.png')}/>
				</TouchableOpacity>
				<TouchableOpacity>
				<Image style={{
					width:scw*0.58*0.35,
					height:100,
					marginTop:15,
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
			height:315,
			backgroundColor:'#2e2b2b',


		},
		hdtext:{
			color:'#282525',
			fontSize:35,
			textAlign:'center',
			opacity:0.85,
			backgroundColor:'#EC114F'
		},

		leftview:{
			width:scw*42,
			
			height:300,
			justifyContent:'center',


		},

		rightview:{
			width:scw*0.58,
			
			height:300,
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