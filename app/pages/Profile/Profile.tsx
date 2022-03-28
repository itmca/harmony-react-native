import React from 'react';

import {Text, View} from 'react-native';
import {useRecoilValue} from 'recoil';
import {isLoggedInState} from '../../recoils/UserRecoil';

const Profile = ({navigation}): JSX.Element => {
  const isLoggedIn = useRecoilValue(isLoggedInState);
  navigation.addListener('focus', () => {
    if (!isLoggedIn) {
      navigation.push('NoTab', {
        screen: 'LoginMain',
      });
    }
  });
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Profile</Text>
    </View>
  );
};
export default Profile;
