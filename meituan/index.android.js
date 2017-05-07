/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


import PageOne from './PageOne';
import PageTwo from './PageTwo';

export default class meituan extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="pageOne" component={PageOne} title="PageOne"  />
          <Scene key="pageTwo" component={PageTwo} title="PageTwo" initial/>
        </Scene>
      </Router>
    )
  }
}

AppRegistry.registerComponent('meituan', () => meituan);
