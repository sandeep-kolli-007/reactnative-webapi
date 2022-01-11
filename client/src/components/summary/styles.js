import {StyleSheet} from 'react-native';
import {colors} from '../../colors';
export const styles = StyleSheet.create({
  buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  infoCards: {marginTop: 64},
  modal: {justifyContent: 'center', alignItems: 'center', flex: 1},
  modalDialog: {width: 300, height: 300, backgroundColor: colors.light, borderRadius: 8, padding: 24, elevation: 5, alignContent: 'center', justifyContent: 'center'},
  modalText: {color: colors.primary, fontSize: 18, textAlign: 'center'},
  modalFooter: {
    flexDirection: 'row',
    marginTop: 24,
    justifyContent: 'space-around',
  },
});
