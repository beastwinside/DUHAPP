import React,{Component} from 'react';
import {Text,View} from 'react-native';
	import { Actions } from 'react-native-router-flux';

class Login extends Component{

	render(){
		const checked= () => {
			Actions.pop(refresh:{id:'123123'});
     };

		return(
			<Text onPress={checked}
			style={{
				top:300,
				color:'red',
				fontSize:30,
			}}>
			登陆界面
			</Text>
		);
	}
}

export default Login;