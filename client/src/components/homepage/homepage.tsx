import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CommonLayout from '../shared/commonlayout';

//*Data to be mapped
const data = [
  {
    icon: 'tag',
    title: 'Confirm',
  },
  {
    icon: 'sign-in-alt',
    title: 'Arrive/Depart',
  },
  {
    icon: 'truck-loading',
    title: 'Load/Unload',
  },
  {
    icon: 'columns',
    title: 'Split Order',
  },
  {
    icon: 'stopwatch-20',
    title: 'Dock Count',
  },
  {
    icon: 'file-alt',
    title: 'Manifest',
  },
  {
    icon: 'warehouse',
    title: 'Trailer ID Location',
  },
];
const Homepage = ({navigation}: any) => {
  return (
    <CommonLayout>
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        {data.map(e => {
          return (
            <View
              key={e.icon}
              style={{
                width: '33.33%',
                display: 'flex',
                marginVertical: 16,
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('shipmentscanning')}>
                <View
                  style={{
                    backgroundColor: 'white',
                    height: 80,
                    width: 80,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 8,
                  }}>
                  <Icon name={e.icon} size={30} color="#000" />
                </View>
              </TouchableOpacity>
              <Text
                style={{
                  color: 'white',
                  fontSize: 12,
                  textAlign: 'center',
                  marginTop: 8,
                }}>
                {e.title}
              </Text>
            </View>
          );
        })}
      </View>
    </CommonLayout>
  );
};

export default Homepage;
