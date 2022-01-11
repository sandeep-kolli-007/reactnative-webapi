import React from 'react';
import {View, Text, TextBase} from 'react-native';
import CommonLayout from '../shared/commonlayout';
import CustomButton from '../shared/custombutton';
import TextBox from '../shared/input';

const Shipment = () => {
  return (
    <CommonLayout>
      <View style={{marginHorizontal: 16}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 16}}>
          <Text style={{color: 'white', fontWeight: '700', fontSize: 16}}>PUL : </Text>
          <Text style={{color: 'white', fontWeight: '700', fontSize: 16}}>Trip Id : </Text>
          <Text style={{color: 'white', fontWeight: '700', fontSize: 16}}>Revision : </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: 'white'}}>S12374561</Text>
          <Text style={{color: 'white'}}>1234567894</Text>
          <Text style={{color: 'white'}}>1234567984</Text>
        </View>
        <View style={{marginTop: 16}}>
          <TextBox label="Quantity" />
          <TextBox label="Weight" />
          <TextBox label="Trailer" />
          <TextBox label="Delivery Note" />
          <TextBox label="Confirm Delivery Note" />
          <View style={{alignItems: 'center', marginVertical: 16}}>
            <CustomButton text="SAVE SHIPMENT" icon={'save'} width={170} />
          </View>
        </View>

        <View>
          <Text style={{color: 'white', fontWeight: '700', fontSize: 16, marginBottom: 16}}>Origin:</Text>
          <View style={{flexDirection: 'row', backgroundColor: 'white', borderRadius: 8, marginBottom: 16}}>
            <View style={{width: '30%', borderRightWidth: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 12, marginBottom: 8}}>Ship From</Text>
              <Text style={{fontSize: 18, fontWeight: '700', color: '#0F1924'}}>1236445</Text>
            </View>
            <View style={{width: '70%', padding: 8}}>
              <Text style={{fontSize: 16, fontWeight: '700'}}>Nagase</Text>
              <Text style={{color: '#0F1924', fontSize: 12}}>906 Peterson Drive</Text>
              <Text style={{color: '#0F1924', fontSize: 12}}>Elizabethtown KY 42701</Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={{color: 'white', fontWeight: '700', fontSize: 16, marginBottom: 16}}>Destination:</Text>
          <View style={{flexDirection: 'row', backgroundColor: 'white', borderRadius: 8, marginBottom: 16}}>
            <View style={{width: '30%', borderRightWidth: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 12, marginBottom: 8}}>Ship To</Text>
              <Text style={{fontSize: 18, fontWeight: '700', color: '#0F1924'}}>1236445</Text>
            </View>
            <View style={{width: '70%', padding: 8}}>
              <Text style={{fontSize: 16, fontWeight: '700'}}>PMW FOAM</Text>
              <Text style={{color: '#0F1924', fontSize: 12}}>4402Trade Center Blvd.,Laredo</Text>
              <Text style={{color: '#0F1924', fontSize: 12}}>TX78045</Text>
            </View>
          </View>
        </View>
        <View style={{alignItems: 'center', marginBottom: 16}}>
          <CustomButton text="Confirm Origin / Destination" width={250} />
        </View>
      </View>
    </CommonLayout>
  );
};

export default Shipment;
