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
import CommonLayout from '../shared/commonlayout';
import {RNCamera} from 'react-native-camera';
import Icon from 'react-native-vector-icons/FontAwesome5';
import RNFS from 'react-native-fs';
import CustomButton from '../shared/custombutton';
import {useTreble} from 'treble-gsm';
import {Services} from '../../services/services';
import {useNavigation} from '@react-navigation/core';
import TextBox from '../shared/input';
import Dropdown from '../shared/dropdown';
import Addphoto from '../shared/camera/addphoto';
import {useRoute} from '@react-navigation/native';
//types
interface newimage {
  imageUrl?: string;
  length?: number;
  width?: number;
  height?: number;
  pieceType?: string;
  stackQuantity?: number;
}

const Information = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [{loadid}, Store] = useTreble();
  const {updateimages, addimages} = Services();
  const [addimage, setaddimage] = useState<newimage>();
  const [pieceType, setPieceType] = useState();
  const [stackQunatity, setStackQuantity] = useState();

  const update = () => {
    // converting to base64
    RNFS.readFile(route?.params?.otherphoto, 'base64').then( res => {
      debugger;
   addimages(
        loadid,
        `data:image/png;base64,${res}`,
        addimage?.length,
        addimage?.width,
        addimage?.height,
        pieceType || 'pallet',
        stackQunatity || 2,
        1,
        1,
        0,
      )
       updateimages(loadid, 0);
       navigation.navigate('summary');
     
    });
  };

  return (
    <>
      <CommonLayout
        isnavigation={route?.params?.otherphoto}
        navigationtext="confirm"
        onPress={update}>
        <View style={{alignItems: 'center', marginVertical: 16}}>
          <Addphoto
            image={route?.params?.otherphoto}
            stack="information"
            imagename="otherphoto"
          />
          <View style={{width: '100%', paddingHorizontal: 24, marginTop: 8}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <TextBox
                label="L"
                styles={{width: '20%'}}
                keyboardType="numeric"
                onChange={(event: any) => {
                  const {eventCount, target, text} = event.nativeEvent;
                  setaddimage({...addimage, length: text});
                }}
              />
              <TextBox
                label="W"
                styles={{width: '20%'}}
                keyboardType="numeric"
                onChange={(event: any) => {
                  const {eventCount, target, text} = event.nativeEvent;
                  setaddimage({...addimage, width: text});
                }}
              />
              <TextBox
                label="H"
                styles={{width: '20%'}}
                keyboardType="numeric"
                onChange={(event: any) => {
                  const {eventCount, target, text} = event.nativeEvent;
                  setaddimage({...addimage, height: text});
                }}
              />
            </View>
            <View style={{marginTop: 8}}>
              <Dropdown
                data={['pallet-1', 'pallet-2']}
                label="Piece Type"
                
              />
              <Dropdown
                data={['1', '2']}
                label="Stack Quantity"
                ></Dropdown>
            </View>
          </View>
        </View>
      </CommonLayout>
    </>
  );
};

export default Information;
