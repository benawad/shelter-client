import React from 'react';
import { Right, Icon, Left, Header, Container, Body, Title } from 'native-base';
import { Router, Route } from 'react-router-native';
import { ApolloClient, createNetworkInterface, ApolloProvider } from 'react-apollo';
import createHistory from 'history/createMemoryHistory';

import Home from './Home';
import GuestRegister from './GuestRegister';
import DonorRegister from './DonorRegister';
import CreateShelter from './CreateShelter';
import ShelterDetails from './ShelterDetails';
import ShelterList from './ShelterList';

const history = createHistory();

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:3030/graphql',
});

const client = new ApolloClient({
  networkInterface,
});

export default () => (
  <Router history={history}>
    <ApolloProvider client={client}>
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
        <Route exact path="/" component={Home} />
        <Route exact path="/GuestRegister" component={GuestRegister} />
        <Route exact path="/DonorRegister" component={DonorRegister} />
        <Route exact path="/CreateShelter" component={CreateShelter} />
        {/* <Route exact path="/" component={ShelterList} />
        <Route exact path="/ShelterDetails" component={ShelterDetails} /> */}
      </Container>
    </ApolloProvider>
  </Router>
);
