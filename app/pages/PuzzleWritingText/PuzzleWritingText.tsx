import React from 'react';

import {Image, ScrollView, TextInput, View,} from 'react-native';
import {KeyboardAccessoryView} from 'react-native-keyboard-accessory';
import Button from '@ant-design/react-native/lib/button';
import styles from './styles';

const PuzzleWritingText = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.scrollView}>
        <TextInput
          style={styles.titleInput}
          placeholder="제목을 입력해주세요."
        />
      </View>
      <ScrollView style={styles.scrollView}>
        <TextInput
          multiline={true}
          style={styles.contentInput}
          placeholder="여기를 눌러 새로운 인생조각을 얘기해주세요."
        />
      </ScrollView>
      <KeyboardAccessoryView
        alwaysVisible={true}
        hideBorder={true}
        androidAdjustResize={true}>
        <Button onPress={() => null} style={styles.voiceBox}>
          <Image source={require('../../assets/images/voice_icon.png')} /> 음성
          녹음하기
        </Button>
      </KeyboardAccessoryView>
    </View>
  );
};

export default PuzzleWritingText;
