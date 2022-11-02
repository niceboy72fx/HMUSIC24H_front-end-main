import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import LoadingSpin from "../components/loadingSpin";
import {
  ActionConstant,
  ActionGet50Music,
  ActionGetCountryMusic,
} from "../constant/common";
import useLoading from "../hook/useLoading";
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
  const { isLoading } = useLoading(true, 4800);
  //---------Dispatch---
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: ActionConstant.GETALLMUSICACTION });
    dispatch({ type: ActionGet50Music.GETALLTOPMUSICACTION });
    dispatch({ type: ActionGetCountryMusic.GETCOUNTRYATIONS });
  }, []);

  //---------debug
  const tempData = [];
  const temp = useSelector((state) => state.GetListMusicReducer);
  const { provider } = temp;
  provider && provider?.data?.map((temp) => tempData?.push(temp));
  //---------Top50MusicPage--------------------------------
  const dataTop50Music = useSelector((state) => state.GetTop50Music.topMusic);
  //---------CountryMusicPage----------
  const dataMusicCountry = useSelector((state) => state.GetCountryMusic);
  const vietnamData = dataMusicCountry?.vietnam;
  const koreaData = dataMusicCountry?.korea;
  const usData = dataMusicCountry?.us;
  //----------------------------------------------------------------

  return (
    <>
      {isLoading && <LoadingSpin />}
      {!isLoading && (
        <Routes>
          <Route element={<DefaultLayoutMusicPage />}>
            <Route
              index
              path=""
              element={<HomeMusicsPage props={tempData} />}
            />
            <Route path="search" element={<FindMusicPage props={tempData} />} />
            <Route path="country" element={<CountryMusicPage />} />
            <Route
              path="country/vietnam"
              element={<VietNamPage dataMusic={vietnamData} />}
            />
            <Route
              path="country/korea"
              element={<KoreaPage dataMusic={koreaData} />}
            />
            <Route
              path="country/us-uk"
              element={<UsPage dataMusic={usData} />}
            />
            <Route path="country/japanese" element={<JapanPage />} />
            <Route
              path="top50"
              element={<Top50MusicPage dataTop50={dataTop50Music} />}
            />
            <Route path="typeMusic" element={<TypeMusicPage />} />
            <Route path="album" element={<AlbumMusicPage />} />
          </Route>
        </Routes>
      )}
    </>
  );
};

export default MusicRoute;
