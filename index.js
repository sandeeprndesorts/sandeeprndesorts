import {AppRegistry} from 'react-native';
import React from 'react';
import App from './src/App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import store from './store/configureStore';
import UserAuthContext from './src/contextAPI/UserAuthContext';
import UserDetailIdContext from './src/contextAPI/userDetailIdContext';
const RNRedux = () => (
  <Provider store={store}>
    <UserDetailIdContext>
      <UserAuthContext>
        <App />
      </UserAuthContext>
    </UserDetailIdContext>
  </Provider>
);
AppRegistry.registerComponent(appName, () => RNRedux);
