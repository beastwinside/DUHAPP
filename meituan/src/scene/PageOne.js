import React, { Component } from 'react';
import {View, Text, StyleSheet, StatusBar,Dimensions, Platform, PixelRatio,
	ListView,Image, TouchableOpacity, ScrollView, RefreshControl} from 'react-native';
	import { Actions } from 'react-native-router-flux';
	import ScrollableTabView, {ScrollableTabBar } from 'react-native-scrollable-tab-view';
	import Swiper from 'react-native-swiper';

	export default class PageOne extends Component {
		render() {

			let scw=Dimensions.get('window').width;
			let sch=Dimensions.get('window').height;
			return (
				
				<Swiper  
				showsButtons={true}
				height={200}
				width={scw/2}
				autoplay={true}
				
				>
				<View style={{
					backgroundColor:'red',
					

				}}>
				<Text style={{
					color:'white',
					fontSize:40,
					textAlign:'center',
				}}>PPPPPPPPPage one</Text>
				</View>
				<View style={{
					backgroundColor:'blue',
					
				}}>
				<Text style={{
					color:'white',
					fontSize:40,
					textAlign:'center',
				}}>PPPPPPPPPage two</Text>
				</View>
				<View style={{
					backgroundColor:'green',
					
				}}>
				<Text style={{
					color:'white',
					fontSize:40,
					textAlign:'center',
				}} >PPPPPPPPPage three</Text>
				</View>
				</Swiper>
				

				);

		}

	}


