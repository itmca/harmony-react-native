import React from 'react';
import axios from 'axios';
import {ActivityIndicator, Text, View, Button} from 'react-native';

const PuzzleRandomQuestionView = (isLoading:Boolean, questionData:String) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        { isLoading ? <Text>place holder</Text> : (
          <View>
            <Text>{questionData}</Text>
          </View>
        )}

          <Button
          title="Puzzle Question"
          onPress={() => getQuestionData()}
          />
    </View>
  );
};

const getQuestionData = async() => {
  try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos");
      const json = await response.json();
      console.log(json);
      return setRandomQuestion(json);
  } catch (error) {
      console.error(error);
  }
};

interface PuzzleData {
  seq: number,
  category: String,
  question_content: String,
  use_count: number,
  create_date: Date,
  question_grade: number,
}

const setRandomQuestion = (data:[]) => {
  const [questionDataList, setQuestionDataList] = React.useState([]);
  const [questionData, setQuestionData] = React.useState(String);
  const [isLoading, setLoading] = React.useState(true);
  
  React.useEffect(() => {
    setQuestionDataList(data);
  }, [data])
  



  return PuzzleRandomQuestionView(isLoading, questionData);

};


export default PuzzleRandomQuestionView;
