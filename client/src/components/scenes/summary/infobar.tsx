import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Text, TouchableHighlight, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useTreble} from 'treble-gsm';

const InfoBar = (props: any) => {
  const [{shipment, ispartialpiecestate}, Store] = useTreble();
  const navigation: any = useNavigation();
  const colors = {
    unconfirmed: '#CECECE',
    confirmed: '#28A746',
    overage: '#6C0099',
    damage: '#FF8800',
    shortage: '#990000',
  };
  const data: any = props.data;
  return (
    <>
      {data.map((res: any, index: number) => {
        return (
          <TouchableHighlight
            key={index}
            style={{marginBottom: 16}}
            onPress={ props.isoverage? () => {navigation.navigate('overagesummary')} :
           ()=>{
            Store.update('updatepiece', res.pieceId);
            Store.update('updateloadid', res.id);
            navigation.navigate(
              res.type === 'PRO' ? 'productscanning' : 'photoselect',
            );
      }
           }
          >
            <View
              style={{
                height: 50,
                backgroundColor: 'white',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: ispartialpiecestate ? 14 : 28,
                  backgroundColor:
                    res.pieceState === 'unconfirmed'
                      ? colors.unconfirmed
                      : res.PieceState === 'confirmed'
                      ? colors.confirmed
                      : res.PieceState === 'damaged'
                      ? colors.damage
                      : res.PieceState === 'shortage'
                      ? colors.shortage
                      : '',
                  height: 50,
                }}></View>
              {ispartialpiecestate && (
                <View
                  style={{
                    width: 14,
                    borderLeftColor: 'black',
                    borderLeftWidth: 1,
                    backgroundColor:
                      res.pieceState === 'unconfirmed'
                        ? colors.unconfirmed
                        : res.pieceState === 'confirmed'
                        ? colors.confirmed
                        : res.pieceState === 'damaged'
                        ? colors.damage
                        : res.pieceState === 'shortage'
                        ? colors.shortage
                        : '',
                    height: 50,
                  }}></View>
              )}
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: '700',
                  paddingLeft: 6,
                  color: '#0F1924',
                }}>
                {index + 1}
              </Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: 8,
                  alignItems: 'center',
                }}>
                <Icon name="print" size={20} color="#CECECE" solid />
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: '700',
                    flex: 1,
                    paddingLeft: 8,
                    color: '#0F1924',
                  }}>
                  {res.pieceId}
                </Text>
                <Icon name="edit" size={20} color="#CECECE" solid />
              </View>
            </View>
          </TouchableHighlight>
        );
      })}
    </>
  );
};

export default InfoBar;
