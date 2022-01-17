import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View, Text, Alert} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Header from '../header/header';
import Footer from '../footer/footer';
import Homepage from '../homepage/homepage';
import ShipmentScanning from '../shipmentscanning/shipmentscanning';
import Summary from '../summary/summary';
import PhotoSelect from '../photoselect/photoselect';
import OSD from '../osd/osd';
import RNPrintExample from '../print/print';
import {Services} from '../../services/services';
import {useTreble} from 'treble-gsm';
// import NetInfo, {useNetInfo} from '@react-native-community/netinfo';
import {Common} from '../commonfunctions/common';
import Toast from 'react-native-simple-toast';
import Information from '../information/information';
import ProductScanning from '../productscanning/productscanning';
import Camera from '../shared/camera/camera';
import Damage from '../Damage/damage';
// import BackgroundFetch from 'react-native-background-fetch';
import {NativeModules} from 'react-native';
import Overage from '../overage/overage';
import OveragePieces from '../overage/overage-pieces';
import OverageSummary from '../overage/overage-summary';
import SelectPhoto from '../selectphoto/selectphoto';
import PieceSummary from '../piecesummary/piecesummary';
import ArriveDepart from '../arrive-depart/arriveDepart';
import LoadUnload from '../load-unload/LoadUnload';
import SplitOrder from '../splitorder/splitorder';
import DockCount from '../dockcount/dockcount';
import manifest from '../manifest/manifest';
import ReceiveIntoWareHouse from '../reciveintowarehouse/receiveintowarehouse';
import SearchBy from '../reciveintowarehouse/searchby';
import SearchResults from '../reciveintowarehouse/searchresults';
import ShipmentInformation from '../shipment-information/shipmentinformation';
import PieceCardSummary from '../piececardsummary/piececardsummary';
import DocumentationPhotos from '../documentationphotos/documentationphotos';
const Stack = createNativeStackNavigator();
const options: any = {
  headerStyle: {
    backgroundColor: '#0F1924',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerShadowVisible: true,
  headerTitleAlign: 'center',
  headerShown: true,
};
  
const Stacks = () => {
  const [{shipment, piece}, Store] = useTreble();
  const {sync} = Common();
  const {createtable, insertloads, insertimages, getunsyncedloads, loadscount} = Services();
  // const netInfo = useNetInfo();
  const [data, setdata] = useState('default');
  const {GreetModule, LoadsModule, GreetService} = NativeModules;

  const grpc = async () => {
    // await LoadsModule.Message('s', (res: any) => {
    //   setdata(res);
    // });
    // const res = await GreetModule.Message('Sandeep_kolli');
    // alert(res);

    try {
      let res = await GreetService?.sayHello('World');
      setdata(res);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    // grpc();
    //*create table
    // createtable();
    // console.log(netInfo.isConnected + 'logging network');
    // if (netInfo.isConnected) {
    //   //TODO Need to add, images count function to get no of images
    //   loadscount().then((res: any) => {
    //     if (res.rows.length === 0) {
    //       //* fetching from api
    //       fetch('http://192.168.2.173:3004/Loads')
    //         .then(response => response.json())
    //         .then(loads => {
    //           loads.map((res: any) => {
    //             insertloads(
    //               res.LoadNumber,
    //               res.ShipmentNumber,
    //               res.PieceId,
    //               res.PieceState,
    //               'unconfirmed',
    //               res.ProductNumber,
    //               res.Vendor,
    //               res.Master,
    //               res.Quantity,
    //               res.NoOfPiecesOver,
    //               res.OveragePieceType,
    //               res.PieceTypeImage,
    //               res.ShipmentLabelImage,
    //               res.ProductLabelImage,
    //               res.LtlProImage,
    //               res.DamageImages,
    //               res.DamageLevel,
    //               res.DamageType,
    //               res.Notes,
    //               res.Type,
    //               1,
    //             );
    //           });
    //           console.log('loads fetched');
    //         });
    //      fetch('http://192.168.2.173:3004/Images')
    //         .then(response => response.json())
    //         .then(images => {
    //           images.map((res: any) => {
    //             insertimages(
    //               res.Loadid,
    //               res.Imageurl,
    //               res.Length,
    //               res.Width,
    //               res.Height,
    //               res.ConfirmPieceType,
    //               res.StackQuantity,
    //               res.Selected,
    //               0,
    //               1,
    //             );
    //           });
    //           console.log('images fetched');
    //         });
    //     }
    //   });
    //   sync();
    // }
  }, []);

  // for (
  //   var i = 0, l = 0, s = 0, p = 0;
  //   i < loads[l]?.Shipments[s]?.Pieces[p]?.Images.length;
  //   i++,
  //     i === loads[l]?.Shipments[s]?.Pieces[p]?.Images.length &&
  //       ((i = 0),
  //       p++,
  //       p === loads[l]?.Shipments[s]?.Pieces.length &&
  //         ((p = 0), s++, s === loads[l]?.Shipments.length && ((s = 0), l++)))
  // ) {
  //   insertloads(
  //     loads[l].LoadNumber,
  //     loads[l].Shipments[s].ShipmentNumber,
  //     loads[l].Shipments[s].Pieces[p].pieceID,
  //     loads[l].Shipments[s].Pieces[p].State,
  //     loads[l].Shipments[s].Pieces[p].Images[i]?.ImageUrl,
  //     loads[l].Shipments[s].Pieces[p].Images[i]?.Length,
  //     loads[l].Shipments[s].Pieces[p].Images[i]?.Width,
  //     loads[l].Shipments[s].Pieces[p].Images[i]?.Height,
  //     loads[l].Shipments[s].Pieces[p].Images[i]?.ConfirmPieceType,
  //     loads[l].Shipments[s].Pieces[p].Images[i]?.StackQuantity,
  //     loads[l].Shipments[s].Pieces[p].Images[i]?.selected,
  //     loads[l].Shipments[s].Pieces[p].ProductNumber,
  //     loads[l].Shipments[s].Pieces[p].Vendor,
  //     loads[l].Shipments[s].Pieces[p].Master,
  //     loads[l].Shipments[s].Pieces[p].Quantity,
  //     loads[l].Shipments[s].Pieces[p].NoOfPiecesOver,
  //     loads[l].Shipments[s].Pieces[p].OveragePieceType,
  //     loads[l].Shipments[s].Pieces[p].PieceTypeImage,
  //     loads[l].Shipments[s].Pieces[p].ShipmentLabelImage,
  //     loads[l].Shipments[s].Pieces[p].ProductLabelImage,
  //     loads[l].Shipments[s].Pieces[p].LtlProImage,
  //     loads[l].Shipments[s].Pieces[p].DamageImages,
  //     loads[l].Shipments[s].Pieces[p].DamageLevel,
  //     loads[l].Shipments[s].Pieces[p].DamageType,
  //     loads[l].Shipments[s].Pieces[p].Notes,
  //     loads[l].Shipments[s].Pieces[p].isSynced,
  //   );
  // }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{presentation: 'card'}}>
        <Stack.Screen name="Home" component={Homepage} options={{title: 'Homepage', ...options}} />
        <Stack.Screen name="shipmentscanning" component={ShipmentScanning} options={{title: 'Shipment Scanning', ...options}} />
        <Stack.Screen name="summary" component={Summary} options={{title: shipment + ' Summary', ...options}} />

        <Stack.Screen name="osd" component={OSD} options={{title: 'O/S/D selection', ...options}} />
        {/* <Stack.Screen
          name="print"
          component={RNPrintExample}
          options={{title: 'print',...options}}
        /> */}
        <Stack.Screen name="photoselect" component={PhotoSelect} options={{title: piece + ' Photo Select', ...options}} />
        <Stack.Screen name="information" component={Information} options={{title: 'Information', ...options}} />
        <Stack.Screen name="productscanning" component={ProductScanning} options={{title: 'Product Scanning', ...options}} />
        <Stack.Screen name="camera" component={Camera} options={{title: 'camera', ...options}} />
        <Stack.Screen name="damage" component={Damage} options={{title: 'Damage Information', ...options}} />
        <Stack.Screen name="overage" component={Overage} options={{title: 'Overage Info', ...options}} />
        <Stack.Screen name="overagepieces" component={OveragePieces} options={{title: 'Overage Pieces', ...options}} />
        <Stack.Screen name="overagesummary" component={OverageSummary} options={{title: 'Overage Summary', ...options}} />
        <Stack.Screen name="selectphoto" component={SelectPhoto} options={{title: 'Select Photo', ...options}} />
        <Stack.Screen name="piecesummary" component={PieceSummary} options={{title: 'Piece Summary', ...options}} />
        <Stack.Screen name="arrivedepart" component={ArriveDepart} options={{title: 'Arrive/Depart Trailer', ...options}} />
        <Stack.Screen name="loadunload" component={LoadUnload} options={{title: 'Load/Unload', ...options}} />
        <Stack.Screen name="splitorder" component={SplitOrder} options={{title: 'Split Order', ...options}} />
        <Stack.Screen name="dockcount" component={DockCount} options={{title: 'Dock Count', ...options}} />
        <Stack.Screen name="manifest" component={manifest} options={{title: 'Manifest', ...options}} />
        <Stack.Screen name="receiveintowarehouse" component={ReceiveIntoWareHouse} options={{title: 'Receive Into Warehouse', ...options}} />
        <Stack.Screen name="searchby" component={SearchBy} options={{title: 'Receive Into Warehouse', ...options}} />
        <Stack.Screen name="searchresults" component={SearchResults} options={{title: 'S1234567', ...options}} />
        <Stack.Screen name="shipmentinformation" component={ShipmentInformation} options={{title: 'Shipment Information', ...options}} />
        <Stack.Screen name="piececardsummary" component={PieceCardSummary} options={{title: 'Piece 1 Summary ', ...options}} />
        <Stack.Screen name="documentationphotos" component={DocumentationPhotos} options={{title: 'Documentation Photos ', ...options}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Stacks;
