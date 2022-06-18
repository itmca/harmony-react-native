import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';

type Props = {
  imageURL: string;
  characterName: string;
  characterNickName: string;
  title: string;
  characterNo: number;
  selected: boolean;
};

const CharacterCard = ({
  imageURL,
  characterName,
  characterNickName,
  title,
  characterNo,
  selected,
}: Props): JSX.Element => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.mainContainer}>
      <View style={styles.settingButtonContainer}>
        <TouchableOpacity
          style={styles.settingButton}
          onPress={() => {
            navigation.push('NoTab', {
              screen: 'CharacterSettingNavigator',
              params: {
                screen: 'CharacterModification',
                params: {
                  heroNo: characterNo,
                },
              },
            });
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
          style={selected ? styles.disabledSelectButton : styles.selectButton}
          disabled={selected}
          onPress={() => {
            console.log(characterNo);
          }}>
          <Text style={styles.selectButtonText}>
            {selected ? '작성 중인 주인공' : '선택하기'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CharacterCard;
