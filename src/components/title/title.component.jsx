import React from "react";

import "./title.styles.scss";

const Title = ({ title }) => (
  <div className="title">
    <span className="text-l">{title}</span>
  </div>
);

export default Title;
