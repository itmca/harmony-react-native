import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import axios from 'axios';
import styles from './styles';
import {KakaoOAuthToken, login} from '@react-native-seoul/kakao-login';
import {useRecoilState} from 'recoil';
import {userState} from '../../../recoils/UserRecoil';
import {authState} from '../../../recoils/AuthRecoil';
import {useNavigation} from '@react-navigation/native';
import {SERVER_HOST} from '../../../constants/url.constants';
import {heroState} from '../../../recoils/HeroRecoil';

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

  useEffect(() => {
    if (!accessToken) {
      return;
    }

    void axios
      .post(
        `${SERVER_HOST}/auth/social/kakao`,
        {},
        {
          headers: {
            'kakao-access-token': accessToken,
          },
        },
      )
      .then(res => res.data)
      .then((data: any) => {
        const user = data.user;
        setUser({
          loginMethod: 'kakao',
          userName: user.name,
          userNickName: user.userNickName,
        });

        setAuthTokens(data.authTokens);
        setHero(data.hero);
        navigation.goBack();
      });
  }, [accessToken]);

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
