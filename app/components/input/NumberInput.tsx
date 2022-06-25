import React, {useEffect, useState} from 'react';
import {Alert, StyleProp, TextInput, TextStyle} from 'react-native';

type Props = {
  onChangeNumber: (number: number) => void;
  initialNumber: number;
  style?: StyleProp<TextStyle> | undefined;
  onNaN?: (cause: string) => void;
  autoFocus?: boolean;
  rangeStart?: number;
  rangeEnd?: number;
  onOutOfRange?: (number: number, start?: number, end?: number) => void;
};

export const NumberInput = ({
  onChangeNumber,
  initialNumber,
  style,
  onNaN = () => {
    Alert.alert('숫자를 입력해주세요');
  },
  autoFocus,
  rangeStart,
  rangeEnd,
  onOutOfRange = (number, start, end) => {
    if (start && end) {
      console.warn(
        `${number} is out of range. It should be >=${start} and <=${end}`,
      );
    } else if (start !== undefined) {
      console.warn(`${number} is out of range. It should be >=${start}`);
    } else if (end !== undefined) {
      console.warn(`${number} is out of range. It should be <=${end}`);
    }
  },
}: Props): JSX.Element => {
  const [number, setNumber] = useState<number>(initialNumber);
  const [text, setText] = useState<string>(String(initialNumber));

  useEffect(() => {
    if (number !== 0) {
      setText(String(number));
    }

    onChangeNumber(number);
  }, [number]);

  useEffect(() => {
    console.log(`rangeEnd : ${rangeEnd}`)
  }, [rangeEnd]);

  function isOutOfRange(newNumber: number) {
    return (
      (rangeStart !== undefined && rangeStart > newNumber) ||
      (rangeEnd !== undefined && rangeEnd < newNumber)
    );
  }

  return (
    <TextInput
      keyboardType={'numeric'}
      onChangeText={text => {
        if (!text) {
          setNumber(0);
          setText('');
          return;
        }

        const newNumber = parseInt(text);

        if (isNaN(newNumber) || String(newNumber) !== text) {
          onNaN(text);
          return;
        }

        if (isOutOfRange(newNumber)) {
          onOutOfRange(newNumber, rangeStart, rangeEnd);
          return;
        }

        setNumber(newNumber);
      }}
      value={text}
      style={style}
      autoFocus={autoFocus}
      onBlur={() => {
        if (!text) {
          setText(String(initialNumber));
        }
      }}
    />
  );
};
