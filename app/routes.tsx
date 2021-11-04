import React from 'react';
import DefaultHeaderLeft from './conponents/header/DefaultHeaderLeft';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePage from './pages/HomePage';
import PuzzlePage from './pages/PuzzlePage';
import ProfilePage from './pages/ProfilePage';
import {Text, Image, StyleSheet} from 'react-native';

const MainScreenTab = createBottomTabNavigator();

const RootNavigator = () => {
  return (

    <MainScreenTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {
          height: 74,
          borderTopWidth: 0, // For IOS
          elevation: 0       // For Android
        }
      }}
      >
      <MainScreenTab.Screen
          name="Home"
          component={HomePage}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: () =>
            <Image
              style={mainTapStyles.imgIcon}
              source={require('./assets/images/menu_book.png')} />,
            headerStyle: defaultHeaderStyle,
            headerLeft: () => <DefaultHeaderLeft />,
            headerTitle: '',
          }}
      />
      <MainScreenTab.Screen
          name="Puzzle"
          component={PuzzlePage}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: () =>
            <Image
              style={mainTapStyles.imgPuzzleIcon}
              source={require('./assets/images/puzzle_onepiece.png')} />,
            headerLeft: () => (<DefaultHeaderLeft/>),
            headerStyle: defaultHeaderStyle,
            headerTitle: ''}}
          />
      <MainScreenTab.Screen
           name="Profile"
           component={ProfilePage}
           options={{
            tabBarShowLabel: false,
            tabBarIcon: () =>
            <Image
              style={mainTapStyles.imgIcon}
              source={require('./assets/images/person_outline.png')} />,
              headerLeft: () => <DefaultHeaderLeft />,
              headerStyle: defaultHeaderStyle,
              headerTitle: ''}}
           />
    </MainScreenTab.Navigator>
  );
};


const defaultHeaderStyle = {
    height:64,
    backgroundColor: '#ffffff',
    elevation: 0, // Android
    shadowOpacity: 0, // iOS
    borderBottomWidth: 0,

};
export default RootNavigator;


const mainTapStyles = StyleSheet.create({
  imgIcon:{
    width: 24,
    height: 24,
  },
  imgPuzzleIcon : {
    width: 59,
    height: 59,
    position: 'absolute',
    bottom: '30%',
  },
});
