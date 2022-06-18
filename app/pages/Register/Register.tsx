import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {HelperText, TextInput} from 'react-native-paper';
import ColoredButton from '../../components/button/ColoredButton';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {DatePickerInput} from 'react-native-paper-dates';

const Register = ({navigation}): JSX.Element => {
  const [inputDate, setInputDate] = React.useState<Date | undefined>(undefined);
  const [name, setName] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  const isChecked = false;

  const [nameError, setNameError] = useState<string>('');
  const [nicknameError, setNicknameError] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [passwordConfirmError, setPasswordConfirmError] = useState<string>('');

  const [hasNameError, setHasNameError] = useState<boolean>(false);
  const [hasNicknameError, setHasNicknameError] = useState<boolean>(false);
  const [hasEmailError, setHasEmailError] = useState<boolean>(false);
  const [hasPasswordError, setHasPasswordError] = useState<boolean>(false);
  const [hasPasswordConfirmError, setHasPasswordConfirmError] = useState<boolean>(false);

  const onChangeName = (inputName: string) => {
    setName(inputName);
    if (inputName.length == 0) {
      setNameError('이름을 입력해주세요.');
      setHasNameError(true);
    } else if (inputName?.length < 2 || inputName?.length > 30) {
      setNameError('2자 이상 31자 미만으로 입력해주세요.');
      setHasNameError(true);
    } else {
      setNameError('');
    }
  };

  const onChangeNickname = (inputNickname: string) => {
    setNickname(inputNickname);
    if (inputNickname.length > 32) {
      setNicknameError('닉네임은 32자 미만으로 입력해주세요.');
      setHasNicknameError(true);
    } else {
      setHasNicknameError(false);
    }
  };

  const onChangeEmail = (inputEmail: string) => {
    setEmail(inputEmail);
    const regex =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (inputEmail.length == 0) {
      setEmailError('이메일을 입력해주세요.');
      setHasEmailError(true);
    } else if (!regex.test(inputEmail)) {
      setEmailError('올바른 이메일 형식을 입력해주세요.');
      setHasEmailError(true);
    } else {
      setHasEmailError(false);
    }
  };

  const onChangePassword = (inputPassword: string) => {
    setPassword(inputPassword);
    const regex = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
    if (inputPassword.length == 0) {
      setPasswordError('비밀번호를 입력해주세요.');
      setHasPasswordError(true);
    } else if (!regex.test(inputPassword)) {
      setPasswordError('8 ~ 16자 영문, 숫자, 특수문자를 사용해주세요.');
      setHasPasswordError(true);
    } else {
      setHasPasswordError(false);
    }
  };

  const onConfirmPassword = (inputPassword: string) => {
    setPasswordConfirm(inputPassword);
    if (!(password == inputPassword)) {
      setPasswordConfirmError('비밀번호를 확인해주세요.');
      setHasPasswordConfirmError(true);
    } else {
      setHasPasswordConfirmError(false);
    }
  }

  const onVerificationSend = () => {

  }


  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.scrollViewContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.registerText}>회원가입</Text>
        </View>
        <TextInput
          style={styles.formInput}
          mode="outlined"
          label="이름"
          value={name}
          onChangeText={onChangeName}
          placeholder="홍길동"
        />
        {nameError ? (
          <HelperText type="error">
            {nameError}
          </HelperText>
        ) : null}
        <TextInput
          style={styles.formInput}
          mode="outlined"
          label="닉네임"
          value={nickname}
          onChangeText={onChangeNickname}
          placeholder="공백 시 랜덤으로 설정"
        />
        {hasNicknameError ? (
          <HelperText type="error" visible={hasNicknameError}>
            {nicknameError}
          </HelperText>
        ) : null}
        <TextInput
          style={styles.formInput}
          mode="outlined"
          label="이메일"
          value={email}
          onChangeText={onChangeEmail}
          placeholder="user@domain.com"
        />
        {hasEmailError ? (
          <HelperText type="error" visible={hasEmailError}>
            {emailError}
          </HelperText>
        ) : null}
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
          value={password}
          onChangeText={onChangePassword}
          placeholder="8~16자 영문+숫자+특수문자"
        />
        {hasPasswordError ? (
          <HelperText type="error" visible={hasPasswordError}>
            {passwordError}
          </HelperText>
        ) : null}
        <TextInput
          style={styles.formInput}
          mode="outlined"
          secureTextEntry={true}
          label="비밀번호 확인"
          value={passwordConfirm}
          onChangeText={onConfirmPassword}
          placeholder="8~16자 영문+숫자+특수문자"
        />
        {hasPasswordConfirmError ? (
          <HelperText type="error" visible={hasPasswordConfirmError}>
            {passwordConfirmError}
          </HelperText>
        ) : null}
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
            onPress={() => !isChecked}
          />
          <Text style={{marginLeft: -8}}>이용 약관 동의합니다.</Text>
        </TouchableOpacity>
        <ColoredButton text="회원가입" onPress={() => {}} />
      </ScrollView>
    </View>
  );
};
export default Register;
