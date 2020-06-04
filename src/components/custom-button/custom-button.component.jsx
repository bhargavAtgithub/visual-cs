import React from "react";

import "./custom-button.styles.scss";
import Icon from "../icon/icon.component";

const CustomButton = ({ tag_data }) => {
  const { title, color, type, location, size } = tag_data || {};
  console.log(tag_data);
  return (
    <div className="custom-button">
      {type === "text" && <span className={`${color} text-m`}>{title}</span>}
      {type === "icon" && (
        <div className={`${color}`}>
          <Icon icon={location} size={size} />
        </div>
      )}
    </div>
  );
};

export default CustomButton;
