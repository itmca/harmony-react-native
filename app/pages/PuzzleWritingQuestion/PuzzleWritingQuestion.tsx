import React, {useEffect} from 'react';
import {
  Alert,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles';
import {useRecommendedQuestion} from '../../hooks/question.hooks';
import {useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil';
import {
  helpQuestionOpenState,
  helpQuestionTextState,
} from '../../recoils/HelpQuestionRecoil';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {helpQuestionState} from '../../recoils/StoryWritingRecoil';
import {isLoggedInState, userState} from '../../recoils/UserRecoil';
import {Hero} from '../../type/hero';
import {heroState} from '../../recoils/HeroRecoil';
import {dummyHero, dummyUser} from '../../utils/dummy.util';
import {User} from '../../type/user';
import {HeroAvatar} from '../../components/avatar/HeroAvatar';

const PuzzleWritingQuestion = ({navigation}): JSX.Element => {
  const setInputValue = useSetRecoilState<string>(helpQuestionTextState);
  const setHelpQuestionOpen = useSetRecoilState(helpQuestionOpenState);
  const [storyQuestion, setStoryQuestion] = useRecoilState(helpQuestionState);
  const isLoggedIn = useRecoilValue<boolean>(isLoggedInState);
  const recoilUser = useRecoilValue<User | undefined>(userState);
  const user = isLoggedIn ? recoilUser : dummyUser;
  const hero = useRecoilValue<Hero>(heroState);

  const question =
    storyQuestion?.helpQuestionText === undefined
      ? ''
      : storyQuestion?.helpQuestionText;
  const questionNo =
    storyQuestion?.recQuestionNo === undefined
      ? -1
      : storyQuestion?.recQuestionNo;

  useFocusEffect(() => {
    setHelpQuestionOpen(true);
  });

  useEffect(() => {
    if (!isLoggedIn) {
      Alert.alert(
        '미로그인 시점에 작성한 이야기는 저장되지 않습니다.',
        '',
        [
          {
            text: '로그인하러가기',
            style: 'default',
            onPress: () => {
              navigation.push('NoTab', {
                screen: 'LoginRegisterNavigator',
                params: {
                  screen: 'LoginMain',
                },
              });
            },
          },
          {text: '계속 둘러보기', style: 'default'},
        ],
        {
          cancelable: true,
        },
      );
    }
  }, []);

  useEffect(() => {
    setInputValue(question);
    setStoryQuestion({
      ...storyQuestion,
      recQuestionNo: questionNo,
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
      //setQuestion(recQuestion);
      setStoryQuestion({
        ...storyQuestion,
        recQuestionNo: recQuestionNo,
        recQuestionModified: false,
        helpQuestionText: recQuestion,
      });
    }
  }, [recQuestion]);

  return (
    <View style={styles.container}>
      <View style={styles.topheader}>
        <HeroAvatar hero={hero} size={56} />
        <View style={styles.headerText}>
          <Text style={styles.topText}>
            {user?.userName}님, {hero?.heroNickName}에게{' '}
          </Text>
          <Text style={styles.topTextBold}>어떤 질문을 드려 볼까요? </Text>
        </View>
      </View>

      <View>
        <TextInput
          multiline
          style={styles.input}
          placeholder={
            '도움질문적기... \n도움질문은 더 풍성한 작성을 위한 보조 역할로 사용됩니다.'
          }
          returnKeyType="done"
          value={storyQuestion?.helpQuestionText}
          onChangeText={text =>
            setStoryQuestion({
              ...storyQuestion,
              helpQuestionText: text,
            })
          }
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
