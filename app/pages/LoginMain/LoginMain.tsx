import React from 'react';

import {Image, Platform, Text, View} from 'react-native';
import KaKaoSocialLoginButton from '../../components/login/KaKaoSocialLoginButton';
import AppleSocialLoginButton from '../../components/login/AppleSocialLoginButton';
import OtherLoginButton from '../../components/login/OtherLoginButton';
import {styles} from './styles';

const LoginMain = (): JSX.Element => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.descContainer}>
        <Image
          source={require('../../assets/images/puzzle_logo.png')}
          style={styles.logo}
        />
        <Text style={styles.descText}> 사랑하는 사람의 이야기를 </Text>
        <Text style={styles.descText}> 한조각씩 맞추어 보세요 </Text>
      </View>
      <View style={styles.buttonContainer}>
        <KaKaoSocialLoginButton />
        {Platform.OS === 'ios' && <AppleSocialLoginButton />}
        <OtherLoginButton />
      </View>
    </View>
  );
};

export default LoginMain;
