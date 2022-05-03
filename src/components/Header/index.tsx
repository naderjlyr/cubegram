import "./styles.css";

import React, { useCallback, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import ExploreGrad from "../../assets/svg/explore-gradiant.svg";
import Explore from "../../assets/svg/explore-gray.svg";
import HistoryGrad from "../../assets/svg/history-gradiant.svg";
import History from "../../assets/svg/history-gray.svg";
import Logo from "../../assets/svg/logo-gray.svg";
import NotifyGrad from "../../assets/svg/notify-gradiant.svg";
import Notify from "../../assets/svg/notify-gray.svg";
import ProfileGrad from "../../assets/svg/profile-gradiant.svg";
import Profile from "../../assets/svg/profile-gray.svg";
import { updateUserAct } from "../../redux/reducers/user";
import { IUser } from "../../utils/interfaces/IUser";
import { ProfileModal } from "../Modals/Profile";

const Header = ({ active = "", user, updateUser }) => {
  const [hover, setHover] = useState("");
  const [showProfile, setShowProfile] = useState(false);

  const closeModal = useCallback(() => setShowProfile(false), []);

  const isItemActive = (current: string) => active === current || hover === current;

  return (
    <>
      <ProfileModal isVisible={showProfile} updateUser={updateUser} user={user} close={closeModal} />
      <div className="header-container">
        <div className="header-logo">
          <Link to="/dashboard">
            <img src={Logo} alt="لوگو" />
          </Link>
          <div>
            <span className="header-logo-name">مکعب‌گرام</span>
            <span className="header-logo-desc">کمک ابزار دیجیتال</span>
          </div>
        </div>
        <div className="header-items">
          <div
            className="header-nav-item"
            onMouseEnter={() => setHover("profile")}
            onMouseLeave={() => setHover("")}
            onClick={() => setShowProfile(true)}
          >
            <img src={isItemActive("profile") ? ProfileGrad : Profile} alt="پروفایل" />
            <span className={isItemActive("profile") ? "header-nav-active" : ""}>پروفایل</span>
            {isItemActive("profile") && <hr />}
          </div>
          <Link to="/dashboard">
            <div className="header-nav-item" onMouseEnter={() => setHover("explore")} onMouseLeave={() => setHover("")}>
              <img src={isItemActive("explore") ? ExploreGrad : Explore} alt="قرعه‌کشی" />
              <span className={isItemActive("explore") ? "header-nav-active" : ""}>قرعه‌کشی</span>
              {isItemActive("explore") && <hr />}
            </div>
          </Link>
          <Link to="/history">
            <div className="header-nav-item" onMouseEnter={() => setHover("history")} onMouseLeave={() => setHover("")}>
              <img src={isItemActive("history") ? HistoryGrad : History} alt="تاریخچه" />
              <span className={isItemActive("history") ? "header-nav-active" : ""}>تاریخچه</span>
              {isItemActive("history") && <hr />}
            </div>
          </Link>
        </div>
        <div className="header-items-left">
          <div
            className="header-nav-item header-nav-item-left"
            onMouseEnter={() => setHover("notify")}
            onMouseLeave={() => setHover("")}
          >
            <img src={isItemActive("notify") ? NotifyGrad : Notify} alt="اعلانات" />
            <span className={isItemActive("notify") ? "header-nav-active" : ""}>اعلانات</span>
            {isItemActive("notify") && <hr />}
          </div>
        </div>
      </div>
      <hr className="header-bottom-hr" />
    </>
  );
};

const mapStateToProps = (state: any) => {
  const user = state.UserReducer;
  return { user };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateUser: (user: IUser) => dispatch(updateUserAct(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
