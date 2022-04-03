import React, {useEffect, useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {useRecommendedQuestion} from '../../hooks/question';
import {useRecoilState, useSetRecoilState} from 'recoil';
import {helpQuestionOpenState, helpQuestionTextState,} from '../../recoils/HelpQuestionRecoil';
import {useFocusEffect} from '@react-navigation/native';
import {helpQuestionState} from '../../recoils/StoryWritingRecoil';

const PuzzleWritingQuestion = (): JSX.Element => {
  const [question, setQuestion] = useState<string>('');
  const setInputValue = useSetRecoilState<string>(helpQuestionTextState);
  const setHelpQuestionOpen = useSetRecoilState(helpQuestionOpenState);
  const [writingStoryQuestionInfo, setWritingStoryQuestionInfo] = useRecoilState(helpQuestionState);

  useFocusEffect(() => {
    setHelpQuestionOpen(true);
  });

  useEffect(() => {
    setInputValue(question);
    setWritingStoryQuestionInfo({
      ...writingStoryQuestionInfo,
      recQuestionModified: question === recQuestion,
      helpQuestionText: question,
    });
  }, [question]);

  const [recQuestion, fetchRecQuestion, recQuestionNo] = useRecommendedQuestion(
    {
      characterNo: 1,
    },
  );

  useEffect(() => {
    if (recQuestion != '') {
      setQuestion(recQuestion);
      setWritingStoryQuestionInfo({
        ...writingStoryQuestionInfo,
        recQuestionNo: recQuestionNo,
        recQuestionModified: false,
      });
    }
  }, [recQuestion]);

  return (
    <View style={styles.container}>
      <View style={styles.topheader}>
        <Image
          style={styles.profileImage}
          source={require('../../assets/images/profile_image_sample.png')}
        />
        <View style={styles.headerText}>
          <Text style={styles.topText}>홍진경님, 할부지에게 </Text>
          <Text style={styles.topTextBold}>어떤 질문을 드려 볼까요? </Text>
        </View>
      </View>

      <View>
        <TextInput
          multiline
          style={styles.input}
          placeholder={
            '도움질문적기... \n도움질문은 더 풍성한 작성을 위한 보조 역할로 사용되며\n최종 컨텐츠에는 반영되지 않습니다.'
          }
          returnKeyType="done"
          value={question}
          onChangeText={setQuestion}
        />
      </View>
      <View>
        <TouchableOpacity style={styles.questionBtn} onPress={fetchRecQuestion}>
          <Image
            style={styles.btnQuestionMark}
            source={require('../../assets/images/puzzle_help_questionmark.png')}
          />
          <Text style={styles.btnText}>질문 추천 받기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PuzzleWritingQuestion;
