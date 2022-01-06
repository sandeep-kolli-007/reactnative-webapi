import React from 'react';
import {View, Text} from 'react-native';
import CommonLayout from '../shared/commonlayout';
import InfoBar from '../summary/infobar';

const OveragePieces = () => {
  const dummy = [
    {
        pieceId: 'Overage Pc-1',
        pieceState:"unconfirmed"
    },
  ];
  return (
    <CommonLayout>
      <View style={{  margin:16,height: 500,justifyContent:"center"}}>
        <InfoBar data={dummy} isoverage/>
      </View>
    </CommonLayout>
  );
};

export default OveragePieces;
