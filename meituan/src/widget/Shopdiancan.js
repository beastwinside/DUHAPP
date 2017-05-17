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

				<View style={styles.listitmcontainer}>
				<Image source={imgSource} style={styles.listitemimage}/>
				<Text style={styles.listfoodname}>{rowData.foodname}</Text>
				<Text style={styles.listfoodxiaoliang}>月销量{rowData.foodxiaoliang}份</Text>
				<Text style={styles.listfoodprice}>￥{rowData.foodprice}</Text>
				<View style={styles.addbut}>
				<TouchableOpacity>
				<Text style={{color:'black',fontSize:20,textAlign:'center',fontWeight:'bold'}}>+</Text>
				</TouchableOpacity>
				</View>
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

	let scw=Dimensions.get('window').width;
	const styles=StyleSheet.create({

		listitmcontainer:{
			height:150,
			width:scw,
			backgroundColor:'#2b2e2e',
			marginBottom:2,

		},

		listitemimage:{
			height:100,
			width:140,
			marginTop:10,
			marginLeft:10,
			borderWidth:3,
			borderColor:'white',
		},
		listfoodname:{
			position:'absolute',
			left:150,
			fontSize:30,
			color:'#0ADFE6',
			top:10,
		},

		listfoodxiaoliang:{
			
			position:'absolute',
			left:150,
			fontSize:15,
			color:'white',
			top:60,
		},
		listfoodprice:{
			position:'absolute',
			left:150,
			fontSize:20,
			color:'#F23636',
			top:90,

		},
		addbut:{
			height:30,
			width:30,
			position:'absolute',
			bottom:20,
			right:20,
			backgroundColor:'#FB8B04',
			borderRadius:15,


		}


	});



