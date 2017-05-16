import React, { Component } from 'react';
import {
	View, Text, StyleSheet, StatusBar, ListView,
	Image, TouchableOpacity, ScrollView, RefreshControl} from 'react-native';
import Mineheader from '../widget/Mineheader';
import Mineinfo from '../widget/Mineinfo';
import Minefooter from '../widget/Minefooter';

	var THUMB_URLS1 = [  
	require('../img/mine/dx@2x.png'),  
	require('../img/mine/dz@2x.png'),
	require('../img/mine/fk@2x.png'),
	require('../img/mine/hy@2x.png'),
	require('../img/mine/pj@2x.png'),];

	var THUMB_URLS2 = [  
	require('../img/mine/qb@2x.png'),  
	require('../img/mine/rz@2x.png'),
	require('../img/mine/sc@2x.png'),];

	var THUMB_URLS3 = [  
	require('../img/mine/yj@2x.png'),  
	require('../img/mine/jl@2x.png'),
	require('../img/mine/hy@2x.png'),];



	

	class Mine extends Component {
	 	//初始化模拟数据
	 	constructor(props) {
	 		super(props);
	 		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
	 		this.state = {
	 			dataSource1: ds.cloneWithRows([
	 				' 我的评价',' 我的好友',' 我的收藏',' 我的地址',
	 				]),
	 			dataSource2: ds.cloneWithRows([
	 				' 我的钱包',' 邀请有奖',' 商家入驻',
	 				]),
	 			dataSource3: ds.cloneWithRows([
	 				' 答谢记录',' 帮助与反馈',' 客服中心',
	 				]),
	 			headLoading:false
	 		};
	 	}


	 	_combineData() {
	 		this.setState({ headLoading: true })

	 		setTimeout(() => {
	 			this.setState({ headLoading: false })
	 		}, 2500);
	 	}




	 	

	 	

	 	renderRow1(rowData: string,sectionID: number, rowID: number){
	 		var imgSource=THUMB_URLS1[rowID]; 
	 		return(
	 			<TouchableOpacity activeOpacity={0.6}>
	 			<View style={style.listview_viewstyle}>

	 			<View style={{
	 				flex:0.9,
	 			}}>
	 			<Image style={style.listview_imagestyle}
	 			source={imgSource} 
	 			/>
	 			</View>
	 			<Text
	 			style={style.listview_textstyle}>{rowData}</Text>

	 			</View>


	 			</TouchableOpacity>

	 			);
	 	}

	 	renderRow2(rowData: string,sectionID: number, rowID: number){
	 		var imgSource=THUMB_URLS2[rowID]; 
	 		return(
	 			<TouchableOpacity activeOpacity={0.6}>
	 			<View style={style.listview_viewstyle}>

	 			<View style={{
	 				flex:0.9,
	 			}}>
	 			<Image style={style.listview_imagestyle}
	 			source={imgSource} 
	 			/>
	 			</View>

	 			<Text
	 			style={style.listview_textstyle}>{rowData}</Text>
	 			</View>
	 			</TouchableOpacity>

	 			);
	 	}

	 	renderRow3(rowData: string,sectionID: number, rowID: number){
	 		var imgSource=THUMB_URLS3[rowID]; 
	 		return(
	 			<TouchableOpacity activeOpacity={0.6}>
	 			<View style={style.listview_viewstyle}>
	 			<View style={{
	 				flex:0.9,
	 			}}>
	 			<Image style={style.listview_imagestyle}
	 			source={imgSource} 
	 			/>
	 			</View>
	 			<Text
	 			style={style.listview_textstyle}>{rowData}</Text>
	 			<Text>></Text>
	 			</View>
	 			</TouchableOpacity>

	 			);
	 	}







	 	renderspaceview(){
	 		return(
	 			<View style={{
	 				height:3,
	 				backgroundColor:'#797575',
	 			}}>
	 			<Text></Text>
	 			</View>
	 			);
	 	}




	 	render() {
	 		const ds1=this.state.dataSource1;
	 		const ds2=this.state.dataSource2;
	 		const ds3=this.state.dataSource3;
	 		const ds4=this.state.dataSource4;

	 		return (
	 			<ScrollView 
	 			
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

	 			style={{ 
	 				backgroundColor:'#2b2e2e',
	 				flex:1,
	 			}}>

	 			<Mineheader/>
	 			<Mineinfo/>		
	 			<ListView
	 			style={{ 
	 				borderTopWidth:0.5,
	 			}}
	 			dataSource={ds1}
	 			renderRow={this.renderRow1}
	 			/>
	 			{this.renderspaceview()}
	 			<ListView
	 			style={{ 
	 				borderTopWidth:0.5,
	 			}}
	 			dataSource={ds2}
	 			renderRow={this.renderRow2}
	 			/>
	 			{this.renderspaceview()}
	 			<ListView
	 			style={{ 
	 				borderTopWidth:0.5,
	 			}}
	 			dataSource={ds3}
	 			renderRow={this.renderRow3}
	 			/>
	 			{this.renderspaceview()}
	 			<Minefooter/>	
	 			{this.renderspaceview()}
	 			<View style={{
	 				height:40,
	 			}}>
	 			<Text style={{
	 				alignSelf:'center',
	 				color:'#FFFFFF'}}>
	 				服务时间:9:00-23:00
	 				</Text>
	 				</View>

	 				<View style={{
	 					height:50,
	 					backgroundColor:'black',
	 				}}>
	 				</View>
	 				</ScrollView>
	 				);
	 	}
	 }


	 const style=StyleSheet.create({
	 	listview_textstyle:{
	 		paddingTop:10,
	 		height:50,
	 		flex:10,
	 		marginLeft:10,
	 		fontSize:20,
	 		color:'#FFFFFF',
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
	 		borderBottomWidth:1,
	 		borderColor:'#FFFFFF',
	 		backgroundColor:'#2b2e2e',

	 	},

	 	info_viewstyle:{
	 		height:80,
	 		width:100,
	 		borderRadius:8,


	 	},





	 });




	 export default Mine;