import React from 'react';

import {Text, View} from 'react-native';
import {useRecoilValue} from 'recoil';
import {isLoggedInState} from '../../recoils/UserRecoil';
import {useFocusEffect} from '@react-navigation/native';

const Story = ({navigation}): JSX.Element => {
  const isLoggedIn = useRecoilValue(isLoggedInState);
  useFocusEffect(() => {
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
      <Text>Story</Text>
    </View>
  );
};
export default Story;
