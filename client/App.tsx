import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Header from './src/components/scenes/header/header';
import Stacks from './src/components/scenes/stacks/stacks';
import Test from './src/components/scenes/testing/test';
import Treble from 'treble-gsm';
import Store from './src/components/store/store';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Homepage from './src/components/scenes/homepage/homepage';
import ShipmentScanning from './src/components/scenes/shipmentscanning/shipmentscanning';

const Drawer = createDrawerNavigator();
const App = () => {
  return (
    <>
      {/* <React.StrictMode> */}
      <Treble store={Store}>
        <Stacks />
{/* <NavigationContainer>
   <Drawer.Navigator>
          <Drawer.Screen name="stackss" component={Stacks} />
        </Drawer.Navigator>
</NavigationContainer> */}
       
        {/* <Test/> */}
      </Treble>
      {/* </React.StrictMode> */}
    </>
  );
};
export default App;
