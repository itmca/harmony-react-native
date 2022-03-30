import {atom} from 'recoil';
import {AuthTokens} from '../type/auth';

export const authState = atom<AuthTokens | undefined>({
  key: 'authState',
  default: undefined,
});
