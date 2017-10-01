import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

import Container from './Container';
import { colors } from './constants';

export default ({ description, occupancy, food, shower }) => (
  <Container>
    <View style={{ flex: 8 }}>
      <Text>{description}</Text>
      <Text style={{ fontSize: 22 }}>Occupancy: {occupancy}</Text>
      {food && <Text style={{ fontSize: 20 }}>🍽 Food Available</Text>}
      {shower && <Text style={{ fontSize: 20 }}>🚿 Shower Available</Text>}
    </View>

    <View style={{ flex: 1 }}>
      <Button
        backgroundColor={colors.primary}
        title="Housing Request"
        style={{ marginTop: 500 }}
        large
        raised
      />
    </View>
  </Container>
);
