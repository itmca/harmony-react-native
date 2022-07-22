import {atom, selector} from 'recoil';
import {AuthTokens, TokenState} from '../type/auth';

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

        refreshTokenExpireAt >= current || accessTokenExpireAt >= current;
      return isLogged;
    } else return false;
  },
});

