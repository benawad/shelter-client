import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import {Container, Header, Content, Button, Text} from 'native-base';

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

  buttons: {
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

    <View style={styles.buttons}>
      <View style={styles.donorButton}>
        <Button block style={{backgroundColor: '#3B8686'}} onPress={() => history.push('/DonorRegister')}>
					<Text style={styles.buttonText}>HOSTS</Text>
				</Button>
      </View>
      
			<View style={styles.userButton}>
        <Button block style={{backgroundColor: '#3B8686'}} onPress={() => history.push('/GuestRegister')}>
					<Text style={styles.buttonText}>GUESTS</Text>
        </Button>
      </View>
		</View>
  </View>
);

export default Home;
