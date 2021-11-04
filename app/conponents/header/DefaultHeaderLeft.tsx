import React from 'react';
import { Image, StyleSheet, Pressable} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

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

const styles = StyleSheet.create({
  headerLeft: {
    marginLeft: 16,
  },
})

export default DefaultHeaderLeft;
