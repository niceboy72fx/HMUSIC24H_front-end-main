import {
  ActionConstant,
  ActionGet50Music,
  ActionGetCountryMusic,
} from "../../constant/common";

//----------------------------------------------------------------
const initialState = {
  provider: {},
  randomMusic: {},
  topMusic: {},
  country: {
    vietnam: {},
    korea: {},
    us: {},
  },
};

const listMusicChange = {};

const musicChange = {};

export const GetListMusicReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionConstant.GETALLMUSICACTION:
      return { ...state, provider: action.payload };
    case ActionConstant.GETRANDOMMUSICLISTACTION:
      return { ...state, randomMusic: action.payload };
    case ActionConstant.GETSUCCESS:
      return { ...state, provider: action.payload };
    case ActionConstant.GETLISTSUCCESS:
      return { ...state, randomMusic: action.payload };
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

///--------------------------------

export const GetCountryMusic = (state = initialState.country, action) => {
  switch (action.type) {
    case ActionGetCountryMusic.GETCOUNTRYATIONS:
      return { ...state, country: action.payload };
    case ActionGetCountryMusic.GETVIETNAMESESUCCESS:
      return { ...state, vietnam: action.payload };
    case ActionGetCountryMusic.GETKOREASUCCESS:
      return { ...state, korea: action.payload };
    case ActionGetCountryMusic.GETUSUCCESS:
      return { ...state, us: action.payload };
    case ActionGetCountryMusic.GETCOUNTRYFAILED:
      return { ...state };
    default:
      return state;
  }
};
// ---------------------CHANGE LIST MUSIC REDUCER --------------------

export const GetListChangeReducer = (state = listMusicChange, action) => {
  switch (action.type) {
    case ActionConstant.PLAYLISTMUSICACTION:
      return { ...state, state: action.payloads };
    default:
      return state;
  }
};

export const SelectMusicReducer = (state = musicChange, action) => {};
