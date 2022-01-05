import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
<<<<<<< HEAD:app/route/no-tab/PuzzleWritingNavigator.tsx
import WritingHeaderLeft from '../../components/header/WritingHeaderLeft';
import WritingHeaderRight from '../../components/header/WritingHeaderRight';
import PuzzleWritingPhoto from '../../pages/PuzzleWritingPhoto/PuzzleWritingPhoto';
import PuzzleWritingText from '../../pages/PuzzleWritingText/PuzzleWritingText';
import PuzzleWritingQuestion from '../../pages/PuzzleWritingQuestion/PuzzleWritingQuestion';
import PuzzleWritingVoice from '../../pages/PuzzleWritingVoice/PuzzleWritingVoice';
=======
import WritingHeaderLeft from '../components/header/WritingHeaderLeft';
import WritingHeaderRight from '../components/header/WritingHeaderRight';
import PuzzleWritingPhoto from '../pages/PuzzleWritingPhoto/PuzzleWritingPhoto';
import PuzzleWritingText from '../pages/PuzzleWritingText/PuzzleWritingText';
import PuzzleWritingQuestion from '../pages/PuzzleWritingQuestion/PuzzleWritingQuestion';
import PuzzleWritingVoice from '../pages/PuzzleWritingVoice/PuzzleWritingVoice';
>>>>>>> cbd6cc6eb14a52a49039f9cc58c327b858042f66:app/route/PuzzleWritingNavigator.tsx

const Stack = createNativeStackNavigator();

const PuzzleWritingNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator
      initialRouteName="PuzzleWritingQuestion"
      screenOptions={{headerShadowVisible: false, headerTitleAlign: 'center'}}>
      <Stack.Screen
        name="PuzzleWritingQuestion"
        component={PuzzleWritingQuestion}
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
      <Stack.Screen
        name="PuzzleWritingPhoto"
        component={PuzzleWritingPhoto}
        options={{
          headerLeft: () => <WritingHeaderLeft type="before" />,
          title: '조각 맞추기',
          headerRight: () => (
            <WritingHeaderRight
              text="다음"
              nextScreenName="PuzzleWritingText"
            />
          ),
        }}
      />
      <Stack.Screen
        name="PuzzleWritingText"
        component={PuzzleWritingText}
        options={{
          headerLeft: () => <WritingHeaderLeft type="before" />,
          title: '조각 맞추기',
          headerRight: () => (
            <WritingHeaderRight text="완료" customAction={() => {}} />
          ),
        }}
      />
      <Stack.Screen
        name="PuzzleWritingVoice"
        component={PuzzleWritingVoice}
        options={{
          headerLeft: () => <WritingHeaderLeft type="cancel" />,
          title: '음성 녹음',
        }}
      />
    </Stack.Navigator>
  );
};

export default PuzzleWritingNavigator;
