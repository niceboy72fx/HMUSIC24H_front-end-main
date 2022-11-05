import { AutoComplete, Input } from "antd";
import { Header } from "antd/lib/layout/layout";
import React from "react";
import { useDispatch } from "react-redux";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { GetSearchData } from "../../redux/action/searchAction";
import { PersonCircle } from "react-bootstrap-icons";
export const Headers = (onClickSearch) => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const handleData = (data) => {
    dispatch(GetSearchData(data));
  };
  return (
    <Header
      className="site-layout-sub-header-background items-center "
      style={{
        padding: 0,
        display: "flex",
        alignItems: "center",
        backgroundColor: "#181211",
      }}
    >
      <div className="w-full flex items-center justify-center">
        <div className="w-96">
          <NavLink to="/search">
            <Input.Group compact className="w-full rounded-xl ">
              <AutoComplete
                className="w-full borber-none "
                placeholder="Tìm kiếm bài hát"
                options={[]}
                onChange={handleData}
              />
            </Input.Group>
          </NavLink>
        </div>
      </div>
      <div
        className=" rounded-full w-10 h-10 flex items-center justify-center mr-5 border-white"
        title="Đăng nhập"
        onClick={() => {
          Navigate(`/login`);
        }}
      >
        <PersonCircle className="text-white text-4xl" />
      </div>
    </Header>
  );
};
