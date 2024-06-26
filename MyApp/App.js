// App.js
import React from 'react';
import BottomTabNavigator from './BottomTabNavigator';
import { AppThemeProvider } from './AppThemeContext';

const App = () => {
  return (
    <AppThemeProvider>
      <BottomTabNavigator />
    </AppThemeProvider>
  );
};

export default App;
