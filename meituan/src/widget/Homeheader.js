import React, { Component } from 'react';
import {View, Text, StyleSheet, StatusBar,Dimensions, Platform, PixelRatio,
	ListView,Image, TouchableOpacity, ScrollView, RefreshControl} from 'react-native';
import Swiper from 'react-native-swiper';

export default class Homeheader extends Component{
	render(){
	return(<Swiper  
				showsButtons={false}
				height={150}
				width={scw}
				autoplay={true}
				dotColor='#E5EAE6'
				activeDotColor='#DD0617'
				autoplayTimeout={5}

				>

				<View style={{
					borderRadius:scw,
					

				}}>
				<View style={
					styles.headersearchbarcontainer
				}>
				<TouchableOpacity>
				<Text style={styles.headersearchbar_text}>
				浙江农林大学
				</Text>
				</TouchableOpacity>
				</View>
				<Image source={require('../img/home/m1.png')}

				style={{
					width:scw,
					height:150,
					borderBottomLeftRadius:scw*0.07,
					borderBottomRightRadius:scw*0.07,
				}}/>
				
				</View>


				<View style={{
					borderBottomLeftRadius:scw,
				}}>
				<View style={
					styles.headersearchbarcontainer
				}>
				<TouchableOpacity>
				<Text style={styles.headersearchbar_text}>
				浙江农林大学
				</Text>
				</TouchableOpacity>
				</View>
				<Image source={require('../img/home/m2.png')}

				style={{
					width:scw,
					height:150,
					borderBottomLeftRadius:scw*0.07,
					borderBottomRightRadius:scw*0.07,
				}}/>
				</View>


				<View style={{
					borderRadius:scw,
				}}>
				<View style={
					styles.headersearchbarcontainer
				}>
				<TouchableOpacity>
				<Text style={styles.headersearchbar_text}>
				浙江农林大学
				</Text>
				</TouchableOpacity>
				</View>
				<Image source={require('../img/home/m3.png')}
				style={{
					width:scw,
					height:150,
					borderBottomLeftRadius:scw*0.07,
					borderBottomRightRadius:scw*0.07,
				}}/>
				</View>
				</Swiper>);
				}


}

let scw=Dimensions.get('window').width;
const styles=StyleSheet.create(
	{
		headersearchbar_text:{
			color:'white',
			opacity:0.95,
			fontSize:20,
			marginLeft:15,

		},

		headersearchbarcontainer:{
			height:30,
			width:200,
			marginTop:15,
			marginLeft:15,
			backgroundColor:'#262525',
			opacity:0.8,
			borderRadius:15,
			position:'absolute',
			zIndex:3,


		},
	})
