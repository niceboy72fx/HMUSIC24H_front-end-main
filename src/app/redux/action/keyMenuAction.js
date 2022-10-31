import { ActionConstant } from "../../constant/common";

export const setKeyMenuAction = (payload) => {
  return {
    type: ActionConstant.SET_KEY_MENU,
    payload,
  };
};
