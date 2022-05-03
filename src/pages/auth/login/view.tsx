import "./styles.css";

import { Button, Input } from "antd";
import React from "react";
import * as aiIcon from "react-icons/ai";
import * as ioIcon from "react-icons/io";
import { Link } from "react-router-dom";

import Logo from "../../../assets/svg/logo-gradiant.svg";

export const LoginView = ({ doLogin, updateForm, form, loading }) => {
  return (
    <div className="login-container">
      <Link to="/">
        <ioIcon.IoMdArrowRoundBack className="login-ic-back" />
      </Link>
      <div className="login-head">
        <img src={Logo} alt="لوگو" />
        <div>
          <span className="login-head-name">مکعب‌گرام</span>
          <span className="login-head-desc">کمک ابزار دیجیتال</span>
        </div>
      </div>
      <form className="login-form" onSubmit={doLogin}>
        <span className="login-form-title">ورود به حساب کاربری</span>
        <Input
          maxLength={11}
          prefix={<aiIcon.AiOutlinePhone />}
          placeholder="شماره تلفن‌همراه"
          type="tel"
          disabled={loading}
          value={form.phone}
          onChange={(e) => updateForm("phone", e.currentTarget.value)}
        />
        <Input
          prefix={<aiIcon.AiOutlineLock />}
          placeholder="رمزعبور"
          type="password"
          disabled={loading}
          value={form.password}
          onChange={(e) => updateForm("password", e.currentTarget.value)}
        />
        <Button shape="round" disabled={loading} loading={loading} className="login-form-btn-login" htmlType="submit">
          ورود
        </Button>
      </form>
    </div>
  );
};
