import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Header from './src/components/header/header';
import Stacks from './src/components/stacks/stacks';
import Test from './src/components/testing/test';
import Treble from 'treble-gsm';
import Store from './src/components/store/store';
const App = () => {
  return (
    <>
      {/* <React.StrictMode> */}
      <Treble store={Store}>
        <Stacks />
        {/* <Test/> */}
      </Treble>
      {/* </React.StrictMode> */}
    </>
  );
};
export default App;
