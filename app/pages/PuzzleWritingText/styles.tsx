import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  card: {
    height: 40,
    width: '100%',
    borderWidth: 3,
    borderColor: '#dbdbdb',
  },
  scrollView: {
    marginHorizontal: 20,
  },
  titleInput: {
    marginBottom: 5,
    borderBottomWidth: 2,
    borderColor: '#dbdbdb',
    padding: 10,
    fontSize: 20,
  },
  contentInput: {
    marginBottom: 10,
    borderWidth: 0,
    padding: 10,
    flexShrink: 0,
    fontSize: 14,
  },
  voiceBox: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomWidth: 1,
    borderColor: '#dbdbdb',
  },
});
