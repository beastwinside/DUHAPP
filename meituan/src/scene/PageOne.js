import React, { Component } from 'react';
import {View, Text, StyleSheet, StatusBar,Dimensions, Platform, PixelRatio,
	ListView,Image, TouchableOpacity, ScrollView, RefreshControl} from 'react-native';
	import { Actions } from 'react-native-router-flux';
	import ScrollableTabView, {ScrollableTabBar } from 'react-native-scrollable-tab-view';
	import Swiper from 'react-native-swiper';

	export default class PageOne extends Component {

		renderhead(){
			

			return(<Swiper  
				showsButtons={false}
				height={150}
				width={scw}
				autoplay={true}
				dotColor='#E5EAE6'
				activeDotColor='#DD0617'
				autoplayTimeout={5}
				>

				<View style={{
					borderRadius:scw,
				}}>
				<View style={
					styles.headersearchbarcontainer
				}>
				<TouchableOpacity>
				<Text style={styles.headersearchbar_text}>
				浙江农林大学
				</Text>
				</TouchableOpacity>
				</View>
				<Image source={require('../img/home/m1.png')}

				style={{
					width:scw,
					height:150,
					borderBottomLeftRadius:scw*0.07,
					borderBottomRightRadius:scw*0.07,
				}}/>
				
				</View>


				<View style={{
					borderBottomLeftRadius:scw,
				}}>
				<View style={
					styles.headersearchbarcontainer
				}>
				<TouchableOpacity>
				<Text style={styles.headersearchbar_text}>
				浙江农林大学
				</Text>
				</TouchableOpacity>
				</View>
				<Image source={require('../img/home/m2.png')}

				style={{
					width:scw,
					height:150,
					borderBottomLeftRadius:scw*0.07,
					borderBottomRightRadius:scw*0.07,
				}}/>
				</View>


				<View style={{
					borderRadius:scw,
				}}>
				<View style={
					styles.headersearchbarcontainer
				}>
				<TouchableOpacity>
				<Text style={styles.headersearchbar_text}>
				浙江农林大学
				</Text>
				</TouchableOpacity>
				</View>
				<Image source={require('../img/home/m3.png')}
				style={{
					width:scw,
					height:150,
					borderBottomLeftRadius:scw*0.07,
					borderBottomRightRadius:scw*0.07,
				}}/>
				</View>
				</Swiper>);


		}

		rendermenu(){
			return(
				<Swiper  
				showsButtons={false}
				height={180}
				width={scw}
				autoplay={true}
				dotColor='#E5EAE6'
				activeDotColor='#DD0617'
				autoplayTimeout={5}
				>

				<View style={styles.menucontainer}>
				<View style={styles.menuitem}>
				<Image source={require('../img/home/menu/page1/page1@2x.png')}/>
				</View>
				<View style={styles.menuitem}>
				<Image source={require('../img/home/menu/page1/page2@2x.png')}/>
				</View>
				<View style={styles.menuitem}>
				<Image source={require('../img/home/menu/page1/page3@2x.png')}/>
				</View>
				<View style={styles.menuitem}>
				<Image source={require('../img/home/menu/page1/page4@2x.png')}/>
				</View>
				<View style={styles.menuitem}>
				<Image source={require('../img/home/menu/page1/page5@2x.png')}/>
				</View>
				<View style={styles.menuitem}>
				<Image source={require('../img/home/menu/page1/page6@2x.png')}/>
				</View>
				<View style={styles.menuitem}>
				<Image source={require('../img/home/menu/page1/page7@2x.png')}/>
				</View>
				<View style={styles.menuitem}>
				<Image source={require('../img/home/menu/page1/page8@2x.png')}/>
				</View>
				
				</View>

				<View style={styles.menucontainer}>
				<View style={styles.menuitem}>
				<Image source={require('../img/home/menu/page2/page1@2x.png')}/>
				</View>
				<View style={styles.menuitem}>
				<Image source={require('../img/home/menu/page2/page2@2x.png')}/>
				</View>
				<View style={styles.menuitem}>
				<Image source={require('../img/home/menu/page2/page3@2x.png')}/>
				</View>
				<View style={styles.menuitem}>
				<Image source={require('../img/home/menu/page2/page4@2x.png')}/>
				</View>
				<View style={styles.menuitem}>
				<Image source={require('../img/home/menu/page2/page5@2x.png')}/>
				</View>
				<View style={styles.menuitem}>
				<Image source={require('../img/home/menu/page2/page6@2x.png')}/>
				</View>
				<View style={styles.menuitem}>
				<Image source={require('../img/home/menu/page2/page7@2x.png')}/>
				</View>
				<View style={styles.menuitem}>
				<Image source={require('../img/home/menu/page2/page8@2x.png')}/>
				</View>
				
				</View>

				</Swiper>);


		}




		render() {

			let scw=Dimensions.get('window').width;
			let sch=Dimensions.get('window').height;
			return (
				<ScrollView>
				{this.renderhead()}
				{this.rendermenu()}

				</ScrollView>				
				

				);

		}

	}

	var scw=Dimensions.get('window').width;
	const styles=StyleSheet.create(
	{
		headersearchbar_text:{
			color:'white',
			opacity:0.95,
			fontSize:20,
			marginLeft:15,

		},

		headersearchbarcontainer:{
			height:30,
			width:200,
			marginTop:15,
			marginLeft:15,
			backgroundColor:'#262525',
			opacity:0.8,
			borderRadius:15,
			position:'absolute',
			zIndex:3,


		},

		menucontainer:{
			justifyContent:'space-between',
			alignItems:'center',
			flexWrap:'wrap',
			flexDirection:'row',
			
			height:170,

		},


		menuitem:{
			height:80,
			width:scw/4,
			borderWidth:1,
		

		}




	})