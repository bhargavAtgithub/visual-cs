import React from "react";
import logo from "../assets/logo/visualCS.svg";

import "./first_load.styles.scss";

const FirstLoad = () => (
  <div className="first_load">
    {/* <h1 className="logo">Visual CS</h1> */}
    <img src={logo} alt="logo" className="logo" height="300px"></img>
    <div class="spinner">
      <div class="double-bounce1"></div>
      <div class="double-bounce2"></div>
    </div>
  </div>
);

export default FirstLoad;
