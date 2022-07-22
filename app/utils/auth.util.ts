import {AuthTokens, TokenState} from '../type/auth';

export const getTokenState = (auth: AuthTokens): TokenState => {
  if (auth && auth.accessToken != '') {
    const accessTokenExpireAt = Date.parse(auth.accessTokenExpireAt);
    const refreshTokenExpireAt = Date.parse(auth.refreshTokenExpireAt);
    const current = Date.now();

    const isAccessTokenUse = accessTokenExpireAt >= current;
    const isRefreshTokenUse = refreshTokenExpireAt >= current;

    if (isAccessTokenUse) {
      return 'Use';
    } else if (isRefreshTokenUse) {
      return 'Refresh';
    } else {
      return 'Expire';
    }
  } else return 'Expire';
};
