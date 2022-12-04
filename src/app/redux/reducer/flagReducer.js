import { ActionFlag } from "../../constant/common";

const tempFlag = {};

export const flagReducer = (state = tempFlag, action) => {
  switch (action.type) {
    case ActionFlag.TRUEACTION:
      return { ...state, state: action.payloads };
    case ActionFlag.FALSEACTION:
      return { ...state, state: action.payloads };
    default:
      return state;
  }
};
