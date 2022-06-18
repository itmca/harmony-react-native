import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import RNFetchBlob from 'rn-fetch-blob';
import {recordFileState} from '../../recoils/StoryWritingRecoil';
import Permissions, {PERMISSIONS, RESULTS} from 'react-native-permissions';

import {
  Alert,
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
import {useRecoilState} from 'recoil';

const audioRecorderPlayer = new AudioRecorderPlayer();

const PuzzleWritingVoice = (): JSX.Element => {
  const navigation = useNavigation();
  const [recordFileInfo, setRecordFileInfo] = useRecoilState(recordFileState);

  useEffect(() => {
    void initVoicePermission();
    void hasVoicePermission().then(permissionResults => {
      const permissionNames = Object.keys(permissionResults);
      permissionNames.forEach(permssionName => {
        const permissionStatus = permissionResults[permssionName];
        if (permissionStatus != RESULTS.GRANTED) {
          navigation.goBack();
        }
      });
    });
    initVoiceRecordState();
  }, []);

  const initVoiceRecordState = function () {
    setRecordFileInfo({filePath: undefined, recordTime: undefined});
  };

  const initVoicePermission = async function () {
    if (Platform.OS === 'android') {
      await Permissions.requestMultiple([
        PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
        PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
        PERMISSIONS.ANDROID.RECORD_AUDIO,
      ]);
    } else {
      await Permissions.request(PERMISSIONS.IOS.MICROPHONE);
    }
  };

  const hasVoicePermission = async function (){
    if (Platform.OS == 'android') {
      return Permissions.checkMultiple([
        PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
        PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
        PERMISSIONS.ANDROID.RECORD_AUDIO,
      ]);
    } else {
      return Permissions.checkMultiple([PERMISSIONS.IOS.MICROPHONE]);
    }
  };

  const onStartRecord = async function () {
    const fileName = getFileName();
    const dirs = RNFetchBlob.fs.dirs;
    const path = Platform.select({
      ios: `${fileName}.m4a`,
      android: `${dirs.CacheDir}/${fileName}.m4a`,
    });
    const audioSet = {
      AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
      AudioSourceAndroid: AudioSourceAndroidType.MIC,
      AVModeIOS: AVModeIOSOption.measurement,
      AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
      AVNumberOfChannelsKeyIOS: 2,
      AVFormatIDKeyIOS: AVEncodingOption.aac,
    };

    const uri = await audioRecorderPlayer.startRecorder(path, audioSet);
    audioRecorderPlayer.addRecordBackListener(e => {
      const HourMinuteSeconds = getHourMinuteSeconds(
        Math.floor(e.currentPosition),
      );
      console.log(e.currentPosition);

      setRecordFileInfo({
        filePath: uri,
        recordTime: HourMinuteSeconds,
      });
    });
  };

  const getFileName = function () {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const minute = date.getMinutes();

    const tempHour = date.getHours();
    const hour = Math.floor(tempHour / 12) + (tempHour % 13);
    const hourUnit = tempHour < 12 ? 'AM' : 'PM';

    const fileName = `${year}.${month}.${day} ${hour}:${minute}${hourUnit}`;
    return fileName;
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
    navigation.goBack();
  };

  const isRecording = function () {
    return recordFileInfo?.filePath != undefined;
  };

  return (
    <View style={styles.container}>
      <Text>{recordFileInfo?.recordTime}</Text>
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
