import React, { Component } from 'react';
import {View, Text, StyleSheet, StatusBar,Dimensions, Platform, PixelRatio,
	ListView,Image, TouchableOpacity, ScrollView, RefreshControl} from 'react-native';
import Swiper from 'react-native-swiper';

export default class Homemenu extends Component{
	render(){
	return (<Swiper  
				showsButtons={false}
				height={180}
				width={scw}
				
				dotColor='#E5EAE6'
				activeDotColor='#DD0617'
				
				>

				<View style={styles.menucontainer}>
				<View style={styles.menuitem}>

				<TouchableOpacity>
				<Image
				style={{
						borderWidth:1,
					borderColor:'#0090FF',
					borderRadius:3
				}} 
				 
				source={require('../img/home/menu/page1/page1@2x.png')}/>
				</TouchableOpacity>
				</View>
				<View style={styles.menuitem}>
				<TouchableOpacity>
				<Image
				style={{
						borderWidth:1,
					borderColor:'#0090FF',
					borderRadius:3
				}} 
				 source={require('../img/home/menu/page1/page2@2x.png')}/>
				</TouchableOpacity>
				</View>
				<View style={styles.menuitem}>
				<TouchableOpacity>
				<Image
				style={{
						borderWidth:1,
					borderColor:'#0090FF',
					borderRadius:3
				}} 
				 source={require('../img/home/menu/page1/page3@2x.png')}/>
				</TouchableOpacity>
				</View>
				<View style={styles.menuitem}>
				<TouchableOpacity>
				<Image
				style={{
						borderWidth:1,
					borderColor:'#0090FF',
					borderRadius:3
				}} 
				 source={require('../img/home/menu/page1/page4@2x.png')}/>
				</TouchableOpacity>
				</View>
				<View style={styles.menuitem}>
				<TouchableOpacity>
				<Image
				style={{
						borderWidth:1,
					borderColor:'#0090FF',
					borderRadius:3
				}} 
				 source={require('../img/home/menu/page1/page5@2x.png')}/>
				</TouchableOpacity>
				</View>
				<View style={styles.menuitem}>
				<TouchableOpacity>
				<Image
				style={{
						borderWidth:1,
					borderColor:'#0090FF',
					borderRadius:3
				}} 
				 source={require('../img/home/menu/page1/page6@2x.png')}/>
				</TouchableOpacity>
				</View>
				<View style={styles.menuitem}>
				<TouchableOpacity>
				<Image
				style={{
						borderWidth:1,
					borderColor:'#0090FF',
					borderRadius:3
				}} 
				 source={require('../img/home/menu/page1/page7@2x.png')}/>
				</TouchableOpacity>
				</View>
				<View style={styles.menuitem}>
				<TouchableOpacity>
				<Image
				style={{
						borderWidth:1,
					borderColor:'#0090FF',
					borderRadius:3
				}} 
				 source={require('../img/home/menu/page1/page8@2x.png')}/>
				</TouchableOpacity>
				</View>
				
				</View>

				<View style={styles.menucontainer}>
				<View style={styles.menuitem}>
				<TouchableOpacity>
				<Image
				style={{
						borderWidth:1,
					borderColor:'#0090FF',
					borderRadius:3
				}} 
				 source={require('../img/home/menu/page2/page1@2x.png')}/>
				</TouchableOpacity>
				</View>
				<View style={styles.menuitem}>
				<TouchableOpacity>
				<Image
				style={{
						borderWidth:1,
					borderColor:'#0090FF',
					borderRadius:3
				}} 
				 source={require('../img/home/menu/page2/page2@2x.png')}/>
				</TouchableOpacity>
				</View>
				<View style={styles.menuitem}>
				<TouchableOpacity>
				<Image
				style={{
						borderWidth:1,
					borderColor:'#0090FF',
					borderRadius:3
				}} 
				 source={require('../img/home/menu/page2/page3@2x.png')}/>
				</TouchableOpacity>
				</View>
				<View style={styles.menuitem}>
				<TouchableOpacity>
				<Image
				style={{
						borderWidth:1,
					borderColor:'#0090FF',
					borderRadius:3
				}} 
				 source={require('../img/home/menu/page2/page4@2x.png')}/>
				</TouchableOpacity>
				</View>
				<View style={styles.menuitem}>
				<TouchableOpacity>
				<Image
				style={{
						borderWidth:1,
					borderColor:'#0090FF',
					borderRadius:3
				}} 
				 source={require('../img/home/menu/page2/page5@2x.png')}/>
				</TouchableOpacity>
				</View>
				<View style={styles.menuitem}>
				<TouchableOpacity>
				<Image
				style={{
						borderWidth:1,
					borderColor:'#0090FF',
					borderRadius:3
				}} 
				 source={require('../img/home/menu/page2/page6@2x.png')}/>
				</TouchableOpacity>
				</View>
				<View style={styles.menuitem}>
				<TouchableOpacity>
				<Image
				style={{
						borderWidth:1,
					borderColor:'#0090FF',
					borderRadius:3
				}} 
				 source={require('../img/home/menu/page2/page7@2x.png')}/>
				</TouchableOpacity>
				</View>
				<View style={styles.menuitem}>
				<TouchableOpacity>
				<Image
				style={{
						borderWidth:1,
					borderColor:'#0090FF',
					borderRadius:3
				}} 
				 source={require('../img/home/menu/page2/page8@2x.png')}/>
				</TouchableOpacity>
				</View>
				
				</View>

				</Swiper>);
}}

let scw=Dimensions.get('window').width;
	const styles=StyleSheet.create(
	{
		
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
			backgroundColor:'#2e2b2b',
			alignItems:'center',
			justifyContent:'center',
			

		}




	})