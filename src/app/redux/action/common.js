import {
  ActionConstant,
  ActionGet50Music,
  ActionGetCountryMusic,
} from "../../constant/common";

export const GetListMusic = () => {
  return {
    type: ActionConstant.GETALLMUSICACTION,
  };
};

export const GetListMusicSuccess = (params) => {
  return {
    type: ActionConstant.GETSUCCESS,
    payload: params,
  };
};

export function GetListMusicFailed() {
  return {
    type: ActionConstant.GETFAIL,
  };
}

export function PlayMusic() {
  return {
    type: ActionConstant.PLAYMUSICACTION,
  };
}

//----top 50 music ------params--------------
export const Top50MusicAction = () => {
  return {
    type: ActionGet50Music.GETALLTOPMUSICACTION,
  };
};

export const GetTopSuccess = (params) => {
  return {
    type: ActionGet50Music.GETTOPSUCCESS,
    payloads: params,
  };
};

export const GetTopFailure = () => {
  return {
    type: ActionGet50Music.GETTOPFAIL,
  };
};

//---------countryMusicPage---------
export const CountryMusicAction = () => {
  return {
    type: ActionGetCountryMusic.GETCOUNTRYATIONS,
  };
};

export const GetVietNameseMusicSuccess = (params) => {
  return {
    type: ActionGetCountryMusic.GETVIETNAMESESUCCESS,
    payload: params,
  };
};

export const GetKoreanMusicSuccess = (params) => {
  return {
    type: ActionGetCountryMusic.GETKOREASUCCESS,
    payload: params,
  };
};

export const GetUSMusicSuccess = (params) => {
  return {
    type: ActionGetCountryMusic.GETUSUCCESS,
    payload: params,
  };
};

export const GetCountryMusicFailure = () => {
  return {
    type: ActionGetCountryMusic.GETCOUNTRYFAILED,
  };
};
