import React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// type ProfileScreenNavigationProp = Props['navigation'];

// type ProfileScreenRouteProp = Props['route'];

const Footer = ({navigation, route}) => {
  return (
    <View>
      <Text>this is footer</Text>
      <Text>This is {route.params.name}'s profile</Text>
      <Button
        title="Go to Jane's profile"
        onPress={() => navigation.navigate('header')}
      />
    </View>
  );
};

export default Footer;
