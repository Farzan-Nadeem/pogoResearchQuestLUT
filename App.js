import React from 'react'; 
import {View } from 'react-native'; 
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LandingActivity from './LandingActivity.js';
import LUTActivity from './LUTActvity.js';
import CandyTrackerActivity from './CandyTrackerActivity.js';
import AddPokemonTrackerActivity from './AddPokemonTrackerActivity.js';

const AppNavigator = createStackNavigator({
  LandingActivity: { screen: LandingActivity },

  LUTActivity: { screen: LUTActivity },

  CandyTrackerActivity: { screen: CandyTrackerActivity},

  AddPokemonTrackerActivity : { screen : AddPokemonTrackerActivity },
});

const AppContainer = createAppContainer(AppNavigator);
export default () => <View style={{ flex: 1 }}><AppContainer /></View>;