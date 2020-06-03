import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ name, to }) => (
  <div className="custom-button-div" onClick={to}>
    <span className="custom-button">{name}</span>
  </div>
);

export default CustomButton;
