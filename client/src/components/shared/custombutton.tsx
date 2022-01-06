import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Text, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
interface Iprops {
  stack?: any;
  color?: string;
  textColor?: string;
  text: string;
  width?:number;
  fontSize?:number;
  onPress?:any;
  disabled?:boolean
}

const CustomButton = (props: Iprops) => {
  const navigation = useNavigation();
const stack =props.stack
  return (
<>
 
    <TouchableOpacity onPress={stack ? () => {navigation.navigate(stack)}:props.onPress } disabled={props.disabled}>
      <View
        style={{
          width: props.width || 120,
          backgroundColor: props.color || 'white',
          borderRadius: 24,
        }}>
        <Text
          style={{
            padding: 8,
            textAlign: 'center',
            fontWeight: '900',
             fontSize:props.fontSize || 14,
            color: props.textColor || '#0F1924',
          }}>
          {props.text}
        </Text>
      </View>
    </TouchableOpacity> 
</>
  );
 
};

export default CustomButton;
