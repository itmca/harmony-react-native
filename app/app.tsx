/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler';

import React, {useEffect, useState} from 'react';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {authState, isLoggedInState} from './recoils/AuthRecoil';
import {LocalStorage} from './storage/local.storage';
import {userState} from './recoils/UserRecoil';
import {heroState} from './recoils/HeroRecoil';
import {Alert} from 'react-native';
import {getTokenState} from './utils/auth.util';
import {useAxiosPromise, useRefreshPromise} from './hooks/network.hooks';
import {AuthTokens} from './type/auth';
import RootNavigator from './routes/RootNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {User} from './type/user';
import { Hero } from './type/hero';

type IsRefreshInErrorType = 'UnSelect' | 'SelectRefresh' | 'CancleRefresh';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#343666',
    accent: 'yellow',
    background: '#ffffff',
  },
};

const App = (): JSX.Element => {
  const [isRefreshInError, setisRefreshInError] =
    useState<IsRefreshInErrorType>('UnSelect');
  const tokens = useRecoilValue(authState);
  const setAuthState = useSetRecoilState(authState);
  const setUser = useSetRecoilState(userState);
  const setHero = useSetRecoilState(heroState);
  const {refreshRefetch} = useRefreshPromise<AuthTokens>();
  const isLoggined = useRecoilValue(isLoggedInState);
  const {response: userResponse, refetch: refetchUser} = useAxiosPromise<User>(
    {},
    {disableInitialRequest: true},
  );
  const {response: heroResponse, refetch: refetchHero} = useAxiosPromise<Hero>(
    {},
    {disableInitialRequest: true},
  );

  useEffect(() => {
    const tokenState = getTokenState(tokens);

    if (tokenState == 'Use') {
      const userNo: number = LocalStorage.get('userNo', 'number');
      refetchUser({url: `/user/${userNo.toString()}`});
    }
    if (tokenState == 'Expire') {
      resetLoginStatus();
    } else if (tokenState == 'Refresh') {
      refreshLogic();
    }
  }, []);

  useEffect(() => {
    if (isRefreshInError == 'UnSelect') return;
    else if (isRefreshInError == 'SelectRefresh') refreshLogic();
    else resetLoginStatus();
  }, [isRefreshInError]);

  const refreshLogic = () => {
    void refreshRefetch()
      .then(res => {
        const token = res.data;

        setAuthState(token);
        LocalStorage.set('authToken', JSON.stringify(token));
      })
      .catch(err => {
        const status: number = err.response?.status;

        if (400 <= status && status < 500) {
          resetLoginStatus();
        } else if (500 <= status) {
          Alert.alert(
            '네트워크 문제',
            '네트워크 연결을 다시 시도하시겠습니까?',
            [
              {
                text: '확인',
                onPress: () => {
                  setisRefreshInError('SelectRefresh');
                },
              },
              {
                text: '취소',
                onPress: () => {
                  setisRefreshInError('CancleRefresh');
                },
              },
            ],
          );
        }
      });
  };

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
      imageURL: undefined,
      birthday: undefined,
      title: undefined,
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

  useEffect(() => {
    const tokenState = getTokenState(tokens);
    if (tokenState == 'Use') {
      const userNo: number = LocalStorage.get('userNo', 'number');
      refetchUser({url: `/user/${userNo.toString()}`});
    }
  }, [tokens]);

  useEffect(() => {
    if (!userResponse) return;

    void userResponse.then(res => {
      const user = res.data;
      const heroNo = user.recentHeroNo;
      setUser(user);
      refetchHero({url: `/heroes/${heroNo.toString()}`});
    });
  }, [userResponse]);

  useEffect(() => {
    if (!heroResponse) return;

    void heroResponse.then(res => {
      const hero = res.data;
      setHero(hero);
    });
  }, [heroResponse]);

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
