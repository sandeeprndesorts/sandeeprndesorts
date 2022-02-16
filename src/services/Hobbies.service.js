import { Endpoints } from "../utils/Api_Endpoints";
import axiosInstance from "../utils/axios";
export const GetHobbiesService = data => {
    return axiosInstance
      .get(`${Endpoints.Hobbies.GET_HOBBIES}`)
      .then(response => {
        return response;
      })
      .catch(err => {
        return err;
      });
  };