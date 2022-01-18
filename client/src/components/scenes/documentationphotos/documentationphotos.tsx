import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CommonLayout from '../../shared/commonlayout';
import CustomButton from '../../shared/custombutton';
import TextBox from '../../shared/input';

const DocumentationPhotos = () => {

    const data=[
        "BOL","Carrier Pro","Packing Slip","PUL Document"
    ]
  return (
    <CommonLayout Rightbtn={<CustomButton text='Save' stack={"summary"}/>}>
  {data.map(labels=>{
      return(
        <View style={{flexDirection: 'row', alignItems: 'center'}} key={labels}>
        <TextBox label={labels} styles={{flex: 1}} />
        <Icon name={'camera'} size={36} color={'white'} style={{paddingHorizontal: 16, marginTop: 4}} />
      </View>
      )
  })}
    </CommonLayout>
  );
};

export default DocumentationPhotos;
