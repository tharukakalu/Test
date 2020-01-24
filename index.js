/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import SignIn from './src/screnns/SignIn';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => SignIn);
