import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const TextBox = (props: any) => {
  const [isinputgroup, setisinputgroup] = useState(false);
  useEffect(() => {
    if (props.inputgroup) setisinputgroup(true);
  }, []);
  return (
    <View style={[{position: 'relative',width:"100%"}, props.styles]}>
      <Text
        style={{
          color: 'white',
          position: 'absolute',
          top: 5,
          left: 20,
          fontSize: 14,
          backgroundColor: '#222E3E',
          paddingHorizontal: 8,
          zIndex: 1,
        }}>
        {props.label}
      </Text>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <TextInput onChange={props.onChange} value={props.value} keyboardType={props.keyboardType}
          style={[
            {
              marginTop: 16,
              borderColor: 'white',
              borderWidth: 2,
              borderRadius: 10,
              fontSize: 22,
              color: 'white',
              flex: 1,
              padding: 16,
              height:props.height || 65,
              textAlign:props.align || "left",
            },
            isinputgroup && {
              borderBottomRightRadius: 0,
              borderTopRightRadius: 0,
            },
          ]}></TextInput>
        {props.inputgroup && (
         <TouchableOpacity onPress={props.onPress}>
            <View
            style={{
              marginTop: 16,
              borderColor: 'white',
              borderWidth: 2,
              width: 64,
              borderRadius: 10,
              borderBottomLeftRadius: 0,
              borderTopLeftRadius: 0,
              padding: 16,
              backgroundColor: 'white',
            }}>
            <Icon solid name="barcode" size={28} color="#0F1924"></Icon>
          </View>
         </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default TextBox;
