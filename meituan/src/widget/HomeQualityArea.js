import React, { Component } from 'react';
import {View, Text, StyleSheet, StatusBar,Dimensions, Platform, PixelRatio,
	ListView,Image, TouchableOpacity, ScrollView, RefreshControl} from 'react-native';


	export default class HomeQualityArea extends Component{
		render(){
			return (
				<View style={styles.qcontainer}>
				<Text style={styles.headertext}>
				Quality</Text>
				<View style={styles.imagecontainer}>
				<View style={styles.iamgeitem} >
				<TouchableOpacity>
				<Image style={styles.cc} source={require('../img/home/quality/kfc.png')}/>
				</TouchableOpacity>
				<Text style={styles.ptxt}>KFC</Text>
				</View>
				<View style={styles.iamgeitem} >
				<TouchableOpacity>
				<Image style={styles.cc} source={require('../img/home/quality/mdl.png')}/>
				</TouchableOpacity>
				<Text style={styles.ptxt}>Mcdonald</Text>
				</View>
				<View style={styles.iamgeitem} >
				<TouchableOpacity>
				<Image style={styles.cc} source={require('../img/home/quality/bsk.png')}/>
				</TouchableOpacity>
				<Text style={styles.ptxt}>Pizza hu</Text>
				</View>



				</View>
				</View>

				);
		}}

		let scw=Dimensions.get('window').width;

		const styles=StyleSheet.create(
		{
			qcontainer:{
				marginTop:10,
				height:160,
				width:scw,
				backgroundColor:'#D2D1D1',
			},

			headertext:{
				width:scw,
				fontSize:25,
				textAlign:'center',
				color:'#FFFFFF',
				backgroundColor:'black',
			},

			imagecontainer:{
				width:scw,
				height:130,
				backgroundColor:'#018a9a',
				flexDirection:'row',
				justifyContent:'space-around',
				alignItems:'center',
			},

			iamgeitem:{
				width:scw/4.5,
				height:110,
				
			},

			cc:{
				
				height:scw/5,
				width:scw/4.5,
				borderRadius:scw/8.8,
			},

			ptxt:{
				textAlign:'center',
				color:'black',
				fontSize:20,

			}
		})

