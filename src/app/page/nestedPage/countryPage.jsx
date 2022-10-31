import React from "react";
import { BandCard } from "../../components/common/bandCard";
import ImageVietNam from "../../assets/images/card/vietnamCard.png";
import ImageKorea from "../../assets/images/card/koreaCard.jpg";
import ImageUs from "../../assets/images/card/usCard.jpeg";
import ImageJapan from "../../assets/images/card/japanCard.jpg";
import { useNavigate } from "react-router-dom";
export const VietNamPage = () => {
  const style = {
    backgroundImage: `url(${ImageVietNam})`,
    backgroundPosition: "center bottom -30pc",
    backgroundColor: "#293744",
  };
  const Navigate = useNavigate();
  return (
    <div>
      <BandCard
        NameCard={"Việt Nam"}
        stylesCard={style}
        onclickButton={() => {
          Navigate(`/country/vietnam`);
        }}
      />
    </div>
  );
};

export const KoreaPage = () => {
  const style = {
    backgroundImage: `url(${ImageKorea})`,
    backgroundSize: "cover",
  };
  const Navigate = useNavigate();
  return (
    <div>
      <BandCard
        NameCard={"Hàn Quốc"}
        stylesCard={style}
        onclickButton={() => {
          Navigate(`/country/korea`);
        }}
      />
    </div>
  );
};

export const AmericanPage = () => {
  const style = {
    backgroundImage: `url(${ImageUs})`,
    backgroundColor: "#121212",
    backgroundSize: "cover",
  };
  const Navigate = useNavigate();
  return (
    <div>
      <BandCard
        NameCard={"Âu Mỹ"}
        stylesCard={style}
        onclickButton={() => {
          Navigate(`/country/us-uk`);
        }}
      />
    </div>
  );
};

export const JapanPage = () => {
  const style = {
    backgroundImage: `url(${ImageJapan})`,
    backgroundPosition: "center bottom -70px",
    backgroundSize: "cover",
  };
  const Navigate = useNavigate();
  return (
    <div>
      <BandCard
        NameCard={"Nhật Bản"}
        stylesCard={style}
        onclickButton={() => {
          Navigate(`/country/japanese`);
        }}
      />
    </div>
  );
};
