import React, { Component } from 'react';
import {View, Text, StyleSheet, StatusBar,Dimensions, Platform, PixelRatio,
	ListView,Image, TouchableOpacity, ScrollView, RefreshControl} from 'react-native';


	export default class HomeScrollArea extends Component{
		render(){
			return (
				<ScrollView style={{
					height:70,
					backgroundColor:'#56a764',
					borderTopWidth:2,
					borderColor:'white',
				}}
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				>

				<Image style={[styles.scrollitem,{marginLeft:0,}]} source={require('../img/home/s1.png')}/>
				<Image style={styles.scrollitem} source={require('../img/home/s2.png')}/>
				<Image style={styles.scrollitem} source={require('../img/home/s3.png')}/>
				<Image style={styles.scrollitem} source={require('../img/home/s2.png')}/>
				<Image style={styles.scrollitem} source={require('../img/home/s1.png')}/>
				</ScrollView>
				);
		}}

		let scw=Dimensions.get('window').width;

		const styles=StyleSheet.create(
		{
			scrollitem:{
				height:70,
				width:140,
				backgroundColor:'#1FE20E',
				marginLeft:10,



			},
		})

