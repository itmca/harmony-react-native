import React from 'react';
import { Image, Pressable} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import styles from './styles';

const DefaultHeaderLeft = () => {
  const navigation = useNavigation();
  const route = useRoute();
  return (
      <Pressable onPress={() => {
        if (route.name !== 'Home') {
          navigation.navigate('Home');
        }
      }}>
        <Image
          source={require('../../assets/images/puzzle_logo_with_text.png')}
          style={styles.headerLeft}
        />
      </Pressable>
  );
};



export default DefaultHeaderLeft;
