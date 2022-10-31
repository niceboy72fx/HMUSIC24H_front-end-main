import React, { useState } from "react";
import { Layout, Menu, Input, AutoComplete } from "antd";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import useLoading from "../hook/useLoading";
import LoadingLoad from "../components/loadingSpin";
import "../assets/css/layout/defaultLayoutMusicPage.css";
import "react-h5-audio-player/lib/styles.css";
import { Content } from "antd/lib/layout/layout";
import { useDispatch, useSelector } from "react-redux";
import { GetSearchData } from "../redux/action/searchAction";
import { ActionConstant } from "../constant/common";
import { Footers } from "../components/layoutComponents/footer";
import { setKeyMenuAction } from "../redux/action/keyMenuAction";
const { Header, Footer, Sider } = Layout;
function getItem(label, key, icon) {
  return {
    label,
    key,
    icon,
  };
}

const items = [
  getItem("Trang chủ", "1", <NavLink to=""></NavLink>),
  getItem("Tìm kiếm", "2", <NavLink to="/search"></NavLink>),
  getItem("Quốc gia", "3", <NavLink to="/country"></NavLink>),
  getItem("Top 50 Nghe Nhiều", "4", <NavLink to="/top50"></NavLink>),
  getItem("Thể Loại", "5", <NavLink to="/typeMusic"></NavLink>),
  getItem("Album", "6", <NavLink to="/album"></NavLink>),
];

const DefaultLayoutMusicPage = ({ random }) => {
  // const [loading, setLoading] = useState(true);
  const { isLoading } = useLoading(true, 1800);
  const [changePage, setChangePage] = useState("1");
  const [isRerender, setIsRerender] = useState(true);
  const navigate = useNavigate();

  //-------------------------------------------------------------
  // const data = useSelector((state) => state.GetListMusicReducer);
  // useEffect(() => setLoading(false), data);
  // --------------------------------------------------------------------------------
  // tạo mới component random Music
  //---------------------------------------------------------------------------------
  // //---------Dispatch---
  const dispatch = useDispatch();

  //---------debug
  const tempData = [];
  const temp = useSelector((state) => state.GetListMusicReducer);
  const { provider } = temp;
  provider && provider?.data?.map((temp) => tempData?.push(temp));

  // //---------random musicName

  const musicData = [];
  const randomFunc = (arr, num) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  const randomMusic = randomFunc(tempData, tempData.length);

  for (let i = 0; i < tempData.length; i++) {
    const test = { ...randomMusic[i], stt: i };
    musicData?.push(test);
  }

  ////------------------------------------------------------------------------

  const getCurruntPath = () => {
    var key = "-1";
    var path = window.location.pathname.split("/");
    if (path.length < 2) return key;
    switch (path[1]) {
      case "":
        key = "1";
        break;
      case "search":
        key = "2";
        break;
      case "country":
        key = "3";
        break;
      case "top50":
        key = "4";
        break;
      case "typeMusic":
        key = "5";
        break;
      case "album":
        key = "6";
        break;
    }
    return key;
  };

  // //---------------------------------------------------------------------------------

  const handleData = (data) => {
    dispatch(GetSearchData(data));
  };
  return (
    <>
      <Layout
        style={{
          minHeight: "84vh",
        }}
      >
        <Sider
          className="bg-white shadow-2xl  "
          style={{ backgroundColor: "black" }}
        >
          <div className="logo pb-12">
            <img
              width={800}
              height={700}
              src={require("../assets/images/logo/logo.png")}
              alt="logo"
            />
          </div>
          <div className="h-full ">
            <Menu
              theme="dark"
              mode="inline"
              items={items}
              className="text-white"
              defaultSelectedKeys={[getCurruntPath()]}
              selectedKeys={[getCurruntPath()]}
              onClick={() => setIsRerender((prev) => !prev)}
              style={{ backgroundColor: "black" }}
            />
          </div>
        </Sider>
        <Layout>
          <Header
            className="site-layout-sub-header-background  "
            style={{
              padding: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#181211",
            }}
          >
            <div className="w-96 ">
              <NavLink
                to="/search"
                onClick={() => {
                  setChangePage("2");
                }}
              >
                <Input.Group compact className="w-full rounded-xl">
                  <AutoComplete
                    className="w-full borber-none "
                    placeholder="Tìm kiếm bài hát"
                    options={[]}
                    onChange={handleData}
                  />
                </Input.Group>
              </NavLink>
            </div>
          </Header>
          <Content
            style={{
              padding: "16px",
              backgroundColor: "#121212",
              overflow: "scroll",
            }}
            className="scrollBar"
          >
            <div
              style={{
                backgroundColor: "#121212",
                maxHeight: "10pc",
              }}
            >
              {isLoading && <LoadingLoad />}
              {!isLoading && (
                <Outlet className="transition ease-in-out delay-1800" />
              )}
            </div>
          </Content>
        </Layout>
      </Layout>
      <Footers data={musicData} />
      <style>
        {`
           .ant-select-selection-search {
              border-radius:50;
           }
      `}
      </style>
    </>
  );
};

export default DefaultLayoutMusicPage;
