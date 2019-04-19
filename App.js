import React from 'react'; 
import {View } from 'react-native'; 
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LandingActivity from './LandingActivity.js';
import LUTActivity from './LUTActvity.js';
import CandyTrackerActivity from './CandyTrackerActivity.js';

const AppNavigator = createStackNavigator({
  First: { screen: LandingActivity },

  LUTActivity: { screen: LUTActivity },

  CandyTrackerActivity: { screen: CandyTrackerActivity},
});

const AppContainer = createAppContainer(AppNavigator);
export default () => <View style={{ flex: 1 }}><AppContainer /></View>;