import React, { Component } from 'react';
import {View, Text, StyleSheet, StatusBar, ListView,Dimensions,
	Image, TouchableOpacity, ScrollView, RefreshControl} from 'react-native';
	import ScrollableTabView, {ScrollableTabBar } from 'react-native-scrollable-tab-view';
	import { Actions } from 'react-native-router-flux';


   export default class Pay extends Component{

   	render(){

   		var myDate = new Date();
        var hour=myDate.getHours();
        var minute= myDate.getMinutes()+15;   
        var time=''+hour+':'+minute;    
   		
   		return(
   			<View style={styles.contaniner}>
   			<Text style={{
   				backgroundColor:'#efeff2',
   				height:30,
   				fontSize:17,
   				color:'black',
   				textAlign:'center',
   				   			}}>
   			浙江农林大学b3号杭州市临安市 > 
   			</Text>
   			<Text style={{
   				backgroundColor:'#efeff2',
   				height:30,
   				fontSize:15,
   				color:'black',
   				textAlign:'center',
   				   			}}>
   			惹不起（先生） 1586755885
   			</Text>

   			<View style={{
   				
   				paddingLeft:30,
   				borderBottomWidth:2,
   				borderColor:'#D7D7D7',
   				height:40,
   				paddingTop:10,
   			}}>
   			<TouchableOpacity>
   			<Text  style={{
   				color:'white',
   				fontSize:18,
   				
   			}}>	
   			尽快送达--------【预计{time}】
   			</Text>
   			</TouchableOpacity>
   			</View>

   			<View style={{
   				
   				paddingLeft:30,
   				borderBottomWidth:2,
   				borderColor:'#D7D7D7',
   				height:40,
   				paddingTop:10,
   			}}>
   			<TouchableOpacity>
   			<Text  style={{
   				color:'white',
   				fontSize:18,
   				
   			}}>
   			在线支付
   			</Text>
   			</TouchableOpacity>
   			</View>



   			<View style={{
   				
   				paddingLeft:30,
   				borderBottomWidth:2,
   				borderColor:'#D7D7D7',
   				height:60,
   				paddingTop:10,
   			}}>
   			<TouchableOpacity>
   			<Text  style={{
   				color:'#E3F407',
   				fontSize:25,
   				
   			}}>
   			店铺名：{this.props.shopname}
   			</Text>
   			</TouchableOpacity>
   			</View>



   			<View style={{
   				
   				paddingLeft:30,
   				borderBottomWidth:2,
   				borderColor:'#D7D7D7',
   				height:40,
   				paddingTop:10,
   			}}>
   			<TouchableOpacity>
   			<Text  style={{
   				color:'#8FEA9C',
   				fontSize:22,
   				
   			}}>
   				
   				食物名：{this.props.foodname}
   			</Text>
   			</TouchableOpacity>
   			</View>



   			<View style={{
   				
   				paddingLeft:30,
   				borderBottomWidth:2,
   				borderColor:'#D7D7D7',
   				height:40,
   				paddingTop:10,
   			}}>
   			<TouchableOpacity>
   			<Text  style={{
   				color:'#E4AFAF',
   				fontSize:18,
   				
   			}}>
   			
   				数量：{this.props.numa}
   			</Text>
   			</TouchableOpacity>
   			</View>



   			<View style={{
   				
   				paddingLeft:30,
   				borderBottomWidth:2,
   				borderColor:'#D7D7D7',
   				height:40,
   				paddingTop:10,
   			}}>
   			<TouchableOpacity>
   			<Text  style={{
   				color:'black',
   				fontSize:18,
   				
   			}}>
   			总价：{this.props.zongjiaa}
   			</Text>
   			</TouchableOpacity>
   			</View>



   			<View style={{
   				
   				paddingLeft:30,
   				borderBottomWidth:2,
   				borderColor:'#D7D7D7',
   				height:40,
   				paddingTop:10,
   			}}>
   			<TouchableOpacity>
   			<Text  style={{
   				color:'black',
   				fontSize:18,
   				
   			}}>
   			配送费：3
   			</Text>
   			</TouchableOpacity>
   			</View>




   			<View style={{
   				
   				paddingLeft:30,
   				borderBottomWidth:2,
   				borderColor:'#D7D7D7',
   				height:40,
   				paddingTop:10,
   			}}>
   			<TouchableOpacity>
   			<Text  style={{
   				color:'white',
   				fontSize:18,
   				
   			}}>
   			红包
   			</Text>
   			</TouchableOpacity>
   			</View>


   				<View style={{
   				
   				paddingLeft:30,
   				borderBottomWidth:2,
   				borderColor:'#D7D7D7',
   				height:40,
   				paddingTop:10,
   			}}>
   			<TouchableOpacity>
   			<Text  style={{
   				color:'white',
   				fontSize:18,
   				
   			}}>
   			商家代金券
   			</Text>
   			</TouchableOpacity>
   			</View>
   			





   			<View style={styles.footer}> 
   			<Text style={{
   				paddingTop:5,
   				color:'white',
   				fontSize:13,
   			}}>
   			待支付￥{this.props.zongjiaa}|优惠无
   			</Text>

   		
   			<View style={{
   				paddingTop:5,
   				position:'absolute',
   				right:0,
   				height:50,
   				width:70,
   				backgroundColor:'#408F16',
   				
   			}}>
   			<TouchableOpacity>
   			<Text style={{
   				color:'#FFFFFF',
   				textAlign:'center',
   			}}>去支付
   			</Text>
   			</TouchableOpacity></View>
   			
   			</View>
   			</View>

   			);

   	};


   }


	let scw=Dimensions.get('window').width;
	let sch=Dimensions.get('window').height;
  const styles=StyleSheet.create({

  		contaniner:{
  			height:sch,
  			width:scw,
  			backgroundColor:'#0A61AF',
  			top:55,

  		},
  		footer:{
  			height:40,
  			width:scw,
  			position:'absolute',
  			bottom:70,
  			backgroundColor:'#333232',
  			opacity:0.9,

  		},



  })