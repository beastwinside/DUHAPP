import React,{Component} from 'react';
import {Text,View} from 'react-native';
	import { Actions } from 'react-native-router-flux';

class Welcome extends Component{

	render(){
		const goMain= () => {
			Actions.tabBar();
     };
     	setTimeout(()=>{Actions.tabBar()},2000)

		return(

			<Text onPress={goMain}
			style={{
				top:300,
				color:'red',
				fontSize:30,
			}}>
			欢迎来到美团
			</Text>
		);
	}
}

export default Welcome;