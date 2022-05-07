import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {ChipMenu} from './ChipList';

type Props = {
  item: ChipMenu;
  onPress: Function;
  backgroundColor: string;
  textColor: string;
  marginLeft: string | number;
};

const ChipItem = ({
  item,
  onPress,
  backgroundColor,
  textColor,
  marginLeft,
}: Props): JSX.Element => (
  <>
    <TouchableOpacity
      onPress={onPress}
      style={[styles.chipItem, backgroundColor, marginLeft]}>
      <Text style={[styles.chipText, textColor]}>{item.name}</Text>
    </TouchableOpacity>
  </>
);

export default ChipItem;
