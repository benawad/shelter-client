import React from 'react';
import { View, Text, Image } from 'react-native';
import { Toast, Item, Input, Content, Button, Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { graphql, gql } from 'react-apollo';

import { colors } from './constants';

class ShelterDetails extends React.Component {
  state = {
    rooms: '',
  };

  submit = async () => {
    await this.props.mutate({
      variables: {
        rooms: this.state.rooms,
        shelterId: this.props.location.state.id,
      },
    });

    this.props.history.push('/shelters', true);
    this.props.history.replace('/shelters');
  };

  render() {
    const {
      location: { state: { pictureUrl, description, occupancy, food, shower } },
    } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 3 }}>
          <Content>
            <Image source={{ uri: pictureUrl }} style={{ height: 200, width: null, flex: 1 }} />
            <Grid>
              <Row>
                <Col size={1}>
                  {food && (
                    <Button transparent>
                      <Icon active={food} name="pizza" />
                    </Button>
                  )}
                </Col>
                <Col size={1}>
                  {shower && (
                    <Button transparent>
                      <Icon active name="water" />
                    </Button>
                  )}
                </Col>
                <Col
                  size={6}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Text style={{ textAlign: 'center', fontSize: 24 }}>Occupancy: {occupancy}</Text>
                </Col>
              </Row>
            </Grid>
            <Text style={{ marginTop: 10, paddingLeft: 10, paddingRight: 10, fontSize: 20 }}>
              {description}
            </Text>
          </Content>
        </View>

        <View style={{ flex: 1 }}>
          <Item>
            <Input
              keyboardType="number-pad"
              value={this.state.rooms}
              placeholder="Rooms needed"
              onChangeText={text => this.setState({ rooms: text })}
            />
          </Item>
          <Button
            style={{
              backgroundColor: colors.primary,
              marginLeft: 10,
              marginRight: 10,
              marginTop: 20,
            }}
            onPress={this.submit}
            block
          >
            <Text style={{ fontSize: 20, color: '#FFF' }}>Request Housing</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const shelterRequestMutation = gql`
  mutation($shelterId: Int!, $rooms: Int!) {
    createShelterRequest(shelterId: $shelterId, rooms: $rooms) {
      ok
      errors {
        path
        message
      }
    }
  }
`;

export default graphql(shelterRequestMutation)(ShelterDetails);
