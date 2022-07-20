import React, {useState} from 'react';
import {HelperText, TextInput} from 'react-native-paper';
import {styles} from '../../pages/Register/styles';

type Props = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  errorTextProvider: (text: string) => string;
  placeholder: string;
  secureTextEntry: boolean;
};

const ValidatedTextInput = ({
  label,
  value,
  onChangeText,
  errorTextProvider,
  placeholder,
  secureTextEntry,
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
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
      {errorText ? <HelperText type="error">{errorText}</HelperText> : null}
    </>
  );
};

export default ValidatedTextInput;
