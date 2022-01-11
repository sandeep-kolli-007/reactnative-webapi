import React from 'react';
import {View, Text} from 'react-native';
import CommonLayout from '../shared/commonlayout';
import TextBox from '../shared/input';

const LoadInfo = () => {
  return (
    <CommonLayout hidefooter >
      <View>
        <TextBox label="Trailer Bar Code" inputgroup />
        <TextBox label="Load Display ID" styles={{marginTop: 16}} />
        <Text
          style={{
            color: 'white',
            fontWeight: '700',
            fontSize: 18,
            marginTop: 16,
            textDecorationLine: 'underline',
          }}>
          LOAD DETAILS
        </Text>
        <View
          style={{flexDirection: 'row', marginTop: 8, alignItems: 'center'}}>
          <Text style={{color: 'white', fontWeight: '900', fontSize: 16}}>
            Origin :{' '}
          </Text>
          <Text style={{color: 'white'}}> ProTrans Indianapolis</Text>
        </View>
        <View
          style={{flexDirection: 'row', marginTop: 8, alignItems: 'center'}}>
          <Text style={{color: 'white', fontWeight: '900', fontSize: 16}}>
            Destination :{' '}
          </Text>
          <Text style={{color: 'white'}}> PD Transport ENterprise LLC</Text>
        </View>
        <View
          style={{flexDirection: 'row', marginTop: 8, alignItems: 'center'}}>
          <Text style={{color: 'white', fontWeight: '900', fontSize: 16}}>
            Carrier Name :{' '}
          </Text>
          <Text style={{color: 'white'}}> J and P Trucking Inc</Text>
        </View>
        <View
          style={{flexDirection: 'row', marginTop: 8, alignItems: 'center'}}>
          <Text style={{color: 'white', fontWeight: '900', fontSize: 16}}>
            Trailer # :{' '}
          </Text>
          <Text style={{color: 'white'}}> 12345</Text>
        </View>

        <View style={{marginVertical: 24}}>
          <View
            style={{
              flexDirection: 'row',
              paddingBottom: 8,
              borderBottomWidth: 1,
            }}>
            <Text
              style={{
                color: 'white',
                width: '33%',
                textAlign: 'center',
                marginLeft: '33%',
              }}>
              Loaded
            </Text>
            <Text style={{color: 'white', width: '33%', textAlign: 'center'}}>
              Planned
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 8,
              borderBottomWidth: 1,
            }}>
            <Text style={{color: 'white', width: '33%', textAlign: 'center'}}>
              Qty
            </Text>
            <Text style={{color: 'white', width: '33%', textAlign: 'center'}}>
              0
            </Text>
            <Text style={{color: 'white', width: '33%', textAlign: 'center'}}>
              39
            </Text>
          </View>
          <View style={{flexDirection: 'row', paddingTop: 8}}>
            <Text style={{color: 'white', width: '33%', textAlign: 'center'}}>
              Weight
            </Text>
            <Text style={{color: 'white', width: '33%', textAlign: 'center'}}>
              0
            </Text>
            <Text style={{color: 'white', width: '33%', textAlign: 'center'}}>
              1582
            </Text>
          </View>
        </View>
      </View>
    </CommonLayout>
  );
};

export default LoadInfo;
