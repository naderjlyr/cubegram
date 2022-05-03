import "./styles.css";

import { Carousel, Input } from "antd";
import React from "react";
import * as GoIcon from "react-icons/go";

import SlideImg1 from "../../assets/slides/1.png";
import SlideImg2 from "../../assets/slides/2.png";
import SlideImg3 from "../../assets/slides/3.png";
import LogoGrad from "../../assets/svg/logo-gradiant.svg";
import Logo from "../../assets/svg/logo-gray.svg";

const sliderImages = [SlideImg1, SlideImg2, SlideImg3];

export const DashboardView = ({ displayGTModal, setPostUrl, postUrl, loading, user }) => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-slider">
        <div className="dashboard-slider-overlay">
          <div className="dashboard-slider-texts">
            <span className="dashboard-slider-title">در مکعب‌گرام :</span>
            <span className="dashboard-slider-desc">راحت و مطمئن، به‌همراه فیلترهای اختصاصی قرعه‌کشی کنید</span>
            <Input
              suffix={<GoIcon.GoSearch onClick={displayGTModal} />}
              onPressEnter={displayGTModal}
              placeholder="لینک پست اینستاگرام را وارد کنید"
              type="text"
              disabled={loading}
              value={postUrl}
              onChange={(e) => setPostUrl(e.currentTarget.value)}
            />
          </div>
          <div className="dashboard-slider-logo">
            <img src={user.brand?.imageUrl || Logo} alt="لوگو" />
          </div>
        </div>
        <Carousel autoplay fade swipe>
          {sliderImages.map((img, i) => (
            <img key={i} src={img} alt="تصویر اسلایدر" />
          ))}
        </Carousel>
      </div>
      <div className="dashboard-no-slider">
        <div className="dashboard-no-slider-logo">
          <img src={LogoGrad} alt="لوگو" />
        </div>
        <div className="dashboard-no-slider-texts">
          <span className="dashboard-slider-title-small">در مکعب‌گرام :</span>
          <span className="dashboard-slider-desc-small">راحت و مطمئن، به‌همراه فیلترهای اختصاصی قرعه‌کشی کنید</span>
          <Input
            suffix={<GoIcon.GoSearch onClick={displayGTModal} />}
            onPressEnter={displayGTModal}
            placeholder="لینک پست اینستاگرام را وارد کنید"
            type="text"
            disabled={loading}
            value={postUrl}
            onChange={(e) => setPostUrl(e.currentTarget.value)}
          />
        </div>
      </div>
    </div>
  );
};
