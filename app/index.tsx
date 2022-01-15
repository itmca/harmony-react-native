/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './routes/RootNavigator';
import {RecoilRoot} from 'recoil';

const index = (): JSX.Element => {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </RecoilRoot>
  );
};

export default index;
