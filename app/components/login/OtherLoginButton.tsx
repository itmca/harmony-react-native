import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const KaKaoSocialLoginButton = (): JSX.Element => {
  return (
    <TouchableOpacity
      onPress={() => {}}
      style={styles.otherLoginButtonContainer}>
      <Text style={styles.kakaoLoginFont}>다른 방법으로 로그인하기</Text>
    </TouchableOpacity>
  );
};

export default KaKaoSocialLoginButton;
