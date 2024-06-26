import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAppTheme } from './AppThemeContext';

const StatisticsPage = () => {
  const { isDarkTheme } = useAppTheme();

  return (
    <View style={[styles.container, { backgroundColor: isDarkTheme ? '#05081c' : '#fff' }]}>
      <Text style={isDarkTheme ? styles.darkText : styles.lightText}>StatisticsPage</Text>
      {/* Add your statistics components here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightText: {
    fontSize: 22,
    fontWeight: '600',
    color: 'black',
    marginBottom: 20,
  },
  darkText: {
    fontSize: 22,
    fontWeight: '600',
    color: 'white',
    marginBottom: 20,
  },
});

export default StatisticsPage;
