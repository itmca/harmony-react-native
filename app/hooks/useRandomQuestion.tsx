import {useEffect, useState} from 'react';
import axios from 'axios';

const useRandomQuestion = (props: {url: string}) => {
  const [state, setState] = useState({
    isLoading: false,
    error: '' ?? undefined,
    questionData: '',
  });

  const [trigger, setTrigger] = useState(false);

  if (!props.url) {
    return {...state};
  }

  const refetch = () => {
    setState({
      ...state,
      isLoading: true,
    });
    setTrigger(true);
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (trigger) {
      void getQuestionListData();
      return setTrigger(false);
    }
  }, [trigger]);

  const getQuestionListData = async () => {
    try {
      const response = await axios.get(props.url);
      const json = JSON.stringify(response.data['body']);
      console.log(json);
      const question_content: string = json.toString();
      setState({
        ...state,
        isLoading: false,
        questionData: question_content,
      });
    } catch (error) {
      console.error(error);
      setState({
        ...state,
        isLoading: false,
        // error: error.toString,
      });
    }
  };
  return {...state, refetch};
};

export default useRandomQuestion;
