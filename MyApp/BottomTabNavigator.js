// navigation/BottomTabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

import HomePage from './HomePage';
import MycardsPage from './MycardsPage';
import StatisticsPage from './StatisticsPage';
import SettingsPage from './SettingsPage';
import { useAppTheme } from './AppThemeContext';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const { isDarkTheme, theme } = useAppTheme();
      
  return (
    <NavigationContainer theme={theme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Mycards') {
              iconName = focused ? 'card' : 'card-outline';
            } else if (route.name === 'Statistics') {
              iconName = focused ? 'stats-chart' : 'pie-chart';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Mycards" component={MycardsPage} />
        <Tab.Screen name="Statistics" component={StatisticsPage} />
        <Tab.Screen name="Settings" component={SettingsPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNavigator;
