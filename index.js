import {AppRegistry} from 'react-native';
import React from 'react';
import App from './src/App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import store from './store/configureStore';
import UserInfoDataContext from './src/contextAPI/UserInfoContext';
import UserInfoSignUpDataContext from './src/contextAPI/UserInfoSignUpContext';
import UserAuthContext from './src/contextAPI/UserAuthContext';
const RNRedux = () => (
  <Provider store={store}>
    <UserAuthContext>
      <UserInfoDataContext>
        <UserInfoSignUpDataContext>
          <App />
        </UserInfoSignUpDataContext>
      </UserInfoDataContext>
    </UserAuthContext>
  </Provider>
);
AppRegistry.registerComponent(appName, () => RNRedux);
