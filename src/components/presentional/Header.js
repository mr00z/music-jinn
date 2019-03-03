import React from "react";
import headphones from "../../assets/music.png";

const Header = () => (
  <div
    className="is-flex"
    style={{ alignItems: "center", justifyContent: "center" }}
  >
    <img src={headphones} className="headerImg" />
    <div className="has-text-centered grayText headerText">Music jinn</div>
  </div>
);

export default Header;
