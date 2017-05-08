import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';


import PageOne from './scene/PageOne';
import PageTwo from './scene/PageTwo';
import PageThree from './scene/PageThree';
import TabBarItem from './widget/TabBarItem'


class RootScene extends Component {
 



  render() {
    return (
      <Router
      >
      <Scene 
      hideNavBar
      tabs
      key='tabBar'
      initial
      tabBarStyle={styles.tabBarStyle}
    
      >


      <Scene 
      hideNavBar
      key="pageOne" 
      component={PageOne} 
      title="首页"
      icon={TabBarItem}/>

      <Scene 
      key="pageTwo" 
      component={PageTwo} 
      title="订单" 
      icon={TabBarItem}/>

      <Scene
      hideNavBar 
      key="pageThree"
      component={PageThree}
      title="我的" 
      icon={TabBarItem}
      navigationBarStyle={styles.navigationBarStyle}
      />


      </Scene>
      </Router>
      );
  }
}

const styles=StyleSheet.create({
  tabBarStyle:{
    backgroundColor:'#FFFBA6',
     borderTopWidth:0.6,
     borderColor:'#272727',
  },

  navigationBarStyle:{
    backgroundColor:'#FFAE3B',

  },





});

export default RootScene;