import "./styles.css";

import { Button, Carousel } from "antd";
import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";

import SlideImg1 from "../../assets/slides/1.png";
import SlideImg2 from "../../assets/slides/2.png";
import SlideImg3 from "../../assets/slides/3.png";
import CommentImg from "../../assets/svg/comment-white.svg";
import LikeImg from "../../assets/svg/like-white.svg";
import LogoGrad from "../../assets/svg/logo-gradiant.svg";
import Logo from "../../assets/svg/logo-gray.svg";

const sliderImages = [SlideImg1, SlideImg2, SlideImg3];

export const GiveawayView = ({ form, result, doGiveaway, updateForm, user, giveawayData: { data, frontEndData } }) => {
  return (
    <div className="giveaway-container">
      <div className="giveaway-slider">
        <div className="giveaway-slider-overlay">
          <div className="giveaway-slider-texts">
            <span className="giveaway-slider-title">در مکعب‌گرام :</span>
            <span className="giveaway-slider-desc">راحت و مطمئن، به‌همراه فیلترهای اختصاصی قرعه‌کشی کنید</span>
          </div>
          <div className="giveaway-slider-logo">
            <img src={user.brand?.imageUrl || Logo} alt="لوگو" />
          </div>
        </div>
        <Carousel autoplay fade swipe>
          {sliderImages.map((img, i) => (
            <img key={i} src={img} alt="تصویر اسلایدر" />
          ))}
        </Carousel>
      </div>
      <div className="giveaway-no-slider">
        <div className="giveaway-no-slider-logo">
          <img src={LogoGrad} alt="لوگو" />
        </div>
        <div className="giveaway-no-slider-texts">
          <span className="giveaway-slider-title-small">در مکعب‌گرام :</span>
          <span className="giveaway-slider-desc-small">راحت و مطمئن، به‌همراه فیلترهای اختصاصی قرعه‌کشی کنید</span>
        </div>
      </div>

      <div className="giveaway-body">
        <div className="giveaway-body-post">
          <span>جزئیات پست {frontEndData.name}</span>
          <div className="giveaway-body-post-body">
            <span className="giveaway-body-post-id">@{data.user.igId}</span>
            <span className="giveaway-body-post-desc">{data.post.caption}</span>
            <img className="giveaway-body-post-img" alt="تصویر پست" src={data.post.imageUrl} />
            <hr />
            <div className="giveaway-body-post-stat">
              <div>
                <img alt="کامنت" src={CommentImg} />
                <span>{data.post.commentsCount}</span>
              </div>
              <div>
                <img alt="لایک" src={LikeImg} />
                <span>{data.post.likesCount}</span>
              </div>
            </div>
          </div>
          <ScrollContainer className="giveaway-body-post-gathered-body">
            {data.gatheredData.map((gd) => (
              <div className="giveaway-body-post-gathered-data">
                <img alt="تصویر پروفایل" src={gd.user.profilePicUrl} />
                <div>
                  <span>@{gd.user.igId}</span>
                  <span>{gd.text || gd.user.name}</span>
                </div>
              </div>
            ))}
          </ScrollContainer>
        </div>
        <div className="giveaway-body-config">
          <span>تنظیمات قرعه‌کشی</span>
          <div className="giveaway-body-config-item">
            <span>تعداد برنده‌های اصلی</span>
            <input
              type="number"
              value={form.mainCount}
              onChange={(e) => updateForm("mainCount", e.currentTarget.value)}
            />
          </div>
          <div className="giveaway-body-config-item">
            <span>تعداد برنده‌های رزرو</span>
            <input
              type="number"
              value={form.saveCount}
              onChange={(e) => updateForm("saveCount", e.currentTarget.value)}
            />
          </div>
          {/* {frontEndData.name.includes("کامنت") && (
            <>
              <div className="giveaway-body-config-item">
                <span>تعداد افرادی که باید تگ کرده باشند</span>
                <input type="number" />
              </div>
              <div className="giveaway-body-config-item">
                <span>حذف کامنت‌های تکراری</span>
                <Switch defaultChecked />
              </div>
            </>
          )} */}
          <div className="giveaway-body-config-start-container ">
            <Button shape="round" className="giveaway-body-config-start" onClick={doGiveaway}>
              شروع قرعه‌کشی
            </Button>
          </div>
        </div>
        {result.main.length > 0 && (
          <div className="giveaway-body-result">
            <span>برندگان اصلی</span>
            <div className="giveaway-body-result-users">
              {result.main.map((gd) => (
                <div>
                  <img alt="تصویر پروفایل" src={gd.user.profilePicUrl} />
                  <span>@{gd.user.igId}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        {result.save.length > 0 && (
          <div className="giveaway-body-result">
            <span>برندگان ذخیره</span>
            <div className="giveaway-body-result-users">
              {result.save.map((gd) => (
                <div>
                  <img alt="تصویر پروفایل" src={gd.user.profilePicUrl} />
                  <span>@{gd.user.igId}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
