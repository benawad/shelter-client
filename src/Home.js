import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

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
        <Button
          large
          backgroundColor="#79BD9A"
          fontWeight="bold"
          iconLeft={{ name: 'home' }}
          title="HOSTS"
          onPress={() => history.push('/DonorRegister')}
        />
      </View>
      <View style={styles.userButton}>
        <Button
          large
          backgroundColor="#79BD9A"
          fontWeight="bold"
          iconLeft={{ name: 'user' }}
          title="GUESTS"
          onPress={() => history.push('/GuestRegister')}
        />
      </View>
    </View>
  </View>
);

export default Home;
