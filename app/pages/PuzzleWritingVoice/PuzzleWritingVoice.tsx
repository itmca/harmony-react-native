import Button from '@ant-design/react-native/lib/button';
import React from 'react';
import {recordState} from '../../recoils/RecordRecoil';
import {useRecoilState} from 'recoil';

import {Text, View} from 'react-native';
import AudioRecorderPlayer, {
  AVEncoderAudioQualityIOSType,
  AVEncodingOption,
  AudioEncoderAndroidType,
  AudioSet,
  AudioSourceAndroidType,
} from 'react-native-audio-recorder-player';

const PuzzleWritingVoice = (): JSX.Element => {
  const [_, setRecordState] = useRecoilState(recordState);
  const audioRecorderPlayer = new AudioRecorderPlayer();
  async function onStartRecord() {
    const path = 'hello.m4a';
    const audioSet = {
      AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
      AudioSourceAndroid: AudioSourceAndroidType.MIC,
      AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
      AVNumberOfChannelsKeyIOS: 2,
      AVFormatIDKeyIOS: AVEncodingOption.aac,
    };
    console.log('audioSet', audioSet);
    await audioRecorderPlayer.startRecorder(path, audioSet);
    console.log('end url');
    audioRecorderPlayer.addRecordBackListener(e => {
      setRecordState({
        recordSecs: e.currentPosition,
        recordTime: audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)),
      });
    });
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    //console.log(`uri: ${uri}`);
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Puzzle Voice </Text>
      <Button onPress={onStartRecord}>Start</Button>
      <Button>stop</Button>
    </View>
  );
};
export default PuzzleWritingVoice;
