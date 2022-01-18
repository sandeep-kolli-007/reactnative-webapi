import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  TouchableHighlight,
  Image,
} from 'react-native';
import CommonLayout from '../commonlayout';
import {RNCamera} from 'react-native-camera';
import Icon from 'react-native-vector-icons/FontAwesome5';
import RNFS from 'react-native-fs';
import CustomButton from '../custombutton';
import {useTreble} from 'treble-gsm';
// import {Services} from '../../../services/services';
import {useNavigation} from '@react-navigation/core';
import TextBox from '../input';
import Dropdown from '../dropdown';

//types
interface newimage {
  imageUrl?: string;
  length?: number;
  width?: number;
  height?: number;
  pieceType?: string;
  stackQuantity?: number;
}

const Addphoto = (props: any) => {
  const navigation:any = useNavigation();
  return (
    <>
      <TouchableHighlight
        onPress={() =>
          navigation.navigate('camera', {
            stack: props.stack,
            imagename: props.imagename,
          })
        }>
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
          {props.image ? (
            <Image
              source={{uri: props.image}}
              style={{width: 250, height: 250}}
            />
          ) : (
            <>
              <Icon name="camera" size={32} color="#0F1924"></Icon>
              <Text style={{marginTop: 8, color: '#0F1924',fontWeight:"900",marginHorizontal:64,textAlign:"center"}}>
                {props.text || 'OTHER PHOTO'}
              </Text>
            </>
          )}
        </View>
      </TouchableHighlight>
    </>
  );
};

export default Addphoto;
