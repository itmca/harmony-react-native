import React from 'react';

import {Dimensions, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import Carousel from 'react-native-snap-carousel';
import CharacterCard from '../../components/card/CharacterCard';
import Icon from 'react-native-vector-icons/FontAwesome5';

type Props = {
  navigation: any;
};

const CharacterSetting = ({navigation}: Props): JSX.Element => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const data = [
    {
      characterNo: 1,
      characterName: '박대례',
      characterNickName: '할매',
      title: '아름다운 우리 할머니',
      imageURL:
        'https://images.unsplash.com/photo-1442458370899-ae20e367c5d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80',
    },
    {
      characterNo: 2,
      characterName: '정한식',
      characterNickName: '할배',
      title: '그는 멋있었다',
      imageURL:
        'https://images.unsplash.com/photo-1631981787167-2a2d0a5b4492?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
    },
    {
      characterNo: 3,
      characterName: '정영일',
      characterNickName: '아부지',
      title: '인생은 즐거워',
      imageURL:
        'https://images.unsplash.com/photo-1564156280315-1d42b4651629?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2584&q=80',
    },
  ];
  return (
    <View style={styles.mainContainer}>
      <View style={styles.carouselContainer}>
        <Carousel
          data={data}
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
