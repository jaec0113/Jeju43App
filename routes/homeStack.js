import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/home';
import MainMenu from '../screens/mainMenu';
import StoryDetails from '../screens/storyDetails';

const {Navigator, Screen} = createStackNavigator();

const Screens = () => (
  <Navigator
    screenOptions={{
      headerStyle: {backgroundColor: '#000'},
      headerTintColor: '#fff',
    }}>
    <Screen name="Home" component={Home} title="Home" />
    <Screen name="MainMenu" component={MainMenu} title="Main Menu" />
    <Screen
      name="StoryDetails"
      component={StoryDetails}
      title="Story Details"
    />
  </Navigator>
);

export const HomeStack = () => <Screens />;
