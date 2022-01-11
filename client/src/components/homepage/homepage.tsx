import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CommonLayout from '../shared/commonlayout';
import {colors} from '../../colors';
import {styles} from './style';
// * Data to be mapped
const data = [
  {
    icon: 'tag',
    title: 'Confirm',
    stack: 'shipmentscanning',
  },
  {
    icon: 'sign-in-alt',
    title: 'Arrive/Depart',
    stack: 'arrivedepart',
  },
  {
    icon: 'truck-loading',
    title: 'Load/Unload',
    stack: 'loadunload',
  },
  {
    icon: 'columns',
    title: 'Split Order',
    stack: 'splitorder',
  },
  {
    icon: 'stopwatch-20',
    title: 'Dock Count',
    stack: 'dockcount',
  },
  {
    icon: 'file-alt',
    title: 'Manifest',
    stack: 'manifest',
  },
  {
    icon: 'warehouse',
    title: 'Trailer ID Location',
    stack: 'shipmentscanning',
  },
  {
    icon: 'building',
    title: 'Receive into Warehouse',
    stack: 'receiveintowarehouse',
  },
];
const Homepage = ({navigation}: any) => {
  return (
    <CommonLayout>
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        {data.map(e => {
          return (
            <View key={e.icon} style={styles.iconCardColumn}>
              <TouchableOpacity onPress={() => navigation.navigate(e.stack)}>
                <View style={styles.iconCard}>
                  <Icon name={e.icon} size={30} color={colors.primary} solid />
                </View>
              </TouchableOpacity>
              <Text style={styles.text}>{e.title}</Text>
            </View>
          );
        })}
      </View>
    </CommonLayout>
  );
};

export default Homepage;
