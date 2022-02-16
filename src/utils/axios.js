import axios from 'axios';
import {StatusCodes} from 'http-status-codes';
import {getStoredData} from '../utils/LocalStorage';
export const base_url = 'http://142.93.217.129:4006/api/v1';
export const mediaBaseUrl = 'http://142.93.217.129:4006';
const axiosInstance = axios.create({
  baseURL: base_url,
});
const requestHandler = async request => {
  const currentUser = await getStoredData('user');
  try {
    request.headers['Authorization'] = currentUser.token;
  } catch (e) {
    console.log(e, 'err');
  }
  return request;
};
const responseHandler = response => {
  return response;
};
axiosInstance.interceptors.request.use(requestHandler, error => {
  Promise.reject(error);
});
axiosInstance.interceptors.response.use(responseHandler, error => {
  const originalRequest = error.config;
  // Reject promise if usual error
  if (error.response && error.response.status !== StatusCodes.UNAUTHORIZED) {
    if (error.response.data) return Promise.reject(error.response.data);
    return Promise.reject(error);
  }
  if (error.response && error.response.status === StatusCodes.UNAUTHORIZED) {
    if (
      error.response.status === 401 &&
      (originalRequest.url === '/auth/RefreshToken' ||
        originalRequest.url === '/user/login')
    ) {
      // localStorage.clearToken();
      if (error.response.data) return Promise.reject(error.response.data);
      return Promise.reject(error);
    }
    if (error.response.data) return Promise.reject(error.response.data);
    return Promise.reject(error);
  }
});

export default axiosInstance;
