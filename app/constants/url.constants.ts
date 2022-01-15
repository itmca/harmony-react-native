import {Platform} from 'react-native';

export const SERVER_HOST =
  process.env.NODE_ENV !== 'production'
    ? Platform.OS === 'ios'
      ? 'http://127.0.0.1:5001'
      : 'http://10.0.2.2:5001'
    : 'http://domain.com';
