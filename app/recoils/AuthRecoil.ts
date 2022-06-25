import {atom} from 'recoil';
import {AuthTokens} from '../type/auth';

export const authState = atom<AuthTokens>({
  key: 'authState',
  default: {
    accessToken: '',
    accessTokenExpireAt: new Date(),
    refreshToken: '',
    refreshTokenExpireAt: new Date()
  },
});
