import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CommonLayout from '../../shared/commonlayout';
import CustomButton from '../../shared/custombutton';
import TextBox from '../../shared/input';

const Comments = () => {
  return (
    <CommonLayout hidefooter>
      <View>
        <View>
          <Text style={styles.textBold}>Prevoius Comments</Text>
          <Text style={styles.text}>No Prevoius Comments</Text>
        </View>
        <View style={{marginTop: 8}}>
          <TextBox label="Comments" height={100} />
          <View style={{alignItems: 'center',marginTop:16}}>
            <CustomButton text="Save Comments" width={150} />
          </View>
        </View>
      </View>
    </CommonLayout>
  );
};

const styles = StyleSheet.create({
  textBold: {
    fontSize: 16,
    fontWeight: '700',
    color: 'white',
    marginTop: 8,
  },
  text: {
    fontSize: 14,
    color: 'white',
    marginLeft: 16,
  },
  box: {
    height: 150,
    borderRadius: 8,
    backgroundColor: 'white',
    marginTop: 8,
  },
});

export default Comments;
