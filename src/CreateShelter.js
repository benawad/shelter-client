import React from 'react';
import { View } from 'react-native';
import { CheckBox, FormValidationMessage, FormLabel, FormInput } from 'react-native-elements';
import { Button, Text } from 'native-base';

import { colors } from './constants';
import { styles } from './myStyles';

export default class CreateShelter extends React.Component {
  state = {
    address: '',
    description: '',
    occupancy: '0',
    shower: false,
    food: false,
  };

  handleTextChange = (field, text) => {
    this.setState({
      [field]: text,
    });
  };

  render() {
    const { address, description, shower, occupancy } = this.state;

    return (
      <View>
        <FormLabel>Address</FormLabel>
        <FormInput value={address} onChangeText={text => this.handleTextChange('address', text)} />
        <FormLabel>Description</FormLabel>
        <FormInput
          value={description}
          onChangeText={text => this.handleTextChange('description', text)}
          multiline
        />
        <FormLabel>Available Occupancy</FormLabel>
        <FormInput
          value={occupancy}
          keyboardType="number-pad"
          onChangeText={text => this.handleTextChange('occupancy', text)}
        />
        <CheckBox
          checked={shower}
          title="Shower"
          onPress={() => this.setState(state => ({ shower: !state.shower }))}
        />
        <CheckBox
          checked={shower}
          title="Food"
          onPress={() => this.setState(state => ({ food: !state.food }))}
        />

        <Button
          style={styles.button}
          iconLeft
          block
          onPress={() => history.push('/    GuestRegister')}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </Button>
      </View>
    );
  }
}
