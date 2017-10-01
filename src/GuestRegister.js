import React from 'react';
import { View, Text } from 'react-native';
import { Button, Container, Header, Content, Form, Item, Input } from 'native-base';
import { graphql, gql } from 'react-apollo';

import { colors } from './constants';

class GuestRegister extends React.Component {
  state = {
    name: '',
    phoneNumber: '',
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
    const { name, phoneNumber } = this.state;

    return (
      <Content>
        <Form>
          <Item>
            <Input onChangeText={text => this.handleTextChange('name', text)} placeholder="Name" />
          </Item>
          <Item last>
            <Input
              onChangeText={text => this.handleTextChange('phoneNumber', text)}
              placeholder="Phone Number"
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

const createGuestMutation = gql`
  mutation($name: String!, $phoneNumber: String!) {
    createGuest(name: $name, phoneNumber: $phoneNumber) {
      ok
      errors {
        path
        message
      }
    }
  }
`;

export default graphql(createGuestMutation)(GuestRegister);
