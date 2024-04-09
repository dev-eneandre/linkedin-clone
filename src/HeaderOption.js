import React from "react";
import "./HeaderOption.css";
import { Avatar } from "@mui/material";

const HeaderOption = ({ avatar, title, Icon }) => {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <div className="headerOption__avatar">
          <img src={avatar} alt="avatar" />
        </div>
      )}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
};

export default HeaderOption;
