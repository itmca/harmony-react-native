import React from 'react';
import {Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

type props = {
    type: "cancel" | "before"
}

const WritingHeaderLeft = ({type} : props) => {
  const navigation = useNavigation();
  return (
      <Pressable onPress={() => {
          navigation.goBack();
      }}>
        <Icon
            name={type === "cancel"?"close":"before"} size={24}
            style={styles.headerLeft}
        />
      </Pressable>
  );
};


export default WritingHeaderLeft;
