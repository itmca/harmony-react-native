import React from 'react';
import {ScrollView, View} from 'react-native';
import {styles} from './styles';
import {TextInput} from 'react-native-paper';
import ColoredButton from '../../components/button/ColoredButton';
import {DatePickerInput} from 'react-native-paper-dates';
import {useResetRecoilState} from 'recoil';
import {authState} from '../../recoils/AuthRecoil';
import {userState} from '../../recoils/UserRecoil';
import {
  helpQuestionState,
  recordFileState,
  storyDateState,
  storyTextState,
} from '../../recoils/StoryWritingRecoil';
import {SelectedCategoryState} from '../../recoils/SelectedCategoryRecoil';
import {selectedPhotoState} from '../../recoils/SelectedPhotoRecoil';
import {SelectedStoryKeyState} from '../../recoils/SelectedStoryIdRecoil';
import {
  helpQuestionOpenState,
  helpQuestionTextState,
} from '../../recoils/HelpQuestionRecoil';
import {useNavigation} from '@react-navigation/native';
import {LocalStorage} from '../../storage/local.storage';
import {heroState} from '../../recoils/HeroRecoil';

const AccountModification = (): JSX.Element => {
  const [inputDate, setInputDate] = React.useState<Date | undefined>(undefined);
  const navigation = useNavigation();

  const authReset = useResetRecoilState(authState);
  const userReset = useResetRecoilState(userState);
  const heroReset = useResetRecoilState(heroState);
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

  const removeLocalStroage = () => {
    LocalStorage.delete('authToken');
    LocalStorage.delete('useNo');
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView
        style={styles.scrollViewContainer}
        contentContainerStyle={styles.formContainer}>
        <TextInput
          style={styles.formInput}
          mode="outlined"
          label="?????????"
          disabled={true}
          value={''}
          placeholder="user@domain.com"
        />
        <TextInput
          style={styles.formInput}
          mode="outlined"
          label="??????"
          value={''}
          placeholder="?????????"
        />
        <TextInput
          style={styles.formInput}
          mode="outlined"
          label="?????????"
          value={''}
          placeholder="?????????"
        />
        {/* <TextInput
          style={styles.formInput}
          mode="outlined"
          secureTextEntry={true}
          label="????????? ???"
          value={''}
          placeholder="user@domain.com"
        /> */}
        <DatePickerInput
          style={styles.dateInput}
          locale="en"
          label="????????? ???"
          value={inputDate}
          onChange={d => setInputDate(d)}
          inputMode="start"
          mode="outlined"
        />
        <ColoredButton text="??????" onPress={() => {}} />
        <ColoredButton
          text="???????????? ??????"
          onPress={() => {}}
          style={{marginTop: 8}}
        />
        <ColoredButton
          text="????????????"
          onPress={() => {
            recoilAllReset();
            removeLocalStroage();
            navigation.navigate('Home');
          }}
          style={{marginTop: 32, backgroundColor: '#FF5A5A'}}
        />
      </ScrollView>
    </View>
  );
};
export default AccountModification;
