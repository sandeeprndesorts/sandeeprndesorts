import {createSlice} from '@reduxjs/toolkit';
import Messager from '../utils/Messager';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {reset} from '../utils/NavigationService';

const initialState = {
  user: null,
  token: null,
  loading: false,
  updated: false,
};

export const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    alreadyAuthenticated: (state, data) => {
      let user = JSON.parse(data.payload.user);
      state.user = user;
      if (user.role == 'buyer' || (user.role == 'seller' && user.idFront))
        state.token = true;
    },
    requestInit: state => {
      state.loading = true;
    },
    loginAsGuest: state => {
      state.token = '7yd9e82399e832eu9823ud32e';
      global.token = '7yd9e82399e832eu9823ud32e';
      state.user = {
        name: 'Guest User',
        role: 'buyer',
        email: 'guest@mail.com',
        image: 'guest.png',
      };
    },
    logout: state => {
      AsyncStorage.clear().then(() => {});
      setTimeout(() => {
        reset('SignUpType');
      }, 500);
      state.token = null;
      state.user = null;
    },
    loginSuccess: (state, data) => {
      state.loading = false;
      state.user = data.payload.user;
      Messager.toast(data.payload.message, 1000);
      if (
        data.payload.user.role == 'buyer' ||
        (data.payload.user.role == 'seller' && data.payload.user.idFront)
      )
        state.token = data.payload.token;
    },
    register: state => {
      state.loading = true;
    },
    registerSuccess: (state, data) => {
      state.loading = false;
      Messager.toast(data.payload.message);
      state.user = data.payload.user;
      state.token =
        data.payload.user.role == 'buyer' ? data.payload.token : null;
    },
    updateSuccess: (state, data) => {
      state.loading = false;
      Messager.toast(data.payload.message);
      state.updated = true;
      state.user = data.payload.user;
      state.token = data.payload.token;
      // AsyncStorage.setItem('user', JSON.stringify(data.payload.user))
    },
    requestError: (state, data) => {
      state.loading = false;
      console.log(data);
    },
    updateFalse: state => {
      state.updated = false;
    },
  },
});
// Action creators are generated for each case reducer function
export const {
  requestInit,
  logout,
  loginSuccess,
  loginAsGuest,
  registerSuccess,
  requestError,
  alreadyAuthenticated,
  updateSuccess,
  updateFalse,
} = slice.actions;
export default slice.reducer;

// // Asynchronous thunk action
// export function apiLogin() {
//     return async dispatch => {
//         dispatch(login())

//         try {
//             const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
//             const data = await response.json()

//             dispatch(loginSuccess(data))
//         } catch (error) {
//             dispatch(loginError())
//         }
//     }
// }
