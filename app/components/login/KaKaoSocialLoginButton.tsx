import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const KaKaoSocialLoginButton = (): JSX.Element => {
  return (
    <TouchableOpacity
      onPress={() => {}}
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
