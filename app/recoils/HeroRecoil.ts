import {atom} from 'recoil';
import {Hero} from '../type/hero';

export const heroState = atom<Hero>({
  key: 'heroState',
  default: {
    heroNo: -1,
    heroName: '',
    heroNickName: '',
  },
});
