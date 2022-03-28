import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {defaultHeaderStyle} from './styles';
import Profile from '../pages/Profile/Profile';
import DefaultHeaderLeft from '../components/header/DefaultHeaderLeft';
import LoginMain from '../pages/LoginMain/LoginMain';

const Stack = createNativeStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerLeft: () => <DefaultHeaderLeft />,
          headerStyle: defaultHeaderStyle,
          title: '',
        }}
      />

      <Stack.Screen
        name="LoginMain"
        component={LoginMain}
        options={{
          headerLeft: () => <DefaultHeaderLeft />,
          headerStyle: defaultHeaderStyle,
          title: '',
        }}
      />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
