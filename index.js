/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import index from './app/index';
import {en, registerTranslation,} from 'react-native-paper-dates';

AppRegistry.registerComponent(appName, () => index);
registerTranslation('en', en);
