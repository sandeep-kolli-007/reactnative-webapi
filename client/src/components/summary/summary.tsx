import React, {useEffect, useState} from 'react';
import {View, Text, Alert, Modal, NativeModules} from 'react-native';
import CommonLayout from '../shared/commonlayout';
import CustomButton from '../shared/custombutton';
import InfoBar from './infobar';
import RNPrint from 'react-native-print';
import {useTreble} from 'treble-gsm';
import {Services} from '../../services/services';
import {Common} from '../commonfunctions/common';
import {styles} from './styles';
import {colors} from '../../colors';

const Summary = () => {
  const [{shipment}, Store] = useTreble();
  const [shipments, setshipments] = useState([{pieceId: 'S1234561-1', pieceState: 'unconfirmed',type:"PRO"}]);
  const [modalVisible, setModalVisible] = useState(false);

  const {GreetModule, LoadsModule} = NativeModules;

  const {getpieces} = Services();
  const {sync} = Common();

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

  useEffect(() => {
    console.log(JSON.stringify(shipments));
  }, [shipments]);
  //* side effect which render on each time page renders
  // useEffect(() => {
  //   // getAllPieces();
  //   grpc();
  //   // sync();
  // }, [isFocused, netInfo]);

  return (
    <CommonLayout opacity={modalVisible && 0.5} navigation={"documentationphotos"} navigationtext="save" isnavigation>
      <View style={styles.buttons}>
        <CustomButton stack="selectphoto" text="No Labels" width={140} />
        <CustomButton
          text="Print Labels"
          width={140}
          color={colors.blue}
          textColor={colors.light}
          onPress={shipments.filter((res: any) => res.PieceState !== 'unconfirmed').length === shipments.length ? Reprint : printHTML}
          // disabled={
          // //  !(
          //     shipments.filter((res: any) => res.PieceState !== 'unconfirmed')
          //       .length === shipments.length
          //   )
          // }
        />
      </View>
      <View style={styles.infoCards}>
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
        <View style={styles.modal}>
          <View style={styles.modalDialog}>
            <View>
              <Text style={styles.modalText}>Are you sure you want to reprint all of the labels?</Text>
              <View style={styles.modalFooter}>
                <CustomButton color={colors.primary} textColor={colors.light} text="No" width={100} onPress={() => setModalVisible(false)}></CustomButton>
                <CustomButton
                  color={colors.blue}
                  textColor={colors.light}
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
