import React, {useState} from 'react';

import {Image, Platform, Text, TouchableOpacity, View} from 'react-native';
import KaKaoSocialLoginButton from '../../components/button/login/KaKaoSocialLoginButton';
import AppleSocialLoginButton from '../../components/button/login/AppleSocialLoginButton';
import {styles} from './styles';
import {TextInput} from 'react-native-paper';
import ColoredButton from '../../components/button/ColoredButton';
import axios from 'axios';
import GeneralLoginButton from '../../components/button/login/GeneralLoginButton';

const LoginOthers = ({navigation}): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <Image
          source={require('../../assets/images/puzzle_logo.png')}
          style={styles.logo}
        />
        <Text style={styles.registerText}> 인생 퍼즐</Text>
      </View>
      <View style={styles.loginTextContainer}>
        <Text style={styles.loginText}>로그인</Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.formInput}
          mode="outlined"
          label="이메일"
          value={email}
          placeholder="user@domain.com"
          onChangeText={value => {
            setEmail(value);
          }}
        />
        <TextInput
          style={styles.formInput}
          secureTextEntry={true}
          mode="outlined"
          label="비밀번호"
          value={password}
          placeholder=""
          onChangeText={value => {
            setPassword(value);
          }}
        />
        <View style={styles.passwordRegisterContainer}>
          <Text style={styles.passwordRegisterText}> </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.push('NoTab', {
                screen: 'LoginRegisterNavigator',
                params: {
                  screen: 'Register',
                },
              });
            }}>
            <Text style={styles.passwordRegisterText}>회원가입</Text>
          </TouchableOpacity>
        </View>
        <GeneralLoginButton userID={email} password={password} />
      </View>
      <View style={styles.socialContainer}>
        <KaKaoSocialLoginButton />
        {Platform.OS === 'ios' && <AppleSocialLoginButton />}
      </View>
    </View>
  );
};

export default LoginOthers;
