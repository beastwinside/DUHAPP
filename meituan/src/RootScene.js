import React, { Component } from 'react';
import { Router, Scene,Actions} from 'react-native-router-flux';
import {
  StyleSheet,Text,View,
  StatusBar,
} from 'react-native';


import Home from './scene/Home';
import Order from './scene/Order';
import Mine from './scene/Mine';
import Allorder from './scene/Allorder';
import TabBarItem from './widget/TabBarItem';
import NOBACK from './widget/NOBACK';
import Shop from './scene/Shop';
  import Shopdiancan from './widget/Shopdiancan';


class RootScene extends Component {





  render() {
    return (


      <Router
      onSelect={el => {
        const { sceneKey, statusBarStyle } = el.props
        if (statusBarStyle) {
          StatusBar.setBarStyle(statusBarStyle, false)
        } else {
          StatusBar.setBarStyle('default', false)
        }
        Actions[sceneKey]()
      }}
      >
      <Scene 

      tabs
      key='tabBar'
      initial
      tabBarStyle={styles.tabBarStyle}
      >


      <Scene 
      hideNavBar
      key="Home" 
      component={Home} 
      title="首页"
      icon={TabBarItem}
      imagee={require('./img/tabbar/pfb_tabbar_homepage_selected@2x.png')}
      unimagee={require('./img/tabbar/pfb_tabbar_homepage@2x.png')}
      selecttext={styles.selecttext_style}
      unselecttext={styles.unselecttext_style}/>

      <Scene 
      key="Order" 
      component={Order} 
      title="订单" 
      icon={TabBarItem}
      imagee={require('./img/tabbar/pfb_tabbar_order_selected@2x.png')}
      unimagee={require('./img/tabbar/pfb_tabbar_order@2x.png')}
      selecttext={styles.selecttext_style}
      unselecttext={styles.unselecttext_style}

      />

      <Scene
      hideNavBar 
      key="Mine"
      component={Mine}
      title="我的" 
      icon={TabBarItem}
      imagee={require('./img/tabbar/pfb_tabbar_mine_selected@2x.png')}
      unimagee={require('./img/tabbar/pfb_tabbar_mine@2x.png')}
      navigationBarStyle={styles.navigationBarStyle}
      selecttext={styles.selecttext_style}
      unselecttext={styles.unselecttext_style}

      />



      </Scene>
      <Scene key='noback' component={NOBACK} title='加载中' hideTabBar  />
      <Scene key='Shop'   component={Shop}  title='店铺' hideTabBar     />
      <Scene key='Shopdiancan' component={Shopdiancan} title='sd' hideTabBar  />
      
      </Router>


      );
  }
}

const styles=StyleSheet.create({
  tabBarStyle:{
    backgroundColor:'#000000',
    borderTopWidth:0.6,
    borderColor:'#272727',
    opacity:0.7,
  },

  navigationBarStyle:{
    backgroundColor:'#FFAE3B',


  },

  selecttext_style:{
    color:'#66d9ef',

  },

  unselecttext_style:{
    color:'#F2F2F2',
  },





});

export default RootScene;