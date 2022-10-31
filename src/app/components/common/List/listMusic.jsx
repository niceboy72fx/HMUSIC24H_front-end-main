import React from "react";
import "../../../assets/css/components/list/listMusic.css";
import imageSong from "../../../assets/images/logo/logo-music.jpg";
export const ListMusic = ({ data }) => {
  return (
    <div className="table flex flex-row">
      {data.map((tempData) => (
        <div id="table-music" className="  flex flex-row items-center ">
          <div className="flex flex-row items-center ">
            <div className="cell-number text-center flex justify-center text-3xl p-5 pr-16 w-10">
              {data.indexOf(tempData) + 1}
            </div>
            <div className="cell-title flex items-center text-left  ">
              <img src={tempData?.imagePath} className="w-14 h-14" />
              <div className="pl-7 title-name">
                <p className="m-0 font-bold text-xl truncate w-56">
                  {tempData?.musicName}
                </p>
                <p className="m-0 truncate">{tempData?.authorPath}</p>
              </div>
            </div>
          </div>
          <div className="table-control ">PlayMusic</div>
        </div>
      ))}
    </div>
  );
};
