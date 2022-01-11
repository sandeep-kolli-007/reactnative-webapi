import React from 'react';
import {View, Text} from 'react-native';
import CommonLayout from '../shared/commonlayout';
import CustomButton from '../shared/custombutton';
import TextBox from '../shared/input';

const HandlingUnit = () => {
  return (
    <CommonLayout
      isButtons={
        <>
          <View></View>
          <CustomButton text="Confirm" />
        </>
      }>
      <View>
        <TextBox label="Default Location" />
        <View style={{marginTop: 16, flexDirection: 'row', justifyContent: 'space-around'}}>
          <View>
            <Text style={{color: 'white', fontSize: 16, fontWeight: '700'}}>Total Qty</Text>
            <Text style={{color: 'white'}}>14</Text>
          </View>
          <View>
            <Text style={{color: 'white', fontSize: 16, fontWeight: '700'}}>Total Wgt</Text>
            <Text style={{color: 'white'}}>4000</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 16}}>
          <Text style={{color: 'white', fontSize: 18, fontWeight: '700', marginVertical: 8}}>Handling Units</Text>
          <CustomButton text="Print Labels" small width={100} />
        </View>
        <View>
          <TextBox label="Qty" />
          <TextBox label="Type" />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 16,
          }}>
          <TextBox label="L" styles={{width: '20%'}} keyboardType="numeric" />
          <TextBox label="W" styles={{width: '20%'}} keyboardType="numeric" />
          <TextBox label="H" styles={{width: '20%'}} keyboardType="numeric" />
        </View>
      </View>
    </CommonLayout>
  );
};

export default HandlingUnit;
