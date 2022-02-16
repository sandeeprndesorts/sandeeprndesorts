import { Endpoints } from "../utils/Api_Endpoints";
import axiosInstance from "../utils/axios";
export const GetSexualOrientations = () => {
    return axiosInstance
      .get(`${Endpoints.SexualOrientations.GET_SEXUAL_ORIENTATIONS}`)
      .then(response => {
        return response;
      })
      .catch(err => {
        return err;
      });
  };