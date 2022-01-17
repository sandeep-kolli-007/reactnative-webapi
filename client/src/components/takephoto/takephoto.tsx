import React, {useEffect, useRef, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert, TouchableHighlight, Image, NativeModules} from 'react-native';
import CommonLayout from '../shared/commonlayout';
import {RNCamera} from 'react-native-camera';
import Icon from 'react-native-vector-icons/FontAwesome5';
import RNFS from 'react-native-fs';
import CustomButton from '../shared/custombutton';
import {useTreble} from 'treble-gsm';
import {Services} from '../../services/services';
import {useNavigation} from '@react-navigation/core';

const TakePhoto = () => {
  const navigation: any = useNavigation();
  const [{loadid}, Store] = useTreble();
  const {getimages, updateimages} = Services();
  const [retrivedimages, setretrivedimages] = useState<Array<any>>([    {imageurl: 'https://www.ajot.com/images/uploads/article/690-cardboard-pallets.jpg'},
  {imageurl: 'https://www.ajot.com/images/uploads/article/690-cardboard-pallets.jpg'},
  {imageurl: 'https://www.ajot.com/images/uploads/article/690-cardboard-pallets.jpg'},]);
  const data: any = [];
  const {GreetModule, LoadsModule} = NativeModules;

  //*Get all Images for selected Pieces
  const getAllImages = () => {
    getimages(loadid)
      .then((res: any) => {
        if (res.rows.length > 0) {
          for (var i = 0; i < res.rows.length; i++) {
            data.push(res.rows.item(i));
            console.log(res.rows.item(i));
          }
          setretrivedimages(data);
        }
      })
      .catch(err => console.log(err));
  };
  const update = () => {
    var selectedid: any = retrivedimages.filter(f => f.Selected === 1);
    updateimages(selectedid[0].LoadId, selectedid[0].id);
    navigation.navigate('summary');
  };

  const grpc = async () => {
    await LoadsModule.Message('s', (res: any) => {
      setretrivedimages(res[0].images);
    });
  };
  //* useEffect for side effects.renders when component mounts or dependency value changes.
  useEffect(() => {
    // grpc();
    // getAllImages();
    // RNFS.readDir(RNFS.ExternalDirectoryPath).then(res => {
    //   console.log('GOT RESULT', res);
    // });
  }, []);

  return (
    <CommonLayout Rightbtn={(retrivedimages.filter(f => f.Selected === 1).length > 0) &&<CustomButton text={'Confirm'} onPress={update}/>}>
      <View style={{alignItems: 'center', marginVertical: 32}}>
        {retrivedimages.map((res: any, index: number) => {
          return (
            <TouchableHighlight
              onPress={() => {
                retrivedimages.map(res => (res.Selected = 0));
                retrivedimages[index] = {
                  ...retrivedimages[index],
                  Selected: 1,
                };
                setretrivedimages([...retrivedimages]);
              }}
              key={index}
              style={{
                borderWidth: 10,
                marginBottom: 16,
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
            </TouchableHighlight>
          );
        })}

        <TouchableHighlight onPress={() => navigation.navigate('information')}>
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
        </TouchableHighlight>
      </View>
    </CommonLayout>
  );
};

export default TakePhoto;
