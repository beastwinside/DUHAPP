import React, { Component } from 'react';
import {View, Text, StyleSheet, StatusBar,Dimensions, Platform, PixelRatio,
	ListView,Image, TouchableOpacity, ScrollView, RefreshControl} from 'react-native';


	export default class Shopshangjia extends Component{
	
		render(){
			return(
				<ScrollView style={{
					marginTop:60,
				}}>
				
				<Text style={{color:'white',fontSize:25,marginBottom:4,}}>13588xxx210</Text>
				<Text style={{color:'white',fontSize:25,marginBottom:4,}}>浙江杭州临安环城北路（D幢）</Text>
				<Text style={{color:'white',fontSize:25,marginBottom:4,}}>配送时间：00：00-03：30，17：00-23：59</Text>
				<Text style={{color:'white',fontSize:25,marginBottom:4,}}>配送服务</Text>
				<Text style={{color:'white',fontSize:25,marginBottom:4,}}>{this.props.shopinfo.shopname}</Text>
				<Text style={{color:'white',fontSize:25,marginBottom:4,}}>满30减少2</Text>
				<Text style={{color:'white',fontSize:25,marginBottom:4,}}>新用户立刻减5元</Text>	
				<Text style={{color:'white',fontSize:25,marginBottom:4,}}>该商家支持在线支付</Text>
				<Text style={{color:'white',fontSize:25,marginBottom:4,}}>查看食品安全档案</Text>
				<Text style={{color:'white',fontSize:25,marginBottom:4,}}>举报商家</Text>
					

				</ScrollView>	
				);


		}

	}





