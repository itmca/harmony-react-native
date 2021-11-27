import React from 'react';

import {
  ScrollView,
  TextInput,
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';
import {KeyboardAccessoryView} from 'react-native-keyboard-accessory';
import Button from '@ant-design/react-native/lib/button';

const PuzzleWritingText = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text>위 배너 공간</Text>
      </View>

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    height: 40,
    width: '100%',
    borderWidth: 3,
    borderColor: '#dbdbdb',
  },
  scrollView: {
    paddingHorizontal: 20,
    marginHorizontal: 20,
  },
  titleInput: {
    marginBottom: 5,
    borderBottomWidth: 2,
    borderColor: '#dbdbdb',
    padding: 10,
  },
  contentInput: {
    marginBottom: 10,
    borderWidth: 0,
    padding: 10,
    flexShrink: 0,
  },
  voiceBox: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomWidth: 1,
    borderColor: '#dbdbdb',
  },
});

export default PuzzleWritingText;
