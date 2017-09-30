import React from 'react';
import { View } from 'react-native';
import { Button, FormValidationMessage, FormLabel, FormInput } from 'react-native-elements';

import { colors } from './constants';
import Container from './Container';

export default class GuestRegister extends React.Component {
  state = {
    name: '',
    phoneNumber: '',
  };

  handleTextChange = (field, text) => {
    this.setState({
      [field]: text,
    });
  };

  render() {
    const { name, phoneNumber } = this.state;

    return (
      <Container>
        <FormLabel>Name</FormLabel>
        <FormInput value={name} onChangeText={text => this.handleTextChange('name', text)} />
        <FormLabel>Phone number</FormLabel>
        <FormInput
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={text => this.handleTextChange('phoneNumber', text)}
        />
        <Button
          backgroundColor={colors.primary}
          title="Submit"
          style={{ marginTop: 500 }}
          large
          raised
        />
      </Container>
    );
  }
}
