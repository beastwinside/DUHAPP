import React, { Component } from 'react';
import {View, Text, StyleSheet, StatusBar,Dimensions, Platform, PixelRatio,
	ListView,Image, TouchableOpacity, ScrollView, RefreshControl} from 'react-native';
	import Fooddata from '../data/food.json';
		import { Actions } from 'react-native-router-flux';


	var imgurl=new Array();
	imgurl.push(
		require('../img/diancan1/food1.png'),
		require('../img/diancan1/food2.png'),
		require('../img/diancan1/food3.png'),
		require('../img/diancan1/food4.png'),
		require('../img/diancan1/food5.png'),
		require('../img/diancan1/food6.png'),
		require('../img/diancan1/food7.png'),
		require('../img/diancan1/food8.png'),
		require('../img/diancan1/food9.png'),
		require('../img/diancan1/food10.png'),
		require('../img/diancan1/food11.png'),
		require('../img/diancan1/food12.png'),
		require('../img/diancan1/food13.png'),
		require('../img/diancan1/food14.png'),
		require('../img/diancan1/food15.png'),
		require('../img/diancan1/food16.png'),
		require('../img/diancan1/food17.png'),
		require('../img/diancan1/food18.png'),
		);








	export default class Shopdiancan extends Component{

		constructor(props){
			super(props);
			const ds=new ListView.DataSource({
				rowHasChanged:(r1,r2)=>r1!=r2});
			this.state={
				dataSource:ds.cloneWithRows(Fooddata.fooddata),
				shopcart_price:0,
				num:0,
				foodinfo:{name1:'',},
				

			};

		
			this._renderRow= this._renderRow.bind(this);
				


		}

	

		_renderRow(rowData: string,sectionID: number, rowID: number)
		{	
			var imgSource=imgurl[rowID]; 
		const addprice = () =>{
			if(this.state.num!=0)
			{
				if(this.state.foodinfo.name1==rowData.foodname){
			this.setState({
			shopcart_price:this.state.shopcart_price+rowData.foodprice,
			foodinfo:{name1:rowData.foodname},
			num:this.state.num+1,
		});
			}
			else ;
			}

			else 
				this.setState({
			shopcart_price:this.state.shopcart_price+rowData.foodprice,
			foodinfo:{name1:rowData.foodname},
			num:this.state.num+1,
		});
		
		


	};
		const subtractprice = () =>{
			var x=this.state.shopcart_price-rowData.foodprice;
			if(this.state.num>0&&this.state.foodinfo.name1==rowData.foodname)
			{
				this.setState({
				shopcart_price:x,
				num:this.state.num-1,
			});
			if(this.state.num==1)
			{	
				this.setState({
				foodinfo:{name1:''},
			});
				}

	}
		else ;


		}


			return(

				
				<View 
				
				style={styles.listitmcontainer}>
				<Image
					
				 source={imgSource} style={styles.listitemimage}/>
				<Text style={styles.listfoodname}>{rowData.foodname}</Text>
				<Text style={styles.listfoodxiaoliang}>月销量{rowData.foodxiaoliang}份</Text>
				<Text style={styles.listfoodprice}>￥{rowData.foodprice}</Text>

				<View
				style={styles.subtractbut}  >
				<TouchableOpacity 
				onPress={subtractprice}>
				<Text 
				style={{color:'black',fontSize:20,textAlign:'center',fontWeight:'bold'}}>-</Text>
				</TouchableOpacity>
				</View>






				<View
				style={styles.addbut}  >
				<TouchableOpacity 
				onPress={addprice}>
				<Text 
				style={{color:'black',fontSize:20,textAlign:'center',fontWeight:'bold'}}>+</Text>
				</TouchableOpacity>
				</View>


				</View>
				


				);


		}



		render(){
			let shopinfo=this.props.shopinfo;
			 const goToPay= () => {
			 	if(this.state.num!=0)
			 	Actions.Pay({
			 		shopname:shopinfo.shopname,
			 		foodname:this.state.foodinfo.name1,
			 		zongjiaa:this.state.shopcart_price,
			 		numa:this.state.num,

			 	});
			 }


			return(
				<View style={{
					marginTop:52,
					backgroundColor:'#FCFBD5',

				}}>

				<View style={{
					height:36,
					width:scw,
					position:'absolute',
					zIndex:6,
					bottom:0,
					backgroundColor:'#F70A57',
					opacity:0.9,

				}}>
				<Text
				onPress={this.add}
				 style={{
					color:'white',
					fontSize:14,
					paddingLeft:20,

				}}>购物车：总计<Text style={{color:'#E4F002',fontSize:16,}}>
				{this.state.shopcart_price}</Text>元,
				{this.state.foodinfo.name1}*
				<Text style={{color:'#E4F002',fontSize:16,}}>{this.state.num}
				</Text>份
				</Text>

				
				
				<View style={{
					position:'absolute',
					right:0,
					height:48,
					width:70,
					backgroundColor:'#11B7E4',
					
				}}>
				<TouchableOpacity>
				<Text 
				onPress={goToPay}
				style={{
					color:'#1A1616',
					fontSize:18,
					textAlign:'center',
				}}>
				去结算
				</Text>
				</TouchableOpacity>
				</View>


				


				</View>

				<ListView 
				dataSource={this.state.dataSource}
				renderRow={this._renderRow}
				/>


				
				</View>	
				);

		}





	}

	let scw=Dimensions.get('window').width;

	const styles=StyleSheet.create({

		listitmcontainer:{
			height:90,
			width:scw,
			backgroundColor:'#2b2e2e',
			marginBottom:2,

		},

		listitemimage:{
			height:60,
			width:74,
			marginTop:10,
			marginLeft:10,
			borderWidth:3,
			borderColor:'white',
		},
		listfoodname:{
			position:'absolute',
			left:100,
			fontSize:20,
			color:'#0ADFE6',
			top:10,
		},

		listfoodxiaoliang:{
			
			position:'absolute',
			left:100,
			fontSize:10,
			color:'white',
			top:40,
		},
		listfoodprice:{
			position:'absolute',
			left:100,
			fontSize:13,
			color:'#FB8B04',
			top:60,

		},
		addbut:{
			height:25,
			width:40,
			position:'absolute',
			bottom:40,
			right:10,
			backgroundColor:'#FB8B04',
			borderRadius:5,
		},
		subtractbut:{
			height:25,
			width:40,
			position:'absolute',
			bottom:40,
			right:80,
			backgroundColor:'#FB8B04',
			borderRadius:5,
		},

		

	});



