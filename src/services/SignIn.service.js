import {Alert} from 'react-native';
import axiosInstance from '../utils/axios';
export const SignInService = object => {
  return axiosInstance
    .post(`http://142.93.217.129:4006/api/v1/auth/sign_in`, object)
    .then(response => {
      return response;
    })
    .catch(err => {
    
      return err;
    });
};

export const VerifyOTP = object => {
  return axiosInstance
    .post(`http://142.93.217.129:4006/api/v1/auth/sign_in`, object)
    .then(response => {
      return response;
    })
    .catch(err => {
      return err;
    });
};
