import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const SummaryInfoCard = () => {
  return (
    <View
      style={{
        height: 90,
        width: '100%',
        backgroundColor: 'white',
        marginTop: 16,
        flexDirection: 'row',
      }}>
      <View
        style={{width: '15%', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 40, color: '#0F1924'}}>1</Text>
      </View>
      <View style={{width: '70%',justifyContent:"center"}}>
        <Text style={{fontSize:20,color:"#0F1924"}}>Prod. #: 39203</Text>
        <Text style={{fontSize:20,color:"#0F1924"}}>Qty: 25000</Text>
        <Text style={{fontSize:20,color:"#0F1924"}}>Master #: 555738</Text>
      </View>
      <View style={{width: '15%', alignItems: 'center'}}>
        <Icon name="edit" size={30} color="#0F1924" solid style={{marginTop: 8}} />
      </View>
    </View>
  );
};

export default SummaryInfoCard;
