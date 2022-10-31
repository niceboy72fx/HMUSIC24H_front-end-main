import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { ActionConstant, ActionGet50Music } from "../constant/common";
import DefaultLayoutMusicPage from "../layout/defaultLayoutMusicPage";
import AlbumMusicPage from "../page/albumMusicPage";
import CountryMusicPage from "../page/countryMusicPage";
import FindMusicPage from "../page/findMusicPage";
import HomeMusicsPage from "../page/homeMusicPage";
import JapanPage from "../page/nestedPage/routePageCountry/japanPage";
import KoreaPage from "../page/nestedPage/routePageCountry/koreaPage";
import UsPage from "../page/nestedPage/routePageCountry/usPage";
import VietNamPage from "../page/nestedPage/routePageCountry/vietnamPage";
import Top50MusicPage from "../page/top50MusicPage";
import TypeMusicPage from "../page/typeMusicPage";
const MusicRoute = () => {
  //---------Dispatch---
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: ActionConstant.GETALLMUSICACTION });
    dispatch({ type: ActionGet50Music.GETALLTOPMUSICACTION });
  }, []);

  const data = useSelector((state) => state.GetTop50Music.topMusic);
  console.log(data);

  //---------debug
  const tempData = [];
  const temp = useSelector((state) => state.GetListMusicReducer);
  const { provider } = temp;
  provider && provider?.data?.map((temp) => tempData?.push(temp));

  return (
    <>
      <Routes>
        <Route element={<DefaultLayoutMusicPage />}>
          <Route index path="" element={<HomeMusicsPage props={tempData} />} />
          <Route path="search" element={<FindMusicPage props={tempData} />} />
          <Route path="country" element={<CountryMusicPage />} />
          <Route path="country/vietnam" element={<VietNamPage />} />
          <Route path="country/korea" element={<KoreaPage />} />
          <Route path="country/us-uk" element={<UsPage />} />
          <Route path="country/japanese" element={<JapanPage />} />
          <Route path="top50" element={<Top50MusicPage dataTop50={data} />} />
          <Route path="typeMusic" element={<TypeMusicPage />} />
          <Route path="album" element={<AlbumMusicPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default MusicRoute;
