import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import axios from 'axios';
import styles from './styles';
import {
  getProfile,
  KakaoOAuthToken,
  KakaoProfile,
  KakaoProfileNoneAgreement,
  login,
} from '@react-native-seoul/kakao-login';
import {useRecoilState} from 'recoil';
import {userState} from '../../recoils/UserRecoil';

const KaKaoSocialLoginButton = (): JSX.Element => {
  const [accessToken, setAccessToken] = useState('');
  const [_, setUser] = useRecoilState(userState);
  const signInWithKakao = async (): Promise<void> => {
    const tokens: KakaoOAuthToken = await login();
    console.log('Kakao Access Token signInWithKakao :: ', tokens);
    setAccessToken(tokens.accessToken);
  };

  useEffect(() => {
    console.log('Acess Token :: ', accessToken);
    void axios
      .post(
        'http://localhost:5001/auth/social/kakao',
        {},
        {
          headers: {
            'kakao-access-token': accessToken,
          },
        },
      )
      .then(res => res.data)
      .then(user => {
        console.log('User :: ', user);
        setUser({
          loginMethod: 'kakao',
          userName: '',
          userNickName: '',
          userNo: 0,
          ...user,
        });
      });
  }, [accessToken]);

  return (
    <TouchableOpacity
      onPress={signInWithKakao}
      style={styles.kakaoLoginButtonContainer}>
      <Image
        source={require('../../assets/images/kakao-talk.png')}
        style={styles.socialLoginIcon}
      />
      <Text style={styles.kakaoLoginFont}>카카오로 로그인/회원가입</Text>
    </TouchableOpacity>
  );
};

export default KaKaoSocialLoginButton;
