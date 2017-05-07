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
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
        'John', 'Joel', 'James', 'Jimmy', 'Jackson',
        'John', 'Joel', 'James', 'Jimmy', 'Jackson',
        'John', 'Joel', 'James', 'Jimmy', 'Jackson',
      ])
    };
  }
  render() {
    return (
      <View style={{flex: 1, paddingTop: 70}}>

        <ListView 
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text
          	style={{width:400,
          			height:50,
          			backgroundColor:'red',
          			borderWidth:1,}}>{rowData}</Text>}
        />
      </View>
    );
  }
}


	


	export default PageThree;