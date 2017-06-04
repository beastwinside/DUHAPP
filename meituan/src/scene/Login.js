import React,{Component} from 'react';
import {Text,View} from 'react-native';
import { Actions } from 'react-native-router-flux';

class Login extends Component{





	render(){

		var request = new XMLHttpRequest();
		request.onreadystatechange = (e) => {
			if (request.readyState !== 4) {
				return;
			}

			if (request.status === 200) {
				{console.log('success', request.responseText);
				   var obj =  JSON.parse(request.responseText); 

				
			}

			} else {
				console.warn('error');
				alert('shibai');
			}
		};

		request.open('GET', 'http://duhapp-1253829861.costj.myqcloud.com/food.json');
		request.send();


		



		const checked= () => {
			Actions.pop();
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