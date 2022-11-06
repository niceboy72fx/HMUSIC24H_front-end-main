import React, { useState } from "react";
import "../../assets/css/components/musicCard/musicCard.css";
import {
  ThreeDotsVertical,
  PlayCircle,
  HeartFill,
  PauseCircle,
} from "react-bootstrap-icons";
import "../../assets/css/components/antd.css";
export default function MusicCard({ image, musicName, authorPath, clickPlay }) {
  const [play, setPlay] = useState(<PlayCircle className="text-6xl p-2" />);
  const [playCount, setPlayCount] = useState(0);
  const [turnOffHover, setTurnOffHover] = useState({});
  const styleHover = {
    opacity: 1,
    transition: 1,
  };

  const changePlay = () => {
    if (playCount == 0) {
      setPlay(<PauseCircle className="text-6xl p-2" />);
      setPlayCount(playCount + 1);
      setTurnOffHover(styleHover);
    }
    if (playCount == 1) {
      setPlay(<PlayCircle className="text-6xl p-2" />);
      setPlayCount(playCount - 1);
      setTurnOffHover({});
    }
  };
  return (
    <div className="ml-5 mr-5 pl-5 pr-5 flex ">
      <div className="Card shadow-2xl ">
        <div className="Card-image">
          <img src={image} title="" />
          <div style={turnOffHover} className="image-control  ">
            <div className="flex items-center">
              <HeartFill className="text-4xl p-2" />
              <div onClick={changePlay}>{play}</div>
              <ThreeDotsVertical className="text-4xl p-2" />
            </div>
          </div>
        </div>
        <div className="Card-title">
          <div className="title-info p-5">
            <div className="info-name text-left text-lg font-bold truncate ">
              {musicName}
            </div>
            <p className=" text-left truncate">{authorPath}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

//   state.authorPath
