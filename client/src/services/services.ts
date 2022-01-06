import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import SQLite, {openDatabase} from 'react-native-sqlite-storage';
import {useTreble} from 'treble-gsm';

export const Services = () => {
  const [{ispartialpiecestate}, Store] = useTreble();

  // SQLite.enablePromise(true);

  const errorCB = (err: any) => {
    console.log('SQL Error: ' + err);
  };

  const successCB = () => {
    console.log('SQL executed fine');
  };

  //open database
  var db = SQLite.openDatabase(
    {name: 'Dockapp.db', location: 'default'},
    successCB,
    errorCB,
  );

  //Create Table Query function
  const createtable = () => {
    //create table
    db.transaction(txn => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS loads (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            LoadNumber VARCHAR(20),
            ShipmentNumber VARCHAR(20),
            PieceId VARCHAR(20),
            PieceState VARCHAR(20),
            PartialPieceState VARCHAR(20),
            ProductNumber INTEGER,
            Vendor VARCHAR(20),
            Master INTEGER,
            Quantity INTEGER,
            NoOfPiecesOver INTEGER,
            OveragePieceType VARCHAR(20),
            PieceTypeImage VARCHAR(20),
            ShipmentLabelImage VARCHAR(20),
            ProductLabelImage VARCHAR(20),
            LtlProImage VARCHAR(20),
            DamageImages VARCHAR(20),
            DamageLevel VARCHAR(20),
            DamageType VARCHAR(20),
            Notes VARCHAR(20),
            Type VARCHAR(20),
            isSynced INTEGER) `,
        [],
        (tx, results) => {
          console.log('Create Query completed');
        },
      );
    });
    db.transaction(txn => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS images (
             id INTEGER PRIMARY KEY AUTOINCREMENT,
             LoadId INTEGER,
             Imageurl BLOB,
             Length INTEGER,
             Width INTEGER,
             Height INTEGER,
             ConfirmPieceType VARCHAR(20),
             StackQuantity INTEGER,
             Selected INTEGER,
             isNew INTEGER,
             isSynced INTEGER) `,
        [],
        (tx, results) => {
          console.log('Create Query completed');
        },
      );
    });
  };

  //Insert Table Query function
  const insertloads = (
    LoadNumber: any,
    ShipmentNumber: any,
    PieceId: any,
    PieceState: any,
    PartialPieceState: any,
    ProductNumber: any,
    Vendor: any,
    Master: any,
    Quantity: any,
    NoOfPiecesOver: any,
    OveragePieceType: any,
    PieceTypeImage: any,
    ShipmentLabelImage: any,
    ProductLabelImage: any,
    LtlProImage: any,
    DamageImages: any,
    DamageLevel: any,
    DamageType: any,
    Notes: any,
    Type: any,
    isSynced: any,
  ) => {
    //insert table
    db.transaction(txn => {
      txn.executeSql(
        `INSERT INTO loads (
              LoadNumber,
              ShipmentNumber,
              PieceId,
              PieceState,
              PartialPieceState,
              ProductNumber,
              Vendor,
              Master,
              Quantity,
              NoOfPiecesOver,
              OveragePieceType,
              PieceTypeImage,
              ShipmentLabelImage,
              ProductLabelImage,
              LtlProImage,
              DamageImages,
              DamageLevel,
              DamageType,
              Notes ,
              Type,
              isSynced
            ) VALUES  (
        '${LoadNumber}',
        '${ShipmentNumber}',
        '${PieceId}',
        '${PieceState}',
        '${PartialPieceState}',
         ${ProductNumber},
        '${Vendor}',
         ${Master},
         ${Quantity},
         ${NoOfPiecesOver},
        '${OveragePieceType}',
        '${PieceTypeImage}',
        '${ShipmentLabelImage}',
        '${ProductLabelImage}',
        '${LtlProImage}',
        '${DamageImages}',
        '${DamageLevel}',
        '${DamageType}',
        '${Notes}',
        '${Type}',
        ${isSynced}
      )`,
        [],
        (tx, results) => {
          console.log('Insert Query completed');
        },
      );
    });
  };
  const insertimages = (
    Loadid: any,
    Imageurl: any,
    Length: any,
    Width: any,
    Height: any,
    ConfirmPieceType: any,
    StackQuantity: any,
    Selected: any,
    isNew: any,
    isSynced: any,
  ) => {
    db.transaction(txn => {
      txn.executeSql(`SELECT * FROM images`, [], (tx, results) => {
        if (results.rows.length === 0) {
          //insert table
          db.transaction(txn => {
            txn.executeSql(
              `INSERT INTO images (
                Loadid,
                Imageurl,
                Length,
                Width,
                Height,
                ConfirmPieceType,
                StackQuantity,
                Selected,
                isNew,
                isSynced
              ) VALUES  (
           ${Loadid},
          '${Imageurl}',
           ${Length},
           ${Width},
           ${Height},
          '${ConfirmPieceType}',
          '${StackQuantity}',
           ${Selected},
           ${isNew},
           ${isSynced}
           )`,
              [],
              (tx, results) => {
                console.log('Insert Query completed');
              },
            );
          });
        }
      });
    });
  };
  //add images
  const addimages = (
    Loadid: any,
    Imageurl: any,
    Length: any,
    Width: any,
    Height: any,
    ConfirmPieceType: any,
    StackQuantity: any,
    Selected: any,
    isNew: any,
    isSynced: any,
  ) => {
    db.transaction(txn => {
      //getting all selected
      txn.executeSql(
        `SELECT id FROM images
      WHERE  (Selected = 1 AND LoadId = ${Loadid})`,
        [],
        (tx, results) => {
          // console.log('Select Query completeddddddd' +' '+ JSON.stringify(results.rows.item(0)));
          // console.log(results.rows.item(0).id);
          if (results.rows.length > 0) {
            //updating selected
            txn.executeSql(
              `UPDATE images
                 SET Selected = 0,isSynced = 0
                 WHERE id = ${results.rows.item(0).id} `,
              [],
              (tx, results) => {
                console.log('update Query completed');
              },
            );
          }
        },
      );

      //insert table
      txn.executeSql(
        `INSERT INTO images (
      
        Loadid,
        Imageurl,
        Length,
        Width,
        Height,
        ConfirmPieceType,
        StackQuantity,
        Selected,
        isNew,
        isSynced
      ) VALUES  (
        
        ${Loadid},
       '${Imageurl}',
        ${Length},
        ${Width},
        ${Height},
       '${ConfirmPieceType}',
        ${StackQuantity},
        ${Selected},
        ${isNew},
        ${isSynced}
        )`,
        [],
        (tx, results) => {
          console.log('Insert Query completed');
        },
      );
    });
  };
  //retriveing pieces
  const getpieces = async (ShipmentNumber: string) => {
    return new Promise((resolve, reject) => {
      db.executeSql(
        `SELECT id,PieceId,PieceState,PartialPieceState,Type,isSynced FROM loads  WHERE ShipmentNumber = "${ShipmentNumber}" `,
        [],
        (tx, results) => {
          console.log('select Query completed');
          resolve(tx);
        },
      );
    });
  };

  //retriveing images for pieces
  const getimages = async (LoadId: number) => {
    return new Promise((resolve, reject) => {
      db.executeSql(
        `SELECT id,ImageUrl,Selected,Loadid,isNew FROM images  WHERE Loadid = ${LoadId}`,
        [],
        (tx, results) => {
          console.log('select images Query completed');
          resolve(tx);
        },
      );
    });
  };
  //retriveing newly created images for pieces
  const getnewimages = async () => {
    return new Promise((resolve, reject) => {
      db.executeSql(
        `SELECT * FROM images  WHERE isNew = 1`,
        [],
        (tx, results) => {
          console.log('select images Query completed');
          resolve(tx);
        },
      );
    });
  };

  //updating images selected for pieces
  const updateimages = (Loadid: number, id: number) => {
    debugger;
    db.transaction(txn => {
      if (id === 0) {
        return txn.executeSql(
          `SELECT * FROM loads
           WHERE  (${
             ispartialpiecestate ? 'PartialPieceState' : 'PieceState'
           } = 'confirmed' AND id = ${Loadid})`,
          [],
          (tx, results) => {
            console.log('Select Query completed');
            if (results.rows.length! > 0) {
              txn.executeSql(
                `UPDATE loads
               SET ${
                 ispartialpiecestate ? 'PartialPieceState' : 'PieceState'
               } = 'confirmed',isSynced = 0
               WHERE id = ${Loadid}`,
                [],
                (tx, results) => {
                  console.log('update Query completed');
                },
              );
            }
          },
        );
      }
      //getting all selected
      txn.executeSql(
        `SELECT * FROM images
        WHERE  (Selected = 1 AND LoadId = ${Loadid})`,
        [],
        (tx, results) => {
          // console.log('Select Query completeddddddd' +' '+ JSON.stringify(results.rows.item(0)));
          if (results.rows.length > 0) {
            // console.log(results.rows.item(0).id);

            //updating selected
            txn.executeSql(
              `UPDATE images
                 SET Selected = 0,isSynced = 0
                 WHERE id = ${results.rows.item(0).id} `,
              [],
              (tx, results) => {
                console.log('update Query completed');
              },
            );
          }
        },
      );

      txn.executeSql(
        `UPDATE images
         SET Selected = 1,isSynced = 0
         WHERE id = ${id} `,
        [],
        (tx, results) => {
          console.log('update Query completed');
        },
      );

      txn.executeSql(
        `UPDATE loads
         SET ${
           ispartialpiecestate ? 'PartialPieceState' : 'PieceState'
         } = 'confirmed',isSynced = 0
         WHERE id = ${Loadid}`,
        [],
        (tx, results) => {
          console.log('update Query completed');
        },
      );
    });
  };
  //updating partial state to state
  const updatepartialstate =  (PieceState: string, id: number) => {
    db.transaction(txn => {
      txn.executeSql(
        `UPDATE loads
         SET  PartialPieceState = 'unconfirmed',
         PieceState = '${PieceState}',
         isSynced = 1
         WHERE id = ${id}`,
        [],
        (tx, results) => {
          console.log('update Query completed');
        },
      );
    });
  };

  //retriveing unsynced  columns
  const getunsyncedloads = async () => {
    return new Promise((resolve, reject) => {
      db.executeSql(
        `SELECT id,
        LoadNumber,
        ShipmentNumber,
        PieceId,
        PieceState,
        PartialPieceState,
        ProductNumber,
        Vendor,
        Master,
        Quantity,
        NoOfPiecesOver,
        OveragePieceType,
        PieceTypeImage,
        ShipmentLabelImage,
        ProductLabelImage,
        LtlProImage,
        DamageImages,
        DamageLevel,
        DamageType,
        Notes,
        type 
        FROM loads WHERE isSynced = 0`,
        [],
        (tx, results) => {
          console.log('select Query completed');
          resolve(tx);
        },
      );
    });
  };
  //retriveing unsynced  columns
  const getunsyncedimages = async () => {
    return new Promise((resolve, reject) => {
      db.executeSql(
        `SELECT id,
        Loadid,
        Imageurl,
        Length,
        Width,
        Height,
        ConfirmPieceType,
        StackQuantity,
        Selected,
        isNew
        FROM images WHERE isSynced = 0`,
        [],
        (tx, results) => {
          console.log('select Query completed');
          resolve(tx);
        },
      );
    });
  };
  const updatesync = (id: number) => {
    debugger;
    db.transaction(txn => {
      txn.executeSql(
        `UPDATE loads
             SET isSynced = 1
             WHERE  id = ${id} `,
        [],
        (tx, results) => {
          console.log('update Query completed');
        },
      );

      txn.executeSql(
        `UPDATE images
             SET isSynced = 1
             WHERE  Loadid = ${id} `,
        [],
        (tx, results) => {
          console.log('update Query completed');
        },
      );
    });
  };
  const updateloadssync = (id: number) => {
    db.transaction(txn => {
      txn.executeSql(
        `UPDATE loads
             SET isSynced = 1
             WHERE  id = ${id} `,
        [],
        (tx, results) => {
          console.log('update Query completed');
        },
      );
    });
  };

  const loadscount = async () => {
    return new Promise((resolve, reject) => {
      db.executeSql(`SELECT * FROM loads`, [], (tx, results) => {
        resolve(tx);
      });
    });
  };

  //updating damage pieces
  const updatedamagedpieces = (
    id: number,
    DamageImages: string,
    DamageLevel: string,
    DamageType: string,
    Notes: string,
  ) => {
    db.transaction(txn => {
      txn.executeSql(
        `UPDATE loads
         SET 
         PieceState = 'damaged',
         isSynced = 0,
         DamageImages = '${DamageImages}',
         DamageLevel = '${DamageLevel}',
         DamageType = '${DamageType}',
         Notes = '${Notes}' 
         WHERE id = ${id}`,
        [],
        (tx, results) => {
          console.log('update Query completed');
        },
      );
    });
  };
  //updating shortage pieces
  const updateshortagepieces = (id: number) => {
    debugger;
    db.transaction(txn => {
      txn.executeSql(
        `UPDATE loads
         SET 
         ${
           ispartialpiecestate ? 'PartialPieceState' : 'PieceState'
         }= 'shortage',
         isSynced = 0
         WHERE id = ${id}`,
        [],
        (tx, results) => {
          console.log('update Query completed');
        },
      );
    });
  };

  return {
    createtable,
    insertloads,
    insertimages,
    addimages,
    getpieces,
    getimages,
    getnewimages,
    updateimages,
    getunsyncedloads,
    updatesync,
    updateloadssync,
    loadscount,
    getunsyncedimages,
    updatepartialstate,
    updatedamagedpieces,
    updateshortagepieces,
  };
};
