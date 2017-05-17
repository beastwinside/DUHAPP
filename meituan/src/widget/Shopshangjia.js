import React, { Component } from 'react';
import {View, Text, StyleSheet, StatusBar,Dimensions, Platform, PixelRatio,
	ListView,Image, TouchableOpacity, ScrollView, RefreshControl} from 'react-native';


	export default class Shopshangjia extends Component{
	
		render(){
			return(
				<ScrollView style={{
					marginTop:50,
					backgroundColor:'#FCFBD5',
				}}>
				
				<TouchableOpacity><Text style={{marginLeft:15,marginRight:15,color:'#FF0081',fontSize:18,marginBottom:4,borderBottomWidth:1,}}>联系方式:{this.props.shopinfo.phone}</Text></TouchableOpacity>
				<TouchableOpacity><Text style={{marginLeft:15,marginRight:15,color:'#1C1818',fontSize:18,marginBottom:4,borderBottomWidth:1,}}>浙江杭州临安环城北路（D幢）</Text></TouchableOpacity>
				<TouchableOpacity><Text style={{marginLeft:15,marginRight:15,color:'#1C1818',fontSize:18,marginBottom:4,borderBottomWidth:1,}}>配送时间：00：00-03：30，17：00-23：59</Text></TouchableOpacity>
				<TouchableOpacity><Text style={{marginLeft:15,marginRight:15,color:'#1C1818',fontSize:18,marginBottom:4,borderBottomWidth:1,}}>配送服务</Text></TouchableOpacity>
				<TouchableOpacity><Text style={{marginLeft:15,marginRight:15,color:'#8A0A5D',fontSize:18,marginBottom:4,borderBottomWidth:1,}}>店铺名称：{this.props.shopinfo.shopname}</Text></TouchableOpacity>
				<TouchableOpacity><Text style={{marginLeft:15,marginRight:15,color:'#0A80F4',fontSize:18,marginBottom:4,borderBottomWidth:1,}}>{this.props.shopinfo.jian}</Text></TouchableOpacity>
				<TouchableOpacity><Text style={{marginLeft:15,marginRight:15,color:'#F72A2A',fontSize:18,marginBottom:4,borderBottomWidth:1,}}>{this.props.shopinfo.firstcustom}</Text></TouchableOpacity>	
				<TouchableOpacity><Text style={{marginLeft:15,marginRight:15,color:'#1C1818',fontSize:18,marginBottom:4,borderBottomWidth:1,}}>该商家支持在线支付</Text></TouchableOpacity>
				<TouchableOpacity><Text style={{marginLeft:15,marginRight:15,color:'#1C1818',fontSize:18,marginBottom:4,borderBottomWidth:1,}}>查看食品安全档案</Text></TouchableOpacity>
				<TouchableOpacity><Text style={{color:'#3FCB75',fontSize:25,marginBottom:4,borderBottomWidth:1,textAlign:'center'}}>举报商家</Text></TouchableOpacity>
					

				</ScrollView>	
				);

		}

	}





