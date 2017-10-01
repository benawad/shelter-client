import React from 'react';
import { Image } from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base';
import { graphql, gql } from 'react-apollo';

const ShelterCard = ({ shower, food, occupancy }) => (
  <Card>
    <CardItem cardBody>
      <Image source={{}} style={{ height: 200, width: null, flex: 1 }} />
    </CardItem>
    <CardItem>
      <Left>
        {food && (
          <Button transparent>
            <Icon active name="thumbs-up" />
            <Text>Food Available</Text>
          </Button>
        )}
      </Left>
      <Body>
        {shower && (
          <Button transparent>
            <Icon active name="chatbubbles" />
            <Text>Shower Available</Text>
          </Button>
        )}
      </Body>
      <Right>
        <Text>Occupancy: {occupancy}</Text>
      </Right>
    </CardItem>
  </Card>
);

const ShelterList = ({ data: { allShelters = [] } }) => (
  <Container>
    <Header />
    <Content>{allShelters.map(shelter => <ShelterCard key={shelter.id} {...shelter} />)}</Content>
  </Container>
);

const allSheltersQuery = gql`
  {
    allShelters {
      id
      occupancy
      food
      shower
    }
  }
`;

export default graphql(allSheltersQuery)(ShelterList);
