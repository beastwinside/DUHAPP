import React, { Component } from 'react';
import {
	View, Text, StyleSheet, StatusBar, ListView,
	Image, TouchableOpacity, ScrollView, RefreshControl} from 'react-native';
	

	 class PageThree extends Component {
	 	//初始化模拟数据
	 	 constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        '我的评价','我的好友','我的收藏','我的地址',
      ])
    };
  }


  renderhead(){
  	return(
  		<View style={{
  			height:160,
  			backgroundColor:'#0090FF',
  						}}>

  		<TouchableOpacity activeOpacity={0.6} >
  		<Image style={{
  			height:80,
  			width:80,
  			borderRadius:40,
  			marginTop:20,
  			marginLeft:20,
  						}}
			source={require('../img/mine/touxiang.jpg')} 
			/>
			</TouchableOpacity>

  		
  		
  		 	
  		 	
  		 




  		</View>
  		);
  }









  render() {
    return (
      <View style={{ backgroundColor:'#62EB27',}}>
      	{this.renderhead()}
        <ListView 
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <TouchableOpacity activeOpacity={0.6} ><Text
          	style={{
          			height:50,
          			backgroundColor:'#E7FFB1',
          			borderBottomWidth:5,
          			borderColor:'#009071',
          			color:'black',}}>{rowData}</Text></TouchableOpacity>}
        />
      </View>
    );
  }
}


	


	export default PageThree;