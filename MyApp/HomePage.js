// HomePage.js
import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { useAppTheme } from './AppThemeContext';

const transactions = [
  { id: '1', title: 'Apple Store', category: 'Entertainment', amount: '- $5.99', itemProfile: require('./assets/apple.png') },
  { id: '2', title: 'Spotify', category: 'Music', amount: '- $12.99', itemProfile: require('./assets/spotify.png') },
  { id: '3', title: 'Money Transfer', category: 'Transaction', amount: '$300', itemProfile: require('./assets/moneyTransfer.png') },
  { id: '4', title: 'Grocery', category: 'Shopping', amount: '- $88', itemProfile: require('./assets/grocery.png') },
];

const HomePage = () => {
  const { isDarkTheme, theme } = useAppTheme();

  const renderItem = ({ item }) => (
    <View style={styles.transaction}>
      <View style={{ flexDirection: 'row', gap: 15, alignItems: 'center' }}>
        <View style={styles.itemProfile}>
          <Image source={item.itemProfile} />
        </View>
        <View>
          <Text style={isDarkTheme ? styles.darkTransactionTitle : styles.lightTransactionTitle}>{item.title}</Text>
          <Text style={isDarkTheme ? styles.darkTransactionCategory : styles.lightTransactionCategory}>{item.category}</Text>
        </View>
      </View>
      <Text style={isDarkTheme ? styles.darkTransactionAmount : styles.lightTransactionAmount}>{item.amount}</Text>
    </View>
  );

  return (
    <FlatList
      ListHeaderComponent={
        <>
          <View style={styles.header}>
            <Image source={require('./assets/profile.png')} style={styles.profileImage} />
            <View>
              <Text style={isDarkTheme ? styles.darkSubtitle : styles.lightSubtitle}>Welcome back,</Text>
              <Text style={isDarkTheme ? styles.darkTitle : styles.lightTitle}>Morgan Godwin</Text>
            </View>
          </View>
          <View>
            <Image source={require('./assets/Card.png')} style={{ marginLeft: 12, marginTop: 35 }} />
          </View>
          <View style={{ flexDirection: 'row', gap: 30, justifyContent: 'center', marginTop: 35 }}>
            <View style={styles.homeImage}>
              <Image source={require('./assets/send.png')} />
            </View>
            <View style={styles.homeImage}>
              <Image source={require('./assets/receive.png')} />
            </View>
            <View style={styles.homeImage}>
              <Image source={require('./assets/loan.png')} />
            </View>
            <View style={styles.homeImage}>
              <Image source={require('./assets/topUp.png')} />
            </View>
          </View>
          <View style={styles.textStyle}>
            <Text>Send</Text>
            <Text>Receive</Text>
            <Text>Loan</Text>
            <Text>TopUp</Text>
          </View>
          <View style={styles.transactionList}>
            <Text style={isDarkTheme ? styles.darkTransactionListTitle : styles.lightTransactionListTitle}>Transactions</Text>
            <Text style={styles.seeAllText}>See All</Text>
          </View>
        </>
      }
      data={transactions}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    marginTop: 20,
  },
  lightTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginLeft: 10,
    marginTop: 3,
    color: 'black',
  },
  darkTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginLeft: 10,
    marginTop: 3,
    color: 'white',
  },
  lightSubtitle: {
    marginTop: 27,
    fontSize: 15,
    color: 'gray',
    marginLeft: 10,
  },
  darkSubtitle: {
    marginTop: 27,
    fontSize: 15,
    color: 'lightgray',
    marginLeft: 10,
  },
  profileImage: {
    marginTop: 25,
    height: 58,
    width: 58,
    borderRadius: 29,
    marginLeft: 15,
  },
  transactionTypeContainer: {
    flexDirection: 'row',
    gap: 50,
    margin: 25,
  },
  transactionType: {
    justifyContent: 'center',
    marginLeft: 10,
  },
  transactionList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 12,
    marginTop: 25,
  },
  lightTransactionListTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  darkTransactionListTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  seeAllText: {
    fontSize: 13,
    color: 'gray',
  },
  transaction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  lightTransactionTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
  },
  darkTransactionTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
  },
  lightTransactionCategory: {
    fontSize: 13,
    color: 'gray',
  },
  darkTransactionCategory: {
    fontSize: 13,
    color: 'lightgray',
  },
  lightTransactionAmount: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
  },
  darkTransactionAmount: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
  },
  itemProfile: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeImage: {
    backgroundColor: '#f0f0f0',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    flexDirection: 'row',
    gap: 45,
    justifyContent: 'center',
    marginTop: 15,
  },
});

export default HomePage;
