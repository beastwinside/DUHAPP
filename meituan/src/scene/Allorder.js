import React, { Component } from 'react';
import {
	View, Text, StyleSheet, StatusBar, ListView,Alert,
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
		require('../img/order/xiaoxiaofuqi@2x.png'),
		require('../img/order/jufuqi@2x.png'),
		require('../img/order/shaofuqi@2x.png'),
		require('../img/order/duofuqi@2x.png'),
		require('../img/order/xiaoxiaofuqi@2x.png'),
		);



	
	let test=1;
	let temp=0;
	var obj={};
	


	export default class Allorder extends Component {
		constructor(props){
			super(props);
			const ds=new ListView.DataSource({
				rowHasChanged:(r1,r2)=>r1!=r2});
			this.state={
				dataSource:ds.cloneWithRows([]),
				headLoading:false,

			};
		}

			_combineData() {
			this.setState({ headLoading: true })

			setTimeout(() => {
				this.setState({ headLoading: false })
			}, 2500);
		}


			setsource(){
					
				if(temp==0){
		var request = new XMLHttpRequest();
		request.onreadystatechange = (e) => {
			if (request.readyState !== 4) {
				return;
			}

			if (request.status === 200) {
				{console.log('success', request.responseText);
				    obj =  JSON.parse(request.responseText); 

				   const ds=new ListView.DataSource({
				rowHasChanged:(r1,r2)=>r1!=r2});
				   this.setState({
				   	dataSource:ds.cloneWithRows(obj.orderinfo)


				   });
				   temp++;

				
			}

			} else {
				console.warn('error');
				Alert.alert('未联网','无法获取数据');
			}
		};

		request.open('GET', 'http://duhapp-1253829861.costj.myqcloud.com/orderdata.json');
		request.send();
	}
	else;
	}



	 componentWillMount()
	 {
	 	if(temp==0)
	 	{this.setsource();}
	 	else 
	 		{const ds=new ListView.DataSource({
				rowHasChanged:(r1,r2)=>r1!=r2});
	 		this.setState({
	 				dataSource:ds.cloneWithRows(obj.orderinfo),

	 		});}
	}






		_renderRow(rowData: string,sectionID: number, rowID: number)
		{	
			const goToPay= () => {

				Actions.Pay({
					shopname:rowData.shopname,
					foodname:rowData.ordername,
					zongjiaa:rowData.ordernum*rowData.orderprice,
					numa:rowData.ordernum,

				});
			}
			var imgSource=imgurl[rowID]; 
			return(
				<View style={{
					height:120,
					backgroundColor:'#FBFAE6',
					borderBottomWidth:1.5,
					borderColor:'#ADABAB',
				}}

				>
				<View style={{
					flex:0.8,
					backgroundColor:'#FBFAE6',
					flexDirection:'row',
					borderBottomWidth:1,
					borderColor:'#D1D1D1',
				}}>

				<TouchableOpacity activeOpacity={0.6}>
				<Image 
				style={{
					marginLeft:10,
					marginTop:5,
					height:32,
					width:32,
					borderRadius:25,
				}}
				source={imgSource}/>

				</TouchableOpacity>
				<Text
				style={{
					color:'#CE046A',
					fontSize:16,
					marginTop:10,
					marginLeft:10,
					fontWeight:'bolder',
				}}
				>{rowData.shopname}</Text>

				<Text
				style={{
					color:'#F7104D',
					fontSize:12,
					marginTop:10,
					position:'absolute',
					right:5,

				}}
				>{rowData.orderstatus}</Text>


				</View>


				<View style={{
					flex:1.1,
					backgroundColor:'#FBFAE6',


				}}>
				<TouchableOpacity activeOpacity={0.6}>
				<Text
				style={{
					color:'#222222',
					fontSize:13,
					marginTop:15,
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

					color:'#FC0000',
					fontSize:14,
					textAlign:'right',
					marginTop:0,
					marginRight:15,
				}}
				>X{rowData.ordernum}</Text>
				<Text
				style={{

					color:'#FC0000',
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
					backgroundColor:'#FBFAE6',
				}}>
				<View	style={{
					marginTop:3,
					position:'absolute',
					right:10,
					borderColor:'#1F1F1F',
					borderWidth:1,
					height:25,
					width:80,
					


				}}>
				<TouchableOpacity activeOpacity={0.6}>
				<Text
				onPress={goToPay}
				style={{
					fontSize:17,
					color:'#222222',
					textAlign:'center',
					marginBottom:3,
				}}>再来一单</Text>
				</TouchableOpacity>
				</View>
				</View>

				</View>
				);
		}


		render() {
			if(this.props.num>=1){
			obj.orderinfo.unshift(
				{
						"shopname":this.props.shopname,
						"orderstatus":"订单完成",
						"shopimageurl":"../img/order/xiaofuqi@2x.png",
						"ordername":this.props.foodname,
						"ordernum":this.props.num,
						"orderprice":this.props.zongjia,
					}

				);}
			return (
				
				<ScrollView
				style={{
					marginTop:52,
				}}

					refreshControl={
					<RefreshControl
					refreshing={this.state.headLoading}
					onRefresh={() => this.setsource()}
					tintColor="#F90C7A"
					title="Loading..."
					colors={['#ff0000','#00ff00','#0000ff']}
					processBackgroundColor="#ffff00"
					/>
				}
				>
				
				<ListView 

				dataSource={this.state.dataSource}
				renderRow={this._renderRow}

				/>


				


				</ScrollView>



				)
		}
	}

	const styles=StyleSheet.create({

		





		
	});