import {Picker} from '@react-native-picker/picker';
import React, {useState} from 'react';
import {View, Text} from 'react-native';

const Dropdown = (props: any) => {
  const [selectedValue, setSelectedValue] = useState('');

  return (
    <View
      style={{
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 10,
        paddingVertical: 4,
        marginTop: 16,
        position: 'relative',
      }}>
      <Text
        style={{
          color: 'white',
          position: 'absolute',
          top: -12,
          left: 20,
          fontSize: 14,
          backgroundColor: '#222E3E',
          paddingHorizontal: 8,
          zIndex: 1,
        }}>
        {props.label}
      </Text>
      <Picker
        mode={'dialog'}
        // selectedValue={selectedValue}
        style={{height: 50, color: 'white'}}
        dropdownIconColor="white"
        // onValueChange={(itemValue, itemIndex) => {setSelectedValue(itemValue);props.setdata(itemValue)}}
        >
        {/* {props?.data.map((d: any,index:number) => {
          return (
              <Picker.Item key={index} label={d} value={d} />
          );
        })} */}
        
      </Picker>
    </View>
  );
};

export default Dropdown;
