import React, { useEffect } from "react";
import {
  VietNamPage,
  AmericanPage,
  JapanPage,
  KoreaPage,
} from "./nestedPage/countryPage";
import "../assets/css/page/countryMusicPage.css";
const CountryMusicPage = () => {
  return (
    <div className="page transition ease-in-out delay-1800 text-white">
      <div className="page-title  overflow-hidden ">
        <div className="text-4xl font-bold">Quốc gia </div>
      </div>
      <div className="page-list p-8 w-full h-1/6 ">
        <VietNamPage />
        <KoreaPage />
        <AmericanPage />
        <JapanPage />
      </div>
    </div>
  );
};

export default CountryMusicPage;
