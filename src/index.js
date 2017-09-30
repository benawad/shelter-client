import React from 'react';
import { View } from 'react-native';
import { NativeRouter, Route } from 'react-router-native';

import Home from './Home';
import GuestRegister from './GuestRegister';
import DonorRegister from './DonorRegister';
import CreateShelter from './CreateShelter';
import ShelterDetails from './ShelterDetails';

export default () => (
  <NativeRouter>
    <View style={{ flex: 1 }}>
      <Route exact path="/" component={Home} />
      <Route exact path="/GuestRegister" component={GuestRegister} />
      <Route exact path="/DonorRegister" component={DonorRegister} />
      <Route exact path="/CreateShelter" component={CreateShelter} />
      <Route exact path="/ShelterDetails" component={ShelterDetails} />
    </View>
  </NativeRouter>
);
