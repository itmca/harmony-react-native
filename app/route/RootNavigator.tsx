import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeTabRootNavigator from './home-tab/HomeTabRootNavigator';
import NoTabRootNavigator from './no-tab/NoTabRootNavigator';

const Stack = createNativeStackNavigator();

const RootNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator
      initialRouteName="HomeTab"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeTab" component={HomeTabRootNavigator} />
      <Stack.Screen name="NoTab" component={NoTabRootNavigator} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
