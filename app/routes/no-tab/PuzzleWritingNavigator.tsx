import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WritingHeaderLeft from '../../components/header/WritingHeaderLeft';
import WritingHeaderRight from '../../components/header/WritingHeaderRight';
import PuzzleWritingPhoto from '../../pages/PuzzleWritingPhoto/PuzzleWritingPhoto';
import PuzzleWritingText from '../../pages/PuzzleWritingText/PuzzleWritingText';
import PuzzleWritingQuestion from '../../pages/PuzzleWritingQuestion/PuzzleWritingQuestion';
import PuzzleWritingVoice from '../../pages/PuzzleWritingVoice/PuzzleWritingVoice';
import {useRecoilValue, useResetRecoilState} from 'recoil';
import {
  helpQuestionState,
  recordFileState,
  storyTextState,
  writingStoryState,
} from '../../recoils/StoryWritingRecoil';
import axios from 'axios';
import {heroState} from '../../recoils/HeroRecoil';
import {selectedPhotoState} from '../../recoils/SelectedPhotoRecoil';
import {useNavigation} from '@react-navigation/native';
import {SERVER_HOST} from '../../constants/url.constants';
import {AUDIO_TYPE, IMG_TYPE} from '../../constants/uploadFileType.constants';
import {Alert} from 'react-native';

const Stack = createNativeStackNavigator();

const PuzzleWritingNavigator = (): JSX.Element => {
  const writingStory = useRecoilValue(writingStoryState);
  const navigation = useNavigation<any>();
  const resetStoryText = useResetRecoilState(storyTextState);
  const resetHero = useResetRecoilState(heroState);
  const resetHelpQuestion = useResetRecoilState(helpQuestionState);
  const resetSelectedPhoto = useResetRecoilState(selectedPhotoState);
  const resetRecord = useResetRecoilState(recordFileState);

  const handleSubmit = async function () {
    const formData = new FormData();
    addStoryinfoInFormData(formData);
    addImagesInFormData(formData);
    addVoiceInFormData(formData);

    // TODO
    // 응답 TimeOut 5초 - 200(go home) , else(다시 시도해주세요 alter. 문제가 계속 될 경우 문의 해주세요.)
    await axios({
      method: 'post',
      url: `${SERVER_HOST}/story`,
      data: formData,
      headers: {'Content-Type': 'multipart/form-data'},
    });
  };

  const addStoryinfoInFormData = function (formData: FormData) {
    const stroyInfo = {
      heroNo: writingStory?.heroNo,
      recQuestionNo: writingStory?.recQuestionNo,
      recQuestionModified: writingStory?.recQuestionModified,
      helpQuestionText: writingStory?.helpQuestionText,
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
    //console.log(selectedImages);

    selectedImages?.forEach((image, index) => {
      const uri = image.node.image.uri;
      console.log(uri);
      const type = IMG_TYPE;
      const fileName = image.node.image.filename;
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
    resetHero();
    resetHelpQuestion();
    resetSelectedPhoto();
    resetRecord();
  };

  const goHome = function () {
    navigation.navigate('Home');
  };

  return (
    <Stack.Navigator
      initialRouteName="PuzzleWritingQuestion"
      screenOptions={{headerShadowVisible: false, headerTitleAlign: 'center'}}>
      <Stack.Screen
        name="PuzzleWritingQuestion"
        component={PuzzleWritingQuestion}
        options={{
          headerLeft: () => <WritingHeaderLeft type="cancel" />,
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
                  resetStoryRecoil();
                  goHome();
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
