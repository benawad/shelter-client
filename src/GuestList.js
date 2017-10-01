import React from 'react';
import { Body, Content, List, ListItem, Text } from 'native-base';
import { compose, graphql, gql } from 'react-apollo';

const Request = ({ first, last, mutate, guestId, shelterId, name, phoneNumber, rooms }) => (
  <ListItem first={first} last={last}>
    <Body>
      <Text>{name}</Text>
      <Text>{phoneNumber}</Text>
      <Text>{`${rooms}`}</Text>
    </Body>
  </ListItem>
);

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
                key={`${x.shelter.id}|${x.guest.id}`}
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

const decideOnGuestMutation = gql`
  mutation($accepted: Boolean!, $requestId: Int!) {
    decideOnGuest(requestId: $requestId, accepted: $acceptedId) {
      ok
      errors {
        path
        message
      }
    }
  }
`;

const guestListQuery = gql`
  {
    guestList {
      rooms
      shelter {
        name
      }
      guest {
        name
        phoneNumber
      }
    }
  }
`;

export default compose(graphql(guestListQuery), graphql(decideOnGuestMutation))(GuestList);
