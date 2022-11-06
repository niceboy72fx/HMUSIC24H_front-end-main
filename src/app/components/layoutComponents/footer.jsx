import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Layout } from "antd";
import React, { useState } from "react";
import imageSong from "../../assets/images/logo/logo-music.jpg";
const { Footer } = Layout;

export const Footers = ({ data }) => {
  //--------------------------------Control music------------------------------\
  const [songs, setSong] = useState(data[0]);
  const handleSetSong = (idSong) => {
    const song = data?.find((song) => song?.stt === idSong);
    if (!song) {
      setSong(data[0]);
    } else {
      setSong(song);
    }
  };

  const handleClickNext = () => {
    handleSetSong(songs?.stt + 1);
  };
  const handleClickPre = () => {
    handleSetSong(songs?.stt - 1);
  };

  const songImage = songs?.imagePath ? songs?.imagePath : imageSong;

  return (
    <Footer
      className="bg-black"
      style={{
        minHeight: "16vh",
        backgroundColor: "#181818",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div className=" flex  text-white w-1/5">
        <img
          src={songImage}
          alt={songs?.musicName}
          className="object-cover bg-black rounded-full "
          style={{
            width: "100px",
            height: "100px",
          }}
        />
        <div className=" p-4 w-full h-24 ">
          <p className="text-xl font-bold mb-0 truncate">{songs?.musicName}</p>
          <p className="truncate">{songs?.authorPath}</p>
        </div>
      </div>
      <div className="control-song w-3/4">
        <AudioPlayer
          autoPlay={false}
          autoPlayAfterSrcChange={true}
          authorPath={songs?.authorPath}
          className="w-full"
          layout="stacked-reverse"
          showSkipControls={true}
          showJumpControls={true}
          onClickNext={handleClickNext}
          onClickPrevious={handleClickPre}
          src={songs?.filePath}
          style={{ backgroundColor: "#181818", color: "white" }}
        />
      </div>
    </Footer>
  );
};
