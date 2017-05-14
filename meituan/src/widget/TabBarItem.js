/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * https://github.com/huanxsd/MeiTuan  
 * @flow
 */

 import React, { Component } from 'react';

 import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';




class TabBarItem extends Component {


    render() {  

         let titleStyle = this.props.selected ? this.props.selecttext : this.props.unselecttext;
        let image = this.props.selected?this.props.imagee:this.props.unimagee;
        return (
            <View style={styles.container}>
            <Image 
            source={image}
            style={{
                height:25,
                width:25,
                borderRadius:12.5,
                marginTop:10,
            }}/>
            <Text style={[styles.title, titleStyle]}>
            {this.props.title}
            </Text>
            </View>
            );
    }
}

export default TabBarItem;


const styles = StyleSheet.create({
    container: {

        justifyContent: 'center',
        alignItems: 'center',

    },
    title: {

        fontSize: 15,
        
        marginBottom:10,



    },
    image: {
        marginTop: 4,
        width: 25,
        height: 25,
    }
});