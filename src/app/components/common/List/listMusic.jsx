import React, { useState } from "react";
import "../../../assets/css/components/list/listMusic.css";
import {
  PlayCircleOutlined,
  HeartOutlined,
  MenuOutlined,
} from "@ant-design/icons";
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
    <div className="table flex flex-row shadow-2xl ">
      {slice.map((tempData) => (
        <div
          id="table-music"
          className="  flex flex-row items-center  shadow-2xl "
        >
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
          <div className="table-control ">
            <div>
              <PlayCircleOutlined className="text-2xl pr-5" />{" "}
              <HeartOutlined className="text-2xl pr-5 pl-5" />
              <MenuOutlined className="text-2xl pr-5 pl-5" />
            </div>
          </div>
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

export const ListMusicScroll = ({ data }) => {
  return (
    <div className="tableScroll flex flex-col shadow-2xl ">
      {data.map((tempData) => (
        <div
          id="table-music"
          className="  flex flex-row items-center  shadow-2xl "
        >
          <div className="flex flex-row items-center ">
            <div className="cell-number text-center flex justify-center text-3xl p-5 pr-28 w-10">
              {data.indexOf(tempData) + 1}
            </div>
            <div className="cellScroll-title flex items-center text-left  pl-10 ">
              <img src={tempData?.imagePath} className="w-14 h-14 rounded-xl" />
              <div className="pl-7 title-name">
                <p className="m-0 font-bold text-xl truncate w-56">
                  {tempData?.musicName}
                </p>
                <p className="m-0 truncate">{tempData?.authorPath}</p>
              </div>
            </div>
          </div>
          <div className="table-control w-52  float-right">
            <div>
              <PlayCircleOutlined className="text-2xl pr-5" />{" "}
              <HeartOutlined className="text-2xl pr-5 pl-5" />
              <MenuOutlined className="text-2xl pr-5 pl-5" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
