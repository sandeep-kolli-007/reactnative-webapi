import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Text, Alert} from 'react-native';
import {useTreble} from 'treble-gsm';
import {Services} from '../../services/services';
import CommonLayout from '../shared/commonlayout';
import CustomButton from '../shared/custombutton';

const OSD = () => {
  const [{loadid}, Store] = useTreble();
  const navigation = useNavigation();
  const {updateshortagepieces} = Services();

  const shortage = () => {
    const stack: any = 'summary';
    updateshortagepieces(loadid);
    navigation.navigate(stack);
  };
  return (
    <CommonLayout>
      <View
        style={{
          alignItems: 'center',
          marginTop: '25%',
          height: 200,
          justifyContent: 'space-between',
        }}>
        <CustomButton color="#FF8800" stack="damage" text="Damage" textColor="white" width={240}></CustomButton>
        <CustomButton color="#990000" text="Shortage" textColor="white" width={240} onPress={shortage}></CustomButton>
        <CustomButton color="#6C0099" stack="overage" text="Overage" textColor="white" width={240}></CustomButton>
      </View>
    </CommonLayout>
  );
};

export default OSD;
