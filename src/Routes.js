import React from 'react';
import {Image} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import EmailScreen from './screens/EmailScreen';
import PasswordScreen from './screens/PasswordScreen';
import ReposList from './screens/ReposList';
import RepoDetails from './screens/RepoDetails';

const AuthStack = createStackNavigator({
  EmailScreen: {
    screen: EmailScreen,
    navigationOptions: {
      header: null,
    },
  },
  PasswordScreen: {
    screen: PasswordScreen,
    navigationOptions: {
      header: null,
    },
  },
});

const AppStack = createStackNavigator(
  {
    ReposList: {
      screen: ReposList,
      navigationOptions: {
        headerTitle: (
          <Image source={require('./assets/icons/github-brand.png')} />
        ),
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
      },
    },
    RepoDetails: {
      screen: RepoDetails,
      navigationOptions: ({navigation}) => ({
        title: navigation.state.params.name,
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
      }),
    },
  },
  {
    headerLayoutPreset: 'center',
  },
);

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      AuthStack,
      AppStack,
    },
    {
      initialRouteName: 'AuthStack',
    },
  ),
);

export default AppContainer;
