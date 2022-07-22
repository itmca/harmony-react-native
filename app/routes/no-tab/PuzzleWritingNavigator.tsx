import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WritingHeaderLeft from '../../components/header/WritingHeaderLeft';
import WritingHeaderRight from '../../components/header/WritingHeaderRight';
import PuzzleWritingPhoto from '../../pages/PuzzleWritingPhoto/PuzzleWritingPhoto';
import PuzzleWritingText from '../../pages/PuzzleWritingText/PuzzleWritingText';
import PuzzleWritingVoice from '../../pages/PuzzleWritingVoice/PuzzleWritingVoice';
import {useRecoilValue, useResetRecoilState} from 'recoil';
import {
  helpQuestionState,
  recordFileState,
  storyTextState,
  writingStoryState,
} from '../../recoils/StoryWritingRecoil';
import axios from 'axios';
import {selectedPhotoState} from '../../recoils/SelectedPhotoRecoil';
import {useNavigation} from '@react-navigation/native';
import {SERVER_HOST} from '../../constants/url.constants';
import {AUDIO_TYPE, IMG_TYPE} from '../../constants/uploadFileType.constants';
import {Alert} from 'react-native';
import {AuthTokens} from '../../type/auth';
import {authState} from '../../recoils/AuthRecoil';
import PuzzleWritingDate from '../../pages/PuzzleWritingDate/PuzzleWritingDate';
import {useAxiosPromise} from '../../hooks/network.hooks';

const Stack = createNativeStackNavigator();

const PuzzleWritingNavigator = (): JSX.Element => {
  const writingStory = useRecoilValue(writingStoryState);
  const navigation = useNavigation<any>();
  const resetStoryText = useResetRecoilState(storyTextState);
  const resetHelpQuestion = useResetRecoilState(helpQuestionState);
  const resetSelectedPhoto = useResetRecoilState(selectedPhotoState);
  const resetRecord = useResetRecoilState(recordFileState);
  const tokens = useRecoilValue<AuthTokens>(authState);

  const {response, error, loading, refetch} = useAxiosPromise<any>(
    {
      method: 'post',
      url: '/story',
      headers: {'Content-Type': 'multipart/form-data'},
    },
    {disableInitialRequest: true},
  );

  React.useEffect(() => {
    if (!response) return;

    void response
      .then(() => {
        resetStoryRecoil();
        goHome(String(Date.now()));
      })
      .catch(error => {
        Alert.alert('파일 업로드가 실패했습니다. 재시도 부탁드립니다.');
      });
  }, [response]);

  const handleSubmit = function () {
    const formData = new FormData();
    addImagesInFormData(formData);
    addVoiceInFormData(formData);
    addStoryinfoInFormData(formData);
    refetch({data: formData});
  };

  const addStoryinfoInFormData = function (formData: FormData) {
    const stroyInfo = {
      heroNo: writingStory?.heroNo,
      recQuestionNo: writingStory?.recQuestionNo,
      recQuestionModified: writingStory?.recQuestionModified,
      helpQuestionText: writingStory?.helpQuestionText,
      date: writingStory?.date,
      title: writingStory?.title,
      storyText: writingStory?.storyText,
    };

    formData.append('storyInfo', {
      string: JSON.stringify(stroyInfo),
      type: 'application/json',
    });
  };

  const addImagesInFormData = function (formData: FormData) {
    const selectedImages = writingStory?.photos;

    selectedImages?.forEach((image, index) => {
      const uri = image.node.image.uri;
      const type = IMG_TYPE;
      const fileParts = uri?.split('/');
      const fileName = fileParts[fileParts?.length - 1];
      formData.append('photos', {
        uri: uri,
        type: type,
        name: fileName,
      });
    });
  };

  const addVoiceInFormData = function (formData: FormData) {
    const recordPath = writingStory?.voice;
    const isRecordFile = recordPath != undefined;

    if (isRecordFile) {
      const fileParts = recordPath?.split('/');
      const recordName = fileParts[fileParts?.length - 1];
      const type = AUDIO_TYPE;
      formData.append('voice', {
        uri: recordPath,
        type: type,
        name: recordName,
      });
    }
  };

  const resetStoryRecoil = function () {
    resetStoryText();
    resetHelpQuestion();
    resetSelectedPhoto();
    resetRecord();
  };

  const goHome = function (key: string) {
    navigation.navigate('Home', {
      event: `${key}-created`,
    });
  };

  return (
    <Stack.Navigator
      initialRouteName="PuzzleWritingQuestion"
      screenOptions={{headerShadowVisible: false, headerTitleAlign: 'center'}}>
      <Stack.Screen
        name="PuzzleWritingDate"
        component={PuzzleWritingDate}
        options={{
          headerLeft: () => <WritingHeaderLeft type="before" />,
          title: '조각 맞추기',
          headerRight: () => (
            <WritingHeaderRight
              text="다음"
              nextScreenName="PuzzleWritingPhoto"
            />
          ),
        }}
      />
      <Stack.Screen
        name="PuzzleWritingPhoto"
        component={PuzzleWritingPhoto}
        options={{
          headerLeft: () => <WritingHeaderLeft type="before" />,
          title: '조각 맞추기',
          headerRight: () => (
            <WritingHeaderRight
              text="다음"
              nextScreenName="PuzzleWritingText"
            />
          ),
        }}
      />
      <Stack.Screen
        name="PuzzleWritingText"
        component={PuzzleWritingText}
        options={{
          headerLeft: () => <WritingHeaderLeft type="before" />,
          title: '조각 맞추기',
          headerRight: () => (
            <WritingHeaderRight
              text="완료"
              customAction={() => {
                const isValidation =
                  writingStory?.title === undefined ||
                  writingStory?.title === '';

                if (isValidation) {
                  Alert.alert('제목을 입력해주세요.');
                } else {
                  void handleSubmit();
                }
              }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="PuzzleWritingVoice"
        component={PuzzleWritingVoice}
        options={{
          headerLeft: () => <WritingHeaderLeft type="before" />,
          title: '음성 녹음',
        }}
      />
    </Stack.Navigator>
  );
};

export default PuzzleWritingNavigator;
