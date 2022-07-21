import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
  },
  container: {
    flex: 0.3,
    backgroundColor: '#FFFFFF',
  },
  scrollViewContainer: {
    width: '100%',
    flex: 0.7,
    position: 'relative',
  },
  floatingBtBox: {
    width: 39,
    height: 39,
    position: 'absolute',
    backgroundColor: '#FFFFFF',
    bottom: 34,
    right: 16,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  floatingBtTop: {
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
  },
});
