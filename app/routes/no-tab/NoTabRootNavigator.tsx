import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PuzzleViewNavigator from './PuzzleViewNavigator';
import PuzzleWritingNavigator from './PuzzleWritingNavigator';
import LoginRegisterNavigator from './LoginRegisterNavigator';
import CharacterSettingNavigator from './CharacterSettingNavigator';
import AccountSettingNavigator from './AccountSettingNavigator';
import StoryViewNavigator from './StoryViewNavigator';

const Stack = createNativeStackNavigator();

const NoTabRootNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="StoryViewNavigator" component={StoryViewNavigator} />
      <Stack.Screen
        name="PuzzleViewNavigator"
        component={PuzzleViewNavigator}
      />
      <Stack.Screen
        name="PuzzleWritingNavigator"
        component={PuzzleWritingNavigator}
      />
      <Stack.Screen
        name="LoginRegisterNavigator"
        component={LoginRegisterNavigator}
      />
      <Stack.Screen
        name="CharacterSettingNavigator"
        component={CharacterSettingNavigator}
      />
      <Stack.Screen
        name="AccountSettingNavigator"
        component={AccountSettingNavigator}
      />
    </Stack.Navigator>
  );
};

export default NoTabRootNavigator;
