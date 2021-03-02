if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';

import {DarkTheme, Provider as PaperProvider} from 'react-native-paper';
import {DefaultTheme} from '@react-navigation/native';
import store from './src/store/store';
import FlashMessage from 'react-native-flash-message';

const reduxApp = () => (
  <Provider store={store}>
    <PaperProvider>
      <App />
      <FlashMessage position="bottom" />
    </PaperProvider>
  </Provider>
);

AppRegistry.registerComponent(appName, () => reduxApp);
