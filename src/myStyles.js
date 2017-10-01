import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import {colors} from './constants';

export const styles = StyleSheet.create({
  lolpadding: {
    flex: 1,
  },

  image: {
    paddingTop: 50,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 3,
  },

  buttonContainer: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'stretch',
  },

  donorButton: {
    flex: 1,
    paddingBottom: 50,
    justifyContent: 'flex-end',
  },
  userButton: {
    flex: 1,
    justifyContent: 'flex-start',
  },
	
	button:{
		marginLeft:10,
		marginRight:10,
		backgroundColor: colors.primary,
	},

  buttonText: {
    padding: 20,
    color: 'white',
		fontWeight: 'bold',
  },
});

