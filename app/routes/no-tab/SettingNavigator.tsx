import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CharacterSetting from '../../pages/CharacterSetting/CharacterSetting';
import GoBackHeaderLeft from '../../components/header/GoBackHeaderLeft';

const Stack = createNativeStackNavigator();

const SettingNavigator = (): JSX.Element => {
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
    </Stack.Navigator>
  );
};

export default SettingNavigator;
