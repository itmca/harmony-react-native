import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {TextInput} from 'react-native-paper';
import ColoredButton from '../../components/button/ColoredButton';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { DatePickerInput } from 'react-native-paper-dates';


const CharacterRegister = (): JSX.Element => {
  const [inputDate, setInputDate] = React.useState<Date | undefined>(undefined);

  return (
    <View style={styles.mainContainer}>
      <ScrollView
        style={styles.scrollViewContainer}
        contentContainerStyle={styles.formContainer}>
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
          placeholder="소중한 당신"
        />
        <DatePickerInput
            style={styles.dateInput}
            locale="en"
            label="태어난 날"
            value={inputDate}
            onChange={(d) => setInputDate(d)}
            inputMode="start"
            mode="outlined"
        />
        <TextInput
          style={styles.formInput}
          mode="outlined"
          label="제목"
          placeholder={'행복했던 나날들'}
        />
        <ColoredButton text="주인공 추가" onPress={() => {

        }}/>
      </ScrollView>
    </View>
  );
};

export default CharacterRegister;
