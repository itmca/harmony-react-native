import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {TextInput} from 'react-native-paper';
import ColoredButton from '../../components/button/ColoredButton';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const CharacterModification = (): JSX.Element => {
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
          <TextInput
            style={styles.formInput}
            mode="outlined"
            secureTextEntry={true}
            label="태어난 날"
            value={''}
            placeholder="user@domain.com"
          />
          <TextInput
            style={styles.formInput}
            mode="outlined"
            label="제목"
            placeholder={'행복했던 나날들'}
          />
          <ColoredButton text="저장" onPress={() => {

          }}/>
      </ScrollView>
    </View>
  );
};
export default CharacterModification;
