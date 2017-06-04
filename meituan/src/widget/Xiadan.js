import React,{Component} from 'react';
import {View, Text, StyleSheet, StatusBar,Dimensions, Platform, PixelRatio,
	ListView,Image, TouchableOpacity, ScrollView, RefreshControl} from 'react-native';
	import { Actions } from 'react-native-router-flux';
	import Swiper from 'react-native-swiper';
	import Xiadanheader from './Xiadanheader';


	let scw=Dimensions.get('window').width;
	class Xiadan extends Component{

		


      constructor(props) {
         super(props);
        
         this.state = {
           yinhangkastate:'',
           weixinstate:'',
           zhifubaostate:'',
           bgcolor1:'#E8BEBE',
           bgcolor2:'#E8BEBE',
           bgcolor3:'#E8BEBE',
         };
      }



		render(){


			

			const goHome= () => {
			Actions.Allorder(
				{
               shopname:this.props.shopname,
               foodname:this.props.foodname,
               num:this.props.num,
               zongjia:this.props.zongjia,
               dizhi:this.props.dizhi,
               user:'王嘉铭'
               });
};



			 const click1 = () =>{
         this.setState({
         	 yinhangkastate:'✓',
           weixinstate:'',
           zhifubaostate:'',
            bgcolor1:'#F28B04',
           bgcolor2:'#E8BEBE',
           bgcolor3:'#E8BEBE',
         
         })
 
   };

   		 const click2 = () =>{
         this.setState({
         	 yinhangkastate:'',
           weixinstate:'✓',
           zhifubaostate:'',
             bgcolor1:'#E8BEBE',
           bgcolor2:'#F28B04',
           bgcolor3:'#E8BEBE',
         
         })
 
   };

   		 const click3 = () =>{
         this.setState({
         	 yinhangkastate:'',
           weixinstate:'',
           zhifubaostate:'✓',
             bgcolor1:'#E8BEBE',
           bgcolor2:'#E8BEBE',
           bgcolor3:'#F28B04',
         
         })
 
   };

		
			return(

				<View>
				<Xiadanheader/>
				<View style={{
					backgroundColor:'#F6FFCD',
				}}>
				<Text style={{
					width:scw,
					fontSize:15,
					textAlign:'center',

				}}>
				支付剩余时间
				</Text>

				<Text style={{
					width:scw,
					fontSize:15,
					textAlign:'center',
					borderBottomWidth:3,

				}}>
				15:00
				</Text>
				</View>

				<View style={{
					backgroundColor:'#F6FFCD',
					height:60,
					width:scw,
				}}>

				<Image source={require('../img/diancan1/food1.png')}

				style={{
					width:50,
					height:50,
					position:'absolute',
					top:10,
					left:30,
					borderRadius:25,
					
				}}/>
				<Text
				style={{
					fontWeight:'bolder',
					color:'black',
					position:'absolute',
					left:80,
					top:20,
				}}>
				￥10.00
				</Text>
				<Text

				style={{
					fontWeight:'bolder',
					color:'black',
					position:'absolute',
					left:80,
					top:40,}}>
					{this.props.shopname}
					</Text>

					</View>




					<View style={
						styles.zhifucontainer
					}>
					<Image source={require('../img/zhifu/bankcard.png')}

					style={styles.zhifulogo}/>
					<Text
					style={{
						position:'absolute',
						left:50,
						marginTop:5,
						color:'#060606',
						fontSize:18,
					}}>
					银行卡支付 
					<Text style={{
						borderWidth:1,
						borderColor:'#F13232',
						color:'#F13232',
						fontSize:13,
						marginLeft:6,
					}}>立减2.00元，</Text>

						<Text style={{
						borderWidth:1,
						borderColor:'#F13232',
						color:'#F13232',
						fontSize:13,
						marginLeft:6,
					}}>天天免抽单</Text>
					</Text>

					<Text style={{
						position:'absolute',
						left:50,
						marginTop:34,
						color:'#4A4848',
						fontSize:13,
					}}>
					信用卡储蓄卡付款，无需开通网银
					</Text>


					<Text
					onPress={click1}
					style={{
						position:'absolute',
						right:10,
						top:10,
						width:25,
						height:25,
						backgroundColor:this.state.bgcolor1,
						color:'black',
						textAlign:'center',
						borderRadius:12.5,
						fontWeight:'bolder'
					}}>
					{this.state.yinhangkastate}
					</Text>

					</View>

					<View style={
						styles.zhifucontainer
					}>

					<Image source={require('../img/zhifu.wechart.png')}
					style={styles.zhifulogo}/>
					<Text
					style={{
						position:'absolute',
						left:50,
						marginTop:5,
						color:'#060606',
						fontSize:18,
					}}>
					微信支付
					<Text style={{
						borderWidth:1,
						borderColor:'#F13232',
						color:'#F6D052',
						fontSize:13,
						marginLeft:6,
					}}>抽小米手环</Text>

					</Text>
					<Text style={{
						position:'absolute',
						left:50,
						marginTop:34,
						color:'#4A4848',
						fontSize:13,
					}}>
					推荐安装微信以及5.0以上版本的用户使用
					</Text>

					<Text
					onPress={click2}
					style={{
						position:'absolute',
						right:10,
						top:10,
						width:25,
						height:25,
						backgroundColor:this.state.bgcolor2,
						color:'black',
						textAlign:'center',
						borderRadius:12.5,
						fontWeight:'bolder'
					}}>
					{this.state.weixinstate}
					</Text>

					</View>





					<View style={
						styles.zhifucontainer
					}>
					<Image source={require('../img/zhifu.alipay.png')}
					style={styles.zhifulogo}/>
					<Text
					style={{
						position:'absolute',
						left:50,
						marginTop:5,
						color:'#060606',
						fontSize:18,
					}}>
					支付宝支付
					</Text>
					<Text style={{
						position:'absolute',
						left:50,
						marginTop:34,
						color:'#4A4848',
						fontSize:13,
					}}>
					推荐有支付宝账号用户使用
					</Text>

					<Text
					onPress={click3}
					style={{
						position:'absolute',
						right:10,
						top:10,
						width:25,
						height:25,
						backgroundColor:this.state.bgcolor3,
						color:'black',
						textAlign:'center',
						borderRadius:12.5,
						fontWeight:'bolder'
					}}>
					{this.state.zhifubaostate}
					</Text>

					</View>





					




					<Text 
					onPress={goHome}
					style={{
						marginTop:10,
						fontSize:25,
						backgroundColor:'#EDB726',
						color:'black',
						textAlign:'center',
						width:scw*0.8,
						height:50,
						left:scw*0.1,
					}}>


					确认支付:
					<Text style={{
						fontSize:30,
					}}>
					￥{this.props.zongjia}
					</Text>


					</Text>







					</View>
					);
		}
	}

	export default Xiadan;



	const styles=StyleSheet.create(
	{
		zhifulogo:{
			width:40,
			height:40,
			position:'absolute',
			top:10,
			left:10,
			borderRadius:20,
		},


		zhifucontainer:{
			width:scw,
			height:55,
			borderBottomWidth:1,
			borderColor:'#1E1A1A',
			marginTop:2,

		},


	})