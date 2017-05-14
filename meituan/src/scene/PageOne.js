import React, { Component } from 'react';
import {View, Text, StyleSheet, StatusBar,Dimensions, Platform, PixelRatio,
	ListView,Image, TouchableOpacity, ScrollView, RefreshControl} from 'react-native';
	import { Actions } from 'react-native-router-flux';
	import ScrollableTabView, {ScrollableTabBar } from 'react-native-scrollable-tab-view';
	import Swiper from 'react-native-swiper';
	import Homemenu from '../widget/Homemenu';
	import Homeheader from '../widget/Homeheader';
	import HomeDiscountArea from '../widget/HomeDiscountArea';
	import HomeScrollArea from  '../widget/HomeScrollArea';

	export default class PageOne extends Component {

		constructor(props) {
			super(props);
			
			this.state = {
				headLoading:false,
			};
		}



		_combineData() {
			this.setState({ headLoading: true })

			setTimeout(() => {
				this.setState({ headLoading: false })
			}, 2500);
		}

		




		render() {

			let scw=Dimensions.get('window').width;
			let sch=Dimensions.get('window').height;
			return (
				<ScrollView 
				style={{
					backgroundColor:'#2e2b2b',
				}}
				refreshControl={
					<RefreshControl
					refreshing={this.state.headLoading}
					onRefresh={() => this._combineData()}
					tintColor="#F90C7A"
					title="Loading..."
					colors={['#ff0000','#00ff00','#0000ff']}
					processBackgroundColor="#ffff00"

					/>
				}
				>
				<Homeheader/>
				<Homemenu/>
				<HomeDiscountArea/>
				<HomeScrollArea/>
				<View style={{
					height:800,
					backgroundColor:'#2e2b2b',
				}}></View>
				</ScrollView>				
				

				);

		}

	}

	let scw=Dimensions.get('window').width;
	const styles=StyleSheet.create(
	{
		

	})