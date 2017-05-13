import React, { Component } from 'react';
import {View, Text, StyleSheet, StatusBar,Dimensions, Platform, PixelRatio,
	ListView,Image, TouchableOpacity, ScrollView, RefreshControl} from 'react-native';
	import { Actions } from 'react-native-router-flux';
	import ScrollableTabView, {ScrollableTabBar } from 'react-native-scrollable-tab-view';
	import Swiper from 'react-native-swiper';

	export default class PageOne extends Component {
		render() {
			return (

				<Swiper  showsButtons={true}>
				<View style={{
					backgroundColor:'red',
					height:500,

				}}>
				<Text style={{
					color:'white',
					fontSize:40,
					textAlign:'center',
				}}>PPPPPPPPPage one</Text>
				</View>
				<View style={{
					backgroundColor:'blue',
					height:500,
				}}>
				<Text style={{
					color:'white',
					fontSize:40,
					textAlign:'center',
				}}>PPPPPPPPPage two</Text>
				</View>
				<View style={{
					backgroundColor:'green',
					height:500,
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


