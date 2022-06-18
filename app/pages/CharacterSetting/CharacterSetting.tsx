import React, {useEffect, useState} from 'react';

import {Dimensions, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import Carousel from 'react-native-snap-carousel';
import CharacterCard from '../../components/card/CharacterCard';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useRecoilValue} from 'recoil';
import {useAxiosPromise} from '../../hooks/network.hooks';
import {Hero} from '../../type/hero';
import {heroState} from '../../recoils/HeroRecoil';
import {useFocusEffect} from '@react-navigation/native';

type Props = {
  navigation: any;
};

const CharacterSetting = ({navigation}: Props): JSX.Element => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const currentHero = useRecoilValue(heroState);
  const [heroes, setHeroes] = useState<Hero[]>([]);

  const {response, refetch} = useAxiosPromise<Hero[]>(
    {
      url: '/heroes',
    },
  );

  useEffect(() => {
    void response
      ?.then(r => r.data)
      .then(heroes => {
        setHeroes(heroes);
      });
  }, [response]);

  useFocusEffect(() => {
    console.log('focusEffect is called');
  });

  return (
    <View style={styles.mainContainer}>
      <View style={styles.carouselContainer}>
        <Carousel
          data={heroes}
          sliderWidth={windowWidth}
          sliderHeight={windowHeight}
          itemWidth={windowWidth * 0.8}
          itemHeight={windowHeight}
          layout={'default'}
          renderItem={({item: hero, index}: any) => {
            return (
              <CharacterCard
                characterNo={hero.heroNo}
                characterName={hero.heroName}
                characterNickName={hero.heroNickName}
                title={hero.title}
                imageURL={hero.imageURL}
                selected={hero.heroNo && hero.heroNo === currentHero?.heroNo}
              />
            );
          }}
        />
      </View>
      <View style={styles.addButtonContainer}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {
            navigation.push('NoTab', {
              screen: 'CharacterSettingNavigator',
              params: {
                screen: 'CharacterRegister',
              },
            });
          }}>
          <Icon name={'user-plus'} size={24} style={styles.addButtonIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default CharacterSetting;
