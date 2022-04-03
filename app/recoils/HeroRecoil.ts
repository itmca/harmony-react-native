import {atom} from 'recoil';
import {Hero} from '../type/hero';

export const heroState = atom<Hero | undefined>({
  key: 'heroState',
  default: undefined,
});
