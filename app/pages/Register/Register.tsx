import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {TextInput} from 'react-native-paper';
import ColoredButton from '../../components/button/ColoredButton';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { DatePickerInput } from 'react-native-paper-dates';


const Register = ({navigation}): JSX.Element => {
  const [inputDate, setInputDate] = React.useState<Date | undefined>(undefined);
  
  return (
    <View style={styles.mainContainer}>
      <ScrollView
        style={styles.scrollViewContainer}
        contentContainerStyle={styles.formContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.registerText}>회원가입</Text>
        </View>
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
          placeholder="공백 시 랜덤으로 설정"
        />
        <TextInput
          style={styles.formInput}
          mode="outlined"
          label="이메일"
          value={''}
          placeholder="user@domain.com"
        />
        <View style={styles.formVerificationPartContainer}>
          <TextInput
            style={styles.formVerificationInput}
            mode="outlined"
            value={''}
            placeholder="인증코드"
          />
          <ColoredButton
            style={styles.formVerificationSendButton}
            text="인증코드 전송"
            onPress={() => {}}
          />
        </View>
        <TextInput
          style={styles.formInput}
          mode="outlined"
          secureTextEntry={true}
          label="비밀번호"
          value={''}
          placeholder="user@domain.com"
        />
        <TextInput
          style={styles.formInput}
          mode="outlined"
          secureTextEntry={true}
          label="비밀번호 확인"
          value={''}
          placeholder="user@domain.com"
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
        <TouchableOpacity
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            height: 32,
            marginBottom: 4,
          }}>
          <BouncyCheckbox
            size={18}
            iconStyle={{borderColor: '#343666', borderRadius: 4}}
            fillColor={'#343666'}
          />
          <Text style={{marginLeft: -8}}>이용 약관 동의합니다.</Text>
        </TouchableOpacity>
        <ColoredButton text="회원가입" onPress={() => {

        }} />
      </ScrollView>
    </View>
  );
};
export default Register;
