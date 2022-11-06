import { Button } from "antd/lib/radio";
import React from "react";
import { useNavigate } from "react-router";
import imageLogo from "../assets/images/logo/logo.png";
export default function NotFound() {
  const Navigate = useNavigate();
  return (
    <div
      className=" bg-black flex justify-center"
      style={{ width: "100%", height: "51pc" }}
    >
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center mb-24">
          <img src={imageLogo} alt="HMUSIC" width={"280px"} height={"200px"} />
          <div className="text-white text-4xl font-bold">| 404 Not Found</div>
        </div>
        <Button
          className="bg-black text-white "
          onClick={() => {
            Navigate(`/`);
          }}
        >
          Về Trang chủ
        </Button>
      </div>
      <style>
        {`
           .ant-radio-button-wrapper {
              background-color:black;
	      color:white;
           }
	   .ant-radio-button-wrapper:hover {
	      color:white;
           }
      `}
      </style>
    </div>
  );
}
