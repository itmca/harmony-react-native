import React, {useState} from 'react';
import {HelperText, TextInput} from 'react-native-paper';
import {styles} from '../../pages/Register/styles';

type Props = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  errorTextProvider: (text: string) => string;
};

const ValidatedTextInput = ({
  label,
  value,
  onChangeText,
  errorTextProvider,
}: Props): JSX.Element => {
  const [errorText, setErrorText] = useState<string>();

  return (
    <>
      <TextInput
        style={styles.formInput}
        mode="outlined"
        label={label}
        value={value}
        onChangeText={text => {
          onChangeText(text);
          setErrorText(errorTextProvider(text));
        }}
        placeholder="홍길동"
      />
      {errorText ? <HelperText type="error">{errorText}</HelperText> : null}
    </>
  );
};

export default ValidatedTextInput;
