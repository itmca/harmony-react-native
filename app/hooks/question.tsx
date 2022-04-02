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
}: Param): [string, () => void] => {
  const REC_QUESTION_URL = `${SERVER_HOST}/question/recommend?characterNo=${characterNo}`;

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
    setQuestion(questions[questionIndex]?.helpQuestionText);
  }, [questionIndex]);

  const changer = () => {
    setQuestionIndex((questionIndex + 1) % questions.length);
  };

  return [question, changer];
};

export {useRecommendedQuestion};
