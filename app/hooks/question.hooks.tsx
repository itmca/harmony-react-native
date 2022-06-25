import {useEffect, useState} from 'react';
import {useAxios} from './network.hooks';

type Param = {
  characterNo: number;
  category?: string;
  defaultQuestion?: string;
};

export type Question = {
  questionNo: number;
  catetory: string;
  question: string;
};

const useRecommendedQuestion = ({
  characterNo,
  defaultQuestion = '',
}: Param): [string, () => void, number] => {
  const [questionNo, setQuestionNo] = useState(0);
  const [question, setQuestion] = useState(defaultQuestion);
  const [questions, setQuestions] = useState<Question[]>([]);

  const {response: responseQuestions} = useAxios<Question[]>({
    url: '/question/recommend?characterNo=${characterNo}',
  });

  useEffect(() => {
    setQuestions(responseQuestions ?? []);
    setQuestionIndex(0);
  }, [responseQuestions]);

  const [questionIndex, setQuestionIndex] = useState(-1);

  useEffect(() => {
    setQuestion(questions[questionIndex]?.question);
    setQuestionNo(questions[questionIndex]?.questionNo);
  }, [questionIndex]);

  const changer = () => {
    setQuestionIndex((questionIndex + 1) % questions.length);
  };

  return [question, changer, questionNo];
};

export {useRecommendedQuestion};
