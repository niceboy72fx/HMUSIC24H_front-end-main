import { ActionConstant, ActionGet50Music } from "../../constant/common";

//----------------------------------------------------------------
const initialState = {
  provider: {},
  topMusic: {},
};

export const GetListMusicReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionConstant.GETALLMUSICACTION:
      return { ...state, provider: action.payload };
    case ActionConstant.GETSUCCESS:
      return { ...state, provider: action.payload };
    case ActionConstant.GETFAIL:
      return { ...state };
    default:
      return state;
  }
};

///------------

export const GetTop50Music = (state = initialState, action) => {
  switch (action.type) {
    case ActionGet50Music.GETALLTOPMUSICACTION:
      return { ...state, topMusic: action.payloads };
    case ActionGet50Music.GETTOPSUCCESS:
      return { ...state, topMusic: action.payloads };
    case ActionGet50Music.GETTOPFAIL:
      return { ...state };
    default:
      return state;
  }
};
