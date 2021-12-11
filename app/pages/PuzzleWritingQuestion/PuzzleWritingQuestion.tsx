import React from 'react';
import PuzzleWritingRandomQuestion from './PuzzleWritingRandomQuestion';
import {Text, View} from 'react-native';

const PuzzleWritingQuestion = (): JSX.Element => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {/* <Text>Puzzle Question </Text> */}
      <PuzzleWritingRandomQuestion />
    </View>
  );
};
export default PuzzleWritingQuestion;
