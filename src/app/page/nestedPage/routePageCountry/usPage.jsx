import React from "react";
import { CountryMusic } from "../../../components/CountryMusic/countryMusic";
import imageUS from "../../../assets/images/card/usCard.jpeg";
export default function UsPage({ dataMusic }) {
  const style = {
    backgroundImage: `url(${imageUS})`,
    backgroundPosition: `cover`,
  };
  const musics = dataMusic?.data;
  const name = "Âu Mỹ";
  const titleText = "Tận hưởng âm nhạc phong cách Âu Mỹ";
  return (
    <div className=" transition ease-in-out delay-1800 text-white">
      <div>
        <span className="text-5xl font-bold">{name} </span>
      </div>
      <CountryMusic
        styleCard={style}
        data={musics}
        titleName={name}
        titleText={titleText}
      />
    </div>
  );
}
