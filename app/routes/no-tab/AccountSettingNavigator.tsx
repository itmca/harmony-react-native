import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GoBackHeaderLeft from '../../components/header/GoBackHeaderLeft';
import AccountModification from '../../pages/AccountModification/AccountModification';

const Stack = createNativeStackNavigator();

const AccountSettingNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator
      initialRouteName="AccountModification"
      screenOptions={{headerShadowVisible: false, headerTitleAlign: 'center'}}>
      <Stack.Screen
        name="AccountModification"
        component={AccountModification}
        options={{
          headerLeft: () => <GoBackHeaderLeft />,
          title: '계정 정보 수정',
        }}
      />
    </Stack.Navigator>
  );
};

export default AccountSettingNavigator;
