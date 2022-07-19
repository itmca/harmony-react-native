import React, {useEffect, useState} from 'react';

import {Dimensions, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import Carousel from 'react-native-snap-carousel';
import HeroCard from '../../components/card/HeroCard';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useAxiosPromise} from '../../hooks/network.hooks';
import {Hero} from '../../type/hero';

type Props = {
  navigation: any;
  route: any;
};

const HeroSetting = ({navigation, route}: Props): JSX.Element => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const [heroes, setHeroes] = useState<Hero[]>([]);

  const {response, refetch} = useAxiosPromise<Hero[]>({
    url: '/heroes',
  });

  useEffect(() => {
    void response
      ?.then(r => r.data)
      .then(heroes => {
        setHeroes(heroes);
      });
  }, [response]);

  useEffect(() => {
    refetch({});
  }, [route.params?.event]);

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
            return <HeroCard hero={hero} />;
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
export default HeroSetting;
