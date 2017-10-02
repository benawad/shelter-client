import React from 'react';
import { Alert, TouchableOpacity, Image } from 'react-native';
import { Content, Card, CardItem, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { graphql, gql } from 'react-apollo';

import House from './house.jpeg';

const ShelterCard = ({ pictureUrl, shower, food, occupancy, onClick }) => (
  <TouchableOpacity onPress={onClick}>
    <Card>
      {pictureUrl && (
        <CardItem cardBody>
          <Image source={House} style={{ height: 200, width: null, flex: 1 }} />
        </CardItem>
      )}
      <CardItem>
        <Left>
          {food && (
            <Button transparent>
              <Icon active={food} name="pizza" />
              <Text>Food Available</Text>
            </Button>
          )}
        </Left>
        <Body>
          {shower && (
            <Button transparent>
              <Icon active name="water" />
              <Text>Shower Available</Text>
            </Button>
          )}
        </Body>
        <Right>
          <Text>Occupancy: {occupancy}</Text>
        </Right>
      </CardItem>
    </Card>
  </TouchableOpacity>
);

class ShelterList extends React.Component {
  componentDidMount() {
    if (this.props.location.state) {
      Alert.alert(
        'Request Sent',
        "You have been added to the host's list, please wait for confirmation",
        [{ text: 'OK' }],
        { cancelable: true },
      );
    }
  }

  render() {
    const { data: { allShelters = [] }, history } = this.props;
    return (
      <Content>
        {allShelters.map(shelter => (
          <ShelterCard
            key={shelter.id}
            {...shelter}
            onClick={() => history.push('/ShelterDetails', shelter)}
          />
        ))}
      </Content>
    );
  }
}

const allSheltersQuery = gql`
  {
    allShelters {
      id
      occupancy
      food
      shower
      description
      pictureUrl
    }
  }
`;

export default graphql(allSheltersQuery)(ShelterList);
