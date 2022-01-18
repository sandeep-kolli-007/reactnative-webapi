import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Text, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
interface Iprops {
  stack?: any;
  color?: string;
  textColor?: string;
  text: string;
  width?: number|string;
  fontSize?: number;
  onPress?: any;
  disabled?: boolean;
  icon?: any;
  style?: any;
  small?: boolean;
}

const CustomButton = (props: Iprops) => {
  const navigation = useNavigation();
  const stack = props.stack;
  return (
    <>
      <TouchableOpacity
        onPress={
          stack
            ? () => {
                navigation.navigate(stack);
              }
            : props.onPress
        }
        disabled={props.disabled}>
        <View
          style={[
            {width: props.width || 120, height: props.small ? 24 : 40, backgroundColor: props.color || 'white', borderRadius: 24, elevation: 5, alignItems: 'center'},
            props.icon && {flexDirection: 'row'},
            props.style,
          ]}>
          {props.icon && <Icon name={props.icon} size={18} color={props.textColor ?? '#0F1924'} solid style={{marginLeft: 12}} />}
          <Text
            style={{
              padding: props.small ? 4 : 8,
              textAlign: 'center',
              fontWeight: '900',
              fontSize: props.fontSize || props.small ? 12 : 16,
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
