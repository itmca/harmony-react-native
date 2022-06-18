import React from 'react';
import {Image, TouchableOpacity, Text} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import styles from './styles';
import {useRecoilState, useRecoilValue} from 'recoil';
import {heroState} from '../../recoils/HeroRecoil';

type Props = {
  imageURL: string;
  characterName: string;

};

const DefaultHeaderRight = ({
  imageURL,
  characterName
}: Props): JSX.Element => {
  const hero = useRecoilValue(heroState);
  return (
    <TouchableOpacity
        onPress={() => {}}
        style={styles.defaultHeaderRightContainer}>
        <Image
            source={{uri : imageURL}}
            style={styles.headerProfileIcon}
        />
        <Text style={styles.headerProfileName}>{hero?.heroNo}</Text>
      
    </TouchableOpacity>
  );
};

export default DefaultHeaderRight;
