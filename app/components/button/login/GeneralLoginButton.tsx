import React, {useEffect, useState} from 'react';
import {Alert, Image, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {useRecoilState} from 'recoil';
import {userState} from '../../../recoils/UserRecoil';
import {authState} from '../../../recoils/AuthRecoil';
import {useNavigation} from '@react-navigation/native';
import {heroState} from '../../../recoils/HeroRecoil';
import {useAxiosPromise} from '../../../hooks/network.hooks';
import {AuthTokens} from '../../../type/auth';
import {Hero} from '../../../type/hero';

type LoginResponse = {
  user: {
    userName: string;
    userNickName: string;
  };
  tokens: AuthTokens;
  hero: Hero;
};

const GeneralLoginButton = (props: {
  userID: string;
  password: string;
}): JSX.Element => {
  const navigation = useNavigation();
  const [, setUser] = useRecoilState(userState);
  const [, setAuthTokens] = useRecoilState(authState);
  const [, setHero] = useRecoilState(heroState);
  const {response, error, loading, refetch} = useAxiosPromise<LoginResponse>(
    {
      method: 'post',
      url: '/auth/login',
    },
    {disableInitialRequest: true},
  );

  const login = () => {
    refetch({data: {username: props.userID, password: props.password}});
  };

  useEffect(() => {
    if (!response) {
      return;
    }

    void response
      .then(r => r.data)
      .then(data => {
        const {user, tokens, hero} = data;

        setUser({
          loginMethod: 'general',
          userName: user.userName,
          userNickName: user.userNickName,
        });
        setAuthTokens(tokens);
        if (hero != undefined) setHero(hero);

        navigation.navigate('Home');
      })
      .catch(() =>
        Alert.alert('로그인 실패', '아이디와 패스워드 확인 부탁드립니다.'),
      );
  }, [response]);

  return (
    <TouchableOpacity
      onPress={login}
      style={styles.generalLoginButtonContainer}>
      <Text style={styles.generalLoginFont}>로그인</Text>
    </TouchableOpacity>
  );
};

export default GeneralLoginButton;
