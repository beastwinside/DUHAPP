import React, { Component } from 'react';
import {View, Text, StyleSheet, StatusBar, ListView,
	Image, TouchableOpacity, ScrollView, RefreshControl} from 'react-native';
	import { Actions } from 'react-native-router-flux';


	export default class Shop extends Component{

		static renderTitle =()=>{
			return(
				<View style={styles.headercontainer}>
				<Text style={styles.headertext}></Text>
				</View>	



				);

		}

		render(){
			let shopname=this.props.shopname;
			return(
				<View style={{height:300,backgroundColor:'green'}}>
				<Text style={{color:'black',fontSize:80,}}>{shopname}</Text>
				</View>
				);








		}
	}

	const styles=StyleSheet.create({
		headercontainer:{

		
			

		},

		headertext:{
			fontSize:30,
			textAlign:'center',


		},





	});


	