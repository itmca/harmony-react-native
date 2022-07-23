import {PhotoIdentifier} from '@react-native-community/cameraroll';
import {atom, noWait} from 'recoil';
import {Hero} from '../type/hero';
import {dummyHero} from '../utils/dummy.util';

export const heroState = atom<Hero>({
  key: 'heroState',
  default: dummyHero,
});

export const selectedHeroPhotoState = atom<PhotoIdentifier | undefined>({
  key: 'selectedHeroPhotoState',
  default: undefined,
});
