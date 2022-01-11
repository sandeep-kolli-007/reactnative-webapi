import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CommonLayout from '../shared/commonlayout';

const Exception = () => {
  return (
    <CommonLayout>
      <View style={{marginHorizontal: 16}}>
        <View style={{flexDirection: 'row', marginTop: 16}}>
          <Text style={styles.exceptionColumns}>Shipment</Text>
          <Text style={styles.exceptionColumns}>Parts</Text>
          <Text style={styles.exceptionColumns}>Piece Qty Exp / Rec</Text>
          <Text style={styles.exceptionColumns}>Package Qty Exp / Rec</Text>
        </View>
        <View style={{marginTop: 32}}>
          <Text style={styles.exceptions}>Trailer Number Missing</Text>
          <Text style={styles.exceptions}>Delivery Note Missing</Text>
        </View>
      </View>
    </CommonLayout>
  );
};

const styles = StyleSheet.create({
  exceptionColumns: {
    width: '25%',
    textAlign: 'center',
    color: 'white',
    fontSize: 12,
  },
  exceptions: {
    fontSize: 16,
    color: 'white',
    padding: 12,
  },
});

export default Exception;
