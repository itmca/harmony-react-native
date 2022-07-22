import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import styles from '../styles';
import Home from '../../pages/Home/Home';
import Profile from '../../pages/Profile/Profile';
import DefaultHeaderLeft from '../../components/header/DefaultHeaderLeft';
import HeroBadgeHeader from '../../components/header/HeroBadgeHeader';
import PuzzleWritingQuestion from '../../pages/PuzzleWritingQuestion/PuzzleWritingQuestion';
import WritingHeaderLeft from '../../components/header/WritingHeaderLeft';
import WritingHeaderRight from '../../components/header/WritingHeaderRight';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useRecoilValue} from 'recoil';
import {isLoggedInState} from '../../recoils/AuthRecoil';
import StoryList from '../../pages/StoryList/StoryList';
import {heroState} from '../../recoils/HeroRecoil';

const BottomTab = createBottomTabNavigator();

const HomeTabRootNavigator = (): JSX.Element => {
  const isLoggedIn = useRecoilValue(isLoggedInState);
  const hero = useRecoilValue(heroState);
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      backBehavior="history"
      screenOptions={{
        tabBarStyle: {
          height: 74,
          borderTopWidth: 0, // For IOS
          elevation: 0, // For Android
        },
        headerTitleAlign: 'center',
        headerLeftContainerStyle: {
          paddingLeft: 16,
        },
        headerRightContainerStyle: {
          paddingRight: 16,
        },
        tabBarHideOnKeyboard: true,
      }}>
      <BottomTab.Screen
        name="Home"
        component={isLoggedIn ? StoryList : Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) =>
            isLoggedIn ? (
              <MaterialCommunityIcon
                name={focused ? 'book-open-page-variant' : 'book-outline'}
                size={24}
              />
            ) : (
              <MaterialCommunityIcon
                name={focused ? 'home' : 'home-outline'}
                size={24}
              />
            ),
          headerLeft: () => <DefaultHeaderLeft />,
          title: '',
          headerRight: () =>
            isLoggedIn && (
              <HeroBadgeHeader
                imageURL={hero?.imageURL || ''}
                characterName={hero.heroNickName}
              />
            ),
        }}
      />
      <BottomTab.Screen
        name="PuzzleWritingQuestion"
        component={PuzzleWritingQuestion}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <Image
              style={styles.imgPuzzleIcon}
              source={require('../../assets/images/puzzle_onepiece.png')}
            />
          ),
          headerLeft: () => <WritingHeaderLeft type="cancel" />,
          title: '조각 맞추기',
          headerRight: () => (
            <WritingHeaderRight
              text="다음"
              nextScreenName="PuzzleWritingDate"
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: '',
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcon
              name={focused === true ? 'account' : 'account-outline'}
              size={24}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default HomeTabRootNavigator;
