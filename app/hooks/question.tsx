import NetworkUtil from '../utils/network/NetworkUtil';
import {useEffect, useState} from 'react';
import {SERVER_HOST} from '../constants/url.constants';

type Param = {
  characterNo: number;
  category?: string;
  defaultQuestion?: string;
};

const useRecommendedQuestion = ({
  characterNo,
  defaultQuestion = '',
}: Param): [string, () => void, number] => {
  const REC_QUESTION_URL = `${SERVER_HOST}/question/recommend?characterNo=${characterNo}`;

  const [questionNo, setQuestionNo] = useState(0);
  const [question, setQuestion] = useState(defaultQuestion);
  const [questions, setQuestions] = useState(
    new Array<Record<string, string>>(),
  );
  const [questionIndex, setQuestionIndex] = useState(0);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    NetworkUtil.getResponseDataAsArray(REC_QUESTION_URL).then(
      responseQuestions => {
        setQuestions(responseQuestions);
      },
    );
  }, []);

  useEffect(() => {
    setQuestion(questions[questionIndex]?.question);
    setQuestionNo(parseInt(questions[questionIndex]?.questionNo));
  }, [questionIndex]);

  const changer = () => {
    setQuestionIndex((questionIndex + 1) % questions.length);
  };

  return [question, changer, questionNo];
};

export {useRecommendedQuestion};
