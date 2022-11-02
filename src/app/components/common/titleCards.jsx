import React from "react";
import "../../assets/css/components/titleCards/titleCards.css";
export const TitleCard = ({ images, nameTitle, title }) => {
  return (
    <div className="cardTitle" style={images}>
      <div className="cardTitle-content">
        <span>{nameTitle}</span>
        <div className="content-text">{title}</div>
      </div>
    </div>
  );
};
