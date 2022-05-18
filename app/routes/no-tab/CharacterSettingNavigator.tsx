import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CharacterSetting from '../../pages/CharacterSetting/CharacterSetting';
import GoBackHeaderLeft from '../../components/header/GoBackHeaderLeft';
import CharacterRegister from '../../pages/CharacterRegister/CharacterRegister';
import CharacterModification from '../../pages/CharacterModification/CharacterModification';

const Stack = createNativeStackNavigator();

const CharacterSettingNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator
      initialRouteName="CharacterSetting"
      screenOptions={{headerShadowVisible: false, headerTitleAlign: 'center'}}>
      <Stack.Screen
        name="CharacterSetting"
        component={CharacterSetting}
        options={{
          headerLeft: () => <GoBackHeaderLeft />,
          title: '주인공 관리',
        }}
      />
      <Stack.Screen
        name="CharacterRegister"
        component={CharacterRegister}
        options={{
          headerLeft: () => <GoBackHeaderLeft />,
          title: '주인공 추가',
        }}
      />
      <Stack.Screen
        name="CharacterModification"
        component={CharacterModification}
        options={{
          headerLeft: () => <GoBackHeaderLeft />,
          title: '주인공 정보 수정',
        }}
      />
    </Stack.Navigator>
  );
};

export default CharacterSettingNavigator;
