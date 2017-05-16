import React, { Component } from 'react';
import {View, Text, StyleSheet, StatusBar,Dimensions, Platform, PixelRatio,
	ListView,Image, TouchableOpacity, ScrollView, RefreshControl} from 'react-native';

export default class HomeListHeader extends Component{
	render(){
		return(
			<View style={styles.container}>
			<Text style={styles.text1}>
		    附近美食
			</Text>
			
			</View>


			);

	}
}

let scw=Dimensions.get('window').width;
const styles=StyleSheet.create(
	{
		container:{
			marginTop:10,
			backgroundColor:'#EAEAEA',
			height:30,
			width:scw,
		},

		text1:{
			fontSize:25,
			textAlign:'center',
			color:'#DBD1D1',
			backgroundColor:'#546474',
		
			fontWeight:'bold',

		},
		
	})
