import React from "react";

import "./description.styles.scss";

const Description = ({ description }) => (
  <div className="description">
    <span className="text-s">{description}</span>
  </div>
);

export default Description;
