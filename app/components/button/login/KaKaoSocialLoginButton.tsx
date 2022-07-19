import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {KakaoOAuthToken, login} from '@react-native-seoul/kakao-login';
import {useRecoilState} from 'recoil';
import {userState} from '../../../recoils/UserRecoil';
import {authState} from '../../../recoils/AuthRecoil';
import {useNavigation} from '@react-navigation/native';
import {heroState} from '../../../recoils/HeroRecoil';
import {useAxiosPromise} from '../../../hooks/network.hooks';
import {User} from '../../../type/user';
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

const KaKaoSocialLoginButton = (): JSX.Element => {
  const navigation = useNavigation();
  const [accessToken, setAccessToken] = useState('');
  const [, setUser] = useRecoilState(userState);
  const [, setAuthTokens] = useRecoilState(authState);
  const [, setHero] = useRecoilState(heroState);
  const signInWithKakao = async (): Promise<void> => {
    const tokens: KakaoOAuthToken = await login();
    setAccessToken(tokens.accessToken);
  };

  const {response, error, loading, refetch} = useAxiosPromise<LoginResponse>(
    {
      method: 'post',
      url: '/auth/social/kakao',
      headers: {
        'kakao-access-token': accessToken,
      },
    },
    {disableInitialRequest: true},
  );

  useEffect(() => {
    if (!accessToken) {
      return;
    }

    refetch({
      headers: {
        'kakao-access-token': accessToken,
      },
    });
  }, [accessToken]);

  useEffect(() => {
    if (!response) {
      return;
    }

    void response
      .then(r => r.data)
      .then(data => {
        const {user, tokens, hero} = data;

        setUser({
          loginMethod: 'kakao',
          userName: user.userName,
          userNickName: user.userNickName,
        });
        setAuthTokens(tokens);
        setHero(hero);

        navigation.goBack();
      });
  }, [response]);

  return (
    <TouchableOpacity
      onPress={signInWithKakao}
      style={styles.kakaoLoginButtonContainer}>
      <Image
        source={require('../../../assets/images/kakao-talk.png')}
        style={styles.socialLoginIcon}
      />
      <Text style={styles.kakaoLoginFont}>카카오로 로그인/회원가입</Text>
    </TouchableOpacity>
  );
};

export default KaKaoSocialLoginButton;
