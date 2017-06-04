import React, { Component } from 'react';
import {View, Text, Alert,StyleSheet, StatusBar, ListView,Dimensions, TextInput,
	Image, TouchableOpacity, ScrollView, RefreshControl} from 'react-native';
	import ScrollableTabView, {ScrollableTabBar } from 'react-native-scrollable-tab-view';
	import { Actions } from 'react-native-router-flux';


   export default class Pay extends Component{

      constructor(props) {
         super(props);
        
         this.state = {
           shuliang:this.props.numa,
           zongprice:this.props.zongjiaa,
           text:'浙江农林大学'
         };
      }


   	render(){
         const addprice = () =>{
         this.setState({
         shuliang:this.state.shuliang+1,
          zongprice:this.props.zongjiaa/this.props.numa*(this.state.shuliang+1),
         })
 
   };

    const subtractprice = () =>{
      if(this.state.shuliang>0)
      {
         this.setState({
         shuliang:this.state.shuliang-1,
         zongprice:this.props.zongjiaa/this.props.numa*(this.state.shuliang-1),
         })}
         else Alert.alert('???','你想买什么？');
 
   };



     


          const goToAllorder= () => {
            if(this.state.shuliang>0)
            {
            Actions.Xiadan({
               shopname:this.props.shopname,
               foodname:this.props.foodname,
               num:this.state.shuliang,
               zongjia:this.state.zongprice,
               dizhi:this.state.text,
               });}

            else Alert.alert('???','您选了什么？');

         
          };

   		var myDate = new Date();
        var hour=myDate.getHours();
        var minute= myDate.getMinutes()+15;   
        var time=''+hour+':'+minute;    
   		
   		return(
   			<View style={styles.contaniner}>
        <View style={{
          width:scw*0.96,
          height:50,
          left:scw*0.02,
          marginTop:5,
        }}>


        <TextInput style={{
            backgroundColor:'#efeff2',
          height:50,
          fontSize:17,
          color:'black',
          paddingLeft:30,
          fontWeight:'bolder',
        }} 
        underlineColorAndroid="transparent"
        placeholder="浙江农林大学b3"
        maxLength={10}
        onChangeText={(text) => this.setState({text})}
    
        


        />
   		




   			<Text style={{
   				backgroundColor:'#efeff2',
   				height:25,
   				fontSize:15,
   				color:'#505050',
   				paddingLeft:30,
   				   			}}>
   			先生 1586755885
   			</Text>

        </View>

   			<View style={{
   				width:scw*0.96,
          backgroundColor:'#efeff2',
          left:scw*0.02,
   				paddingLeft:36,
   				borderBottomWidth:2,
   				borderColor:'#D7D7D7',
   				height:36,
   				paddingTop:10,
   			}}>
   			<TouchableOpacity>
   			<Text  style={{
   				color:'#0F0F0F',
   				fontSize:18,
   				
   			}}>	
   			尽快送达--------【预计{time}】
   			</Text>
   			</TouchableOpacity>
   			</View>

   			<View style={{
   			  width:scw*0.96,
          backgroundColor:'white',
          left:scw*0.02,
          paddingLeft:30,
          borderBottomWidth:2,
          borderColor:'#D7D7D7',
          height:40,
          paddingTop:10,
          marginTop:5,
   			}}>
   			<TouchableOpacity>
   			<Text  style={{
   				color:'#0F0F0F',
   				fontSize:18,
   				
   			}}>
   			在线支付
   			</Text>
   			</TouchableOpacity>
   			</View>



   			<View style={{
   				 width:scw*0.96,
          backgroundColor:'white',
          left:scw*0.02,
          paddingLeft:30,
         
          height:40,
          paddingTop:10,
   				
   			
   			
   			}}>
   			<TouchableOpacity>
   			<Text  style={{

   				color:'#100F0F',
   				fontSize:25,
   				
   			}}>
   			店铺名：{this.props.shopname}
   			</Text>
   			</TouchableOpacity>
   			</View>



   			<View style={{
   			  width:scw*0.96,
          backgroundColor:'white',
          left:scw*0.02,
          paddingLeft:30,
         
          height:40,
          paddingTop:10,
   			}}>
   			<TouchableOpacity>
   			<Text  style={{
   				color:'#100E0E',
   				fontSize:22,
   				
   			}}>
   				
   				食物名：{this.props.foodname}
   			</Text>
   			</TouchableOpacity>
   			</View>



   			<View style={{
   			  width:scw*0.96,
          backgroundColor:'white',
          left:scw*0.02,
          paddingLeft:30,
       
          height:40,
          paddingTop:10,
   			}}>
   			<TouchableOpacity>
   			<Text  style={{
   				color:'#111010',
   				fontSize:18,
   				
   			}}>
   			
   				数量：
   			</Text>
            </TouchableOpacity>

            <Text 
            onPress={addprice}
            style={{
               position:'absolute',
               right:10,
               top:0,
               height:25,
               width:30,
               backgroundColor:'#FF7100',
               opacity:0.89,

                 
                 fontSize:20,
                 textAlign:'center',

            }}> 
            +
            </Text>


               <Text style={{
               position:'absolute',
               right:45,
               top:0,
               height:25,
               width:30,
               backgroundColor:'#FF7100',
               opacity:0.89,
                 
                 fontSize:20,
                 textAlign:'center',

            }}> 
            {this.state.shuliang}
            </Text>

             <Text 
             onPress={subtractprice}
             style={{
               position:'absolute',
               right:80,
               top:0,
               height:25,
               width:30,
               backgroundColor:'#FF7100',
               opacity:0.89,
               borderRadi4:10,
               fontSize:20,
                 textAlign:'center',

            }}> 
            -
            </Text>
   			
   			</View>



   			<View style={{
   			  width:scw*0.96,
          backgroundColor:'white',
          left:scw*0.02,
          paddingLeft:30,
        
          height:40,
          paddingTop:15,
          marginTop:10,
   			}}>
   			<TouchableOpacity>
   			<Text  style={{
   				color:'black',
   				fontSize:18,
   				
   			}}>
   			总价：
   			</Text>
   			</TouchableOpacity>

             <Text style={{
               position:'absolute',
               right:15,
               top:10,
               height:25,
               width:80,
               backgroundColor:'#FF7100',
               opacity:0.89,
                 
                 fontSize:20,
                 textAlign:'center',

            }}> 
            {this.state.zongprice}￥
            </Text>
   			</View>



   			<View style={{
   			  width:scw*0.96,
          backgroundColor:'white',
          left:scw*0.02,
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
   			  width:scw*0.96,
          backgroundColor:'white',
          left:scw*0.02,
          paddingLeft:30,
          borderBottomWidth:2,
          borderColor:'#D7D7D7',
          height:40,
          paddingTop:10,
   			}}>
   			<TouchableOpacity>
   			<Text  style={{
   				color:'#0F0F0F',
   				fontSize:18,
   				
   			}}>
   			红包
   			</Text>
   			</TouchableOpacity>
   			</View>


   				<View style={{
   			  width:scw*0.96,
          backgroundColor:'white',
          left:scw*0.02,
          paddingLeft:30,
          borderBottomWidth:2,
          borderColor:'#D7D7D7',
          height:40,
          paddingTop:10,
   			}}>
   			<TouchableOpacity>
   			<Text  style={{
   				color:'#0F0F0F',
   				fontSize:18,
   				
   			}}>
   			商家代金券
   			</Text>
   			</TouchableOpacity>
   			</View>
   			





   			<View style={styles.footer}> 
   			<Text style={{
   				paddingTop:5,
   				color:'#0F0F0F',
   				fontSize:13,
               paddingLeft:20,
   			}}>
   			待支付￥
            <Text style={{
               color:'red',
               fontSize:20,

            }}>
            {this.state.zongprice+3}
            </Text>
            |优惠是没有的
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
   			<Text 
            onPress={goToAllorder}
            style={{
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
  			backgroundColor:'#5B5B5B',
  			top:55,

  		},
  		footer:{
  			height:50,
  			width:scw,
  			position:'absolute',
  			bottom:70,
  			backgroundColor:'#F0E6E6',
  			opacity:0.9,

  		},



  })