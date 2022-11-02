import React from "react";
import { ListMusicScroll } from "../common/List/listMusic";
import { TitleCard } from "../common/titleCards";

export const CountryMusic = ({ styleCard, data, titleName, titleText }) => {
  return (
    <div className="p-10 flex ">
      <TitleCard images={styleCard} nameTitle={titleName} title={titleText} />
      <ListMusicScroll data={data} />
    </div>
  );
};
