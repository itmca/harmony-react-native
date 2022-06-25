import React from 'react';
import {Hero} from '../../type/hero';
import {Avatar} from 'react-native-paper';
import {StyleProp} from 'react-native';

type Props = {
  hero: Hero;
  size: number;
  style?: StyleProp<any> | undefined;
};

export const HeroAvatar = ({hero, size, style}: Props): JSX.Element => {
  if (hero.imageURL) {
    return (
      <Avatar.Image style={style} size={size} source={{uri: hero.imageURL}} />
    );
  }

  return (
    <Avatar.Text
      style={style}
      size={size}
      label={hero.heroNickName.substring(0, 1)}
    />
  );
};
