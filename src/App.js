import React from 'react';
import {StatusBar} from 'react-native';
import Routes from './Routes';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Routes />
    </>
  );
};

export default App;
