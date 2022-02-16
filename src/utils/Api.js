import AsyncStorage from '@react-native-async-storage/async-storage';
import {Platform} from 'react-native';
import {CONFIG} from '../constants';
import Messager from './Messager';

export function checkIfAuthenticated(onSuccess) {
  return async dispatch => {
    try {
      let user = await AsyncStorage.getItem('user', null);
      let token = await AsyncStorage.getItem('token', null);
      dispatch(onSuccess({user, token}));
    } catch (e) {
      console.log(e);
    }
  };
}
export function Api(
  endpoint,
  method = 'GET',
  body = null,
  hastoken = true,
  onInit,
  onSuccess,
  onError,
) {
  return async dispatch => {
    dispatch(onInit());
    var headers = {};
    var apiUrl = CONFIG.apiUrl + endpoint;
    let token = (await AsyncStorage.getItem('token', null)) || global.token;

    headers['device-type'] = Platform.OS == 'ios' ? 'I' : 'A';
    headers['device-token'] = global.notiToken;
    headers['app-version'] = '1';

    if (hastoken) {
      headers['Authorization'] = `${token}`;
    }

    if (body instanceof FormData) {
      headers['Content-Type'] = 'multipart/form-data';
    } else {
      headers['Content-Type'] = 'application/json';
    }

    console.log('header-->', headers, method);
    console.log('url-->', apiUrl);
    console.log('body-->', body);

    try {
      const response = await fetch(apiUrl, {
        method,
        body,
        headers,
      });
      const data = await response.json();
      if (response.ok) dispatch(onSuccess(data));
      else {
        Messager.toast(data.error);
        dispatch(onError(data));
      }
    } catch (error) {
      dispatch(onError(error));
    }
  };
}

// export function Api(endpoint, method = 'GET', bodyData = null,
//     hastoken = true, onSuccess, onError) {
//     var header = {};
//     var apiUrl = CONFIG.baseUrl + endpoint;

//     header["device-type"] = Platform.OS == 'ios' ? 'I' : 'A'
//     header["device-token"] = global.notiToken
//     header["app-version"] = "1"

//     if (hastoken) {
//         header["Authorization"] = `Bearer ${global.token}`
//     }

//     if (bodyData instanceof FormData) {

//     } else {
//         header["Content-Type"] = "application/json"
//     }

//     console.log('header-->', header, method)
//     console.log('url-->', apiUrl)
//     console.log('body-->', bodyData)

//     return fetch(apiUrl, {
//         method: method,
//         body: bodyData,
//         headers: header,
//     }).then((response) => {
//         if (response.status == 201 || response.status == 200) {
//             return response.json()
//         } else if (response.status == 401) {
//             AsyncStorage.getItem('isLoggedIn').then(data => {
//                 console.log(data)
//                 if (data == "true") {
//                     AsyncStorage.clear()
//                     // reset('Login')
//                 }
//                 response.json().then((responseResult) => {
//                     console.log(responseResult)
// setTimeout(() => {
//     Messager.toast(responseResult.message)
// }, 500);
//                 }).catch((error) => {
//                     console.log(error)
//                 });
//             })
//         } else {
//             response.json().then((responseResult) => {
//                 console.log(responseResult)
//                 setTimeout(() => {
//                     Messager.toast(responseResult.message)
//                 }, 500);
//             }).catch((error) => {
//                 console.log(error)
//             });
//         }
//     })
//         .then((responseJson) => {
//             return responseJson
//         })
//         .catch((error) => {
//             console.log(error)
//             setTimeout(() => {
//                 Messager.toast("Please check your internet and try again.")
//             }, 500);

//             console.log('catch Eroor-->' + error);
//         });

// }
