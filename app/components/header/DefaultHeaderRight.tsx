import React from 'react';
import {Image, TouchableOpacity, Text} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import styles from './styles';

const defaultHeaderRight = (): JSX.Element => {
  const navigation = useNavigation<any>();
  const route = useRoute();
  return (
    <TouchableOpacity
        onPress={() => {}}
        style={styles.defaultHeaderRightContainer}>
        <Image
            source={require('../../assets/images/profile_image_sample.png')}
            style={styles.headerProfileIcon}
        />
        <Text style={styles.headerProfileName}>홍진경</Text>
      
    </TouchableOpacity>
  );
};

export default defaultHeaderRight;
