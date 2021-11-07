import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {defaultHeaderStyle} from './styles';
import Profile from "../pages/Profile/Profile";
import DefaultHeaderLeft from "../components/header/DefaultHeaderLeft";

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
          headerTitle: ''}}
      />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
