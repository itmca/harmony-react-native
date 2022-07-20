import * as React from 'react';
import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Story from '../../pages/Story/Story';
import {Pressable} from 'react-native';
// import StoryList from '../../pages/StoryList/StoryList';

const Stack = createNativeStackNavigator();

const StoryViewNavigator = (): JSX.Element => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      initialRouteName="Story"
      screenOptions={{
        headerShadowVisible: true,
        headerTransparent: true,
        headerTitleAlign: 'center'
        }}>
      <Stack.Screen
        name="Story"
        component={Story}
        options={{
          title: '',
          headerLeft: () => (
            <Pressable
              onPress={() => {
                navigation.goBack();
              }}>
              <Icon name={'chevron-left'} size={24} />
            </Pressable>
          ),
          headerRight: () => <Icon name={'menu'} size={24} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default StoryViewNavigator;
