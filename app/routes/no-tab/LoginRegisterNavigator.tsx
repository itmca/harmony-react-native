import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WritingHeaderLeft from '../../components/header/WritingHeaderLeft';
import WritingHeaderRight from '../../components/header/WritingHeaderRight';
import PuzzleWritingPhoto from '../../pages/PuzzleWritingPhoto/PuzzleWritingPhoto';
import PuzzleWritingText from '../../pages/PuzzleWritingText/PuzzleWritingText';
import PuzzleWritingQuestion from '../../pages/PuzzleWritingQuestion/PuzzleWritingQuestion';
import PuzzleWritingVoice from '../../pages/PuzzleWritingVoice/PuzzleWritingVoice';
import LoginMain from '../../pages/LoginMain/LoginMain';
import LoginHeaderLeft from '../../components/header/LoginHeaderLeft';
import LoginOthers from '../../pages/LoginOthers/LoginOthers';
import Register from '../../pages/Register/Register';
const Stack = createNativeStackNavigator();

const LoginRegisterNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator
      screenOptions={{headerShadowVisible: false, headerTitleAlign: 'center'}}>
      <Stack.Screen
        name="LoginMain"
        component={LoginMain}
        options={{
          headerLeft: () => <LoginHeaderLeft type={'main'} />,
          headerShown: true,
          title: '',
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="LoginOthers"
        component={LoginOthers}
        options={{
          headerLeft: () => <LoginHeaderLeft type={'sub'} />,
          headerShown: true,
          title: '',
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerLeft: () => <LoginHeaderLeft type={'sub'} />,
          headerShown: true,
          title: '',
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default LoginRegisterNavigator;
