import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from './HomePage';
import BottomTabNavigator from './BottomTabNavigator';

const Tab = createBottomTabNavigator();

function App() {
  return (
    
      <BottomTabNavigator />

  );
}

export default App;
