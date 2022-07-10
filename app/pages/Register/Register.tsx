import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {HelperText, TextInput} from 'react-native-paper';
import ColoredButton from '../../components/button/ColoredButton';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {DatePickerInput} from 'react-native-paper-dates';
import ValidatedTextInput from '../../components/form/ValidatedTextInput';

const Register = ({navigation}): JSX.Element => {
  const [inputDate, setInputDate] = React.useState<Date | undefined>(undefined);
  const [name, setName] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const onVerificationSend = () => {};

  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.scrollViewContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.registerText}>회원가입</Text>
        </View>
        <ValidatedTextInput
          label={'이름'}
          value={name}
          onChangeText={setName}
          placeholder={'홍길동'}
          errorTextProvider={name => {
            if (name.length === 0) {
              return '이름을 입력해주세요.';
            } else if (name?.length < 2 || name?.length > 30) {
              return '2자 이상 31자 미만으로 입력해주세요.';
            }
            return '';
          }}
        />
        <ValidatedTextInput
          label="닉네임"
          value={nickname}
          onChangeText={setNickname}
          placeholder="공백 시 랜덤으로 설정"
          errorTextProvider={nickname => {
            if (nickname.length > 32) {
              return '닉네임은 32자 미만으로 입력해주세요.';
            }
            return '';
          }}
        />
        <ValidatedTextInput
          label="이메일"
          value={email}
          onChangeText={setEmail}
          placeholder="user@domain.com"
          errorTextProvider={email => {
            const regex =
              /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
            if (email.length == 0) {
              return '이메일을 입력해주세요.';
            } else if (!regex.test(email)) {
              return '올바른 이메일 형식을 입력해주세요.';
            }
            return '';
          }}
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
        <ValidatedTextInput
          secureTextEntry={true}
          label="비밀번호"
          value={password}
          onChangeText={setPassword}
          placeholder="8~16자 영문+숫자+특수문자"
          errorTextProvider={password => {
            const regex =
              /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
            if (password.length == 0) {
              return '비밀번호를 입력해주세요.';
            } else if (!regex.test(password)) {
              return '8 ~ 16자 영문, 숫자, 특수문자를 사용해주세요.';
            }
            return '';
          }}
        />
        <ValidatedTextInput
          secureTextEntry={true}
          label="비밀번호 확인"
          value={passwordConfirm}
          onChangeText={setPasswordConfirm}
          placeholder="8~16자 영문+숫자+특수문자"
          errorTextProvider={passwordConfirm => {
            if (!(password == passwordConfirm)) {
              return '비밀번호를 확인해주세요.';
            }
            return '';
          }}
        />
        <DatePickerInput
          style={styles.dateInput}
          locale="en"
          label="태어난 날"
          value={inputDate}
          onChange={d => setInputDate(d)}
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
            onPress={() => setIsChecked(!isChecked)}
          />
          <Text style={{marginLeft: -8}}>이용 약관 동의합니다.</Text>
        </TouchableOpacity>
        <ColoredButton text="회원가입" onPress={() => {}} />
      </ScrollView>
    </View>
  );
};
export default Register;
