import React, {useEffect} from 'react';

import {ScrollView, TextInput, View, Text, Linking} from 'react-native';
import {KeyboardAccessoryView} from 'react-native-keyboard-accessory';
import Button from '@ant-design/react-native/lib/button';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import HelpQuestion from '../../components/PuzzleHelpQuestion/HelpQuestion';

const PuzzleWritingText = (): JSX.Element => {
  const navigation = useNavigation<any>();
  const inputRef = React.useRef<TextInput>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <View style={styles.container}>
      <HelpQuestion />
      <View style={{marginHorizontal: 20}}>
        <TextInput
          ref={inputRef}
          style={styles.titleInput}
          autoFocus={true}
          placeholder="제목을 입력해주세요."
        />
      </View>
      <ScrollView style={{marginHorizontal: 20}}>
        <TextInput
          multiline={true}
          style={styles.contentInput}
          placeholder="여기를 눌러 새로운 인생조각을 얘기해주세요."
        />
      </ScrollView>
      <KeyboardAccessoryView
        alwaysVisible={true}
        hideBorder={true}
        androidAdjustResize={true}
        style={{backgroundColor: 'white'}}>
        <Button
          onPress={() => {
            navigation.push('NoTab', {
              screen: 'PuzzleWritingNavigator',
              params: {
                screen: 'PuzzleWritingVoice',
              },
            });
          }}
          style={styles.voiceBox}>
          <Icon name={'mic'} size={14}></Icon>
          <Text> 음성 녹음하기</Text>
        </Button>
      </KeyboardAccessoryView>
    </View>
  );
};

export default PuzzleWritingText;
