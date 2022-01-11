import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import ShipmentExceptions from './shipmentexceptions';
import LoadingTools from './loadingtools';
import ExceptionTab from './exception-tab';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Tab = createMaterialBottomTabNavigator();

const Exception = () => {
  return (
    <Tab.Navigator
      barStyle={{backgroundColor: 'white'}}
      activeColor="#0F1924"
      inactiveColor="grey">
      <Tab.Screen
        name={"Exception"+"s"}
        component={ExceptionTab}
        options={{tabBarIcon: d => <Icon name="ban" color={d.color}  size={16}/>}}
      />
      <Tab.Screen
        name="Shipment Exceptions"
        component={ShipmentExceptions}
        options={{
          tabBarIcon: d => <Icon name="truck-loading" color={d.color} size={16} />,
        }}
      />
      <Tab.Screen
        name="Loading Tools"
        component={LoadingTools}
        options={{tabBarIcon: d => <Icon name="tools" color={d.color} size={16} />}}
      />
    </Tab.Navigator>
  );
};

export default Exception;
