import React,{Component} from 'react';
import {Text,View} from 'react-native';
import { Actions } from 'react-native-router-flux';

class Editaddress extends Component{





	render(){


        const goBACK=()=>{
          Actions.Pay({
          dizhi:this.props.dizhi?this.props.dizhi:"未选择地址",
        });
        }

		alert(this.props.dizhi);
		return(
			<Text 
			onPress={goBACK}

			style={{
				top:300,
				color:'red',
				fontSize:30,
			}}>
			登陆dizhi界面
			</Text>
			);
	}
}

export default Editaddress;