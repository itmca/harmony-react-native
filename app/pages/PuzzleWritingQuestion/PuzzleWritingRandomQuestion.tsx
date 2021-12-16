import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Text, View, Button, ActivityIndicator } from 'react-native';
import useRandomQuestion from '../../hooks/useRandomQuestion';

// export type QeustionInfo = {
//   seq: number,
//   category: string,
//   question_content: string,
//   use_count: number,
//   create_date: Date,
//   question_grade: number,
// };


// const PuzzleRandomQuestionView: React.FC<QeustionInfo> = ({seq, question_content})  => {
const PuzzleRandomQuestionView = () => {
  const { questionContent, isLoading, error } = useRandomQuestion();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        { isLoading && <Text>Loading...</Text>}
        { !isLoading && error && <Text>{error}</Text> }
        { !isLoading && questionContent && <Text>{questionContent}</Text>}
          <Button
          title="Puzzle Question"
          onPress={() => {

        }}
          />
    </View>
  );
};

export default PuzzleRandomQuestionView;
