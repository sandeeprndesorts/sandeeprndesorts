import {Endpoints} from '../utils/Api_Endpoints';
import axiosInstance from '../utils/axios';

export const GetMatchUserChatList = () => {
  return axiosInstance
    .get(`${Endpoints.Matches.GET_MATCH_LIST}`)
    .then(response => {
      return response;
    })
    .catch(err => {
      return err;
    });
};
