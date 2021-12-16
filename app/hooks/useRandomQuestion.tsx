import { useEffect, useState } from 'react';
import axios from 'axios';



function useRandomQuestion(){
  const [ questionContent, setQuestionContent] = useState<string>('');
  const [ isLoading, setLoading] = useState<boolean>(true);
  const [ error, setError] = useState<string>('');

  const getQuestionListData = async() => {
    try {
        const response = await axios.get('http://localhost:5000/question/random'
        );
        // const json = await response.json();
        console.log(response);
        const question_content:string = response.toString();
        setQuestionContent(question_content);
        return questionContent;
    } catch (error) {
        console.error(error);
        setError('랜덤 질문을 가져오는데 실패했습니다.');
    } finally {
        setLoading(false);
    }
  };


  useEffect(() => {
    getQuestionListData()
  }, []);


  return { questionContent, isLoading, error };
};

export default useRandomQuestion();
