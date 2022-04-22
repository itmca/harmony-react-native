import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

type Props = {
  onPress: () => void;
  color?: 'primary';
  text: string;
  style?: any;
};

const ColoredButton = ({
  onPress,
  color = 'primary',
  text,
  style,
}: Props): JSX.Element => {
  const backgroundColor = color === 'primary' ? '#343666' : '#A3A7F8';
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.coloredButtonContainer,
        ...style,
        backgroundColor,
      }}>
      <Text style={styles.coloredButtonFont}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ColoredButton;
