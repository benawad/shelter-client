import React from 'react';
import { View, Text } from 'react-native';
import {
  ListItem,
  Body,
  CheckBox,
  Button,
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
} from 'native-base';
import { graphql, gql } from 'react-apollo';

import { colors } from './constants';
import Footer from './Footer';

class DonorRegister extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  submit = async () => {
    await this.props.mutate({
      variables: this.state,
    });

    this.props.history.push('/CreateShelter');
  };

  handleTextChange = (field, text) => {
    this.setState({
      [field]: text,
    });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <Form>
        <Item>
          <Input onChangeText={text => this.handleTextChange('name', text)} placeholder="Name" />
        </Item>
        <Item last>
          <Input onChangeText={text => this.handleTextChange('email', text)} placeholder="Email" />
        </Item>
        <Item last>
          <Input
            onChangeText={text => this.handleTextChange('password', text)}
            placeholder="Password"
          />
        </Item>
        <Button
          style={{
            backgroundColor: colors.primary,
            marginLeft: 10,
            marginRight: 10,
            marginTop: 20,
          }}
          block
          onPress={this.submit}
        >
          <Text style={{ fontSize: 20, color: '#FFF' }}>Submit</Text>
        </Button>
      </Form>
    );
  }
}

const createDonorMutation = gql`
  mutation($name: String!, $email: String!, $password: String!) {
    createDonor(name: $name, email: $email, password: $password) {
      ok
      errors {
        path
        message
      }
    }
  }
`;

export default graphql(createDonorMutation)(DonorRegister);
