import {useEffect, useState} from 'react';
import {useAxios} from './network.hooks';
import {AxiosRequestConfig} from 'axios';

type Param = {
  heroNo: number;
  category?: string;
  defaultQuestion?: string;
};

export type Question = {
  questionNo: number;
  catetory: string;
  question: string;
};

const useRecommendedQuestion = ({
  heroNo,
  defaultQuestion = '',
}: Param): [string | undefined, () => void, number, () => void] => {
  const [questionNo, setQuestionNo] = useState(0);
  const [question, setQuestion] = useState(defaultQuestion);
  const [questions, setQuestions] = useState<Question[]>([]);

  const {response: responseQuestions, refetch} = useAxios<Question[]>({
    url: `/question/recommend?heroNo=${heroNo}`,
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

  return [
    question,
    changer,
    questionNo,
    () => {
      refetch({});
    },
  ];
};

export {useRecommendedQuestion};
