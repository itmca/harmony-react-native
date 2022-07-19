import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {Hero} from '../../type/hero';
import {useRecoilState, useRecoilValue} from 'recoil';
import {heroState} from '../../recoils/HeroRecoil';
import {useAxiosPromise} from '../../hooks/network.hooks';

type Props = {
  hero: Hero;
};

const HeroCard = ({hero}: Props): JSX.Element => {
  const navigation = useNavigation<any>();

  const {refetch} = useAxiosPromise<void>(
    {
      method: 'POST',
      url: '/user/hero/recent',
    },
    {disableInitialRequest: true},
  );
  const {imageURL, heroName, heroNickName, title, heroNo} = hero;
  const [currentHero, setCurrentHero] = useRecoilState<Hero>(heroState);
  const [isSelected, setSelected] = useState<boolean>(
    currentHero.heroNo === heroNo,
  );

  useEffect(() => {
    setSelected(currentHero.heroNo === heroNo);
  }, [currentHero]);

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
                  heroNo,
                },
              },
            });
          }}>
          <Icon name={'cog'} size={24} style={styles.settingButtonIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.characterProfileContainer}>
        <Avatar.Image size={128} source={{uri: imageURL}} />
        <Text style={styles.characterNickName}>{heroNickName}</Text>
        <Text style={styles.characterName}>{heroName} 님</Text>
        <Text style={styles.characterTitle}>{'"' + title + '"'}</Text>
      </View>
      <View style={styles.selectButtonContainer}>
        <TouchableOpacity
          style={isSelected ? styles.disabledSelectButton : styles.selectButton}
          disabled={isSelected}
          onPress={() => {
            setCurrentHero(hero);
            refetch({
              data: {
                heroNo,
              },
            });
          }}>
          <Text style={styles.selectButtonText}>
            {isSelected ? '작성 중인 주인공' : '선택하기'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeroCard;
