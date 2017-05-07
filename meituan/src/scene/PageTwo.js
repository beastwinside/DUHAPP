import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class PageOne extends Component {
  render() {
  const goToPageTwo = () => Actions.pageOne({text: '页面一传过来的数据'}); 
  return (
    <View style={{margin: 128}}>
      <Text onPress={goToPageTwo}>这里是页面二
      </Text>
    </View>
  )
}
}