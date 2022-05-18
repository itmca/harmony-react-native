import {Platform} from 'react-native';

export const AUDIO_TYPE = Platform.OS === 'ios' ? 'audio/x-m4a' : 'audio/x-m4a';
export const IMG_TYPE = Platform.OS === 'ios' ? 'image/jpeg' : 'image/jpg';
