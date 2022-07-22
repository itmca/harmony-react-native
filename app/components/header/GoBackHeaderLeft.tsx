import React from 'react';
import {Pressable, StyleProp, TextStyle, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

type Props = {
  iconType?: 'close' | 'chevron-left';
  containerStyle?: StyleProp<ViewStyle>;
  iconStyle?: StyleProp<TextStyle>;
  iconSize: number;
};

const GoBackHeaderLeft = ({
  iconType = 'close',
  containerStyle,
  iconStyle,
  iconSize = 24,
}: Props): JSX.Element => {
  const navigation = useNavigation<any>();

  return (
    <Pressable
      onPress={() => {
        navigation.goBack();
      }}
      style={containerStyle}>
      <Icon style={iconStyle} name={iconType} size={iconSize} />
    </Pressable>
  );
};

export default GoBackHeaderLeft;
