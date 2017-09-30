import React from 'react';
import ShelterList from './ShelterList';

export default () => (
  <ShelterList
    shelters={[
      {
        id: 1,
        occupancy: 12,
        address: '123 ok drive',
        food: true,
        shower: true,
        description:
          'I am a description that could possibley really really long because people woudl put all kidns of stuf fher eso  we should accompnay for that and have our desisng handle that because it would be awful if it didnt 22 bby',
      },
    ]}
  />
);
