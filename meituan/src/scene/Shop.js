import React, { Component } from 'react';
import {View, Text, StyleSheet, StatusBar, ListView,Dimensions,
	Image, TouchableOpacity, ScrollView, RefreshControl} from 'react-native';
	import ScrollableTabView, {ScrollableTabBar } from 'react-native-scrollable-tab-view';
	import { Actions } from 'react-native-router-flux';
	import AllOrder from './Allorder';
	import Shopshangjia from '../widget/Shopshangjia';


	export default class Shop extends Component{
		//重写back按钮
		static renderBackButton = () => {
			return (
				<View >
				<TouchableOpacity onPress={Actions.pop}>
				<Image  style={{height:30,width:50,}}
				source={require('../img/back.png')}/>
				</TouchableOpacity>
				</View>
				);
		}

		static renderTitle =()=>{
			return(
				<View style={styles.headercontainer} >
				
				<View style={styles.headertextcontainer}>
				<TouchableOpacity>
				<Text style={styles.headertext}> 拼单</Text>
				</TouchableOpacity>
				</View>

				</View>	
				);

		}


		renderhead(){
			return(
				<View style={styles.headercontainer}>
				</View>

				);
		}



		render(){
			let shopinfo=this.props.shopinfo;
			let img=this.props.img;
			return(
				<View>
				{this.renderhead()}
				<View style={styles.header2}>
				<Image style={styles.header2img} source={img}/>
				<Text style={styles.headershopname}>{shopinfo.shopname}</Text>
				<Text style={styles.headershopstate}>正常营业，欢迎光临★★★</Text>
				<Text style={styles.headerfooter}>新用户立减5元，首次使用银行卡支付最高...</Text>
				<View style={styles.headerright}>
				<TouchableOpacity>
				<Text style={{fontSize:40,color:'white',textAlign:'center'}}>☆</Text>
				<Text style={{fontSize:15,color:'white',textAlign:'center',}}>收藏</Text>
				</TouchableOpacity>
				</View>
				</View>
				
				<View style={{height:sch-160,backgroundColor:'red',}}>
				<ScrollableTabView 

				tabBarPosition='overlayTop'
				tabBarUnderlineStyle={{backgroundColor: 'transparent'}}
				tabBarBackgroundColor='#FFFFFF'
				tabBarActiveTextColor='#050505'
				tabBarInactiveTextColor='#4B4A4A'
				tabBarTextStyle={{fontSize: 18}}
				locked={false}
				initialPage={0}
				style={{
					borderTopWidth:5,
					backgroundColor:"#454444",
					borderColor:'#009b85',
				
				}} >
				<AllOrder tabLabel="全部订单" />
				<Text tabLabel="评价"
				style={{
					marginTop:100,
					fontSize:49,
					textAlign:'center',
					color:'white',
				}}>
				暂无评价
				</Text>	
				<Shopshangjia tabLabel="商家"  shopinfo={shopinfo}/>

			


				</ScrollableTabView>

				</View>

		




				</View>



				);
		}

	}

	let scw=Dimensions.get('window').width;
	let sch=Dimensions.get('window').height;
	const styles=StyleSheet.create({
		headercontainer:{
			backgroundColor:'#4bbe97',
			height:60,
			justifyContent:'center',
			

		},

		headertextcontainer:{
			position:'absolute',
			right:10,
			borderWidth:1,
			borderColor:'white',
			
		},

		headertext:{
			fontSize:20,
			textAlign:'right',
			color:'white',
		},
		header2:{
			height:100,
			backgroundColor:'#4bbe97',
		},

		header2img:{
			height:70,
			width:70,
			position:'absolute',
			left:15,
			top:5,
			borderRadius:35,
		},

		headershopname:{
			position:'absolute',
			top:18,
			left:100,
			fontSize:25,
			color:'#2E2E2E',
			fontWeight:'bold',

		},
		headershopstate:{
			position:'absolute',
			top:55,
			left:100,
			fontSize:15,
			color:'#181818',

		},
		headerright:{
			position:'absolute',
			top:15,
			right:10,
			width:40,
			height:80,
			borderLeftWidth:1,
			borderColor:'white',
			
		},
		headerfooter:{
			position:'absolute',
			bottom:0,
			left:15,
			color:'#FFFFFF',


		},




	});


	