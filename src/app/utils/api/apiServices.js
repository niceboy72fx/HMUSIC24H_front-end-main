import axios from "axios";
import { ApiConstants } from "../../constant/common";
export const FetchGetAllMusic = () => {
  return axios.get(ApiConstants.GETALLMUSICAPI);
};

export const Fetch50Music = () => {
  return axios.get(ApiConstants.GETTOP50MUSICAPI);
};
//----country--------------------

export const FetchVietnameseMusic = () => {
  return axios.get(ApiConstants.GETVIETNAMMUSICAPI);
};

export const FetchKoreanMusic = () => {
  return axios.get(ApiConstants.GETKOREAMUSICAPI);
};

export const FetchUSMusic = () => {
  return axios.get(ApiConstants.GETUSMUSICAPI);
};

export const FetchJapaneseMusic = () => {
  return axios.get(ApiConstants.GETJAPANUSICAPI);
};
