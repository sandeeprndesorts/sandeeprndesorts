import {Endpoints} from '../utils/Api_Endpoints';
import axiosInstance from '../utils/axios';
export const GetDashboardUsers = data => {
  return axiosInstance
    .post(`${Endpoints.Dashboard.GET_DASHBOARD_USERS}`, data)
    .then(response => {
      return response;
    })
    .catch(err => {
      return err;
    });
};
export const LikeUserService = id => {
  return axiosInstance
    .post(`${Endpoints.Dashboard.LIKE_USER}`, {user_id: id})
    .then(response => {
      return response;
    })
    .catch(err => {
      return err;
    });
};
export const UserDetailService = id => {
  return axiosInstance
    .get(`${Endpoints.Dashboard.USER_DETAIL}?id=${id}`)
    .then(response => {
      return response;
    })
    .catch(err => {
      return err;
    });
};
