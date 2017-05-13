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
					}}>
					<Image 
					style={{
						height:40,
						width:40,
						borderRadius:25,
					}}
					source={rowData.shopimageurl}/>


					</View>
					<View style={{
						flex:1,
						backgroundColor:'#EB8E16',
					}}>


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