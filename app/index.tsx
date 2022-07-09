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
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#343666',
    accent: 'yellow',
    background: '#ffffff',
  },
};

const index = (): JSX.Element => {
  return (
    <RecoilRoot>
      <PaperProvider theme={theme}>
        {console.log('test')}
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </PaperProvider>
    </RecoilRoot>
  );
};

export default index;
