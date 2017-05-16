import React, { Component } from 'react';
import {View, Text, StyleSheet, StatusBar, ListView,
	Image, TouchableOpacity, ScrollView, RefreshControl} from 'react-native';
	import { Actions } from 'react-native-router-flux';


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
				<View style={styles.header2}></View>
				<Image style={styles.header2img} source={img}/>
				<Text style={styles.headershopname}>{shopinfo.shopname}</Text>
				<Text style={styles.headershopstate}>正常营业，欢迎光临★★★</Text>
				<View style={styles.headerright}>
				<TouchableOpacity>
				<Text style={{fontSize:40,color:'white',textAlign:'center'}}>☆</Text>
				<Text style={{fontSize:15,color:'white',textAlign:'center',}}>收藏</Text>
				</TouchableOpacity>
				</View>
				</View>



				);
		}

	}


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
			top:75,
			borderRadius:35,
		},

		headershopname:{
			position:'absolute',
			top:75,
			left:100,
			fontSize:25,
			color:'#2E2E2E',
			fontWeight:'bold',

		},
		headershopstate:{
			position:'absolute',
			top:110,
			left:100,
			fontSize:15,
			color:'#181818',

		},
		headerright:{
			position:'absolute',
			top:45,
			right:10,
			width:40,
			height:80,
			borderLeftWidth:1,
			borderColor:'white',
			
		},




	});


	