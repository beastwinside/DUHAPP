import React, { Component } from 'react';
import {
	View, Text, StyleSheet, StatusBar, ListView,
	Image, TouchableOpacity, ScrollView, RefreshControl} from 'react-native';
	import { Actions } from 'react-native-router-flux';

	export default class PageTest extends Component {
		constructor(props){
			super(props);
			const ds=new ListView.DataSource({
				rowHasChanged:(r1,r2)=>r1!=r2});
			this.state={
				dataSource:ds.cloneWithRows(
					[
					{
						shopname:'小夫妻',
						orderstatus:'订单完成',
						shopimageurl:require('../img/order/xiaofuqi@2x.png'),
						ordername:'香菇滑稽套餐+热狗',
						ordernum:'1',
						orderprice:'10',
					},
					{
						shopname:'小夫妻',
						orderstatus:'订单完成',
						shopimageurl:require('../img/order/xiaofuqi@2x.png'),
						ordername:'香菇滑稽套餐+热狗',
						ordernum:'1',
						orderprice:'10',
					},{
						shopname:'小夫妻',
						orderstatus:'订单完成',
						shopimageurl:require('../img/order/xiaofuqi@2x.png'),
						ordername:'香菇滑稽套餐+热狗',
						ordernum:'1',
						orderprice:'10',
					},{
						shopname:'小夫妻',
						orderstatus:'订单完成',
						shopimageurl:require('../img/order/xiaofuqi@2x.png'),
						ordername:'香菇滑稽套餐+热狗',
						ordernum:'1',
						orderprice:'10',
					},
					])
			};



		}


		render() {
			return (
				<View style={{
					marginTop:55,
				}}>
				
				<ListView 
			
				dataSource={this.state.dataSource}
				renderRow={(rowData)=>
					<View style={{
						height:150,
						backgroundColor:'#FFFBA6',
						marginBottom:10,
					}}>
					<View style={{
						flex:0.8,
						backgroundColor:'red',
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
					source={rowData.shopimageurl}/>
					</TouchableOpacity>
					<Text
					style={{
						color:'white',
						fontSize:20,
						marginTop:10,
						marginLeft:10,
					}}
					>{rowData.shopname}</Text>

					<Text
					style={{
						color:'white',
						fontSize:15,
						marginTop:10,
						position:'absolute',
						right:5,

					}}
					>{rowData.orderstatus}</Text>


					</View>


					<View style={{
						flex:1,
						backgroundColor:'green',
					}}>
					<TouchableOpacity activeOpacity={0.6}>
						<Text
					style={{
						color:'white',
						fontSize:15,
						marginTop:10,
						marginLeft:60,
					}}
					>{rowData.ordername}</Text>

					<View	style={{
						marginTop:10,
						position:'absolute',
						right:0,
						flexDirection:'column',
						
					}}>

					<Text
					style={{
						color:'white',
						fontSize:15,
						textAlign:'right',
						flex:1,
						marginRight:5,
					}}
					>{'x'+rowData.ordernum}</Text>
					<Text
					style={{
						color:'white',
						fontSize:15,
						flex:1,
						marginRight:5,
					}}
					>{'共'+rowData.ordernum+'件商品 '+'实付'
					+rowData.ordernum*rowData.orderprice+'元'}</Text>


					</View>
					</TouchableOpacity>
					</View>



					
					<View style={{
						flex:0.8,
					}}>
					

					</View>
					
					</View>
				}
				/>

				</View>
				)
		}
	}