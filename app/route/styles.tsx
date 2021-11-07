import {StyleSheet} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

export const defaultHeaderStyle = {
  height: 64 + getStatusBarHeight(),
  backgroundColor: '#ffffff',
  elevation: 0, // Android
  shadowOpacity: 0, // iOS
  borderBottomWidth: 0,
};

export default StyleSheet.create({
  imgIcon: {
    width: 24,
    height: 24,
  },
  imgPuzzleIcon: {
    width: 59,
    height: 59,
    position: 'absolute',
    bottom: '30%',
  },
});
