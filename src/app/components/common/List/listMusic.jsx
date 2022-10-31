import React, { useState } from "react";
import "../../../assets/css/components/list/listMusic.css";
import imageSong from "../../../assets/images/logo/logo-music.jpg";
export const ListMusic = ({ data }) => {
  const [loadMore, setLoadMore] = useState(5);
  const slice = data.slice(0, loadMore);

  const handleLoadMore = () => {
    if (loadMore == 50) {
      setLoadMore(loadMore - 45);
    } else {
      setLoadMore(loadMore + 5);
    }
  };

  const name = loadMore == 50 ? "Thu gọn" : "Xem Thêm";

  return (
    <div className="table flex flex-row ">
      {slice.map((tempData) => (
        <div id="table-music" className="  flex flex-row items-center ">
          <div className="flex flex-row items-center ">
            <div className="cell-number text-center flex justify-center text-3xl p-5 pr-28 w-10">
              {slice.indexOf(tempData) + 1}
            </div>
            <div className="cell-title flex items-center text-left pl-10 ">
              <img src={tempData?.imagePath} className="w-14 h-14 rounded-xl" />
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
      {
        <button
          className="pt-10 w-full pr-16 text-center"
          onClick={handleLoadMore}
        >
          {name}
        </button>
      }
    </div>
  );
};
