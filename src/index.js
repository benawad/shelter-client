import React from 'react';
import { View } from 'react-native';
import { NativeRouter, Route } from 'react-router-native';

import Home from './Home';
import CreateShelter from './CreateShelter';
import GuestRegister from './GuestRegister';

export default () => (
  <NativeRouter>
    <View>
      <Route exact path="/" component={Home} />
      <Route path="/create-shelter" component={CreateShelter} />
      <Route path="/guest-register" component={GuestRegister} />
    </View>
  </NativeRouter>
);

// export default () => (
//   <ShelterDetails
//     {...{
//       id: 1,
//       occupancy: 12,
//       address: '123 ok drive',
//       food: true,
//       shower: true,
//       description:
//         'I am a description that could possibley really really long because people woudl put all kidns of stuf fher eso  we should accompnay for that and have our desisng handle that because it would be awful if it didnt 22 bby',
//     }}
//   />
// );
