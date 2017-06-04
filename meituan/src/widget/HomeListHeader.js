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
			
			backgroundColor:'#2e2b2b',
			height:20,
			width:scw,
		},

		text1:{
			fontSize:18,
			textAlign:'center',
			color:'#DBD1D1',
			backgroundColor:'#2e2b2b',
		
			fontWeight:'bold',

		},
		
	})
