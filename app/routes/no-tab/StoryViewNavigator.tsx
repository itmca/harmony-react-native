import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StoryDetail from '../../pages/StoryDetail/StoryDetail';
import GoBackHeaderLeft from '../../components/header/GoBackHeaderLeft';
import HeroBadgeHeader from '../../components/header/HeroBadgeHeader';

const Stack = createNativeStackNavigator();

const StoryViewNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator
      initialRouteName="StoryDetail"
      screenOptions={{
        headerShadowVisible: true,
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name="Story"
        component={StoryDetail}
        options={{
          title: '',
          headerLeft: () => (
            <GoBackHeaderLeft
              iconType={'chevron-left'}
              iconSize={32}
              containerStyle={{marginLeft: -8}}
            />
          ),
          headerRight: () => <HeroBadgeHeader />,
        }}
      />
    </Stack.Navigator>
  );
};

export default StoryViewNavigator;
