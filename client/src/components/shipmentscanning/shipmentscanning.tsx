import React, {useEffect, useRef, useState} from 'react';
import {View, TouchableWithoutFeedback, Keyboard} from 'react-native';
import TextBox from '../shared/input';
import Dropdown from '../shared/dropdown';
import CommonLayout from '../shared/commonlayout';
import {RNCamera} from 'react-native-camera';
import BarcodeMask from 'react-native-barcode-mask';
import {useTreble} from 'treble-gsm';
import {useIsFocused} from '@react-navigation/core';

const ShipmentScanning = () => {
  const [{shipment}, Store] = useTreble();
  const camera = useRef<any>(null);
  const [scanMode, setScanMode] = useState(false);
  const [scannedValue, setScannedValue] = useState('');
  const isFocused = useIsFocused();

  //*Functions
  const dataread = (res: any) => {
    setScannedValue(res.data);
    setScanMode(false);
  };

  //*Side effect to call on every page load
  useEffect(() => {
    Store.update('updateshipment', scannedValue);
    Store.update('updatepartialpiecestate', false);
  }, [scannedValue, isFocused]);
  return (
    <>
      {scanMode ? (
        <View
          style={{
            backgroundColor: '#00000050',
            flex: 1,
            flexDirection: 'column',
          }}>
          <RNCamera
            ref={camera}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.off}
            onBarCodeRead={dataread}
            captureAudio={false}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}>
            <BarcodeMask />
          </RNCamera>
        </View>
      ) : (
        <CommonLayout navigation="summary" isnavigation={scannedValue.length > 6 ? true : false} navigationtext="Next">
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{marginBottom: 16}}>
              <TextBox
                inputgroup
                value={scannedValue}
                onChange={(event: any) => {
                  const {eventCount, target, text} = event.nativeEvent;
                  setScannedValue(text);
                }}
                onPress={() => setScanMode(true)}
                label=" Shipment ID / LTL Pro / Piece ID"
              />
              <View
                style={{
                  backgroundColor: 'white',
                  height: 1,
                  marginVertical: 100,
                  marginHorizontal: 40,
                }}></View>
              <Dropdown label="Location" data={[]} />
              <Dropdown label="Printers" data={[]} />
            </View>
          </TouchableWithoutFeedback>
        </CommonLayout>
      )}
    </>
  );
};

export default ShipmentScanning;
