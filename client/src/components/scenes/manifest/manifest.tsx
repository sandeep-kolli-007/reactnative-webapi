import React from 'react';
import {View, Text} from 'react-native';
import CommonLayout from '../../shared/commonlayout';
import TextBox from '../../shared/input';

const manifest = () => {
  return (
    <CommonLayout>
      <View>
        <TextBox label="Trailer Bar Code" inputgroup />
      </View>
    </CommonLayout>
  );
};

export default manifest;
