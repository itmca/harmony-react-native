import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {TextInput, Button} from 'react-native-paper';
import ColoredButton from '../../components/button/ColoredButton';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {DatePickerInput} from 'react-native-paper-dates';

const AccountModification = (): JSX.Element => {
  const [inputDate, setInputDate] = React.useState<Date | undefined>(undefined);

  return (
    <View style={styles.mainContainer}>
      <ScrollView
        style={styles.scrollViewContainer}
        contentContainerStyle={styles.formContainer}>
        <TextInput
          style={styles.formInput}
          mode="outlined"
          label="이메일"
          disabled={true}
          value={''}
          placeholder="user@domain.com"
        />
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
          placeholder="멋쟁이"
        />
        {/* <TextInput
          style={styles.formInput}
          mode="outlined"
          secureTextEntry={true}
          label="태어난 날"
          value={''}
          placeholder="user@domain.com"
        /> */}
        <DatePickerInput
          style={styles.dateInput}
          locale="en"
          label="태어난 날"
          value={inputDate}
          onChange={d => setInputDate(d)}
          inputMode="start"
          mode="outlined"
        />
        <ColoredButton text="저장" onPress={() => {}} />
        <ColoredButton
          text="비밀번호 변경"
          onPress={() => {}}
          style={{marginTop: 8}}
        />
      </ScrollView>
    </View>
  );
};
export default AccountModification;
