import React from "react";
import imageKorea from "../../../assets/images/card/koreaCard.jpg";
import { CountryMusic } from "../../../components/CountryMusic/countryMusic";
export default function KoreaPage({ dataMusic }) {
  const style = {
    backgroundImage: `url(${imageKorea})`,
    backgroundPosition: "center bottom -10pc",
  };
  const musics = dataMusic?.data;
  const name = "Hàn Quốc";
  const titleText = "Tận hưởng âm nhạc với K-pop";
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
