import React from 'react';
import { View } from 'react-native';
import { Button, FormValidationMessage, FormLabel, FormInput } from 'react-native-elements';

import { colors } from './constants';
import Container from './Container';

export default class DonorRegister extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleTextChange = (field, text) => {
    this.setState({
      [field]: text,
    });
  };

  render() {
    return (
      <Container>
        <FormLabel>Name</FormLabel>
        <FormInput onChangeText={text => this.handleTextChange('name', text)} />
        <FormLabel>Email</FormLabel>
        <FormInput onChangeText={text => this.handleTextChange('email', text)} />
        <FormLabel>Password</FormLabel>
        <FormInput onChangeText={text => this.handleTextChange('password', text)} secureTextEntry />
        <Button
          backgroundColor={colors.primary}
          title="Submit"
          style={{ marginTop: 400 }}
          large
          raised
        />
      </C>
    );
  }
}
