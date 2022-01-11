import React from 'react';
import {View, Text} from 'react-native';
import CommonLayout from '../shared/commonlayout';
import CustomButton from '../shared/custombutton';
import TextBox from '../shared/input';

const HandlingUnits = () => {
  return (
    <CommonLayout hidefooter>
      <View>
        <TextBox label="Handling Unit" />
        <TextBox label="Trailer" />
        <View style={{alignItems: 'center'}}>
          <CustomButton
            text="ADD"
            icon={'plus-circle'}
            style={{marginTop: 16}}
          />
        </View>
        <View>
          <View></View>
          <View></View>
          <View></View>
        </View>
      </View>
    </CommonLayout>
  );
};

export default HandlingUnits;
