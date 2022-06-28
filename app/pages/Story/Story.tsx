import React from 'react';

import {Text, View} from 'react-native';
import {useRecoilValue} from 'recoil';
import {isLoggedInState} from '../../recoils/UserRecoil';
import {useFocusEffect} from '@react-navigation/native';

const Story = (): JSX.Element => {
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
