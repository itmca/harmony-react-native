import {PhotoIdentifier} from '@react-native-community/cameraroll';
import {atom, selector} from 'recoil';

export const selectedPhotoState = atom<PhotoIdentifier[]>({
  key: 'selectedPhotoState',
  default: [],
});

export const mainSelectedPhotoState = selector({
  key: 'mainSelectedPhotoState',
  get: ({get}) => {
    const list = get(selectedPhotoState);

    return list[list.length - 1];
  },
});
