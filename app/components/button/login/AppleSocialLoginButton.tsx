import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const AppleSocialLoginButton = (): JSX.Element => {
  return (
    <TouchableOpacity
      onPress={() => {}}
      style={styles.appleLoginButtonContainer}>
      <Image
        source={require('../../../assets/images/apple-logo-white.png')}
        style={styles.socialLoginIcon}
      />
      <Text style={styles.appleLoginFont}>애플로 로그인/회원가입</Text>
    </TouchableOpacity>
  );
};

export default AppleSocialLoginButton;