import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WritingHeaderLeft from '../../components/header/WritingHeaderLeft';
import WritingHeaderRight from '../../components/header/WritingHeaderRight';
import Home from '../../pages/Home/Home';
import PuzzleView from '../../pages/PuzzleView/PuzzleView';
import DefaultHeaderLeft from '../../components/header/DefaultHeaderLeft';

const Stack = createNativeStackNavigator();

const PuzzleViewNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator
      screenOptions={{headerShadowVisible: false, headerTitleAlign: 'center'}}>
      <Stack.Screen
        name="StoryView"
        component={PuzzleView}
        options={{
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
    </Stack.Navigator>
  );
};

export default PuzzleViewNavigator;
