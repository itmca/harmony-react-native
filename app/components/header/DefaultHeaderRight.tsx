import React from 'react';
import {Image, TouchableOpacity, Text} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import styles from './styles';

type Props = {
  imageURL: string;
  characterName: string;

};

const DefaultHeaderRight = ({
  imageURL,
  characterName
}: Props): JSX.Element => {
  const navigation = useNavigation<any>();
  const route = useRoute();
  return (
    <TouchableOpacity
        onPress={() => {}}
        style={styles.defaultHeaderRightContainer}>
        <Image
            source={{uri : imageURL}}
            style={styles.headerProfileIcon}
        />
        <Text style={styles.headerProfileName}>{characterName}</Text>
      
    </TouchableOpacity>
  );
};

export default DefaultHeaderRight;
