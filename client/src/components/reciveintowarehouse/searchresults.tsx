import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Comments from './comments';
import Exception from './exception';
import HandlingUnit from './handlingunit';
import Parts from './parts';
import Shipment from './shipment';
const Tab = createMaterialTopTabNavigator();

const SearchResults = () => {
  const options: any = {
    tabBarLabelStyle: {
      fontSize: 9,
      fontWeight: '700',
      margin: 0,
    },
    tabBarActiveTintColor: '#fff',
    tabBarInactiveTintColor: '#0F1924',

    tabBarIndicatorStyle: {
      backgroundColor: '#0F1924',
      height: '100%',
    },
    tabBarStyle: {
      backgroundColor: 'white',
      borderTopWidth: 1,
    },
  };
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="shipment"
        component={Shipment}
        options={{
          ...options,
          tabBarIcon: d => <Icon name="truck" size={20} color={d.color} />,
        }}
      />
      <Tab.Screen
        name="Handling Units"
        component={HandlingUnit}
        options={{
          ...options,
          tabBarIcon: d => <Icon name="cube" size={20} color={d.color} />,
        }}
      />
      <Tab.Screen
        name="Parts"
        component={Parts}
        options={{
          ...options,
          tabBarIcon: d => <Icon name="th" size={20} color={d.color} />,
        }}
      />
      <Tab.Screen
        name={'Ex' + 'ceptions'}
        component={Exception}
        options={{
          ...options,
          tabBarIcon: d => <Icon name="ban" size={20} color={d.color} />,
        }}
      />
      <Tab.Screen
        name="Comments"
        component={Comments}
        options={{
          ...options,
          tabBarIcon: d => <Icon name="comment" size={20} color={d.color} solid />,
        }}
      />
    </Tab.Navigator>
  );
};

export default SearchResults;
