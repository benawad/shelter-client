import React from 'react';
import { View } from 'react-native';
import { Button, Icon, Body, Content, List, ListItem, Text } from 'native-base';
import { graphql, gql } from 'react-apollo';

const guestListQuery = gql`
  {
    guestList {
      rooms
      shelter {
        id
        name
      }
      guest {
        id
        name
        phoneNumber
      }
    }
  }
`;

const handleMutate = (mutate, guestId, shelterId, accepted) => {
  mutate({
    variables: { guestId, shelterId, accepted },
    update: (store) => {
      const data = store.readQuery({ query: guestListQuery });
      data.guestList = data.guestList.filter(
        x => x.shelter.id !== shelterId || x.guest.id !== guestId,
      );
      store.writeQuery({ query: guestListQuery, data });
    },
  });
};

const request = ({ first, last, mutate, guestId, shelterId, name, phoneNumber, rooms }) => (
  <ListItem style={{ flex: 1, flexDirection: 'row' }} first={first} last={last}>
    <View style={{ flex: 1 }}>
      <Button onPress={() => handleMutate(mutate, guestId, shelterId, true)} success>
        <Icon name="checkmark" />
      </Button>
    </View>
    <Body style={{ flex: 4, flexDirection: 'row' }}>
      <View style={{ flex: 1 }}>
        <Text>{name}</Text>
        <Text>{phoneNumber}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text>{`Rooms: ${rooms}`}</Text>
      </View>
    </Body>
    <View style={{ flex: 1 }}>
      <Button onPress={() => handleMutate(mutate, guestId, shelterId, false)} danger>
        <Icon name="close" />
      </Button>
    </View>
  </ListItem>
);

const decideOnGuestMutation = gql`
  mutation($accepted: Boolean!, $shelterId: Int!, $guestId: Int!) {
    decideOnGuest(guestId: $guestId, shelterId: $shelterId, accepted: $accepted) {
      ok
      errors {
        path
        message
      }
    }
  }
`;

const Request = graphql(decideOnGuestMutation)(request);

const GuestList = ({ data: { loading, guestList = [] } }) => {
  if (loading) {
    return null;
  }

  const lists = {};

  guestList.forEach((x) => {
    if (x.shelter.name in lists) {
      lists[x.shelter.name].push(x);
    } else {
      lists[x.shelter.name] = [x];
    }
  });

  const theList = [];

  Object.entries(lists).forEach(([k, v]) => {
    theList.push({ title: k });
    theList.push(...v);
  });

  return (
    <Content>
      <List>
        {theList.map(
          (x, i) =>
            (x.title ? (
              <ListItem itemDivider key={x.title} first={i === 0} last={i === theList.length - 1}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{x.title}</Text>
              </ListItem>
            ) : (
              <Request
                first={i === 0}
                last={i === theList.length - 1}
                key={i}
                shelterId={x.shelter.id}
                guestId={x.guest.id}
                name={x.guest.name}
                phoneNumber={x.guest.phoneNumber}
                rooms={x.rooms}
              />
            )),
        )}
      </List>
    </Content>
  );
};

export default graphql(guestListQuery)(GuestList);
