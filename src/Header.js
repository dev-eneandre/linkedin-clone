import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
import HeaderOption from "./HeaderOption";
import { Home } from "@mui/icons-material";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";

const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const logOutApp = () => {
    dispatch(logout());
    signOut(auth);
  };

  return (
    <div className="bg-white">
      <div className="section">
        <div className="header">
          <div className="header__left">
            <img
              src="https://static.licdn.com/aero-v1/sc/h/8s162nmbcnfkg7a0k8nq9wwqo"
              alt="linkedIn Logo"
            />

            <div className="header__search">
              <SearchIcon />
              <input type="text" />
            </div>
          </div>
          <div className="header__right">
            <HeaderOption title="Home" Icon={Home} />
            <HeaderOption title="My Network" Icon={SupervisorAccountIcon} />
            <HeaderOption title="Jobs" Icon={BusinessCenterIcon} />
            <HeaderOption title="Messaging" Icon={ChatIcon} />
            <HeaderOption title="Notifications" Icon={NotificationsIcon} />
            <HeaderOption
              title="me"
              avatar={`${user ? "/unnamed.jpg" : "/default.png"}`}
              onClick={logOutApp}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
