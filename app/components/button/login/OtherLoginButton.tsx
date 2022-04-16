import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const OtherLoginButton = (): JSX.Element => {
  const navigation = useNavigation<any>()
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.push('NoTab', {
          screen: 'LoginRegisterNavigator',
          params: {
            screen: 'LoginOthers',
          },
        });
      }}
      style={styles.otherLoginButtonContainer}>
      <Text style={styles.kakaoLoginFont}>다른 방법으로 로그인하기</Text>
    </TouchableOpacity>
  );
};

export default OtherLoginButton;
