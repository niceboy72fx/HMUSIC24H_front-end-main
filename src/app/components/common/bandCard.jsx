import React from "react";
import "../../assets/css/components/bandCard/bandCard.css";

export function BandCard({ NameCard, TitleCard, stylesCard, onclickButton }) {
  return (
    <div>
      <div
        style={stylesCard}
        className="contentStyle rounded-2xl carousel backImage mb-8"
        onClick={onclickButton}
      >
        <div className="carousel-title  h-full flex flex-col w-fit ">
          <i className="title-banner text-5xl font-bold  pb-0">{NameCard}</i>
          <p>{TitleCard}</p>
        </div>
      </div>
    </div>
  );
}
