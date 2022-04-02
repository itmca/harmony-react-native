import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import RNFetchBlob from 'rn-fetch-blob';

import {
  Image,
  PermissionsAndroid,
  Platform,
  Pressable,
  Text,
  View,
} from 'react-native';
import AudioRecorderPlayer, {
  AVEncoderAudioQualityIOSType,
  AVEncodingOption,
  AudioEncoderAndroidType,
  AudioSourceAndroidType,
  AVModeIOSOption,
} from 'react-native-audio-recorder-player';
import styles from './styles';

const audioRecorderPlayer = new AudioRecorderPlayer();

const PuzzleWritingVoice = (): JSX.Element => {
  const navigation = useNavigation();

  const [recordState, setRecordState] = useState({
    recordSecs: 0,
    recordTime: '00:00:00',
  });

  useEffect(() => {
    void initVoicePermission();
  }, []);

  // TODO Android Voice Permission Code 추가
  /*
    권한을 허락하지 않은 경우 어떻게 할 것인가.(원래 화면으로 돌아가기)
  */
  const initVoicePermission = async function () {
    if (Platform.OS === 'android') {
      try {
        const grants = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        ]);

        console.log('write external stroage', grants);

        if (
          grants['android.permission.WRITE_EXTERNAL_STORAGE'] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          grants['android.permission.READ_EXTERNAL_STORAGE'] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          grants['android.permission.RECORD_AUDIO'] ===
            PermissionsAndroid.RESULTS.GRANTED
        ) {
          console.log('Permissions granted');
        } else {
          console.log('All required permissions not granted');
          const a = void hasAndroidPermission();
          console.log('permission chekc', a);
          console.log(grants);
          return;
        }
      } catch (err) {
        console.warn(err);
        return;
      }
    }
  };

  async function hasAndroidPermission() {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

    const hasPermission = await PermissionsAndroid.check(permission);
    console.log(hasPermission);
    return hasPermission;
  }

  const onStartRecord = async function () {
    // TODO Andrdid 및 IOS Path 설정 추가
    const dirs = RNFetchBlob.fs.dirs;
    const path = Platform.select({
      ios: 'hello.m4a',
      android: `${dirs.CacheDir}/hello.mp3`,
    });
    const audioSet = {
      AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
      AudioSourceAndroid: AudioSourceAndroidType.MIC,
      AVModeIOS: AVModeIOSOption.measurement,
      AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
      AVNumberOfChannelsKeyIOS: 2,
      AVFormatIDKeyIOS: AVEncodingOption.aac,
    };
    // const meteringEnabled = false;

    const uri = await audioRecorderPlayer.startRecorder(path, audioSet);
    console.log(uri);
    audioRecorderPlayer.addRecordBackListener(e => {
      console.log(e.currentPosition);
      const HourMinuteSeconds = getHourMinuteSeconds(
        Math.floor(e.currentPosition),
      );

      setRecordState({
        ...recordState,
        recordSecs: e.currentPosition,
        recordTime: HourMinuteSeconds,
      });
    });
  };

  const getHourMinuteSeconds = function (mileSeconds: number) {
    const seconds = Math.floor((mileSeconds / 1000) % 60);
    const minute = Math.floor((mileSeconds / 60000) % 60);
    const hour = Math.floor((mileSeconds / 3600000) % 60);

    const hourMinuteSeconds =
      hour.toLocaleString('en-US', {minimumIntegerDigits: 2}) +
      ':' +
      minute.toLocaleString('en-US', {minimumIntegerDigits: 2}) +
      ':' +
      seconds.toLocaleString('en-US', {minimumIntegerDigits: 2});

    return hourMinuteSeconds;
  };

  const onStopRecord = async function () {
    await audioRecorderPlayer.stopRecorder();
    audioRecorderPlayer.removeRecordBackListener();

    // TODO State 초기화는 해당 음성 녹음 화면에 진입할 때 처리하는 방식으로 변경하기
    setRecordState({...recordState, recordSecs: 0});

    // TODO Recoil 음성 녹음 데이터 저장하기
    navigation.goBack();
  };

  const isRecording = function () {
    return recordState.recordSecs > 0;
  };

  return (
    <View
      style={styles.container}>
      <Text>{recordState.recordTime}</Text>
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        <Image source={require('../../assets/images/voice_frequency.png')} />
        <Image source={require('../../assets/images/voice_frequency.png')} />
        <Image source={require('../../assets/images/voice_frequency.png')} />
        <Image source={require('../../assets/images/voice_frequency.png')} />
      </View>
      <View>
        <Pressable
          style={styles.recordContainer}
          onPress={() => {
            isRecording() ? void onStopRecord() : void onStartRecord();
          }}>
          <View
            style={
              isRecording() ? styles.isRecordBox : styles.notIsRecordBox
            }></View>
        </Pressable>
      </View>
    </View>
  );
};
export default PuzzleWritingVoice;
