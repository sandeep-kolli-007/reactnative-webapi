import React, {useEffect, useState} from 'react';
import {View, Text, NativeModules, Image, Alert, Pressable} from 'react-native';
import {TextInput, TouchableHighlight, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CommonLayout from '../shared/commonlayout';
import CustomButton from '../shared/custombutton';
import TextBox from '../shared/input';
import {useNavigation} from '@react-navigation/core';

const SelectPhoto = () => {
  const navigation: any = useNavigation();
  const [retrivedimages, setretrivedimages] = useState<Array<any>>([
    {imageurl: 'https://www.ajot.com/images/uploads/article/690-cardboard-pallets.jpg'},
    {imageurl: 'https://www.ajot.com/images/uploads/article/690-cardboard-pallets.jpg'},
    {imageurl: 'https://www.ajot.com/images/uploads/article/690-cardboard-pallets.jpg'},
  ]);
  const {GreetModule, LoadsModule} = NativeModules;

  // const grpc = async () => {
  //   await LoadsModule.Message('s', (res: any) => {
  //     setretrivedimages(res[0].images);
  //   });
  // };
  // useEffect(() => {
  //   grpc();
  // }, []);
  return (
    <CommonLayout isnavigation navigationtext="Confirm">
      <View style={{flex: 1, alignItems: 'center', marginTop: 16}}>
        <CustomButton text={'Shippers L&C'} style={{marginBottom: 16}} />
        {retrivedimages.map((res: any, index: number) => {
          return (
            <View key={index} style={{flex: 1, marginBottom: 32}}>
              <Pressable
                onPress={() => {
                  retrivedimages.map(res => (res.Selected = 0));
                  retrivedimages[index] = {
                    ...retrivedimages[index],
                    Selected: 1,
                  };
                  setretrivedimages([...retrivedimages]);
                }}
                style={{
                  borderWidth: 10,
                  marginTop: 16,
                  borderRadius: 10,
                  borderColor: res.Selected === 1 ? '#80B0E6' : 'white',
                }}>
                <Image
                  // source={{uri: 'file://' + img.path}}
                  source={{uri: res.imageurl}}
                  style={{
                    width: 250,
                    height: 250,
                  }}></Image>
              </Pressable>
              <TextBox label="Piece Amount" />
            </View>
          );
        })}
        <Pressable onPress={() => navigation.navigate('information')}>
          <View
            style={{
              height: 270,
              width: 270,
              backgroundColor: 'white',
              borderRadius: 10,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name="camera" size={32} color="#0F1924"></Icon>
            <Text style={{marginTop: 8, color: '#0F1924'}}>OTHER PHOTO</Text>
          </View>
        </Pressable>
      </View>
    </CommonLayout>
  );
};

export default SelectPhoto;
