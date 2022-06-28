import React from 'react';
import {Text, View} from 'react-native';
import {useRecoilValue} from 'recoil';
import {isLoggedInState} from '../../recoils/UserRecoil';
// import { route } from '@react-navigation/native';

const Story = ({ route, navigation }): JSX.Element => {
  // const { id } = route.params;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Story</Text>
      {/* <Text>{id}</Text> */}
    </View>
  );
};
export default Story;
