import React from 'react';
import {Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

type Props = {
  iconType?: 'close' | 'chevron-left';
};

const GoBackHeaderLeft = ({iconType = 'close'}: Props): JSX.Element => {
  const navigation = useNavigation<any>();

  return (
    <Pressable
      onPress={() => {
        navigation.goBack();
      }}>
      <Icon name={iconType} size={24} />
    </Pressable>
  );
};

export default GoBackHeaderLeft;
