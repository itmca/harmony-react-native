import React, {useEffect, useState} from 'react';
import {Alert, ScrollView, View} from 'react-native';
import {styles} from './styles';
import {TextInput} from 'react-native-paper';
import ColoredButton from '../../components/button/ColoredButton';
import {DatePickerInput} from 'react-native-paper-dates';
import {useAxiosPromise} from '../../hooks/network.hooks';

const HeroRegister = ({navigation}): JSX.Element => {
  const [name, setName] = useState<string>('');
  const [nickName, setNickName] = useState<string>('');
  const [birthday, setBirthday] = useState<Date | undefined>(undefined);
  const [title, setTitle] = useState<string>('');
  const {response, refetch} = useAxiosPromise(
    {
      url: '/heroes',
      method: 'post',
    },
    {disableInitialRequest: true},
  );

  const onSubmit = () => {
    if (!name || !nickName || !birthday || !title) {
      Alert.alert('누락된 값이 있습니다.');
      return;
    }

    refetch({
      data: {
        heroName: name,
        heroNickName: nickName,
        birthday: birthday,
        title: title,
      },
    });
  };

  useEffect(() => {
    void response
      ?.then(r => r.data)
      .then(() => {
        Alert.alert('주인공이 생성되었습니다.');
        navigation.navigate({
          name: 'CharacterSetting',
          params: {
            event: 'create',
          },
          merge: true,
        });
      });
  }, [response]);

  return (
    <View style={styles.mainContainer}>
      <ScrollView
        style={styles.scrollViewContainer}
        contentContainerStyle={styles.formContainer}>
        <TextInput
          style={styles.formInput}
          mode="outlined"
          label="이름"
          value={name}
          onChangeText={setName}
          placeholder="홍il길동"
        />
        <TextInput
          style={styles.formInput}
          mode="outlined"
          label="닉네임"
          value={nickName}
          onChangeText={setNickName}
          placeholder="소중한 당신"
        />
        <DatePickerInput
          style={styles.dateInput}
          locale="en"
          label="태어난 날"
          value={birthday}
          onChange={setBirthday}
          inputMode="start"
          mode="outlined"
        />
        <TextInput
          style={styles.formInput}
          mode="outlined"
          label="제목"
          placeholder={'행복했던 나날들'}
          value={title}
          onChangeText={setTitle}
        />
        <ColoredButton text="주인공 추가" onPress={onSubmit} />
      </ScrollView>
    </View>
  );
};

export default HeroRegister;
