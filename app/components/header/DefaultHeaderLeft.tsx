import React from 'react';
import {Image, Pressable} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

const DefaultHeaderLeft = () => {
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <Pressable
      onPress={() => {
        if (route.name !== 'Home') {
          navigation.navigate('Home');
        }
      }}>
      <Image
        source={require('../../assets/images/puzzle_logo_with_text.png')}
      />
    </Pressable>
  );
};

export default DefaultHeaderLeft;
