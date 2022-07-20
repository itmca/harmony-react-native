import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 145,
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderBottomWidth: 0.3,
    borderBottomColor: '#979797',
    position: 'relative',
  },
  listItemContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFFFFF',
  },
  thumbnailListItemContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
  },
  textBox: {
    textAlign: 'left',
    maxWidth: '100%',
  },
  thumbnailTextBox: {
    textAlign: 'left',
    maxWidth: '70%',
  },
  listTitle: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: 0.15,
    marginBottom: 13,
  },
  description: {
    fontSize: 12,
    opacity: 0.8,
  },
  thumbnailBox: {
    // flex: 0.3,
    width: 94,
    height: 94,
  },
  thumbnailImage: {
    width: 94,
    height: 94,
    borderRadius: 10,
  },
  bottomRowBox: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  dateText: {
    fontSize: 11,
    color: '#979797',
  },
  micIconBox: {
    paddingLeft: 5,
    paddingTop: 5,
  },
  profileContainer: {
    width: '100%',
    paddingTop: 13,
    paddingBottom: 22,
    alignItems: 'center',
  },
  profileImage: {
    width: 68,
    height: 68,
    borderRadius: 50,
  },
  profileTitle: {
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 0.15,
    marginTop: 10,
    height: 20,
    lineHeight: 20,
  },
  profileText: {
    fontSize: 11,
    letterSpacing: 0.15,
    height: 20,
    lineHeight: 20,
  },
  chipContainer: {},
  chipItem: {
    height: 26,
    borderRadius: 16,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 12,
    paddingRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 17,
  },
  chipText: {
    fontSize: 14,
    letterSpacing: 0.25,
  },
});
