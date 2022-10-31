import { ActionConstant, ActionGet50Music } from "../../constant/common";

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
