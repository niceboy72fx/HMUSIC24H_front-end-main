import React from "react";
import "../assets/css/components/loadingSpin.css";
import logo from "../assets/images/logo/logo.png";
function LoadingSpin() {
  return (
    <div class="middle">
      <img src={logo} style={{ width: "300px", height: "100px" }} />
      <div>
        <div class="bar bar1"></div>
        <div class="bar bar2"></div>
        <div class="bar bar3"></div>
        <div class="bar bar4"></div>
        <div class="bar bar5"></div>
        <div class="bar bar6"></div>
        <div class="bar bar7"></div>
        <div class="bar bar8"></div>
      </div>
    </div>
  );
}

export default LoadingSpin;
