/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import {styles} from './styles';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useRecoilState, useRecoilValue} from 'recoil';
import {
  HelpQuestionOpenState,
  HelpQuestionTextState,
} from '../../recoils/HelpQuestionTextState';

const PuzzleHelpQuestion = (): JSX.Element => {
  const helpQuestion = useRecoilValue(HelpQuestionTextState);
  const [open, setOpen] = useRecoilState(HelpQuestionOpenState);

  if (!helpQuestion) {
    return <></>;
  }

  if (!open) {
    return (
      <View style={styles.container}>
        <View style={styles.smallSizeWrapper}>
          <TouchableOpacity
            onPress={() => {
              setOpen(true);
            }}>
            <Image
              source={require('../../assets/images/puzzle_blue_piece.png')}
              style={styles.smallSizePuzzle}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.bigSizeWrapper}>
        <Image
          source={require('../../assets/images/puzzle_blue_piece.png')}
          style={styles.bigSizePuzzle}
        />
        <View style={styles.verticalLine}></View>
        <Text style={styles.helpQuestionText}>{helpQuestion}</Text>
        <TouchableOpacity onPress={() => setOpen(false)} style={styles.closeIconWrapper}>
          <Icon name="chevron-left" size={24} style={styles.closeIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PuzzleHelpQuestion;
