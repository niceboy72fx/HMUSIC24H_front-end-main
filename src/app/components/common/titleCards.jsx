import React from "react";
import "../../assets/css/components/titleCards/titleCards.css";
export const TitleCard = ({ images }) => {
  const image = {
    backgroundImage: `url("../../assets/images/card/vietnamCard")`,
  };

  return (
    <div
      className="cardTitle"
      style={{
        backgroundImage: "url(../../assets/images/card/vietnamCard.png)",
      }}
    >
      <div className="cardTitle-content">
        <span>Hello World</span>
        <div className="content-text">Một trong các thuật ngữ đầu tiên kh</div>
      </div>
    </div>
  );
};
