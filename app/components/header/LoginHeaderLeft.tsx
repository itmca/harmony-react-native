import React from 'react';
import {Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

const LoginHeaderLeft = (): JSX.Element => {
  const navigation = useNavigation<any>();
  return (
    <Pressable
      onPress={() => {
        navigation.navigate('HomeTab', {
          screen: 'Home',
        });
      }}>
      <Icon name={'close'} size={24} />
    </Pressable>
  );
};

export default LoginHeaderLeft;
