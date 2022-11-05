import Password from "antd/lib/input/Password";
import React from "react";
import "../../assets/css/components/form/form.css";
import { Google, Facebook } from "react-bootstrap-icons";
export const FormLogin = () => {
  return (
    <div className="form">
      <span className="text-3xl pb-5 pt-14 font-bold text-white">
        Welcome back
      </span>
      <div className="form-input">
        <div>
          <div className="input-group">
            <input
              className="input-email"
              type="email"
              placeholder="Email hoặc tên đăng nhập "
            />
          </div>
          <p className="text-red-500"></p>
        </div>
        <div>
          <div className="input-group">
            <input
              className="input-password"
              type="password"
              placeholder="Mật khẩu"
            />
          </div>
          <p className="text-red-500 text-center"></p>
        </div>
      </div>
      <div className="form-button">
        <button className="text-white">Đăng nhập</button>
      </div>
      <span className="text-white text-sm p-5">Hoặc đăng nhập với</span>
      <div className="form-firebase flex">
        <div className="firebase-google">
          <Google className="text-white text-2xl" />
        </div>
        <div className="firebase-facebook">
          <Facebook className="text-white text-2xl" />
        </div>
      </div>
      <div className=" form-register pt-8 flex items-center justify-center">
        <div className="text-white">Chưa có tài khoản ?</div>
        <button className="text-white">Đăng kí ngay</button>
      </div>
    </div>
  );
};
