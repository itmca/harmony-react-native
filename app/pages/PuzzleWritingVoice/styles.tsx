import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  recordContainer: {
    width: 62,
    height: 62,
    borderRadius: 50,
    borderColor: '#fff',
    borderWidth: 5,
    margin: 10,
  },
  notIsRecordBox: {
    backgroundColor: 'red',
    width: '100%',
    height: '100%',
    borderRadius: 50,
    transform: [{scale: 0.94}],
  },
  isRecordBox: {
    backgroundColor: 'red',
    width: '100%',
    height: '100%',
    borderRadius: 12,
    transform: [{scale: 0.5}],
  },
});
