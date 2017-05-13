import React, { Component } from 'react';
import {View, Text, StyleSheet, StatusBar,Dimensions, Platform, PixelRatio,
	ListView,Image, TouchableOpacity, ScrollView, RefreshControl} from 'react-native';
	import { Actions } from 'react-native-router-flux';
	import ScrollableTabView, {ScrollableTabBar } from 'react-native-scrollable-tab-view';
	import Swiper from 'react-native-swiper';

	export default class PageOne extends Component {

		renderhead(){
			let scw=Dimensions.get('window').width;

			return(<Swiper  
				showsButtons={false}
				height={150}
				width={scw}
				autoplay={true}
				dotColor='#E5EAE6'
				activeDotColor='#ED500C'
				autoplayTimeout={5}
			

				>
				<View style={{
					backgroundColor:'red',
				}}>
				<Image source={require('../img/home/m1.png')}

				style={{
					width:scw,
					height:150,
				}}/>
				
				</View>
				<View style={{
					backgroundColor:'blue',
					
				}}>
				<Image source={require('../img/home/m2.png')}

				style={{
					width:scw,
					height:150,
				}}/>
				</View>
				<View style={{
					backgroundColor:'green',
				}}>
				<Image source={require('../img/home/m3.png')}

				style={{
					width:scw,
					height:150,
				}}/>
				</View>
				</Swiper>);


		}




		render() {

			let scw=Dimensions.get('window').width;
			let sch=Dimensions.get('window').height;
			return (
				<ScrollView>
				{this.renderhead()}
				</ScrollView>				
				

				);

		}

	}


