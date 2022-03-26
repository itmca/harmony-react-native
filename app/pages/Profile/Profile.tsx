import React, {useState} from 'react';

import {Button, Text, View} from 'react-native';
import {
  KakaoOAuthToken,
  KakaoProfile,
  KakaoProfileNoneAgreement,
  getProfile,
  login,
  logout,
} from '@react-native-seoul/kakao-login';

const Profile = (): JSX.Element => {
  const [loginResult, setLoginResult] = useState('empty');
  const [logoutResult, setLogOutResult] = useState('empty');
  const [profileResult, setProfile] = useState('profile');

  const signInWithKakao = async (): Promise<void> => {
    const token: KakaoOAuthToken = await login();
    setLoginResult(JSON.stringify(token));
  };

  const getKakaoProfile = async (): Promise<void> => {
    const profile: KakaoProfile | KakaoProfileNoneAgreement =
      await getProfile();

    setProfile(JSON.stringify(profile));
  };

  const signOutWithKakao = async (): Promise<void> => {
    const message = await logout();

    setLogOutResult(message);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Button title={'Kakao Login'} onPress={signInWithKakao} />
      <Text>{loginResult}</Text>
      <Button title={'Log Out'} onPress={signOutWithKakao} />
      <Text>{logoutResult}</Text>
      <Button title={'Get Profile'} onPress={getKakaoProfile} />
      <Text>{profileResult}</Text>
    </View>
  );
};
export default Profile;
