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
import App from './app';
import {LocalStorage} from './storage/local.storage';
import {RecoilRoot} from 'recoil';
import {authState} from './recoils/AuthRecoil';

function initializeRecoilState({set}): void {
  const authToken = LocalStorage.get('authToken', 'json');
  if (authToken) set(authState, authToken);
}

const index = (): JSX.Element => {
  return (
    <RecoilRoot initializeState={initializeRecoilState}>
      <App />
    </RecoilRoot>
  );
};

export default index;
