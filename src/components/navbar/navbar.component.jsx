import React from "react";

import "./navbar.styles.scss";

import CustomButton from "../custom-button/custom-button.component";

import Home from "../../assets/icons/home.png";
import Sun from "../../assets/icons/sun.png";
import Info from "../../assets/icons/info.png";
import Search from "../../assets/icons/search.png";
import Logo from "../../assets/logo/visualCS.png";

const Navbar = () => {
  const tag_data = [
    {
      title: "home",
      color: "",
      type: "icon",
      location: Home,
      size: "md",
    },
    {
      title: "Sun",
      color: "sunset",
      type: "icon",
      location: Sun,
      size: "md",
    },
    {
      title: "Suggest",
      color: "gold",
      type: "text",
    },
    {
      title: "Sun",
      color: "",
      type: "icon",
      location: Logo,
      size: "lg",
    },
    {
      title: "Contribute",
      color: "gold",
      type: "text",
    },
    {
      title: "search",
      color: "aqua",
      type: "icon",
      location: Search,
      size: "md",
    },
    {
      title: "info",
      color: "sea",
      type: "icon",
      location: Info,
      size: "md",
    },
  ];
  return (
    <div className="navbar">
      {tag_data.map((tag, key) => (
        <CustomButton tag_data={tag} key={key} />
      ))}
    </div>
  );
};

export default Navbar;
