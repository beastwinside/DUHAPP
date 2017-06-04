import React, { Component } from 'react';
import {View, Text, StyleSheet, StatusBar, ListView,Dimensions,
	Image, TouchableOpacity, ScrollView, RefreshControl} from 'react-native';
	import ScrollableTabView, {ScrollableTabBar } from 'react-native-scrollable-tab-view';
	import { Actions } from 'react-native-router-flux';
	import AllOrder from './Allorder';
	import Shopshangjia from '../widget/Shopshangjia';
	import Shopdiancan from '../widget/Shopdiancan';




	export default class Shop extends Component{




		//重写back按钮
		static renderBackButton = () => {
			return (
				<View >
				<TouchableOpacity onPress={Actions.pop}>
				<Image  style={{height:20,width:30,}}
				source={require('../img/back.png')}/>
				</TouchableOpacity>
				<Text style={{color:'white',}}>返回</Text>
				</View>
				);
		}

		static renderTitle =()=>{
			const goToShops = () => Actions.Shopdiancan({num:1});

			return(
				<View style={styles.headercontainer} >
				
				<View style={styles.headertextcontainer}>

				<TouchableOpacity>
				<Text 
				onPress={goToShops}
				style={styles.headertext}> 拼单</Text>
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
				<Text style={styles.headerfooter}>新用户立减5元,银行卡首单最高减少...</Text>
				<View style={styles.headerright}>
				<TouchableOpacity>
				<Text style={{fontSize:30,color:'black',textAlign:'center'}}>☆</Text>
				<Text style={{fontSize:12,color:'black',textAlign:'center',}}>收藏</Text>
				</TouchableOpacity>
				</View>
				</View>
				
				<View style={{height:sch-140,}}>
				<ScrollableTabView 

				tabBarPosition='overlayTop'
				tabBarUnderlineStyle={{backgroundColor: '#2b2e2e'}}
				tabBarBackgroundColor='#2b2e2e'
				tabBarActiveTextColor='#FEFEFE'
				tabBarInactiveTextColor='#9D9D9D'
				tabBarTextStyle={{fontSize: 18}}
				locked={true}
				initialPage={0}
				>
				<Shopdiancan tabLabel="点菜" shopinfo={shopinfo} />

				<Text tabLabel="评价"
				style={{
					marginTop:50,
					fontSize:49,
					textAlign:'center',
					color:'white',
					height:900,
					backgroundColor:'#2b2e2e',

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
			backgroundColor:'#B92323',
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
			backgroundColor:'#FF8304',
			color:'#0B0B0B',
		},
		header2:{
			height:60,
			backgroundColor:'#FF7201',
		},

		header2img:{
			height:60,
			width:60,
			position:'absolute',
			
			
			borderRadius:30,
		},

		headershopname:{
			position:'absolute',
			top:0,
			left:65,
			fontSize:25,
			color:'#030202',
			fontWeight:'bold',

		},
		headershopstate:{
			position:'absolute',
			top:30,
			left:65,
			fontSize:11,
			color:'#030202',

		},
		headerright:{
			position:'absolute',
			top:0,
			right:10,
			width:40,
			height:60,
			borderLeftWidth:1,
			borderColor:'white',
			
		},
		headerfooter:{
			position:'absolute',
			bottom:0,
			left:65,
			color:'#FFFFFF',
			fontSize:9,


		},




	});


	