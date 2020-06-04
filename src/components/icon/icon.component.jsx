import React from "react";

import "./icon.styles.scss";

const Icon = ({ icon, size, alt = "icon" }) => (
  <img className={`${size} icon`} src={icon} alt="icon" />
);

export default Icon;
