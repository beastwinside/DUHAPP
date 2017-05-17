import React, { Component } from 'react';
import {View, Text, StyleSheet, StatusBar,Dimensions, Platform, PixelRatio,
	ListView,Image, TouchableOpacity, ScrollView, RefreshControl} from 'react-native';
	import Fooddata from '../data/food.json';


	var imgurl=new Array();
	imgurl.push(
		require('../img/diancan1/food1.png'),
		require('../img/diancan1/food2.png'),
		require('../img/diancan1/food3.png'),
		require('../img/diancan1/food4.png'),
		require('../img/diancan1/food5.png'),
		require('../img/diancan1/food6.png'),
		require('../img/diancan1/food7.png'),
		require('../img/diancan1/food8.png'),
		require('../img/diancan1/food9.png'),
		require('../img/diancan1/food10.png'),
		require('../img/diancan1/food11.png'),
		require('../img/diancan1/food12.png'),
		require('../img/diancan1/food13.png'),
		require('../img/diancan1/food14.png'),
		require('../img/diancan1/food15.png'),
		require('../img/diancan1/food16.png'),
		require('../img/diancan1/food17.png'),
		require('../img/diancan1/food18.png'),
		);








	export default class Shopdiancan extends Component{

		constructor(props){
			super(props);
			const ds=new ListView.DataSource({
				rowHasChanged:(r1,r2)=>r1!=r2});
			this.state={
				dataSource:ds.cloneWithRows(Fooddata.fooddata)
			};
		}

		_renderRow(rowData: string,sectionID: number, rowID: number)
		{
				var imgSource=imgurl[rowID]; 
			return(

				<View>
				<Image source={imgSource} />
				<Text>{rowData.foodname}</Text>
				<Text>{rowData.foodprice}</Text>
				<Text>{rowData.foodxiaoliang}</Text>
				</View>


				);


		}



		render(){

			return(
				<View style={{
					marginTop:52,
					backgroundColor:'#FCFBD5',
				}}>

				<ListView 
				dataSource={this.state.dataSource}
				renderRow={this._renderRow}
				/>
				</View>	
				);

		}

	}





