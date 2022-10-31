import React from "react";
import {
  PopPage,
  RockPage,
  FolkPage,
  LyricalPage,
} from "./nestedPage/typePage";
const TypeMusicPage = () => {
  return (
    <div className=" transition ease-in-out delay-1800 text-white">
      <div>
        <span className="text-5xl font-bold">Thể loại </span>
      </div>
      <div className="p-8 w-full  ">
        <PopPage />
        <RockPage />
        <FolkPage />
        <LyricalPage />
      </div>
    </div>
  );
};

export default TypeMusicPage;
