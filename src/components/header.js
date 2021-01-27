import React from "react";
import "./header.css";
import Logo from "../img/unnamed.png";

function header() {
  return (
    <div className="header">
      <a href="#">BACK</a>
      <img src={Logo} alt="" />
      <a href="#">HOME</a>
    </div>
  );
}

export default header;
