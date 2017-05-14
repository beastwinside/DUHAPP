import React, { Component } from 'react';
import {View, Text, StyleSheet, StatusBar,Dimensions, Platform, PixelRatio,
	ListView,Image, TouchableOpacity, ScrollView, RefreshControl} from 'react-native';

export default class HomeListHeader extends Component{
	render(){
		return(
			<View style={styles.container}>
			<Text style={styles.text1}>
		    附近商家
			</Text>
			<View style={{
				width:scw,
				height:30,
				backgroundColor:'#DBE7E8',
				flexDirection:'row',
				justifyContent:'space-around',
			}}>
			<TouchableOpacity>
			<Text style={{
				width:scw/5,
				color:'#000000',
				fontSize:15,
				textAlign:'center',
				marginTop:4,

			}}>综合排序</Text>
			</TouchableOpacity>
			<TouchableOpacity>
			<Text style={{
				width:scw/5,
				color:'#555252',
				fontSize:15,
				textAlign:'center',
				marginTop:4,

			}}>销量最高</Text>
			</TouchableOpacity>
			<TouchableOpacity>
			<Text style={{
				width:scw/5,
				color:'#555252',
				fontSize:15,
				textAlign:'center',
				marginTop:4,

			}}>距离最近</Text>
			</TouchableOpacity>
			<TouchableOpacity>
			<Text style={{
				width:scw/5,
				color:'#555252',
				fontSize:15,
				textAlign:'center',
				marginTop:4,

			}}>筛选</Text>
			</TouchableOpacity>

			</View>
			</View>


			);

	}
}

let scw=Dimensions.get('window').width;
const styles=StyleSheet.create(
	{
		container:{
			marginTop:10,
			backgroundColor:'#EAEAEA',
			height:62,
			width:scw,
		},

		text1:{
			fontSize:25,
			textAlign:'center',
			color:'#DBD1D1',
			backgroundColor:'#546474',
			borderBottomWidth:1,
			borderColor:'#0D0C0C',

		},
		
	})
