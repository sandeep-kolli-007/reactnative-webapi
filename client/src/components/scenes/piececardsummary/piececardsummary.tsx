import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import CommonLayout from '../../shared/commonlayout';
import { colors } from '../../../colors';
import CustomButton from '../../shared/custombutton';
const PieceCardSummary = () => {
  const data = [
    {state:"confirmed",pieceId: 39203, qty: 25000, totalqty: 25000},
    {state:"damage",pieceId: 456811, qty: 5000, totalqty: 6000},
  ];
 
  return (
    <CommonLayout isButtons={<><View></View><View><CustomButton text={'Next Piece'} stack={"summary"}/></View></>}>
      <View style={{marginTop: 48}}>
        {data.map((res, index) => {
          return (
            <TouchableHighlight key={index} style={{marginBottom: 16}} onPress={()=>{}}>
              <View
                style={{
                  height: 50,
                  backgroundColor: 'white',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    width: 28,
                    backgroundColor: colors[res.state],
                    height: 50,
                  }}></View>

                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 8,
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: '700',
                      paddingLeft: 6,
                      color: '#0F1924',
                    }}>
                    P#: {res.pieceId}
                  </Text>
                  <Text
                    style={{
                      fontWeight: '700',
                      paddingLeft: 6,
                      color: '#0F1924',
                    }}>
                    QTY: {res.qty} of {res.totalqty}
                  </Text>
                </View>
              </View>
            </TouchableHighlight>
          );
        })}
      </View>
    </CommonLayout>
  );
};

export default PieceCardSummary;
