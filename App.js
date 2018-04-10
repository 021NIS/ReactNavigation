import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './StackNavigator/StackNavigator';
import TabNavigator from './TabNavigator/TabNavigator';
import DrawerNavigator from './DrawerNavigator/DrawerNavigator';


export default class App extends React.Component {
  render() {
    return <StackNavigator/>
  }
}

