import {StyleSheet} from 'react-native';
import {colors} from '../../../colors';

export const styles = StyleSheet.create({
  iconCardColumn: {
    width: '33.33%',
    display: 'flex',
    marginVertical: 16,
    alignItems: 'center',
  },
  iconCard: {
    backgroundColor: colors.light,
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  text: {
    color: colors.light,
    fontSize: 12,
    textAlign: 'center',
    marginTop: 8,
  },
});
