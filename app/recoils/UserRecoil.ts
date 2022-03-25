import {PhotoIdentifier} from '@react-native-community/cameraroll';
import {atom, selector} from 'recoil';

export const selectedPhotoState = atom<PhotoIdentifier[]>({
  key: 'selectedPhotoState',
  default: [],
});
