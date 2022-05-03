import "./styles.css";

import React, { useState } from "react";

import InstagramGrad from "../../assets/svg/instagram-gradiant.svg";
import Instagram from "../../assets/svg/instagram-gray.svg";
import TelegramGrad from "../../assets/svg/telegram-gradiant.svg";
import Telegram from "../../assets/svg/telegram-gray.svg";
import TwitterGrad from "../../assets/svg/twitter-gradiant.svg";
import Twitter from "../../assets/svg/twitter-gray.svg";

export const Footer = () => {
  const [hover, setHover] = useState("");

  const isItemActive = (current: string) => hover === current;

  return (
    <div className="footer-container">
      <div className="footer-separatpr">
        <hr />
        <span>شبکه‌های اجتماعی مکعب‌گرام</span>
        <hr />
      </div>
      <div className="footer-ic-group">
        <img
          src={isItemActive("instagram") ? InstagramGrad : Instagram}
          onMouseEnter={() => setHover("instagram")}
          onMouseLeave={() => setHover("")}
          alt="اینستاگرام"
        />
        <img
          src={isItemActive("telegram") ? TelegramGrad : Telegram}
          onMouseEnter={() => setHover("telegram")}
          onMouseLeave={() => setHover("")}
          alt="تلگرام"
        />
        <img
          src={isItemActive("twitter") ? TwitterGrad : Twitter}
          onMouseEnter={() => setHover("twitter")}
          onMouseLeave={() => setHover("")}
          alt="توییتر"
        />
      </div>
    </div>
  );
};
