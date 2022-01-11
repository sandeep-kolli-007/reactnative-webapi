import React, {useEffect, useState} from 'react';
import {View, Text, Alert, Modal, NativeModules} from 'react-native';
import CommonLayout from '../shared/commonlayout';
import CustomButton from '../shared/custombutton';
import InfoBar from './infobar';
import RNPrint from 'react-native-print';
import {useTreble} from 'treble-gsm';
import {Services} from '../../services/services';
// import {useIsFocused} from '@react-navigation/core';
import {Common} from '../commonfunctions/common';
// import {useNetInfo} from '@react-native-community/netinfo';
const Summary = () => {
  // const navigation = useNavigation();
  const [{shipment}, Store] = useTreble();
  const [shipments, setshipments] = useState([{pieceId:"S1234561-1",pieceState:"unconfirmed"}]);
  const [modalVisible, setModalVisible] = useState(false);

  const {GreetModule, LoadsModule} = NativeModules;

  const {getpieces} = Services();
  const {sync} = Common();
  // const isFocused = useIsFocused();
  // const netInfo = useNetInfo();

  const data: any = [];

  // * To Print Labels
  const printHTML = async () => {
    await RNPrint.print({
      html: '<h1>Testing Print Page 1</h1><h2>Testing Print Page 2</h2><h3>Testing Print Page 3</h3>',
    });
  };

  // * To Reprint Labels
  const Reprint = async () => {
    setModalVisible(true);
  };

  //* Get all Pieces for the Selected Shipments
  const getAllPieces = () => {
    getpieces(shipment).then((res: any) => {
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          data.push(res.rows.item(i));
          console.log(res.rows.item(i));
        }
        setshipments(data);
      }
    });
  };

 //*grpc service invoking
//  const grpc = async () => {
//   await LoadsModule.Message('s1234561', (res: any) => {
//     setshipments(res);
   
    
//   });
// };

useEffect(()=>{
  console.log(JSON.stringify(shipments));
},[shipments])
  //* side effect which render on each time page renders
  // useEffect(() => {
  //   // getAllPieces();
  //   grpc();
  //   // sync();
  // }, [isFocused, netInfo]);

  return (
    <CommonLayout   opacity={modalVisible && 0.5}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 36,
        }}>
        <CustomButton stack="selectphoto" text="No Labels" width={140} />
        <CustomButton
          text="Print Labels"
          width={140}
          color="#80B0E6"
          textColor="white"
          onPress={
            shipments.filter((res: any) => res.PieceState !== 'unconfirmed')
              .length === shipments.length
              ? Reprint
              : printHTML
          }
          // disabled={
          // //  !(
          //     shipments.filter((res: any) => res.PieceState !== 'unconfirmed')
          //       .length === shipments.length
          //   )
          // }
        />
      </View>
      <View style={{marginHorizontal: 24, marginTop: 64}}>
        {/* information bar */}
        <InfoBar data={shipments} />
      </View>

      {/* Modal   */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <View
            style={{
              width: 300,
              height: 300,
              backgroundColor: 'white',
              borderRadius: 8,
              padding: 24,
              elevation: 5,
              alignContent: 'center',
              justifyContent: 'center',
            }}>
            <View>
              <Text
                style={{color: '#0F1924', fontSize: 18, textAlign: 'center'}}>
                Are you sure you want to reprint all of the labels?
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 24,
                  justifyContent: 'space-around',
                }}>
                <CustomButton
                  color="#0F1924"
                  textColor="white"
                  text="No"
                  width={100}
                  onPress={() => setModalVisible(false)}></CustomButton>
                <CustomButton
                  color="#80B0E6"
                  textColor="white"
                  text="Yes"
                  width={100}
                  onPress={() => {
                    Store.update('updatepartialpiecestate', true);
                    setModalVisible(false);
                  }}></CustomButton>
              </View>
            </View>
          </View>
        </View>
      </Modal>
      {/* Modal   */}
    </CommonLayout>
  );
};

export default Summary;
