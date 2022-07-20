import {atom, selector} from 'recoil';
import {User} from '../type/user';

export const userState = atom<User | undefined>({
  key: 'userState',
  default: undefined,
});
