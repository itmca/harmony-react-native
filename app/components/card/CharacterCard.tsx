import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './styles';

type Props = {
  imageURL: string;
  characterName: string;
  characterNickName: string;
  title: string;
  characterNo: number;
};

const CharacterCard = ({
  imageURL,
  characterName,
  characterNickName,
  title,
  characterNo,
}: Props): JSX.Element => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.settingButtonContainer}>
        <TouchableOpacity
          style={styles.settingButton}
          onPress={() => {
            console.log(characterNo);
          }}>
          <Icon name={'cog'} size={24} style={styles.settingButtonIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.characterProfileContainer}>
        <Avatar.Image size={128} source={{uri: imageURL}} />
        <Text style={styles.characterNickName}>{characterNickName}</Text>
        <Text style={styles.characterName}>{characterName} 님</Text>
        <Text style={styles.characterTitle}>{'"' + title + '"'}</Text>
      </View>
      <View style={styles.selectButtonContainer}>
        <TouchableOpacity
          style={styles.selectButton}
          onPress={() => {
            console.log(characterNo);
          }}>
          <Text style={styles.selectButtonText}>선택하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CharacterCard;
