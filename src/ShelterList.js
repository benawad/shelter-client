import React from 'react';
import { View, Text, Image } from 'react-native';
import { Icon, Card, ListItem, Button } from 'react-native-elements';

import Container from './Container';

const ShelterCard = ({ shower, food, occupancy }) => (
  <Card>
    <View>
      <Text style={{ fontSize: 22 }}>Occupancy: {occupancy}</Text>
      {food && <Text style={{ fontSize: 20 }}>🍽 Food Available</Text>}
      {shower && <Text style={{ fontSize: 20 }}>🚿 Shower Available</Text>}
    </View>
  </Card>
);

export default ({ shelters }) => (
  <Container>{shelters.map(shelter => <ShelterCard key={shelter.id} {...shelter} />)}</Container>
);
