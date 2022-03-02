import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import styles from '../styles';
import Home from '../../pages/Home/Home';
import Profile from '../../pages/Profile/Profile';
import DefaultHeaderLeft from '../../components/header/DefaultHeaderLeft';
import PuzzleWritingQuestion from '../../pages/PuzzleWritingQuestion/PuzzleWritingQuestion';
import WritingHeaderLeft from '../../components/header/WritingHeaderLeft';
import WritingHeaderRight from '../../components/header/WritingHeaderRight';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const BottomTab = createBottomTabNavigator();

const HomeTabRootNavigator = (): JSX.Element => {
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
        headerShadowVisible: false,
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
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <Icon name={focused === true ? 'home' : 'home-outline'} size={24} />
          ),
          headerLeft: () => <DefaultHeaderLeft />,
          title: '',
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
              nextScreenName="PuzzleWritingPhoto"
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <Icon name={focused === true ? 'account' : 'account-outline'} size={24} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default HomeTabRootNavigator;
