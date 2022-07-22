import {atom, noWait} from 'recoil';
import {Hero} from '../type/hero';
import {dummyHero} from '../utils/dummy.util';

export const heroState = atom<Hero>({
  key: 'heroState',
  default: dummyHero,
});
