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

import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './routes/RootNavigator';
import {useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {authState, isExpireState, isLoggedInState} from './recoils/AuthRecoil';
import {useAxiosPromise, useRefreshPromise} from './hooks/network.hooks';
import {AuthTokens} from './type/auth';
import {LocalStorage} from './storage/local.storage';
import {User} from './type/user';
import {Hero} from './type/hero';
import {SettingsEthernetOutlined} from '@mui/icons-material';
import {userState} from './recoils/UserRecoil';
import {heroState} from './recoils/HeroRecoil';
import {Alert} from 'react-native';
import { useRefreshLogic } from './hooks/refresh.logic.hook';

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
  const auth = useRecoilValue(authState);
  const setAuthState = useSetRecoilState(authState);
  const setUser = useSetRecoilState(userState);
  const setHero = useSetRecoilState(heroState);
  useRefreshLogic();

  // useEffect(() => {
  //   if (!isLoggined) return;

  //   const userNo: number = LocalStorage.get('userNo', 'number');
  //   refetchUser({url: `/user/${userNo.toString()}`});
  // }, []);

  // useEffect(() => {
  //   if (!userResponse) return;

  //   void userResponse.then(res => {
  //     const user = res.data;
  //     const heroNo = user.recentHeroNo;
  //     setUser(user);
  //     refetchHero({url: `/heroes/${heroNo.toString()}`});
  //   });
  // }, [userResponse]);

  // useEffect(() => {
  //   if (!heroResponse) return;

  //   void heroResponse.then(res => {
  //     const hero = res.data;
  //     setHero(hero);
  //   });
  // }, [heroResponse]);

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
