import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import styles from './styles';
import PuzzleWritingNavigator from './PuzzleWritingNavigator';
import PuzzleViewNavigator from './PuzzleViewNavigator';
import ProfileNavigator from './ProfileNavigator';

const BottomTab = createBottomTabNavigator();

const RootNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="PuzzleViewNavigator"
      screenOptions={{
        tabBarStyle: {
          height: 74,
          borderTopWidth: 0, // For IOS
          elevation: 0, // For Android
        },
        headerShown: false,
      }}>
      <BottomTab.Screen
        name="PuzzleViewNavigator"
        component={PuzzleViewNavigator}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <Image
              style={styles.imgIcon}
              source={require('../assets/images/menu_book.png')}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="PuzzleWriting"
        component={PuzzleWritingNavigator}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <Image
              style={styles.imgPuzzleIcon}
              source={require('../assets/images/puzzle_onepiece.png')}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="ProfileNavigator"
        component={ProfileNavigator}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <Image
              style={styles.imgIcon}
              source={require('../assets/images/person_outline.png')}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default RootNavigator;
