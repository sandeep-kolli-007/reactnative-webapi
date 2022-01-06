import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = ({navigation}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Icon name="caret-left" size={30} color="#fff" />
      </TouchableOpacity>

      <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
        Summary
      </Text>
      <Icon name="bars" size={30} color="#fff" />
      <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('footer', { name: 'Jane' })
      }
    />
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#0F1924',
    height: 60,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
});

export default Header;
