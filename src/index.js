import React from 'react';
import { View } from 'react-native';
import { NativeRouter, Route } from 'react-router-native';
import { ApolloClient, createNetworkInterface, ApolloProvider } from 'react-apollo';

import Home from './Home';
import GuestRegister from './GuestRegister';
import DonorRegister from './DonorRegister';
import CreateShelter from './CreateShelter';
import ShelterDetails from './ShelterDetails';
import ShelterList from './ShelterList';

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:3030/graphql',
});

const client = new ApolloClient({
  networkInterface,
});

export default () => (
  <NativeRouter>
    <ApolloProvider client={client}>
      <View style={{ flex: 1 }}>
        {/* <Route exact path="/" component={Home} />
        <Route exact path="/GuestRegister" component={GuestRegister} />
        <Route exact path="/DonorRegister" component={DonorRegister} />
        <Route exact path="/CreateShelter" component={CreateShelter} />
        <Route exact path="/ShelterDetails" component={ShelterDetails} /> */}
        <Route exact path="/" component={ShelterList} />
      </View>
    </ApolloProvider>
  </NativeRouter>
);
