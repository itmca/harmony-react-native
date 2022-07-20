import {atom, selector} from 'recoil';
import {AuthTokens} from '../type/auth';

export const authState = atom<AuthTokens>({
  key: 'authState',
  default: {
    accessToken: '',
    accessTokenExpireAt: new Date(),
    refreshToken: '',
    refreshTokenExpireAt: new Date(),
  },
});

export const isLoggedInState = selector({
  key: 'loginState',
  get: ({get}) => {
    const auth = get(authState);
    if (auth) {
      const accessTokenExpireAt = Date.parse(auth.accessTokenExpireAt);
      const refreshTokenExpireAt = Date.parse(auth.refreshTokenExpireAt);
      const current = Date.now();
      const isLogged =
        accessTokenExpireAt >= current || refreshTokenExpireAt >= current;
      return isLogged;
    } else return false;
  },
});

export const isExpireState = selector({
  key: 'refreshState',
  get: ({get}) => {
    return true;
    const auth = get(authState);
    if (auth && auth.accessToken != '') {
      const accessTokenExpireAt = Date.parse(auth.accessTokenExpireAt);
      const refreshTokenExpireAt = Date.parse(auth.refreshTokenExpireAt);
      const current = Date.now();

      const isExpire =
        accessTokenExpireAt < current && refreshTokenExpireAt < current;

      return isExpire;
    } else return false;
  },
});
