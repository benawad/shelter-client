import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import {Icon, Button, Text} from 'native-base';

const styles = StyleSheet.create({
  lolpadding: {
    flex: 1,
  },

  image: {
    paddingTop: 50,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 3,
  },

  buttonContainer: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'stretch',
  },

  donorButton: {
    flex: 1,
    paddingBottom: 50,
    justifyContent: 'flex-end',
  },
  userButton: {
    flex: 1,
    justifyContent: 'flex-start',
  },
	
	button:{
		marginLeft:10,
		marginRight:10,
		backgroundColor: '#3B8686',
	},

  buttonText: {
    padding: 20,
    color: 'white',
		fontWeight: 'bold',
  },
});

const Home = ({ history }) => (
  <View style={{ flex: 1, justifyContent: 'space-around' }}>
		<View style={styles.lolpadding} />
    <Image
      source={{
        uri: 'https://github.com/benawad/shelter-client/raw/master/src/shelter.png',
			 }}
      style={styles.image}
    />

    <View style={styles.buttonContainer}>
      <View style={styles.donorButton}>
        <Button iconLeft block style={styles.button} onPress={() => history.push('/DonorRegister')}>
					<Icon name='home' />
					<Text style={styles.buttonText}>HOSTS</Text>
				</Button>
      </View>
      
			<View style={styles.userButton}>
        <Button iconLeft block style={styles.button} onPress={() => history.push('/GuestRegister')}>
					<Icon name ='person' />
					<Text style={styles.buttonText}>GUESTS</Text>
        </Button>
      </View>
		</View>
  </View>
);

export default Home;
