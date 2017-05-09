import React, { Component } from 'react';
import {
	View, Text, StyleSheet, StatusBar, ListView,
	Image, TouchableOpacity, ScrollView, RefreshControl} from 'react-native';
	

	class PageThree extends Component {
	 	//初始化模拟数据
	 	constructor(props) {
	 		super(props);
	 		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
	 		this.state = {
	 			dataSource1: ds.cloneWithRows([
	 				'我的评价','我的好友','我的收藏','我的地址',
	 				]),
	 			dataSource2: ds.cloneWithRows([
	 				'我的钱包',
	 				]),
	 			dataSource3: ds.cloneWithRows([
	 				'邀请有奖','商家入驻',
	 				]),
	 			dataSource4: ds.cloneWithRows([
	 				'答谢记录','帮助与反馈','客服中心'
	 				]),
	 		};
	 	}


	 	renderhead(){
	 		return(
	 			<View style={{
	 				height:160,
	 				backgroundColor:'#72DCBD',
	 			}}>

	 			<TouchableOpacity activeOpacity={0.6} >
	 			<Image style={{
	 				height:90,
	 				width:90,
	 				borderRadius:45,
	 				marginTop:20,
	 				alignSelf:'center',
	 			}}
	 			source={require('../img/mine/touxiang@2x.png')} 
	 			/>
	 			</TouchableOpacity>

	 			<Text style={{
	 				alignSelf:'center',
	 				fontSize:20,

	 			}}>
	 			NGs49753293>
	 			</Text>
	 			</View>
	 			);
	 	}

	 	renderinfo(){
	 		return(
	 			<View style={{
	 				height:120,
	 				backgroundColor:'#EAEDEC',
	 				flexDirection:'row',
	 				justifyContent:'space-around',
	 				alignItems:'center',
	 			}}>	

	 			<View style={[style.info_viewstyle,
	 				{	backgroundColor:'#32ACE9',}]}>	
	 			<Text style={{
	 				fontSize:20,
	 				


	 			}}>美团红包：   1亿张</Text>
	 			</View>

	 			<View style={[style.info_viewstyle,
	 				{backgroundColor:'#ed1b45',}]}>	
	 			<Text style={{
	 				fontSize:20,
	 				color:'#DADADA',
	 			}}>余额：
	 			1亿元</Text>
	 			</View>

	 			<View style={[style.info_viewstyle,
	 				{	backgroundColor:'#eac735',}]}>	
	 			<Text style={{
	 				fontSize:20,
	 				
	 				color:'#4C4B4B',
	 			}}>商家代金券：0张</Text>
	 			</View>


	 			</View>
	 			);

	 	}




	 	renderListview(ds){
	 		return(<ListView  
	 			style={{ 
	 				borderTopWidth:0.5,
	 			}}
	 			dataSource={ds}
	 			renderRow={(rowData) => 
	 				<TouchableOpacity activeOpacity={0.6}>
	 				<View style={style.listview_viewstyle}>

	 				<View style={{
	 					flex:0.9,
	 				}}>
	 				<Image style={style.listview_imagestyle}
	 				source={require('../img/mine/touxiang@2x.png')} 
	 				/>
	 				</View>

	 				<Text
	 				style={style.listview_textstyle}>{rowData}</Text>
	 				</View>
	 				</TouchableOpacity>
	 			}
	 			/>
	 			);


	 	}

	 	renderspaceview(){
	 		return(
	 			<View style={{
	 				height:10,
	 			}}>
	 			</View>
	 			);
	 	}




	 	render() {
	 		const ds1=this.state.dataSource1;
	 		const ds2=this.state.dataSource2;
	 		const ds3=this.state.dataSource3;
	 		const ds4=this.state.dataSource4;

	 		return (
	 			<ScrollView style={{ 
	 				backgroundColor:'#EDEFE8',
	 				flex:1,
	 			}}>
	 			
	 			


	 			{this.renderhead()}
	 			{this.renderinfo()}
	 			{this.renderListview(ds1)}
	 			{this.renderspaceview()}
	 			{this.renderListview(ds2)}
	 			{this.renderspaceview()}
	 			{this.renderListview(ds3)}
	 			{this.renderspaceview()}
	 			{this.renderListview(ds4)}
	 			
	 			</ScrollView>
	 			);
	 	}
	 }


	 const style=StyleSheet.create({
	 	listview_textstyle:{
	 		paddingTop:10,
	 		height:50,
	 		flex:10,
	 		marginLeft:5,
	 		fontSize:20,
	 	},

	 	listview_imagestyle:{
	 		marginTop:10,
	 		height:30,
	 		width:30,
	 		marginLeft:5,
	 		borderRadius:15,
	 	},

	 	listview_viewstyle:{
	 		flexDirection:'row',
	 		borderBottomWidth:0.5,
	 		backgroundColor:'#FFFBA6',
	 	},

	 	info_viewstyle:{
	 		height:80,
	 		width:120,
	 	},








	 });




	 export default PageThree;