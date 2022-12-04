import { ActionConstant } from "../../constant/common";

const initState = {};
export const PlayMusicCard = (state = initState, action) => {
  switch (action.type) {
    case ActionConstant.PLAYMUSICACTION:
      return { ...state, state: action.payloads };
    default:
      return state;
  }
};
