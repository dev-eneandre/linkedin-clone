import React from "react";
import "./Sidebar.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Sidebar = () => {
  const recentItems = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1550133730-695473e544be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Eagle flying above water"
        />
        <AccountCircleIcon className="sidebar__avatar" />
        <h2>Ene Andre</h2>
        <h4>iameneandre@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,500</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on posts</p>
          <p className="sidebar__statNumber">4,000</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItems("reactJs")}
        {recentItems("Next Js")}
        {recentItems("Programming")}
        {recentItems("Tailwind")}
      </div>
    </div>
  );
};

export default Sidebar;
