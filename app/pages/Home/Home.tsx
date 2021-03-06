import React from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import FingerBounceAnimation from '../../components/animation/FingerBounceAnimation';
import {styles} from './styles';

const Home = (): JSX.Element => {
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
