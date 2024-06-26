import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAppTheme } from './AppThemeContext';

const MycardsPage = () => {
  const { isDarkTheme } = useAppTheme();

  return (
    <View style={[styles.container, { backgroundColor: isDarkTheme ? '#05081c' : '#fff' }]}>
      <Text style={isDarkTheme ? styles.darkTitle : styles.lightTitle}>My Cards</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: 'black',
    marginBottom: 20,
  },
  darkTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: 'white',
    marginBottom: 20,
  },
});

export default MycardsPage;
