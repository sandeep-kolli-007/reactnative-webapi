import React from 'react';
import {View, Text} from 'react-native';
import CommonLayout from '../shared/commonlayout';
import CustomButton from '../shared/custombutton';
import TextBox from '../shared/input';

const LoadingTools = () => {
  return (
    <CommonLayout hidefooter>
      <View style={{marginHorizontal: 16}}>
        <Text
          style={{
            color: 'white',
            fontSize: 18,
            fontWeight: '700',
            marginTop: 16,
            marginBottom: 8,
            textAlign: 'center',
          }}>
          Loading Tools
        </Text>
        <TextBox label="Number of Load Bars Loaded" />
        <TextBox label="Number of Load Straps Loaded" />
        <TextBox label="Number of Tension Bars Loaded" />
        <TextBox label="Number of Air Bags Loaded" />
        <TextBox label="Number of Racks Loaded" />
        <View style={{alignItems:"center",marginVertical:16}}>
            <CustomButton text='Save Loading Tools' width={200} icon={"save"} color='#80B0E6' textColor='white'  />
        </View>
      </View>
    </CommonLayout>
  );
};

export default LoadingTools;
