import NetworkUtil from '../utils/network/NetworkUtil';
import {useState} from 'react';
import {SERVER_HOST} from '../constants/url.constants';

type Param = {
  characterNo: number;
  category?: string;
  defaultQuestion?: string;
};

const useRecommendedQuestion = ({
  characterNo,
  category = '',
  defaultQuestion = '',
}: Param): [string, () => Promise<void>, boolean] => {
  const REC_QUESTION_URL = `${SERVER_HOST}/question/recommend?characterNo=${characterNo}&category=${category}`;

  const [isLoading, setLoading] = useState(false);
  const [question, setQuestion] = useState(defaultQuestion);

  const fetcher = async () => {
    try {
      setLoading(true);
      const responseData = await NetworkUtil.getResponseData(REC_QUESTION_URL);
      setQuestion(responseData.question);
    } finally {
      setLoading(false);
    }
  };

  return [question, fetcher, isLoading];
};

export {useRecommendedQuestion};
