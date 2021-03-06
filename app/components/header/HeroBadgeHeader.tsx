import React from 'react';
import {Image, TouchableOpacity, Text} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import styles from './styles';
import {useRecoilState, useRecoilValue} from 'recoil';
import {heroState} from '../../recoils/HeroRecoil';
import {HeroAvatar} from '../avatar/HeroAvatar';

const HeroBadgeHeader = (): JSX.Element => {
  const hero = useRecoilValue(heroState);
  return (
    <TouchableOpacity
      onPress={() => {}}
      style={styles.defaultHeaderRightContainer}>
      <HeroAvatar hero={hero} size={32} />
      <Text style={styles.headerProfileName}>{hero?.heroNickName}</Text>
    </TouchableOpacity>
  );
};

export default HeroBadgeHeader;
