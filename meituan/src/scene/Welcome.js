import React,{Component} from 'react';
import {Text,View,Dimensions,Image } from 'react-native';
	import { Actions } from 'react-native-router-flux';

let scw=Dimensions.get('window').width;
let sch=Dimensions.get('window').height;
class Welcome extends Component{

	render(){
		const goMain= () => {
			Actions.tabBar();
     };
     	setTimeout(()=>{Actions.tabBar()},2000)

		return(

			<Image 
			style={{
				height:sch,
				width:scw
			}}

			source={require('../img/welcome.png')} />
			
			
		);
	}
}

export default Welcome;