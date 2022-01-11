import React from 'react';
import {View, Text} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import LoadInfo from './loadInfo';
import HandlingUnits from './HandlingUnits';
import Exception from './exceptions';
import Photo from './photos';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {color} from 'react-native-reanimated';

const Tab = createMaterialTopTabNavigator();
const LoadUnload = () => {
  const options: any = {
    tabBarLabelStyle: {
      fontSize: 9,
      fontWeight: '700',
    },
     tabBarActiveTintColor: '#fff',
     tabBarInactiveTintColor: '#0F1924',

    tabBarIndicatorStyle: {
      backgroundColor: '#0F1924',
      // elevation: 5,
      height: '100%',
    },
    tabBarStyle: {
      backgroundColor: 'white',
      // elevation:5
      borderTopWidth:1
    },
  };
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Load Info"
        component={LoadInfo}
        options={{
          ...options,
          tabBarIcon: (d) => <Icon name="truck" size={20} color={d.color} />,
        }}
      />
      <Tab.Screen
        name={"Handling Unit"+"s"}
        component={HandlingUnits}
        options={{
          ...options,
          tabBarIcon: (d) => <Icon name="cube" size={20} color={d.color} />,
        }}
      />
      <Tab.Screen
        name="Exceptions"
        component={Exception}
        options={{
          ...options,
          tabBarIcon: (d) => <Icon name="ban" size={20} color={d.color} />,
        }}
      />
      <Tab.Screen
        name="Photos"
        component={Photo}
        options={{
          ...options,
          tabBarIcon: (d) => <Icon name="camera" size={20} color={d.color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default LoadUnload;
