import React, { Component } from 'react';
import {
	View, Text, StyleSheet, StatusBar, ListView,
	Image, TouchableOpacity, ScrollView, RefreshControl} from 'react-native';
	import { Actions } from 'react-native-router-flux';

	export default class PageTest extends Component {

		


		render() {
			return (
				<View style={{margin: 128}}>
				<Text onPress={Actions.pageOne}>
				这里是测试页面。
				{this.props.text}
				</Text>

				</View>
				)
		}
	}