import Button from '@ant-design/react-native/lib/button';
import React, {useState} from 'react';

import {Image, Text, View} from 'react-native';
import AudioRecorderPlayer, {
  AVEncoderAudioQualityIOSType,
  AVEncodingOption,
  AudioEncoderAndroidType,
  AudioSourceAndroidType,
  AVModeIOSOption,
} from 'react-native-audio-recorder-player';

const PuzzleWritingVoice = (): JSX.Element => {
  const [state, setState] = useState({recordSecs: 0, recordTime: '00:00:00'});
  const audioRecorderPlayer = new AudioRecorderPlayer();

  const onStartRecord = async function () {
    const path = 'sound.m4a';
    const audioSet = {
      AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
      AudioSourceAndroid: AudioSourceAndroidType.MIC,
      AVModeIOS: AVModeIOSOption.measurement,
      AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
      AVNumberOfChannelsKeyIOS: 2,
      AVFormatIDKeyIOS: AVEncodingOption.aac,
    };
    // const meteringEnabled = false;

    //console.log('audioSet', audioSet);
    await audioRecorderPlayer.startRecorder(path, audioSet);
    //console.log('end url');
    audioRecorderPlayer.addRecordBackListener(e => {
      setState({
        recordSecs: e.currentPosition,
        recordTime: audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)),
      });
    });
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    //console.log(`uri: ${uri}`);
  };

  const onStopRecord = async function () {
    //console.log('RecordSec', state.recordSecs);
    //console.log('RecordTime', state.recordTime);
    // stopRecorder 정상작동하지 않아 멈추지 않은거지. // 파일이 안 늘어야 돼. -> (파일이 계속 늘어남) -> 라이브러리 문제일수도 있다.
    const result = await audioRecorderPlayer.stopRecorder();
    // removeRecordBackListener 작동 안했다고 해도.
    audioRecorderPlayer.removeRecordBackListener();
    setState({...state, recordSecs: 0});
    //console.log('RecordSec1', state.recordSecs);
    //console.log('RecordTime2', state.recordTime);
    console.log(result);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>{state.recordTime}</Text>
      <View style={{flexDirection: 'row'}}>
        <Image source={require('../../assets/images/voice_frequency.png')} />
        <Image source={require('../../assets/images/voice_frequency.png')} />
        <Image source={require('../../assets/images/voice_frequency.png')} />
        <Image source={require('../../assets/images/voice_frequency.png')} />
      </View>
      <View>
        <Button
          style={{
            width: 44,
            height: 44,
            borderRadius: 44 / 2,
            borderColor: 'black',
            margin: 10,
            backgroundColor: 'red',
          }}></Button>
      </View>
      <Button onPress={onStartRecord}>Start</Button>
      <Button onPress={onStopRecord}>stop</Button>
    </View>
  );
};
export default PuzzleWritingVoice;
