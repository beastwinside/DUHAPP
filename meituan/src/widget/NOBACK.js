import React,{Component} from 'react';
import {Text,View} from 'react-native';
	import { Actions } from 'react-native-router-flux';

class NOBACK extends Component{

	render(){
		const goHome= () => {
			Actions.Allorder(
				{
               shopname:this.props.shopname,
               foodname:this.props.foodname,
               num:this.props.num,
               zongjia:this.props.zongjia
               });
     };

		return(
			<Text onPress={goHome}
			style={{
				top:300,
				color:'red',
				fontSize:30,
			}}>
			草泥马下单成功了
			</Text>
		);
	}
}

export default NOBACK;