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

const AppStack = createStackNavigator({
  ReposList: {
    screen: ReposList,
  },
  RepoDetails: {
    screen: RepoDetails,
  },
});

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
