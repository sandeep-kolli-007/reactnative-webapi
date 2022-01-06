import React from 'react';
import {View, Text} from 'react-native';
import Addphoto from '../shared/camera/addphoto';
import CommonLayout from '../shared/commonlayout';
import CustomButton from '../shared/custombutton';
import Dropdown from '../shared/dropdown';
import {useNavigation} from '@react-navigation/core';

const OverageSummary = () => {
  const navigation :any= useNavigation();
  return (
    <CommonLayout>
      <View style={{margin: 16}}>
        <Dropdown label="Piece Type" data={['Pallet', 'Pallet']} />
        <View>
          <View style={{marginVertical: 16, alignItems: 'center'}}>
            <Addphoto
              text="Add Pallet Photo"
              // image={route?.params?.damagephoto}
              stack="overagesummary"
              imagename="palletphoto"
            />
            <Text style={{color: 'white', marginTop: 8, fontWeight: '700'}}>
              NONE
            </Text>
          </View>
          <View style={{marginVertical: 16, alignItems: 'center'}}>
            <Addphoto
              text="Add Shipment Label Photo"
              // image={route?.params?.damagephoto}
              stack="overagesummary"
              imagename="palletphoto"
            />
            <Text style={{color: 'white', marginTop: 8, fontWeight: '700'}}>
              NONE
            </Text>
          </View>
          <View style={{marginVertical: 16, alignItems: 'center'}}>
            <Addphoto
              text="Add Product Label Photo"
              // image={route?.params?.damagephoto}
              stack="overagesummary"
              imagename="palletphoto"
            />
            <Text style={{color: 'white', marginTop: 8, fontWeight: '700'}}>
              NONE
            </Text>
          </View>
          <View style={{marginVertical: 16, alignItems: 'center'}}>
            <Addphoto
              text="Add LTL Pro Label Photo"
              // image={route?.params?.damagephoto}
              stack="overagesummary"
              imagename="palletphoto"
            />
            <Text style={{color: 'white', marginTop: 8, fontWeight: '700'}}>
              NONE
            </Text>
          </View>
          <View style={{alignItems: 'center'}}>

            <CustomButton
              text="Confirm"
              color="#80B0E6"
              textColor="white" stack={"overagepieces"}></CustomButton>
          </View>
        </View>
      </View>
    </CommonLayout>
  );
};

export default OverageSummary;
