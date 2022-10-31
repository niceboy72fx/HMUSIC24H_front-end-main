import axios from "axios";
import { ApiConstants } from "../../constant/common";
export const FetchGetAllMusic = () => {
  return axios.get(ApiConstants.GETALLMUSICAPI);
};

export const Fetch50Music = () => {
  return axios.get(ApiConstants.GETTOP50MUSICAPI);
};
