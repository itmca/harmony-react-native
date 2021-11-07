import React from 'react';
import {Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

type Props = {
  type: 'cancel' | 'before';
};

const WritingHeaderLeft = ({type}: Props) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => {
        navigation.goBack();
      }}>
      <Icon name={type === 'cancel' ? 'close' : 'chevron_left'} size={24} />
    </Pressable>
  );
};

export default WritingHeaderLeft;
