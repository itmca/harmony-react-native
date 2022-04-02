import {atom, selector} from 'recoil';
import {User} from '../type/user';

export const userState = atom<User | undefined>({
  key: 'userState',
  default: undefined,
});

export const isLoggedInState = selector({
  key: 'loginState',
  get: ({get}) => {
    const user = get(userState);
    return !!user;
  },
});
