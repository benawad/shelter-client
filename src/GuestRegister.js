import React from 'react';
import { View, Text } from 'react-native';
import { FormValidationMessage, FormLabel, FormInput } from 'react-native-elements';
import { Button, Container, Header, Content, Form, Item, Input } from 'native-base';
import { graphql, gql } from 'react-apollo';

import { colors } from './constants';

class GuestRegister extends React.Component {
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
        <Header />
        <Content>
          <Form>
            <Item>
              <Input
                onChangeText={text => this.handleTextChange('name', text)}
                placeholder="Name"
              />
            </Item>
            <Item last>
              <Input
                onChangeText={text => this.handleTextChange('phoneNumber', text)}
                placeholder="Phone Number"
              />
            </Item>
            <Item>
              <Button block>
                <Text>Submit</Text>
              </Button>
            </Item>
          </Form>
        </Content>
      </Container>
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

// export default graphql(createGuestMutation)(GuestRegister);
export default GuestRegister;
