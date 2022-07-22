import React, {useEffect} from 'react';

import {
  ScrollView,
  TextInput,
  View,
  Text,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import {KeyboardAccessoryView} from 'react-native-keyboard-accessory';
import Button from '@ant-design/react-native/lib/button';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import HelpQuestion from '../../components/help-question/HelpQuestion';
import {useRecoilState, useRecoilValue, useResetRecoilState} from 'recoil';
import {
  recordFileState,
  storyTextState,
  writingStoryState,
} from '../../recoils/StoryWritingRecoil';
import {Avatar} from 'react-native-paper';
import { userState } from '../../recoils/UserRecoil';
import { heroState } from '../../recoils/HeroRecoil';

const PuzzleWritingText = (): JSX.Element => {
  const navigation = useNavigation<any>();
  const inputRef = React.useRef<TextInput>(null);
  const [storyTextInfo, setStoryTextInfo] = useRecoilState(storyTextState);
  const recordFileInfo = useRecoilValue(recordFileState);
  const resetRecord = useResetRecoilState(recordFileState);
  const writingStory = useRecoilValue(writingStoryState);
  const user = useRecoilState(userState);
  const hero = useRecoilState(heroState);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    console.log(user);
    console.log(hero);
  }, []);

  const setRecordComponent = function () {
    if (isRecordFile()) {
      return (
        <>
          <View style={{...styles.voiceBox, flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 1}}></View>
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 3,
              }}>
              <Avatar.Icon
                style={{backgroundColor: 'black'}}
                size={27}
                icon="microphone"
              />
              <Text style={{fontSize: 7, marginTop: 4}}>
                {getFileName()} | {getRecordTime()}
              </Text>
            </View>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Text
                onPress={resetRecord}
                style={{fontSize: 12, textAlign: 'right', padding: 14}}>
                삭제하기
              </Text>
            </View>
          </View>
        </>
      );
    } else {
      return (
        <>
          <Button
            onPressOut={() => {
              navigation.push('NoTab', {
                screen: 'PuzzleWritingNavigator',
                params: {
                  screen: 'PuzzleWritingVoice',
                },
              });
            }}
            style={{
              ...styles.voiceBox,
              alignSelf: 'stretch',
              height: '100%',
              flexDirection: 'column',
            }}>
            <Icon name={'mic'} size={13}></Icon>
            <Text style={{fontSize: 16}}> 음성 녹음하기</Text>
          </Button>
        </>
      );
    }
  };

  const isRecordFile = function () {
    return recordFileInfo != undefined && recordFileInfo?.filePath != undefined;
  };

  const getFileName = function () {
    const recordPath = recordFileInfo?.filePath;
    let recordName = '';

    if (isRecordFile()) {
      const fileParts = recordPath?.split('/');
      recordName = fileParts[fileParts?.length - 1];
      recordName = decodeURI(recordName);
    }

    return recordName;
  };

  const getRecordTime = function () {
    return recordFileInfo?.recordTime;
  };

  return (
    <View style={styles.container}>
      <HelpQuestion />
      <View style={{marginHorizontal: 20}}>
        <TextInput
          ref={inputRef}
          style={styles.titleInput}
          autoFocus={true}
          placeholder="제목을 입력해주세요."
          value={storyTextInfo?.title}
          onChangeText={title => {
            setStoryTextInfo({
              ...storyTextInfo,
              title,
            });
          }}
        />
      </View>
      <ScrollView style={{marginHorizontal: 20}}>
        <TextInput
          multiline={true}
          style={styles.contentInput}
          placeholder="여기를 눌러 새로운 인생조각을 얘기해주세요."
          value={storyTextInfo?.storyText}
          onChangeText={storyText => {
            setStoryTextInfo({
              ...storyTextInfo,
              storyText,
            });
          }}
        />
      </ScrollView>
      <KeyboardAccessoryView
        alwaysVisible={true}
        hideBorder={true}
        androidAdjustResize={true}
        style={{backgroundColor: 'white'}}>
        <View style={{height: 53}}>{setRecordComponent()}</View>
      </KeyboardAccessoryView>
    </View>
  );
};

export default PuzzleWritingText;
