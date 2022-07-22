import React from 'react';
import {View, ScrollView} from 'react-native';
import {styles} from './styles';
import {TextInput} from 'react-native-paper';
import ColoredButton from '../../components/button/ColoredButton';
import {DatePickerInput} from 'react-native-paper-dates';
import {useResetRecoilState} from 'recoil';
import {authState} from '../../recoils/AuthRecoil';
import {userState} from '../../recoils/UserRecoil';
import {
  helpQuestionState,
  storyTextState,
  storyDateState,
  recordFileState,
} from '../../recoils/StoryWritingRecoil';
import {SelectedCategoryState} from '../../recoils/SelectedCategoryRecoil';
import {selectedPhotoState} from '../../recoils/SelectedPhotoRecoil';
import {SelectedStoryKeyState} from '../../recoils/SelectedStoryIdRecoil';
import {
  helpQuestionTextState,
  helpQuestionOpenState,
} from '../../recoils/HelpQuestionRecoil';
import {useNavigation} from '@react-navigation/native';

const AccountModification = (): JSX.Element => {
  const [inputDate, setInputDate] = React.useState<Date | undefined>(undefined);
  const navigation = useNavigation();

  const authReset = useResetRecoilState(authState);
  const userReset = useResetRecoilState(userState);
  const heroReset = useResetRecoilState(userState);
  const questionTextReset = useResetRecoilState(helpQuestionTextState);
  const questionOpenReset = useResetRecoilState(helpQuestionOpenState);
  const selectedCategoryReset = useResetRecoilState(SelectedCategoryState);
  const selectedPhotoReset = useResetRecoilState(selectedPhotoState);
  const selectedStoryReset = useResetRecoilState(SelectedStoryKeyState);
  const questionReset = useResetRecoilState(helpQuestionState);
  const storyTextReset = useResetRecoilState(storyTextState);
  const storyDateReset = useResetRecoilState(storyDateState);
  const recordFileReset = useResetRecoilState(recordFileState);

  const recoilAllReset = () => {
    authReset();
    userReset();
    heroReset();
    questionTextReset();
    questionOpenReset();
    selectedCategoryReset();
    selectedPhotoReset();
    selectedStoryReset();
    questionReset();
    storyTextReset();
    storyDateReset();
    recordFileReset();
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView
        style={styles.scrollViewContainer}
        contentContainerStyle={styles.formContainer}>
        <TextInput
          style={styles.formInput}
          mode="outlined"
          label="이메일"
          disabled={true}
          value={''}
          placeholder="user@domain.com"
        />
        <TextInput
          style={styles.formInput}
          mode="outlined"
          label="이름"
          value={''}
          placeholder="홍길동"
        />
        <TextInput
          style={styles.formInput}
          mode="outlined"
          label="닉네임"
          value={''}
          placeholder="멋쟁이"
        />
        {/* <TextInput
          style={styles.formInput}
          mode="outlined"
          secureTextEntry={true}
          label="태어난 날"
          value={''}
          placeholder="user@domain.com"
        /> */}
        <DatePickerInput
          style={styles.dateInput}
          locale="en"
          label="태어난 날"
          value={inputDate}
          onChange={d => setInputDate(d)}
          inputMode="start"
          mode="outlined"
        />
        <ColoredButton text="저장" onPress={() => {}} />
        <ColoredButton
          text="비밀번호 변경"
          onPress={() => {}}
          style={{marginTop: 8}}
        />
        <ColoredButton
          text="로그아웃"
          onPress={() => {
            recoilAllReset();
            navigation.navigate('Home');
          }}
          style={{marginTop: 32, backgroundColor: '#FF5A5A'}}
        />
      </ScrollView>
    </View>
  );
};
export default AccountModification;
