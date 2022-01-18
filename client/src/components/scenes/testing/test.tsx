import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
// import {Services} from '../../services/services';

const Test = () => {
  const [alldata, setalldata] = useState<any>([]);
  // const {createtable, insertloads } = Services();
  var tabledata: any = [];

  const retrieve = () => {
    fetch('http://10.0.2.2:3004/Loads')
      .then(response => response.json())
      .then(data => {
        setalldata(data);
        console.log(data[0].Shipments[0]);
      });
  };

  for (
    var i = 0, l = 0, s = 0, p = 0;
    i < alldata[l]?.Shipments[s]?.Pieces[p]?.Images.length;
    i++,
      i === alldata[l]?.Shipments[s]?.Pieces[p]?.Images.length &&
        ((i = 0),
        p++,
        p === alldata[l]?.Shipments[s]?.Pieces.length &&
          ((p = 0), s++, s === alldata[l]?.Shipments.length && ((s = 0), l++)))
  ) {
    // insertloads(
    //   alldata[l].LoadNumber,
    //   alldata[l].Shipments[s].ShipmentNumber,
    //   alldata[l].Shipments[s].Pieces[p].pieceID,
    //   alldata[l].Shipments[s].Pieces[p].State,
    //   alldata[l].Shipments[s].Pieces[p].Images[i].ImageUrl,
    //   alldata[l].Shipments[s].Pieces[p].Images[i].Length,
    //   alldata[l].Shipments[s].Pieces[p].Images[i].Width,
    //   alldata[l].Shipments[s].Pieces[p].Images[i].Height,
    //   alldata[l].Shipments[s].Pieces[p].Images[i].ConfirmPieceType,
    //   alldata[l].Shipments[s].Pieces[p].Images[i].StackQuantity,
    //   alldata[l].Shipments[s].Pieces[p].Images[i].selected,
    //   alldata[l].Shipments[s].Pieces[p].ProductNumber,
    //   alldata[l].Shipments[s].Pieces[p].Vendor,
    //   alldata[l].Shipments[s].Pieces[p].Master,
    //   alldata[l].Shipments[s].Pieces[p].Quantity,
    //   alldata[l].Shipments[s].Pieces[p].NoOfPiecesOver,
    //   alldata[l].Shipments[s].Pieces[p].OveragePieceType,
    //   alldata[l].Shipments[s].Pieces[p].PieceTypeImage,
    //   alldata[l].Shipments[s].Pieces[p].ShipmentLabelImage,
    //   alldata[l].Shipments[s].Pieces[p].ProductLabelImage,
    //   alldata[l].Shipments[s].Pieces[p].LtlProImage,
    //   alldata[l].Shipments[s].Pieces[p].DamageImages,
    //   alldata[l].Shipments[s].Pieces[p].DamageLevel,
    //   alldata[l].Shipments[s].Pieces[p].DamageType,
    //   alldata[l].Shipments[s].Pieces[p].Notes,
    //   alldata[l].Shipments[s].Pieces[p].isSynced,
    // );
  }

  //!testing
  //   for (
  //     var i = 0, l = 0, s = 0, p = 0;
  //     i < alldata[l]?.Shipments[s]?.Pieces[p]?.Images.length;
  //     i++,
  //       i === alldata[l]?.Shipments[s]?.Pieces[p]?.Images.length &&
  //         ((i = 0),
  //         p++,
  //         p === alldata[l]?.Shipments[s]?.Pieces.length &&
  //           ((p = 0), s++, (s === alldata[l]?.Shipments.length )&& (s = 0,l++)))
  //   ) {
  //     tabledata.push(
  //       <View style={{flexDirection: 'row', flexWrap: 'wrap', marginBottom: 16}}>
  //         <Text>{alldata[l].LoadNumber} - </Text>
  //         <Text>{alldata[l].Shipments[s].ShipmentNumber} - </Text>
  //         <Text>{alldata[l].Shipments[s].Pieces[p].pieceID} - </Text>
  //         <Text>{alldata[l].Shipments[s].Pieces[p].State} - </Text>
  //         <Text>{alldata[l].Shipments[s].Pieces[p].Images[i].ImageUrl} - </Text>
  //         <Text>{alldata[l].Shipments[s].Pieces[p].Images[i].Length} - </Text>
  //         <Text>{alldata[l].Shipments[s].Pieces[p].Images[i].Width} - </Text>
  //         <Text>{alldata[l].Shipments[s].Pieces[p].Images[i].Height} - </Text>
  //         <Text>
  //           {alldata[l].Shipments[s].Pieces[p].Images[i].ConfirmPieceType} -
  //         </Text>
  //         <Text>
  //           {alldata[l].Shipments[s].Pieces[p].Images[i].StackQuantity} -
  //         </Text>
  //         <Text>{alldata[l].Shipments[s].Pieces[p].Images[i].selected} - </Text>
  //         <Text>{alldata[l].Shipments[s].Pieces[p].ProductNumber} - </Text>
  //         <Text>{alldata[l].Shipments[s].Pieces[p].Vendor} - </Text>
  //         <Text>{alldata[l].Shipments[s].Pieces[p].Master} - </Text>
  //         <Text>{alldata[l].Shipments[s].Pieces[p].Quantity} - </Text>
  //         <Text>{alldata[l].Shipments[s].Pieces[p].NoOfPiecesOver} - </Text>
  //         <Text>{alldata[l].Shipments[s].Pieces[p].OveragePieceType} - </Text>
  //         <Text>{alldata[l].Shipments[s].Pieces[p].PieceTypeImage} - </Text>
  //         <Text>{alldata[l].Shipments[s].Pieces[p].ShipmentLabelImage} - </Text>
  //         <Text>{alldata[l].Shipments[s].Pieces[p].ProductLabelImage} - </Text>
  //         <Text>{alldata[l].Shipments[s].Pieces[p].LtlProImage} - </Text>
  //         <Text>{alldata[l].Shipments[s].Pieces[p].DamageImages} - </Text>
  //         <Text>{alldata[l].Shipments[s].Pieces[p].DamageLevel} - </Text>
  //         <Text>{alldata[l].Shipments[s].Pieces[p].DamageType} - </Text>
  //         <Text>{alldata[l].Shipments[s].Pieces[p].Notes} - </Text>
  //         <Text>{alldata[l].Shipments[s].Pieces[p].isSynced} </Text>
  //       </View>,
  //     );
  //   }

  useEffect(() => {
    retrieve();
    // createtable();
    //console.log(tabledata);
  }, []);

  // var i=0,l=0,s=0,p=0;
  // while (i < alldata[l].Shipments[s].Pieces[p].Images.length) {
  //     tabledata.push(
  //               <View key={i} style={{flexDirection:"row",flexWrap:"wrap",marginBottom:16}}>
  //                 <Text>{alldata[l].LoadNumber} - </Text>
  //                 <Text>{alldata[l].Shipments[s].ShipmentNumber} - </Text>
  //                 <Text>{alldata[l].Shipments[s].Pieces[p].pieceID} - </Text>
  //                 <Text>{alldata[l].Shipments[s].Pieces[p].State} - </Text>
  //                 <Text>{alldata[l].Shipments[s].Pieces[p].Images[i].ImageUrl} - </Text>
  //                 <Text>{alldata[l].Shipments[s].Pieces[p].Images[i].Length} - </Text>
  //                 <Text>{alldata[l].Shipments[s].Pieces[p].Images[i].Width} - </Text>
  //                 <Text>{alldata[l].Shipments[s].Pieces[p].Images[i].Height} - </Text>
  //                 <Text>{alldata[l].Shipments[s].Pieces[p].Images[i].ConfirmPieceType} - </Text>
  //                 <Text>{alldata[l].Shipments[s].Pieces[p].Images[i].StackQuantity} - </Text>
  //                 <Text>{alldata[l].Shipments[s].Pieces[p].Images[i].selected} - </Text>
  //                 <Text>{alldata[l].Shipments[s].Pieces[p].ProductNumber} - </Text>
  //                 <Text>{alldata[l].Shipments[s].Pieces[p].Vendor} - </Text>
  //                 <Text>{alldata[l].Shipments[s].Pieces[p].Master} - </Text>
  //                 <Text>{alldata[l].Shipments[s].Pieces[p].Quantity} - </Text>
  //                 <Text>{alldata[l].Shipments[s].Pieces[p].NoOfPiecesOver} - </Text>
  //                 <Text>{alldata[l].Shipments[s].Pieces[p].OveragePieceType} - </Text>
  //                 <Text>{alldata[l].Shipments[s].Pieces[p].PieceTypeImage} - </Text>
  //                 <Text>{alldata[l].Shipments[s].Pieces[p].ShipmentLabelImage} - </Text>
  //                 <Text>{alldata[l].Shipments[s].Pieces[p].ProductLabelImage} - </Text>
  //                 <Text>{alldata[l].Shipments[s].Pieces[p].LtlProImage} - </Text>
  //                 <Text>{alldata[l].Shipments[s].Pieces[p].DamageImages} - </Text>
  //                 <Text>{alldata[l].Shipments[s].Pieces[p].DamageLevel} - </Text>
  //                 <Text>{alldata[l].Shipments[s].Pieces[p].DamageType} - </Text>
  //                 <Text>{alldata[l].Shipments[s].Pieces[p].Notes} - </Text>
  //                 <Text>{alldata[l].Shipments[s].Pieces[p].isSynced}   </Text>
  //               </View>)
  //     i++;
  //   }

  return (
    <ScrollView>
      <Text>{tabledata}</Text>
    </ScrollView>
  );
};

export default Test;
