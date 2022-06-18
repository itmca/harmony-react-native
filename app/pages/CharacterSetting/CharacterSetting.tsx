import React, {useEffect, useState} from 'react';

import {Dimensions, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import Carousel from 'react-native-snap-carousel';
import CharacterCard from '../../components/card/CharacterCard';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useRecoilState, useRecoilValue} from 'recoil';
import {authState} from '../../recoils/AuthRecoil';
import axios from 'axios';
import {SERVER_HOST} from '../../constants/url.constants';
import {useAxios} from '../../hooks/network';
import {Hero} from '../../type/hero';

type Props = {
  navigation: any;
};

const CharacterSetting = ({navigation}: Props): JSX.Element => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const tokens = useRecoilValue(authState);
  const [characters, setCharacters] = useState([]);
  
  useEffect(() => {
    console.log(tokens);

    void axios
      .get(`${SERVER_HOST}/characters`, {
        headers: {
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          Authorization: `Bearer ${tokens?.accessToken}`,
        },
      })
      .then(r => r.data)
      .then(data => {
        setCharacters(data);
      });
  }, []);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.carouselContainer}>
        <Carousel
          data={characters}
          sliderWidth={windowWidth}
          sliderHeight={windowHeight}
          itemWidth={windowWidth * 0.8}
          itemHeight={windowHeight}
          layout={'default'}
          renderItem={({item: story, index}: any) => {
            return (
              <CharacterCard
                characterNo={story.characterNo}
                characterName={story.characterName}
                characterNickName={story.characterNickName}
                title={story.title}
                imageURL={story.imageURL}
                selected={index === 1}
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
