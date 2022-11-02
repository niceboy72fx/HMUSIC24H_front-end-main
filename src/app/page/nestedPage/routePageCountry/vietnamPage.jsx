import React from "react";
import imageVietnamese from "../../../assets/images/card/vietnamCard.png";
import { CountryMusic } from "../../../components/CountryMusic/countryMusic";
export default function VietNamPage({ dataMusic }) {
  const style = {
    backgroundImage: `url(${imageVietnamese})`,
    backgroundPosition: "center bottom -10pc",
  };
  const musics = dataMusic?.data;
  const name = "Việt Nam";
  const titleText = "Tận hưởng âm nhạc của V-pop";
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
