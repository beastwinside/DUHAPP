import React, { Component } from 'react';
import {View, Text, StyleSheet, StatusBar,Dimensions, Platform, PixelRatio,
	ListView,Image, TouchableOpacity, ScrollView, RefreshControl} from 'react-native';


	export default class HomeQualityArea extends Component{
		render(){
			return (
				<View style={styles.qcontainer}>
				<Text style={styles.headertext}>
				—品质专区—</Text>
				<View style={styles.imagecontainer}>
				<View style={styles.iamgeitem} >
				<TouchableOpacity>
				<Image style={styles.cc} source={require('../img/home/quality/kfc.png')}/>
				</TouchableOpacity>
				<Text style={styles.ptxt}>肯德基</Text>
				</View>
				<View style={styles.iamgeitem} >
				<TouchableOpacity>
				<Image style={styles.cc} source={require('../img/home/quality/mdl.png')}/>
				</TouchableOpacity>
				<Text style={styles.ptxt}>麦当劳</Text>
				</View>
				<View style={styles.iamgeitem} >
				<TouchableOpacity>
				<Image style={styles.cc} source={require('../img/home/quality/bsk.png')}/>
				</TouchableOpacity>
				<Text style={styles.ptxt}>必胜客</Text>
				</View>



				</View>
				</View>

				);
		}}

		let scw=Dimensions.get('window').width;

		const styles=StyleSheet.create(
		{
			qcontainer:{
				
				height:140,
				width:scw,
				backgroundColor:'white',
			},

			headertext:{
				width:scw,
				fontSize:18,
				textAlign:'center',
				color:'#222020',
				backgroundColor:'white',
				fontWeight:'bold',
			},

			imagecontainer:{
				width:scw,
				height:130,
				backgroundColor:'white',
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
				borderWidth:2,
				borderColor:'white',
			},

			ptxt:{
				textAlign:'center',
				color:'black',
				fontSize:16,

			}
		})

