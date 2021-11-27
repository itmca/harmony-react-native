import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import styles from '../styles';
import Home from '../../pages/Home/Home';
import Profile from '../../pages/Profile/Profile';
import PuzzleWritingBridge from './PuzzleWritingBridge';
import DefaultHeaderLeft from '../../components/header/DefaultHeaderLeft';

const BottomTab = createBottomTabNavigator();

const HomeTabRootNavigator = (): JSX.Element => {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
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
      }}>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <Image
              style={styles.imgIcon}
              source={require('../../assets/images/menu_book.png')}
            />
          ),
          headerLeft: () => <DefaultHeaderLeft />,
          title: '',
        }}
      />
      <BottomTab.Screen
        name="PuzzleWritingBridge"
        component={PuzzleWritingBridge}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <Image
              style={styles.imgPuzzleIcon}
              source={require('../../assets/images/puzzle_onepiece.png')}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <Image
              style={styles.imgIcon}
              source={require('../../assets/images/person_outline.png')}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default HomeTabRootNavigator;
