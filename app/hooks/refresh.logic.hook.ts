import {useEffect} from 'react';
import {Alert} from 'react-native';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import {useRefreshPromise} from './network.hooks';
import {authState, isExpireState} from '../recoils/AuthRecoil';
import {heroState} from '../recoils/HeroRecoil';
import {userState} from '../recoils/UserRecoil';
import {LocalStorage} from '../storage/local.storage';
import {AuthTokens} from '../type/auth';

export const useRefreshLogic = () => {
  const setAuthState = useSetRecoilState(authState);
  const setUser = useSetRecoilState(userState);
  const setHero = useSetRecoilState(heroState);
  const isExpire = useRecoilValue(isExpireState);
  const {refreshResponse, refreshError, refreshRefetch} =
    useRefreshPromise<AuthTokens>(isExpire);

  console.log(isExpire);
  useEffect(() => {
    if (!refreshResponse) return;

    void refreshResponse
      .then(res => {
        const tokens = res.data;
        setAuthState(tokens);
        LocalStorage.set('authToken', JSON.stringify(tokens));
      })
      .catch(err => {
        const status: number = err.response?.status;

        if (400 <= status && status < 500) {
          resetLoginStatus();
        } else if (500 <= status) {
          Alert.alert('네트워크 문제', '네트워크 연결을 다시 시도하겠습니다.', [
            {
              text: '확인',
              onPress: () => {
                refreshRefetch();
              },
            },
            {
              text: '취소',
              onPress: () => {
                resetLoginStatus();
              },
            },
          ]);
        }
      });
  }, [refreshResponse]);

  const resetLoginStatus = () => {
    resetRecoil();
    removeLocalStroage();
  };

  const resetRecoil = () => {
    setUser(undefined);
    setHero({
      heroNo: -1,
      heroName: '',
      heroNickName: '',
    });
    setAuthState({
      accessToken: '',
      accessTokenExpireAt: new Date(),
      refreshToken: '',
      refreshTokenExpireAt: new Date(),
    });
  };

  const removeLocalStroage = () => {
    LocalStorage.delete('authToken');
    LocalStorage.delete('useNo');
  };
};
