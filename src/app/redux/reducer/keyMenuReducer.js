import { ActionConstant } from "../../constant/common";

const initialState = {
  keyMenu: "1",
};

export default function keyMenuReducer(state = initialState, action) {
  switch (action.type) {
    case ActionConstant.SET_KEY_MENU:
      return {
        ...state,
        keyMenu: action.payload,
      };

    default:
      return state;
  }
}
