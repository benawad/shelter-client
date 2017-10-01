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

class DonorRegister extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  submit = () => {
    this.props.mutate({
      variables: this.state,
    });
  };

  handleTextChange = (field, text) => {
    this.setState({
      [field]: text,
    });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <Content>
        <Form>
          <Item>
            <Input onChangeText={text => this.handleTextChange('name', text)} placeholder="Name" />
          </Item>
          <Item last>
            <Input
              onChangeText={text => this.handleTextChange('email', text)}
              placeholder="Email"
            />
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
      </Content>
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
