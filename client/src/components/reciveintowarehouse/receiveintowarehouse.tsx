import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';
import CommonLayout from '../shared/commonlayout';
import CustomButton from '../shared/custombutton';
import TextBox from '../shared/input';

const ReceiveIntoWareHouse = () => {
  const Navigation: any = useNavigation();
  return (
    <CommonLayout hidefooter>
      <View>
        <TextBox label="Shipment ID" inputgroup onPress={() => Navigation.navigate('searchresults')} />
        <Text style={{textAlign: 'center', color: 'white', marginTop: 16}}>----- OR -----</Text>

        <View style={{marginTop: 24, alignItems: 'center'}}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontWeight: '700',
              marginBottom: 16,
            }}>
            Search By
          </Text>
          <CustomButton
            text="Pro Number"
            style={{marginBottom: 16}}
            width={180}
            onPress={() =>
              Navigation.navigate('searchby', {
                searchby: 'Pro Number',
              })
            }
          />
          <CustomButton
            text="Packing Slip"
            style={{marginBottom: 16}}
            width={180}
            onPress={() =>
              Navigation.navigate('searchby', {
                searchby: 'Packing Slip',
              })
            }
          />
          <CustomButton
            text="Handling Unit"
            style={{marginBottom: 16}}
            width={180}
            onPress={() =>
              Navigation.navigate('searchby', {
                searchby: 'Handling Unit',
              })
            }
          />
          <CustomButton
            text={'Origin & Destination'}
            style={{marginBottom: 16}}
            width={180}
            onPress={() =>
              Navigation.navigate('searchby', {
                searchby: ['Origin', 'Destination'],
              })
            }
          />
          <CustomButton
            text={'PUL & Trip'}
            style={{marginBottom: 16}}
            width={180}
            onPress={() =>
              Navigation.navigate('searchby', {
                searchby: ['PUL Number ', ' Trip Id'],
              })
            }
          />
        </View>
      </View>
    </CommonLayout>
  );
};

export default ReceiveIntoWareHouse;
