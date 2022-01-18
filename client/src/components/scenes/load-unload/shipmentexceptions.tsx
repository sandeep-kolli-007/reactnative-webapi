import React from 'react';
import {View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CommonLayout from '../../shared/commonlayout';

const ShipmentExceptions = () => {
  const data = [
    {
      date: '01/07/2022',
    },
    {
      date: '01/07/2022',
    },
    {
      date: '01/07/2022',
    },
    {
      date: '01/07/2022',
    },
    {
      date: '01/07/2022',
    },
    {
      date: '01/07/2022',
    },
  ];
  return (
    <CommonLayout hidefooter>
      <View>
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              fontWeight: '700',
              marginTop: 16,
              marginBottom: 8,
            }}>
            Shipment Exceptions
          </Text>
          <Text style={{color: 'white', fontSize: 10}}>
            1 - NO CONSOL VS DELIV
          </Text>
          <Text style={{color: 'white', fontSize: 10}}>2 - NO DUE DATA</Text>
          <Text style={{color: 'white', fontSize: 10}}>
            3 - ALT HUB UNCLEAR
          </Text>
        </View>

        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              color: 'white',
              fontSize: 16,
              fontWeight: '700',
              marginTop: 16,
              marginBottom: 8,
              textDecorationLine: 'underline',
            }}>
            Hot Shipments Still on Stock
          </Text>

          <ScrollView horizontal>
            {data.map((r: any, index) => {
              return (
                <View style={{margin: 16, alignItems: 'center'}} key={index}>
                  <Icon name="cube" color={'white'} size={42} />
                  <Text style={{color: 'white', fontSize: 12, marginTop: 4}}>
                    {r.date}
                  </Text>
                </View>
              );
            })}
          </ScrollView>
        </View>
        <View>
          <Text
            style={{
              color: 'white',
              fontSize: 16,
              fontWeight: '700',
              marginTop: 16,
              marginBottom: 8,
              textAlign: 'center',
              textDecorationLine: 'underline',
            }}>
            Due Shipments Still on Stock
          </Text>

          <ScrollView horizontal>
            <View style={{margin: 16, alignItems: 'center'}}>
              <Icon name="cube" color={'white'} size={42} />
            </View>
          </ScrollView>
        </View>
        <View>
          <Text
            style={{
              color: 'white',
              fontSize: 16,
              fontWeight: '700',
              marginTop: 16,
              marginBottom: 8,
              textAlign: 'center',
              textDecorationLine: 'underline',
            }}>
            Inbond Shipments Uncancelled
          </Text>

          <ScrollView horizontal>
            <View style={{margin: 16, alignItems: 'center'}}>
              <Icon name="cube" color={'white'} size={42} />
            </View>
          </ScrollView>
        </View>
      </View>
    </CommonLayout>
  );
};

export default ShipmentExceptions;
