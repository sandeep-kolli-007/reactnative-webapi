import React from 'react';
import {View, Text, TouchableHighlight, Image} from 'react-native';
import CommonLayout from '../../shared/commonlayout';
import CustomButton from '../../shared/custombutton';
import SummaryInfoCard from './summaryinfocard';

const PieceSummary = () => {
  return (
    <CommonLayout   Rightbtn={<CustomButton text={'Finish'} stack={''}/>}>
      <View style={{alignItems: 'center', marginTop: 32}}>
        <TouchableHighlight
          style={{
            borderWidth: 10,
            marginBottom: 16,
            borderRadius: 10,
            borderColor: 'white',
          }}>
          <Image
            // source={{uri: 'file://' + img.path}}
            source={{
              uri: 'https://www.kindpng.com/picc/m/682-6820555_package-vector-corrugated-box-cartoon-cardboard-box-png.png',
            }}
            style={{
              width: 250,
              height: 250,
            }}></Image>
        </TouchableHighlight>
        <Text style={{color: 'white'}}>Change Photo</Text>
        <View style={{marginHorizontal: 16, flexDirection: 'column'}}>
          <SummaryInfoCard />
          <SummaryInfoCard />
        </View>
        <Text style={{color:"white",marginVertical:24,fontWeight:"700"}}>Add Product</Text>
      </View>
    </CommonLayout>
  );
};

export default PieceSummary;
