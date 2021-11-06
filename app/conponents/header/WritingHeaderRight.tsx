import React from 'react';
import {Pressable, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

type props = {
  text: string;
  nextScreenName?: string;
  customAction?: Function;
};

const WritingHeaderRight = ({text, nextScreenName, customAction}: props) => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={()=>{
      if (typeof customAction === 'function') {
          customAction();
      } else {
          navigation.navigate(nextScreenName);
      }
    }}>
      <Text style={styles.writingRightText}>{text}</Text>
    </Pressable>
  );
};

export default WritingHeaderRight;
