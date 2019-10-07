import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import EmailScreen from './screens/EmailScreen';

const AuthStack = createStackNavigator({
  EmailScreen: {
    screen: EmailScreen,
    navigationOptions: {
      header: null,
    },
  },
});

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      AuthStack,
    },
    {
      initialRouteName: 'AuthStack',
    },
  ),
);

export default AppContainer;
