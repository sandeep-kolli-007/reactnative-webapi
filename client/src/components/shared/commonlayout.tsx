import React from 'react';
import {View, Text, Button, Touchable, TouchableOpacity, ScrollView} from 'react-native';
import CustomButton from './custombutton';
import {colors} from '../../colors';

const CommonLayout = (props: any) => {
  return (
    <View
      style={{
        backgroundColor: colors.primary,
        flex: 1,
        borderTopWidth: 1,
        borderTopColor: '#111',
        opacity: props.opacity || 1,
      }}>
      <View
        style={{
          backgroundColor: colors.secondary,
          margin: 12,
          borderRadius: 6,
          elevation: 2,
          flex: 1,
        }}>
        <ScrollView><View  style={{margin:16}}>{props.children}</View></ScrollView>
      </View>
      {!props.hidefooter && (
        <View>
          <View style={{height: 3, backgroundColor: colors.green}}></View>
          <View
            style={{
              marginHorizontal: 24,
              marginTop: 8,
              marginBottom: 16,
              height:40,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            {/* {!props.isButtons && (
              <>
                <CustomButton stack="osd" text="O/S/D" />
                {props.isnavigation && <CustomButton stack={props.navigation} text={props.navigationtext} onPress={props.onPress} />}
              </>
            )}
            {props.isButtons} */}
            <View>{props.Lefttbtn}</View>
            <View>{props.Rightbtn}</View>
          </View>
        </View>
      )}
    </View>
  );
};
export default CommonLayout;
