import {ConstructionOutlined} from '@mui/icons-material';
import React, {useEffect} from 'react';
import {Image, Platform, SafeAreaView, Text, View} from 'react-native';
import {useEvent} from 'react-native-reanimated';
import {useRecoilState} from 'recoil';
import FingerBounceAnimation from '../../components/animation/FingerBounceAnimation';
import {authState} from '../../recoils/AuthRecoil';
import {heroState} from '../../recoils/HeroRecoil';
import {userState} from '../../recoils/UserRecoil';
import {LocalStorage} from '../../storage/local.storage';
import {styles} from './styles';

const Home = (): JSX.Element => {
  const [user, setUser] = useRecoilState(userState);
  const [authToken, setAuthTokens] = useRecoilState(authState);
  const [hero, setHero] = useRecoilState(heroState);

  useEffect(() => {
    console.log('User', user);
    console.log('authToken', authToken);
    console.log('hero', hero);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.mainImage}
              source={require('../../assets/images/mainPuzzle.png')}
            />
          </View>
          <View style={styles.descContainer}>
            <View style={styles.titleTextContainer}>
              <Text style={styles.titleText}>
                한 번에 맞추는 것은 어렵습니다
              </Text>
              <Text style={styles.titleText}>한 조각씩은 쉽죠</Text>
            </View>
            <View style={styles.subTextTopContainer}>
              <Text style={styles.subText}>
                할아버지, 할머니, 부모님의 이야기를 자서전으로 남기고 싶지만
                너무 거창해서 쉽게 손이 가지 않습니다.
              </Text>
            </View>
            <View style={styles.subTextBottomContainer}>
              <Text style={styles.subText}>
                인생을 적은 작은 퍼즐들이 모여 자연스럽게 긴 이야기가 될 수
                있도록 도와드립니다.{' '}
              </Text>
            </View>
          </View>
          <View style={styles.aniContainer}>
            <FingerBounceAnimation
              text={'인생 한조각 맞추러 가기'}
              durationSeconds={15}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Home;
