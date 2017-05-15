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
						ordername:'香菇滑稽饭',
						ordernum:'1',
						orderprice:'10',
					},
					{
						shopname:'老夫妻',
						orderstatus:'订单完成',
						shopimageurl:require('../img/order/laofuqi@2x.png'),
						ordername:'黄焖鸡米饭',
						ordernum:'1',
						orderprice:'10',
					},{
						shopname:'大夫妻',
						orderstatus:'订单完成',
						shopimageurl:require('../img/order/dafuqi@2x.png'),
						ordername:'蛋炒饭',
						ordernum:'1',
						orderprice:'10',
					},{
						shopname:'中夫妻',
						orderstatus:'订单取消',
						shopimageurl:require('../img/order/zhongfuqi@2x.png'),
						ordername:'热狗套餐',
						ordernum:'1',
						orderprice:'12',
					},
					{
						shopname:'巨夫妻',
						orderstatus:'订单完成',
						shopimageurl:require('../img/order/jufuqi@2x.png'),
						ordername:'汉堡',
						ordernum:'3',
						orderprice:'10',
					},
					{
						shopname:'少夫妻',
						orderstatus:'订单完成',
						shopimageurl:require('../img/order/shaofuqi@2x.png'),
						ordername:'童子 鸡',
						ordernum:'2',
						orderprice:'11',
					},
					{
						shopname:'多夫妻',
						orderstatus:'订单完成',
						shopimageurl:require('../img/order/duofuqi@2x.png'),
						ordername:'米线',
						ordernum:'1',
						orderprice:'10',
					},
					{
						shopname:'小小夫妻',
						orderstatus:'订单完成',
						shopimageurl:require('../img/order/xiaoxiaofuqi@2x.png'),
						ordername:'馒头',
						ordernum:'15',
						orderprice:'1',
					},
					])
			};



		}


		render() {
			return (
				
				<View style={{
					marginTop:52,
				}}>
				
				<ListView 

				dataSource={this.state.dataSource}
				renderRow={(rowData)=>
					<View style={{
						height:150,
						backgroundColor:'#212121',
						marginBottom:10,
					}}>
					<View style={{
						flex:0.8,
						backgroundColor:'#d4442a',
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
						color:'black',
						fontSize:20,
						marginTop:10,
						marginLeft:10,
					}}
					>{rowData.shopname}</Text>

					<Text
					style={{
						color:'black',
						fontSize:15,
						marginTop:10,
						position:'absolute',
						right:5,

					}}
					>{rowData.orderstatus}</Text>


					</View>


					<View style={{
						flex:1,
						backgroundColor:'#212121',
					
						
						
					}}>
					<TouchableOpacity activeOpacity={0.6}>
					<Text
					style={{
						color:'#F6F3F3',
						fontSize:18,
						marginTop:25,
						marginLeft:60,
					}}
					>{rowData.ordername}</Text>

					<View	style={{
						
						position:'absolute',
						right:0,
						flexDirection:'column',
						
					}}>

					<Text
					style={{

						color:'#FFE2E2',
						fontSize:10,
						textAlign:'right',
						marginTop:15,
						marginRight:15,
					}}
					>{'x'+rowData.ordernum}</Text>
					<Text
					style={{
						
						color:'#EFDFDF',
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
						backgroundColor:'#212121',
					}}>
					<View	style={{
						marginTop:7,
						position:'absolute',
						right:10,
						borderColor:'#d4442a',
						borderWidth:2,
						height:30,
						width:80,

						
					}}>
					<TouchableOpacity activeOpacity={0.6}>
					<Text style={{
						fontSize:17,
						color:'white',
						textAlign:'center',
					}}>再来一单</Text>
					</TouchableOpacity>
					</View>
					</View>

					</View>

				}

				/>


				


				</View>



				)
		}
	}