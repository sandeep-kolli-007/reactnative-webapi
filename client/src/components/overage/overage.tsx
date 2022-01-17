import React from 'react';
import {View, Text} from 'react-native';
import CommonLayout from '../shared/commonlayout';
import CustomButton from '../shared/custombutton';
import TextBox from '../shared/input';

const Overage = () => {
  return (
     <CommonLayout Rightbtn={<CustomButton text={'Next'} stack={"overagepieces"}/>} >
      <View style={{marginVertical:"50%",marginHorizontal:"5%"}}>
              <TextBox align="center" label="How many pieces over?"></TextBox>
      </View>
 </CommonLayout> 
  );
};

export default Overage;
