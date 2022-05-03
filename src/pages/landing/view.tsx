import "./styles.css";

import { Button, Tooltip } from "antd";
import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/svg/logo-gradiant.svg";

export const LandginView = () => {
  return (
    <div className="landing-container">
      <img className="landing-logo" src={Logo} alt="لوگو" />
      <span className="landing-name">مکعب‌گرام</span>
      <span className="landing-desc">کمک ابزار دیجیتال</span>
      <Link to="/auth/login">
        <Button shape="round" className="landing-btn-login">
          ورود
        </Button>
      </Link>
      <div className="landing-btn-separator">
        <hr />
        <span>یا</span>
        <hr />
      </div>
      <Tooltip title="برای ثبت‌نام با شماره 4559-369-0936 (آقای شیرزاد) تماس حاصل فرمایید" placement="top">
        <Button shape="round" ghost className="landing-btn-signup">
          ثبت نام
        </Button>
      </Tooltip>
    </div>
  );
};
