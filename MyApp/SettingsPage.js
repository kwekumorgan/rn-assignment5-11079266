// SettingsPage.js
import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { useAppTheme } from './AppThemeContext';

const SettingsPage = () => {
  const { isDarkTheme, toggleTheme } = useAppTheme();

  return (
    <View style={isDarkTheme ? styles.darkContainer : styles.lightContainer}>
      <Text style={isDarkTheme ? styles.darkTitle : styles.lightTitle}>Settings</Text>
      <View style={styles.optionContainer}>
        <Text style={isDarkTheme ? styles.darkOptionText : styles.lightOptionText}>Language</Text>
        
      </View>
      <View style={styles.optionContainer}>
        <Text style={isDarkTheme ? styles.darkOptionText : styles.lightOptionText}>My Profile</Text>
      </View>
      <View style={styles.optionContainer}>
        <Text style={isDarkTheme ? styles.darkOptionText : styles.lightOptionText}>Contact Us</Text>
      </View>
      <View style={styles.optionContainer}>
        <Text style={isDarkTheme ? styles.darkOptionText : styles.lightOptionText}>Change Password</Text>
      </View>
      <View style={styles.optionContainer}>
        <Text style={isDarkTheme ? styles.darkOptionText : styles.lightOptionText}>Privacy Policy</Text>
      </View>
      <View style={styles.themeContainer}>
        <Text style={isDarkTheme ? styles.darkThemeOptionText : styles.lightThemeOptionText}>Theme</Text>
        <Switch
          value={isDarkTheme}
          onValueChange={toggleTheme}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  lightContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  darkContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: '#05081c',
  },
  lightTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
    marginLeft:100
  },
  darkTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
    marginLeft:100
  },
  optionContainer: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  lightOptionText: {
    fontSize: 18,
    color: 'black',
    fontWeight:'600'
  },
  darkOptionText: {
    fontSize: 18,
    color: 'white',
  },
  themeContainer: {
    marginTop:30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    
  },

  lightThemeOptionText:{
    fontSize: 24,
    color: 'black',
    fontWeight:'600'

  },

  darkThemeOptionText:{
    fontSize: 24,
    color: '#fff',
    fontWeight:'600'}

});

export default SettingsPage;
