import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeTabRootNavigator from './home-tab/HomeTabRootNavigator';
import NoTabRootNavigator from './no-tab/NoTabRootNavigator';

const Stack = createNativeStackNavigator();

const RootNavigator = (): JSX.Element => {
  return (
<<<<<<< HEAD
    <Stack.Navigator
      initialRouteName="HomeTab"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeTab" component={HomeTabRootNavigator} />
      <Stack.Screen name="NoTab" component={NoTabRootNavigator} />
    </Stack.Navigator>
=======
    <BottomTab.Navigator
      initialRouteName="PuzzleViewNavigator"
      screenOptions={{
        tabBarStyle: {
          height: 74,
          borderTopWidth: 0, // For IOS
          elevation: 0, // For Android
        },
        headerShown: false,
        tabBarHideOnKeyboard: true,
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
>>>>>>> cbd6cc6eb14a52a49039f9cc58c327b858042f66
  );
};

export default RootNavigator;
