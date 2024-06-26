import  React from 'react';
import {View,Text,ScrollView,StyleSheet,Image,FlatList} from 'react-native';



const transactions = [
	{ id: '1', title: 'Apple Store', category: 'Entertainment', amount: '- $5.99', itemProfile: require('./assets/apple.png') },
	{ id: '2', title: 'Spotify', category: 'Music', amount: '- $12.99', itemProfile: require('./assets/spotify.png') },
	{ id: '3', title: 'Money Transfer', category: 'Transaction', amount: '$300', itemProfile: require('./assets/moneyTransfer.png') },
	{ id: '4', title: 'Grocery', category: 'Shopping', amount: '- $88', itemProfile: require('./assets/grocery.png') },
];

const HomePage = () => {
  
  const renderItem = ({ item }) => (
    <View style={styles.transaction}>
      <View style={{flexDirection:'row', gap:15, alignItems:'center'}}>
				<View   style={styles.itemProfile}>
        <Image source={item.itemProfile} />
				</View>

				<View >
        <Text style={styles.transactionTitle}>{item.title}</Text>
        <Text style={styles.transactionCategory}>{item.category}</Text>
				</View>

      </View>
      <Text style={styles.transactionAmount}>{item.amount}</Text>
    </View>
  );


return (
    <FlatList
      ListHeaderComponent={
        <>
          <View style={styles.header}>
            <Image source={require('./assets/profile.png')} style={styles.profileImage} />
          	<View>
              <Text style={styles.subtitle}>Welcome back,</Text>
              <Text style={styles.title}>Eric Atsu</Text>
          	</View>
          </View>


          <View>
            <Image source={require('./assets/Card.png')} style={{ marginLeft: 12, marginTop: 35 }} />
          </View>

					<View style={{flexDirection:'row',gap:45,justifyContent:'center',marginTop:15}}>
           <View style={styles.homeImage}>
						<Image source={require('./assets/send.png')}/>
					</View>

					<View style={styles.homeImage}>
						<Image source={require('./assets/receive.png')}/>
					</View>

					<View style={styles.homeImage}>
						<Image source={require('./assets/loan.png')}/>
					</View>
			
					<View style={styles.homeImage}>
						<Image source={require('./assets/topUp.png')}/>
		   		</View>
		   </View>	



					<View style={styles.textStyle}>
						<Text>Send</Text>
						<Text>Receive</Text>
						<Text>Loan</Text>
						<Text>TopUp</Text>
						


					</View>
          
          <View style={styles.transactionList}>
            <Text style={styles.transactionListTitle}>Transactions</Text>
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
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginLeft: 10,
    marginTop: 3,
  },
  subtitle: {
    marginTop: 27,
    fontSize: 15,
    color: 'gray',
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
   gap:50,
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
  transactionListTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAllText: {
    fontSize: 16,
    color: 'blue',
  },
  transaction: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
	flexDirection:'row',
	justifyContent:'space-between',
  },
  transactionTitle: {
    fontSize: 16,
  },
  transactionCategory: {
    fontSize: 14,
    color: 'gray',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  homeImage:{
	height:50,
	width:50,
	borderRadius:20,
	justifyContent:'center',
	backgroundColor:'lightgrey',
	padding:15
	
  },

	textStyle:{
		flexDirection:'row',
		justifyContent:'center',
		gap:57
	},

	itemProfile:{
		borderRadius:30,
		height:50,
		width:50,
		justifyContent:'center',
		padding:15,
		backgroundColor:'lightgray'
	}

  
});

export default HomePage;