import React from 'react';
import { View, Text } from 'react-native';
import { Content } from 'native-base';

import Container from './Container';
import { colors } from './constants';

export default ({ location: { state: { description, occupancy, food, shower } } }) => (
  <Content>
    <Text>{description}</Text>
    <Text style={{ fontSize: 22 }}>Occupancy: {occupancy}</Text>
    {food && <Text style={{ fontSize: 20 }}>🍽 Food Available</Text>}
    {shower && <Text style={{ fontSize: 20 }}>🚿 Shower Available</Text>}
  </Content>
);
