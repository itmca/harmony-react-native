import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PuzzleViewNavigator from './PuzzleViewNavigator';
import PuzzleWritingNavigator from './PuzzleWritingNavigator';

const Stack = createNativeStackNavigator();

const NoTabRootNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="PuzzleViewNavigator"
        component={PuzzleViewNavigator}
      />
      <Stack.Screen
        name="PuzzleWritingNavigator"
        component={PuzzleWritingNavigator}
      />
    </Stack.Navigator>
  );
};

export default NoTabRootNavigator;
