import React from 'react';
import {Text, View, Button} from 'react-native';
import useRandomQuestion from '../../hooks/useRandomQuestion';

// const PuzzleRandomQuestionView: React.FC<QeustionInfo> = ({seq, question_content})  => {
const PuzzleRandomQuestionView = (): JSX.Element => {
  const {isLoading, questionData, error, refetch} = useRandomQuestion({
    url: 'https://jsonplaceholder.typicode.com/posts/1',
    // url = 'http://localhost:5000/question/random';
  });

  console.log(isLoading, questionData, error);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {isLoading && <Text>Loading...</Text>}
      {/* { !isLoading && error && <Text>{error}</Text> } */}
      {!isLoading && questionData === '' ? (
        <Text>질문을 적어보세요 !</Text>
      ) : (
        <Text>{questionData}</Text>
      )}
      <Button title="랜덤 질문 얻기" onPress={refetch} />
    </View>
  );
};

export default PuzzleRandomQuestionView;
