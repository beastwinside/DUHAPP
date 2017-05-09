import React, { Component } from 'react';
import {
	View, Text, StyleSheet, StatusBar, ListView,
	Image, TouchableOpacity, ScrollView, RefreshControl} from 'react-native';


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



	

	class PageThree extends Component {
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
        }, 2000);
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
	 				backgroundColor:'#F4FAF5',
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
	 			<ScrollView 
	 			refreshControl={
                        <RefreshControl
                            refreshing={this.state.headLoading}
                            onRefresh={() => this._combineData()}
                            tintColor='gray'
                        />
                    }

	 			style={{ 
	 				backgroundColor:'#EDEFE8',
	 				flex:1,
	 			}}>

	 			{this.renderhead()}
	 			{this.renderinfo()}
	 			

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


	 			

	 			<View style={{
	 				height:80,
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
	 		color:'#242222',
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