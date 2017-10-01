import React from 'react';
import { AsyncStorage, View } from 'react-native';
import { Right, Icon, Left, Header, Container, Body, Title } from 'native-base';
import { Switch, Router, Route } from 'react-router-native';
import { ApolloClient, createNetworkInterface, ApolloProvider } from 'react-apollo';
import createHistory from 'history/createMemoryHistory';
import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws';

import Home from './Home';
import GuestRegister from './GuestRegister';
import DonorRegister from './DonorRegister';
import CreateShelter from './CreateShelter';
import ShelterDetails from './ShelterDetails';
import ShelterList from './ShelterList';

const history = createHistory();

// const wsClient = new SubscriptionClient('ws://localhost:3030/subscriptions', {
//   reconnect: true,
// });

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:3030/graphql',
});

// const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(networkInterface, wsClient);

const client = new ApolloClient({
  networkInterface,
});

networkInterface.use([
  {
    applyMiddleware: async (req, next) => {
      if (!req.options.headers) {
        req.options.headers = {};
      }
      try {
        const guestId = await AsyncStorage.getItem('guestId');
        if (guestId) {
          req.options.headers['x-guest-id'] = guestId;
        }
      } catch (e) {
        console.log(e);
      }
      next();
    },
  },
]);

export default () => (
  <Router history={history}>
    <ApolloProvider client={client}>
      <View style={{ flex: 1 }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/">
            <Container>
              <Header>
                <Left>
                  <Icon onPress={() => history.goBack()} name="arrow-back" />
                </Left>
                <Body>
                  <Title>Shelter</Title>
                </Body>
                <Right />
              </Header>
              <Route exact path="/GuestRegister" component={GuestRegister} />
              <Route exact path="/DonorRegister" component={DonorRegister} />
              <Route exact path="/CreateShelter" component={CreateShelter} />
              <Route exact path="/shelters" component={ShelterList} />
              <Route exact path="/ShelterDetails" component={ShelterDetails} />
            </Container>
          </Route>
        </Switch>
      </View>
    </ApolloProvider>
  </Router>
);
