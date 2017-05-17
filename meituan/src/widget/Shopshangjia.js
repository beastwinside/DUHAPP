import React, { Component } from 'react';
import {View, Text, StyleSheet, StatusBar,Dimensions, Platform, PixelRatio,
	ListView,Image, TouchableOpacity, ScrollView, RefreshControl} from 'react-native';


	export default class Shopshangjia extends Component{
	
		render(){
			return(
				<ScrollView style={{
					marginTop:50,
					backgroundColor:'#2b2e2e',
				}}>
				
				<TouchableOpacity><Text style={{marginLeft:15,marginRight:15,color:'#FF0081',fontSize:18,marginBottom:4,borderBottomWidth:1,borderColor:"white",}}>联系方式:{this.props.shopinfo.phone}</Text></TouchableOpacity>
				<TouchableOpacity><Text style={{marginLeft:15,marginRight:15,color:'#DCD2D2',fontSize:18,marginBottom:4,borderBottomWidth:1,borderColor:"white",}}>浙江杭州临安环城北路（D幢）</Text></TouchableOpacity>
				<TouchableOpacity><Text style={{marginLeft:15,marginRight:15,color:'#DCD2D2',fontSize:18,marginBottom:4,borderBottomWidth:1,borderColor:"white",}}>配送时间：00：00-03：30，17：00-23：59</Text></TouchableOpacity>
				<TouchableOpacity><Text style={{marginLeft:15,marginRight:15,color:'#DCD2D2',fontSize:18,marginBottom:4,borderBottomWidth:1,borderColor:"white",}}>配送服务</Text></TouchableOpacity>
				<TouchableOpacity><Text style={{marginLeft:15,marginRight:15,color:'#8A0A5D',fontSize:18,marginBottom:4,borderBottomWidth:1,borderColor:"white",}}>店铺名称：{this.props.shopinfo.shopname}</Text></TouchableOpacity>
				<TouchableOpacity><Text style={{marginLeft:15,marginRight:15,color:'#0A80F4',fontSize:18,marginBottom:4,borderBottomWidth:1,borderColor:"white",}}>{this.props.shopinfo.jian}</Text></TouchableOpacity>
				<TouchableOpacity><Text style={{marginLeft:15,marginRight:15,color:'#F72A2A',fontSize:18,marginBottom:4,borderBottomWidth:1,borderColor:"white",}}>{this.props.shopinfo.firstcustom}</Text></TouchableOpacity>	
				<TouchableOpacity><Text style={{marginLeft:15,marginRight:15,color:'#DCD2D2',fontSize:18,marginBottom:4,borderBottomWidth:1,borderColor:"white",}}>该商家支持在线支付</Text></TouchableOpacity>
				<TouchableOpacity><Text style={{marginLeft:15,marginRight:15,color:'#DCD2D2',fontSize:18,marginBottom:4,borderBottomWidth:1,borderColor:"white",}}></Text></TouchableOpacity>
				<TouchableOpacity><Text style={{color:'#3FCB75',fontSize:25,marginBottom:4,borderBottomWidth:1,textAlign:'center'}}>举报商家</Text></TouchableOpacity>
					

				</ScrollView>	
				);

		}

	}





