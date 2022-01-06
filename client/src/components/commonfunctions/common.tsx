import React from 'react';
import {View, Text} from 'react-native';
import {Services} from '../../services/services';
import NetInfo, {useNetInfo} from '@react-native-community/netinfo';

export const Common = () => {
  const {getunsyncedloads, updatesync, updateloadssync, getunsyncedimages,updatepartialstate} =
    Services();
  const netInfo = useNetInfo();

  //types
  interface newimage {
    id: number;
    Loadid: number;
    imageUrl?: string;
    length?: number;
    width?: number;
    height?: number;
    pieceType?: string;
    stackQuantity?: number;
    isSynced: number;
  }
  const sync = () => {
    let unsyncedloads: Array<any> = [];
    let unsyncedimages: Array<any> = [];

    if (netInfo?.isConnected) {
      getunsyncedloads().then((data: any) => {
        if (data.rows.length > 0) {
          for (var i = 0; i < data.rows.length; i++) {
            unsyncedloads.push(data.rows.item(i));
          }
          if (unsyncedloads.length > 0) {
            for (let i = 0; i < unsyncedloads.length; i++) {
              if (unsyncedloads[i]?.PartialPieceState !== 'unconfirmed') {
                unsyncedloads[i].PieceState = unsyncedloads[i]?.PartialPieceState;
              }
              delete unsyncedloads[i]?.PartialPieceState;
              fetch(`http://192.168.2.173:3004/Loads/${unsyncedloads[i].id}`, {
                method: 'PUT',
                mode: 'no-cors',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(unsyncedloads[i]),
              })
                .then(response => {
                  debugger
                  updateloadssync(unsyncedloads[i]?.id);
                  updatepartialstate(unsyncedloads[i]?.PieceState,unsyncedloads[i]?.id);
                  response.json();
                })
                .catch(error => {
                  console.error('Error:', error);
                });
            }
          }
        }
      });

      getunsyncedimages().then((data: any) => {
        debugger;
        if (data.rows.length > 0) {
          for (var k = 0; k < data.rows.length; k++) {
            unsyncedimages.push(data.rows.item(k));
          }
          if (unsyncedimages.length > 0) {
            for (let k = 0; k < unsyncedimages.length; k++) {
              if (unsyncedimages[k].isNew === 1) {
              }

              fetch(
                `http://192.168.2.173:3004/Images/${
                  unsyncedimages[k]?.isNew === 0 ? unsyncedimages[k]?.id : ''
                }`,
                {
                  method: unsyncedimages[k]?.isNew === 0 ? 'PUT' : 'POST',
                  mode: 'no-cors',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(unsyncedimages[k]),
                },
              )
                .then(response => {
                  response.json();
                  updatesync(unsyncedimages[k]?.LoadId);
                })
                .catch(error => {
                  console.error('Error:', error);
                });
            }
          }
        }
      });
    }
  };

  return {
    sync,
  };
};
