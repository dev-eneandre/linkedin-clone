import React from "react";
import "./Sidebar.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>I am a sidebar</h2>
      <div className="sidebar__top">
        <img src="" alt="" />
        <AccountCircleIcon className="sidebar__avatar" />
        <h2>Ene Andre</h2>
        <h2>iameneandre@gmail.com</h2>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stats">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,500</p>
        </div>
        <div className="sidebar__stats">
          <p>Views on posts</p>
          <p className="sidebar__statNumber">4,000</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
