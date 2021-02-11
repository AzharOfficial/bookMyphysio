import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { View, Text, Dimensions } from 'react-native';

import { HarmoniaSans } from './src/utils';
import { Login } from './src/screens';
import { Register } from './src/screens';
import { Welcome } from './src/screens';
import EStyleSheet from 'react-native-extended-stylesheet';

let { height, width } = Dimensions.get('window');

const App = () => {
  // useEffect(() => {
  //   EStyleSheet.build({
  //     $rem: width > 340 ? 18 : 16,
  //   });
  // }, []);

  return <Login />;
  // return <Welcome />;
  // return <Register />;
};

export default App;
