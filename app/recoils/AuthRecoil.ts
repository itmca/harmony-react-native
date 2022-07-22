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

export const tokenState = atom<TokenState>({
  key: 'tokenState',
  default: 'Expire',
});

export const currentTokenState = selector({
  key: 'currentTokenState',
  get: ({get}): TokenState => {
    const currentTokenState = get(tokenState);
    return currentTokenState;
  },
  set: ({set, get}) => {
    const auth = get(authState);
    if (auth && auth.accessToken != '') {
      const accessTokenExpireAt = Date.parse(auth.accessTokenExpireAt);
      const refreshTokenExpireAt = Date.parse(auth.refreshTokenExpireAt);
      const current = Date.now();

      const isAccessTokenUse = accessTokenExpireAt >= current;
      const isRefreshTokenUse = refreshTokenExpireAt >= current;

      if (isAccessTokenUse) {
        set(tokenState, 'Use');
      } else if (isRefreshTokenUse) {
        set(tokenState, 'Refresh');
      } else {
        set(tokenState, 'Expire');
      }
    } else set(tokenState, 'Expire');
  },
});
