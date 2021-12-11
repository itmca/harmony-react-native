import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {ActivityIndicator, Text, View, Button} from 'react-native';



type QeustionInfo = {
  seq: number,
  category: String,
  question_content: String,
  use_count: number,
  create_date: Date,
  question_grade: number,
};


const PuzzleRandomQuestionView = ({seq, question_content}:QeustionInfo): JSX.Element => {
  const [isLoading, setLoading] = useState(true);
  const [questionList, setQuestionList] = useState([]);
  const [questionData, setQuestionData] = useState({seq, question_content});

  // data list를 최초 버튼을 눌렀을 때 전부 가져오기. (질문 리스트가 20개 미만이라는 조건에서.)
  const getQuestionListData = async() => {
    try {
        const response = await fetch('http://localhost:5000/question/random', {
          method: 'GET',
        });
        const json = await response.json();
        setQuestionList(json);
        console.log(json);
        return getRandomData(json);
    } catch (error) {
        console.error(error);
    }finally{
      setLoading(false);
    }
  };

  const getRandomData = (listData = []) => {
    const randomNum:number = listData[Math.floor(Math.random() * listData.length)];
    return setQuestionData(listData[randomNum]);
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        { isLoading ? <Text>place holder</Text> : (
          <View>
            <Text>{questionData.question_content}</Text>
          </View>
        )}

          <Button
          title="Puzzle Question"
          onPress={() => {if(questionList == []){
            getQuestionListData();
          }else{
            getRandomData(questionList);
          }
        }}
          />
    </View>
  );
};

export default PuzzleRandomQuestionView;
