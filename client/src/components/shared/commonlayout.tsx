import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {
  View,
  Text,
  Button,
  Touchable,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CustomButton from './custombutton';

const CommonLayout = (props: any) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: '#0F1924',
        flex: 1,
        borderTopWidth: 1,
        borderTopColor: '#111',
        opacity: props.opacity || 1,
      }}>
      <View
        style={{
          backgroundColor: '#222E3E',
          margin: 12,
          borderRadius: 6,
          elevation: 2,
          flex: 1,
        }}>
        <ScrollView>{props.children}</ScrollView>
      </View>
      {!props.hidefooter && (
        <View>
          <View style={{height: 3, backgroundColor: 'green'}}></View>
          <View
            style={{
              marginHorizontal: 24,
              marginTop: 8,
              marginBottom: 16,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            {!props.isButtons && (
              <>
                <CustomButton stack="osd" text="O/S/D" />
                {props.isnavigation && (
                  <CustomButton
                    stack={props.navigation}
                    text={props.navigationtext}
                    onPress={props.onPress}
                  />
                )}
              </>
            )}
            {props.isButtons}
          </View>
        </View>
      )}
    </View>
  );
};
export default CommonLayout;
