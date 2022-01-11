import React, {useState} from 'react';
import {View, Text} from 'react-native';
import CommonLayout from '../shared/commonlayout';
import CustomButton from '../shared/custombutton';
import TextBox from '../shared/input';

const ArriveDepart = () => {
  const [isShow, setisShow] = useState(false);
  return (
    <CommonLayout
      hidefooter={!isShow}
      isButtons={
        <>
          <CustomButton text="Arrive Trailer" />
          <CustomButton text="Depart Trailer" />
        </>
      }>
      <View style={{marginHorizontal: 16}}>
        <TextBox label="Load" />
        <Text style={{textAlign: 'center', color: 'white', marginTop: 16}}>
          ----- OR -----
        </Text>
        <TextBox label="Trailer" />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 16,
          }}>
          <CustomButton
            text="SEARCH"
            icon="search"
            onPress={() => setisShow(!isShow)}
          />
          <CustomButton text="SCAN" icon="barcode" />
        </View>
      </View>
      {isShow && (
        <View style={{margin: 16}}>
          <Text style={{color: 'white', textDecorationLine: 'underline'}}>
            Previous Stop:
          </Text>
          <Text style={{color: 'white'}}>NULL</Text>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View
              style={{
                backgroundColor: 'white',
                height: 100,
                padding: 8,
                marginTop: 8,
                width: '48%',
                borderRadius: 4,
                elevation: 5,
              }}>
              <Text
                style={{
                  color: '#0F1924',
                  fontWeight: '700',
                  textDecorationLine: 'underline',
                  marginBottom: 8,
                }}>
                Current Stop:
              </Text>
              <Text style={{color: '#0F1924'}}>ProTrans Indianapolis</Text>
              <Text style={{color: '#0F1924'}}>2405 S. West St</Text>
              <Text style={{color: '#0F1924'}}>Indianapolis,IN 46225 </Text>
            </View>
            <View
              style={{
                backgroundColor: 'white',
                height: 100,
                padding: 8,
                marginTop: 8,
                width: '48%',
                borderRadius: 4,
                elevation: 5,
              }}>
              <Text
                style={{
                  color: '#0F1924',
                  fontWeight: '700',
                  textDecorationLine: 'underline',
                  marginBottom: 8,
                }}>
                Carrier:
              </Text>
              <Text style={{color: '#0F1924'}}>Dayton Frieght Lines</Text>
              <Text style={{color: '#0F1924'}}>Trailer: 504151</Text>
            </View>
          </View>
          <Text
            style={{
              color: 'white',
              textDecorationLine: 'underline',
              marginTop: 8,
            }}>
            Next Stop:
          </Text>
          <Text style={{color: 'white'}}>NULL</Text>
        </View>
      )}
    </CommonLayout>
  );
};

export default ArriveDepart;
