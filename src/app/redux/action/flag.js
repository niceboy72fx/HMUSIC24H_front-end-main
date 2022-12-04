import { ActionFlag } from "../../constant/common";

export const FlagTrue = () => {
  return {
    type: ActionFlag.TRUEACTION,
    payloads: true,
  };
};

export const FlagFalse = () => {
  return {
    type: ActionFlag.FALSEACTION,
    payloads: false,
  };
};
