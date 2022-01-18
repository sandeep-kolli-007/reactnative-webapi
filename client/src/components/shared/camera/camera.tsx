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

const Camera = () => {
  const navigation:any = useNavigation();
  const route = useRoute();
  const [{loadid}, Store] = useTreble();
  // const {getimages, updateimages, addimages} = Services();
  const camera = useRef<any>(null);
  const [camerastatus, setcamerastatus] = useState(false);
  const [imageconfirm, setimageconfirm] = useState(false);
  // const [images, setimages] = useState<Array<any>>([]);
  const [cacheimage, setcacheimage] = useState<any>();
  const [addimage, setaddimage] = useState<newimage>();
  const [retrivedimages, setretrivedimages] = useState<Array<any>>([]);
  const data: any = [];
  const {stack, imagename}: any = route.params;

  const cameraset = () => {
    setcamerastatus(true);
  };
  const takePicture = () => {
    const options = {
      quality: 0.5,
      base64: true,
      orientation: 'portrait',
      fixOrientation: true,
    };
    // camera.current.pausePreview();
    camera.current
      .takePictureAsync(options)
      .then((res: any) => {
        // alert('success');
        // setimages([...images,res.uri]);
        //setimages([...images, res.uri]);
        //console.log(res.uri);
        setcacheimage(res.uri);
        setimageconfirm(true);
      })
      .catch((e: any) => {
        Alert.alert(e);
      });

    // console.log(data.uri);
  };
  const saving = () => {
    //*moving file from cache to local storage
    // const newfilepath =
    //   RNFS.ExternalDirectoryPath + '/' + new Date().getTime() + '.jpeg';
    // RNFS.moveFile(cacheimage, newfilepath);
    setcamerastatus(false);
    setimageconfirm(false);
    navigation.navigate(stack, {
      [imagename]: cacheimage,
    });
  };

  //*Get all Images for selected Pieces
  // const getAllImages = () => {
  //   getimages(loadid)
  //     .then((res: any) => {
  //       if (res.rows.length > 0) {
  //         for (var i = 0; i < res.rows.length; i++) {
  //           data.push(res.rows.item(i));
  //           console.log(res.rows.item(i));
  //         }
  //         setretrivedimages(data);
  //       }
  //     })
  //     .catch(err => console.log(err));
  // };
  const update = () => {
    // var selectedid: any = retrivedimages.filter(f => f.Selected === 1);
    // updateimages(selectedid[0].LoadId, selectedid[0].id);
    RNFS.readFile(cacheimage, 'base64').then(res => {
      // setaddimage({...addimage, imageUrl: `data:image/png;base64,${res}`});
      console.log(res);
      // addimages(
      //   0,
      //   loadid,
      //   `data:image/png;base64,${res}`,
      //   addimage?.length,
      //   addimage?.width,
      //   addimage?.height,
      //   'pallet',
      //   2,
      //   1,
      //   0,
      // );
      // updateimages(loadid, 0);
      //   navigation.navigate('summary');
    });
    // addimages(3, 'gh', 10, 20, 30, 'pallet', 2, 0, 0);
  };
  //* useEffect for side effects.renders when component mounts or dependency value changes.
  useEffect(() => {
    // getAllImages();
    RNFS.readDir(RNFS.ExternalDirectoryPath).then(res => {
      console.log('GOT RESULT', res);
      // setimages(res);
    });
  }, [camerastatus]);

  return (
    <>
      {imageconfirm ? (
        <>
          <View style={{flex: 1}}>
            <Image
              source={{uri: cacheimage}}
              style={{height: '100%', width: '100%'}}></Image>
          </View>
          <View
            style={{
              backgroundColor: '#0F1924',
              padding: 16,
              zIndex: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <CustomButton
              text="Retake"
              textColor="#0F1924"
              onPress={() => setimageconfirm(false)}></CustomButton>
            <CustomButton
              text="UsePhoto"
              color="#80B0E6"
              textColor="white"
              onPress={saving}></CustomButton>
          </View>
        </>
      ) : (
        <>
          <RNCamera
            ref={camera}
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.off}
            captureAudio={false}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
          />
          <View
            style={{
              backgroundColor: '#0F1924',
              padding: 16,
            }}>
            <TouchableOpacity
              onPress={takePicture}
              style={{alignItems: 'center', marginBottom: 32}}>
              <View
                style={{
                  backgroundColor: 'white',
                  width: 50,
                  height: 50,
                  zIndex: 2,
                  borderRadius: 40,
                  top: -30,
                  borderWidth: 2,
                  borderColor: '#0F1924',
                  position: 'absolute',
                }}></View>
              <View
                style={{
                  width: 70,
                  height: 70,
                  zIndex: 2,
                  borderRadius: 40,
                  top: -40,
                  borderWidth: 10,
                  borderColor: 'white',
                  position: 'absolute',
                }}></View>
            </TouchableOpacity>
          </View>
        </>
      )}
    </>
  );
};

export default Camera;
