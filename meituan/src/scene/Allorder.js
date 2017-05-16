import React, { Component } from 'react';
import {
	View, Text, StyleSheet, StatusBar, ListView,
	Image, TouchableOpacity, ScrollView, RefreshControl} from 'react-native';
	import { Actions } from 'react-native-router-flux';
	import Orderdata from '../data/orderdata.json';


	var imgurl=new Array();
	imgurl.push(
		require('../img/order/xiaofuqi@2x.png'),
		require('../img/order/laofuqi@2x.png'),
		require('../img/order/dafuqi@2x.png'),
		require('../img/order/zhongfuqi@2x.png'),
		require('../img/order/jufuqi@2x.png'),
		require('../img/order/shaofuqi@2x.png'),
		require('../img/order/duofuqi@2x.png'),
		require('../img/order/xiaoxiaofuqi@2x.png')
		);

	export default class Allorder extends Component {
		constructor(props){
			super(props);
			const ds=new ListView.DataSource({
				rowHasChanged:(r1,r2)=>r1!=r2});
			this.state={
				dataSource:ds.cloneWithRows(Orderdata.orderinfo)
			};



		}


		_renderRow(rowData: string,sectionID: number, rowID: number)
		{	var imgSource=imgurl[rowID]; 
			return(
				<View style={{
					height:150,
					backgroundColor:'#212121',
					borderBottomWidth:1.5,
					borderColor:'white',
				}}>
				<View style={{
					flex:0.8,
					backgroundColor:'#2b2e2e',
					flexDirection:'row',
				}}>

				<TouchableOpacity activeOpacity={0.6}>
				<Image 
				style={{
					marginLeft:10,
					marginTop:5,
					height:40,
					width:40,
					borderRadius:25,
				}}
				source={imgSource}/>

				</TouchableOpacity>
				<Text
				style={{
					color:'#04E5FC',
					fontSize:20,
					marginTop:10,
					marginLeft:10,
				}}
				>{rowData.shopname}</Text>

				<Text
				style={{
					color:'#F0A000',
					fontSize:15,
					marginTop:10,
					position:'absolute',
					right:5,

				}}
				>{rowData.orderstatus}</Text>


				</View>


				<View style={{
					flex:1,
					backgroundColor:'#2b2e2e',



				}}>
				<TouchableOpacity activeOpacity={0.6}>
				<Text
				style={{
					color:'#FFFFFF',
					fontSize:18,
					marginTop:25,
					marginLeft:60,
					fontWeight:'bold',
				}}
				>{rowData.ordername}</Text>

				<View	style={{

					position:'absolute',
					right:0,
					flexDirection:'column',

				}}>

				<Text
				style={{

					color:'#FFFFFF',
					fontSize:14,
					textAlign:'right',
					marginTop:15,
					marginRight:15,
				}}
				>X{rowData.ordernum}</Text>
				<Text
				style={{

					color:'#FFFFFF',
					fontSize:12,
					marginRight:5,

				}}
				>{'共'+rowData.ordernum+'件商品 '+'实付'
				+rowData.ordernum*rowData.orderprice+'元'}
				</Text>


				</View>
				</TouchableOpacity>
				</View>




				<View style={{
					flex:0.8,
					backgroundColor:'#2b2e2e',
				}}>
				<View	style={{
					marginTop:7,
					position:'absolute',
					right:10,
					borderColor:'#d4442a',
					borderWidth:1,
					height:30,
					width:80,
					backgroundColor:'#d4442a',


				}}>
				<TouchableOpacity activeOpacity={0.6}>
				<Text 	
				style={{
					fontSize:17,
					color:'#FFFFFF',
					textAlign:'center',
				}}>再来一单</Text>
				</TouchableOpacity>
				</View>
				</View>

				</View>
				);
		}


		render() {
			return (
				
				<View style={{
					marginTop:52,
				}}>
				
				<ListView 

				dataSource={this.state.dataSource}
				renderRow={this._renderRow}

				/>


				


				</View>



				)
		}
	}

	const styles=StyleSheet.create({

		





		
	});