import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PuzzleViewNavigator from './PuzzleViewNavigator';
import PuzzleWritingNavigator from './PuzzleWritingNavigator';
import LoginMain from '../../pages/LoginMain/LoginMain';
import LoginHeaderLeft from '../../components/header/LoginHeaderLeft';
import StoryViewNavigator from './StoryViewNavigator';

const Stack = createNativeStackNavigator();

const NoTabRootNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen 
        name="StoryViewNavigator" 
        component={StoryViewNavigator} 
      />
      <Stack.Screen
        name="PuzzleViewNavigator"
        component={PuzzleViewNavigator}
      />
      <Stack.Screen
        name="PuzzleWritingNavigator"
        component={PuzzleWritingNavigator}
      />
      <Stack.Screen
        name="LoginMain"
        component={LoginMain}
        options={{
          headerLeft: () => <LoginHeaderLeft />,
          headerShown: true,
          title: '',
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default NoTabRootNavigator;
