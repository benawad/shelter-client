import React from 'react';
import { AsyncStorage, View, Text } from 'react-native';
import { Button, Container, Header, Content, Form, Item, Input } from 'native-base';
import { graphql, gql } from 'react-apollo';

import { colors } from './constants';

class GuestRegister extends React.Component {
  state = {
    name: '',
    phoneNumber: '',
  };

  submit = async () => {
    try {
      const response = await this.props.mutate({
        variables: this.state,
      });

      AsyncStorage.setItem('guestId', `${response.data.createGuest.guest.id}`);
    } catch (e) {
      console.log(e);
    }

    this.props.history.push('/Shelters');
  };

  handleTextChange = (field, text) => {
    this.setState({
      [field]: text,
    });
  };

  render() {
    const { name, phoneNumber } = this.state;

    return (
      <View>
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
      </View>
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
      guest {
        id
      }
    }
  }
`;

export default graphql(createGuestMutation)(GuestRegister);
