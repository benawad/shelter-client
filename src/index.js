import React from 'react';
import { View } from 'react-native';
import { NativeRouter, Route } from 'react-router-native';

import Home from './Home';
import CreateShelter from './CreateShelter';
import GuestRegister from './GuestRegister';

export default () => (
  <NativeRouter>
    <Route exact path="/" component={Home} />
  </NativeRouter>
);
