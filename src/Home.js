import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import {Icon, Button, Text} from 'native-base';
import {colors} from './constants';
import {styles} from './myStyles';

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
