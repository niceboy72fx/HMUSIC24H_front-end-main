import React from "react";
import { ActionConstant } from "../../constant/common";
export const MusicList = (params) => {
  return {
    type: ActionConstant.MUSIClISTACTION,
    payloads: params,
  };
};

export const PlayMusic = (idMusic) => {
  return {
    type: ActionConstant.PLAYMUSICACTION,
    payloads: idMusic,
  };
};

export const PlayListMusic = (paramsListMusic) => {
  return {
    type: ActionConstant.PLAYLISTMUSICACTION,
    payloads: paramsListMusic,
  };
};
